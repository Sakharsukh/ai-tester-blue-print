"""
Backend: main.py
Purpose: FastAPI server to orchestrate the Selenium -> Playwright conversion.
"""
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
import sys

# Add tools folder to path
sys.path.append(os.path.join(os.path.dirname(__file__), "tools"))
from read_source import scan_directory
from convert_code import convert_to_playwright

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # For local dev, allow all
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ConvertRequest(BaseModel):
    folder_path: str

@app.get("/defaults")
def get_defaults():
    # Helper to get absolute path of the local test_data folder
    root_dir = os.path.dirname(os.path.abspath(__file__))
    test_data_path = os.path.join(root_dir, "test_data")
    return {"test_data_path": test_data_path}

@app.post("/convert")
def convert_files(request: ConvertRequest):
    folder = request.folder_path
    if not os.path.exists(folder):
        raise HTTPException(status_code=404, detail="Folder not found")

    # Step 1: Scan
    files = scan_directory(folder)
    if "error" in files:
        raise HTTPException(status_code=400, detail=files["error"])

    results = []

    # Step 2: Convert Loop
    for file_obj in files:
        original = file_obj["content"]
        filename = file_obj["filename"]
        
        # Call LLM
        converted_raw = convert_to_playwright(original)
        
        # Advanced Cleanup (Navigation Layer Logic)
        # Strategy: Use the explicit stop token to cut off chatty text
        if "// END_CODE" in converted_raw:
            code_body = converted_raw.split("// END_CODE")[0].strip()
        else:
            # Fallback if model forgets the token (rare but possible)
            lines = converted_raw.split('\n')
            clean_lines = []
            for l in lines:
                normalized = l.strip().lower()
                if (normalized.startswith("input:") or 
                    normalized.startswith("output:") or
                    normalized.startswith("i can help") or
                    normalized.startswith("here is") or
                    normalized.startswith("sure,") or
                    normalized.startswith("note:") or
                    normalized.startswith("please note") or
                    normalized.startswith("explanation:") or
                    normalized == "```javascript" or
                    normalized == "```"):
                    continue
                clean_lines.append(l)
            code_body = "\n".join(clean_lines).strip()
        
        # Wrap in Playwright Test Structure
        
        # Wrap in Playwright Test Structure
        final_code = f"""import {{ test, expect }} from '@playwright/test';

test('{filename} conversion', async ({{ page }}) => {{
    // Converted Code Start
{code_body}
    // Converted Code End
}});"""
        
        # Save to disk
        output_dir = os.path.join(os.path.dirname(__file__), "output_playwright")
        if not os.path.exists(output_dir):
            os.makedirs(output_dir)
            
        # Change extension .py -> .spec.js
        base_name = os.path.splitext(filename)[0]
        output_filename = f"{base_name}.spec.js"
        output_path = os.path.join(output_dir, output_filename)
        
        with open(output_path, "w", encoding="utf-8") as f:
            f.write(final_code)

        results.append({
            "filename": filename,
            "original": original,
            "converted": final_code,
            "saved_to": output_path
        })

    return {"status": "success", "data": results}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)

import json
import os
import urllib.request
import csv

def refine_and_export():
    req_path = os.path.join(".tmp", "requirements.txt")
    if not os.path.exists(req_path):
        print(f"Error: {req_path} not found.")
        return

    with open(req_path, "r") as f:
        requirements = f.read()

    # Strict System Prompt based on gemini.md
    system_prompt = """
    Act as a Senior QA Automation Engineer. Generate highly professional test cases.
    
    Data Schema:
    - ID: TC-001, TC-002...
    - Title: Short descriptive title
    - Preconditions: What is needed before starting
    - Steps: Numbered list of actions
    - Expected Result: What should happen
    - Priority: High, Medium, or Low

    Behavioral Rules:
    1. Focus on edge cases and validation rules (min length, symbols, duplicates).
    2. Output ONLY a valid Markdown table with these columns.
    3. No preamble or notes.
    """

    data = {
        "model": "llama3.2:1b",
        "prompt": f"{system_prompt}\n\nRequirements:\n{requirements}",
        "stream": False
    }

    print("Refining test cases to match Gemini schema...")
    
    try:
        req = urllib.request.Request(
            "http://localhost:11434/api/generate",
            data=json.dumps(data).encode('utf-8'),
            headers={'Content-Type': 'application/json'}
        )
        
        with urllib.request.urlopen(req) as response:
            res_data = json.loads(response.read().decode('utf-8'))
            raw_output = res_data.get('response', '').strip()

            # Save Markdown
            with open("test_cases.md", "w", encoding='utf-8') as f:
                f.write("# Refined Test Cases\n\n")
                f.write(raw_output)

            print("Markdown refined. Now converting to CSV...")
            
            # Simple Markdown to CSV parser
            lines = raw_output.split('\n')
            table_lines = [line for line in lines if '|' in line]
            
            if len(table_lines) > 2:
                # Remove separator line (e.g., |---|---|...)
                header = [cell.strip() for cell in table_lines[0].split('|') if cell.strip()]
                rows = []
                for line in table_lines[2:]:
                    row = [cell.strip() for cell in line.split('|') if cell.strip()]
                    if row:
                        rows.append(row)
                
                with open("test_cases.csv", "w", newline='', encoding='utf-8') as csvfile:
                    writer = csv.writer(csvfile)
                    writer.writerow(header)
                    writer.writerows(rows)
                
                print("Success! Created test_cases.md and test_cases.csv")
            else:
                print("Error: Could not parse markdown table for CSV conversion.")

    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    refine_and_export()

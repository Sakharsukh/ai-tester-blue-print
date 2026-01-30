import json
import os
import urllib.request

def generate_test_cases():
    req_path = os.path.join(".tmp", "requirements.txt")
    if not os.path.exists(req_path):
        print(f"Error: {req_path} not found.")
        return

    with open(req_path, "r") as f:
        requirements = f.read()

    data = {
        "model": "llama3.2:1b",
        "prompt": f"Act as a Senior QA Engineer. Generate a markdown table of test cases for these requirements:\n{requirements}",
        "stream": True # Enable streaming
    }

    print("Generating (Streaming Mode)...")
    
    try:
        req = urllib.request.Request(
            "http://localhost:11434/api/generate",
            data=json.dumps(data).encode('utf-8'),
            headers={'Content-Type': 'application/json'}
        )
        
        with urllib.request.urlopen(req) as response:
            full_response = ""
            for line in response:
                if line:
                    res_json = json.loads(line.decode('utf-8'))
                    chunk = res_json.get('response', '')
                    print(chunk, end='', flush=True) # Print chunk to console
                    full_response += chunk
                    if res_json.get('done'):
                        break
            
            with open("test_cases.md", "w", encoding='utf-8') as f:
                f.write("# Generated Test Cases\n\n")
                f.write(full_response)
            
            print("\n\nSuccess! Saved to test_cases.md")

    except Exception as e:
        print(f"\nError: {e}")

if __name__ == "__main__":
    generate_test_cases()

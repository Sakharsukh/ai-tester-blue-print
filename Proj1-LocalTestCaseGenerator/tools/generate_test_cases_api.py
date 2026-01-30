import json
import os
import urllib.request

def generate_test_cases():
    req_path = os.path.join(".tmp", "requirements.txt")
    output_path = "test_cases.md"

    if not os.path.exists(req_path):
        print(f"Error: {req_path} not found.")
        return

    with open(req_path, "r") as f:
        requirements = f.read()

    system_prompt = """
    Act as a Senior QA Automation Engineer. Generate structured test cases in a Markdown table.
    Rules: Use TC-001 sequence; No greetings; Include edge cases.
    Columns: ID, Title, Preconditions, Steps, Expected Result, Priority.
    """

    data = {
        "model": "llama3.2:1b",
        "prompt": f"{system_prompt}\n\nRequirements:\n{requirements}",
        "stream": False
    }

    print("Generating test cases via API (llama3.2:1b)...")
    
    try:
        req = urllib.request.Request(
            "http://localhost:11434/api/generate",
            data=json.dumps(data).encode('utf-8'),
            headers={'Content-Type': 'application/json'}
        )
        
        with urllib.request.urlopen(req) as response:
            res_data = json.loads(response.read().decode('utf-8'))
            test_cases = res_data.get('response', '')

            with open(output_path, "w", encoding='utf-8') as f:
                f.write("# Generated Test Cases\n\n")
                f.write(test_cases)

            print(f"Success! Test cases saved to {output_path}")

    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    generate_test_cases()

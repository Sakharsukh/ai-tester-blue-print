import json
import os
import subprocess

def generate_test_cases():
    # Paths
    req_path = os.path.join(".tmp", "requirements.txt")
    output_path = "test_cases.md"
    schema_path = "gemini.md"

    if not os.path.exists(req_path):
        print(f"Error: {req_path} not found.")
        return

    # Read requirements
    with open(req_path, "r") as f:
        requirements = f.read()

    # System Prompt based on gemini.md
    system_prompt = """
    Act as a Senior QA Automation Engineer. 
    Generate structured test cases based on the provided requirements.
    
    Rules:
    1. Use the exact ID sequence (TC-001, TC-002...).
    2. No greetings or explanations.
    3. Explicitly include negative and edge-case test scenarios.
    4. Output MUST be in Markdown format with the following columns: ID, Title, Preconditions, Steps, Expected Result, Priority.
    """

    full_prompt = f"{system_prompt}\n\nRequirements:\n{requirements}\n\nOutput only the markdown table."

    print(f"Generating test cases for: {requirements[:50]}...")

    # Call Ollama via subprocess
    try:
        result = subprocess.run(
            ["ollama", "run", "llama3.2:1b", full_prompt],
            capture_output=True,
            text=True,
            encoding='utf-8',
            check=True
        )
        
        test_cases = result.stdout.strip()

        # Save to file
        with open(output_path, "w", encoding='utf-8') as f:
            f.write("# Generated Test Cases\n\n")
            f.write(test_cases)

        print(f"Success! Test cases saved to {output_path}")

    except Exception as e:
        print(f"Error during generation: {e}")

if __name__ == "__main__":
    generate_test_cases()

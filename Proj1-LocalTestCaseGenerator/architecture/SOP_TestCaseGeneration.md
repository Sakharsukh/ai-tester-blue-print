# Technical SOP: Test Case Generation

## Goal
Generate deterministic, high-quality QA test cases from natural language user requirements using a local LLM (Llama 3.2).

## Inputs
- **User Payload**: A string containing the user story, requirement, or feature description.
    - *Example*: "Login page with Google Auth"

## Outputs
- **Structured Test Cases**: A list of test case objects (rendered as Markdown in UI).
    - **Format**: 
        - Test Case ID
        - Title
        - Pre-Condition
        - Test Steps
        - Expected Result
        - Priority

## Data Contract (Schema)
Although the current connection is text-based (Markdown), the conceptual schema for a single test case is:

```json
{
  "id": "TC_001",
  "title": "Verify Login with Valid Credentials",
  "preCondition": "User is on login page",
  "steps": [
    "Enter valid email",
    "Enter valid password",
    "Click Login"
  ],
  "expectedResult": "User is redirected to Dashboard",
  "priority": "High"
}
```

## Error Handling
1.  **Connection Failure**: If Ollama is offline -> Show Red Error Panel with Retry button.
2.  **Model Missing**: If `llama3.2` is not found -> Show Warning Panel with `ollama pull` instruction.
3.  **Empty Input**: Prevent submission of empty prompts.
4.  **Generation Timeout/Failure**: catch API errors and display inline error message in chat.

## Edge Cases
- **Vague Input**: If input is too short (< 5 chars), prompt user for more detail (handled by System Prompt instruction).
- **Non-English Input**: System Prompt should attempt to respond in English or requested language (Behavioral Rule).

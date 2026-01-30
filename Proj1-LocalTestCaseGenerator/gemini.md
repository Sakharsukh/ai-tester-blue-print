# 💎 Project Constitution: Local Test Case Generator

## 📊 Data Schemas

### Input Schema (Requirements)
```json
{
  "project_name": "string",
  "requirement_text": "string (markdown or plain text)",
  "test_level": "string (Unit/Integration/E2E)",
  "template_format": "CSV/Markdown"
}
```

### Output Schema (Test Cases)
```json
{
  "test_cases": [
    {
      "id": "TC-001",
      "title": "string",
      "preconditions": "string",
      "steps": ["step 1", "step 2"],
      "expected_result": "string",
      "priority": "High/Medium/Low"
    }
  ]
}
```

## 📜 Behavioral Rules
1. **Analytic Tone:** Act as a Senior QA Automation Engineer.
2. **Template Adherence:** Use the exact ID sequence (TC-001, TC-002...).
3. **No Fluff:** Do not include greetings or explanations in the final payload file.
4. **Boundary Focus:** Explicitly include negative and edge-case test scenarios.

## 🏗️ Architectural Invariants
- Folders: `architecture/`, `tools/`, `.tmp/`
- Documentation: `gemini.md`, `task_plan.md`, `findings.md`, `progress.md`
- **Integrations:** Ollama (http://localhost:11434), Groq (SDK)
- **Source of Truth:** Input requirements are stored in `.tmp/requirements.txt` before processing.

## 🪵 Maintenance Log
- **2026-01-29:** Project Initialized using B.L.A.S.T. Protocol.
- **2026-01-29:** Blueprint finalized: Local LLM focus via Ollama.

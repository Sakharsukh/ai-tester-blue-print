
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

# Project Constitution

## Data Schemas

### 1. Chat Interaction
```typescript
interface Message {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: number;
}
```

### 2. LLM Payload
```typescript
interface OllamaRequest {
  model: "llama3.2";
  prompt: string;
  stream: boolean;
}

interface OllamaResponse {
  response: string;
  done: boolean;
}
```

## Behavioral Rules
1. **Model Enforcement**: The system must explicitly use `llama3.2`. If the model is missing, provide a clear error/instruction to pull it.
2. **Template Driven**: User input must be wrapped in a specific structured prompt template before sending to Ollama to ensure high-quality Test Case output.
3. **Local First**: No external API calls (other than local Ollama).

## Architectural Invariants
1. **Frontend**: Vite + React + Vanilla CSS (Premium Design).
2. **State Management**: React Local State (for chat history).
3. **API Layer**: Direct fetch calls to local Ollama instance (proxy might be needed for CORS).



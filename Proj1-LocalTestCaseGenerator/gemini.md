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


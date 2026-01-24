# System Architecture (ANT-3)

## Layer 1: Architecture (Docs)
- `architecture/SOP_TestCaseGeneration.md`: The single source of truth for logic.
- `gemini.md`: Project Constitution and Global Schemas.

## Layer 2: Navigation (Orchestration)
- **Location**: `local-testcase-gen/src/components/ChatInterface.jsx`
- **Responsibility**: 
    - Manages Chat State (Messages).
    - Validates User Input (Not empty).
    - Calls `TestGenTemplate` to format the prompt.
    - Calls `OllamaService` to execute generation.
    - Handles UI states (Loading, Error, Success).

## Layer 3: Tools (Execution)
- **Location**: `local-testcase-gen/src/services/ollama.js`
    - **Responsibility**: Pure, atomic fetch calls to Ollama API. No business logic.
- **Location**: `local-testcase-gen/src/services/templates.js`
    - **Responsibility**: deterministic string manipulation for Prompt Engineering.

## Data Flow
User Input -> [ChatInterface] -> [TestGenTemplate] -> [OllamaService] -> [Ollama API] -> Response -> [ChatInterface] -> [ReactMarkdown] -> UI

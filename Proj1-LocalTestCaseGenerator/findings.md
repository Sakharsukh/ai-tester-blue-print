# Findings

## Research
- **Model**: Llama 3.2 (via Ollama) is the required model.
- **Integration**: Local Ollama API (likely running on default port 11434).

## Discoveries (User Answers)
- **North Star**: Local LLM Testcase generator using User Input + Templates + Ollama (Llama 3.2).
- **Integrations**: Ollama.
- **Source of Truth**: N/A (User Input driven).
- **Delivery Payload**: Web UI Chat Interface.
- **Behavioral Rules**: Input -> Local LLM Processing -> Output.

## Constraints
- **Local Environment**: Must run locally on user's machine.
- **Model**: Specific dependency on `llama3.2`.
- **UI**: Chat-based interface.

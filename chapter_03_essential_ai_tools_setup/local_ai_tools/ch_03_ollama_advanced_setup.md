# Ollama Advanced Setup

- **Author:** Pramod Dutta
- **Role:** Principal SDET
- **Website:** [The Testing Academy](https://thetestingacademy.com/)
- **LinkedIn:** [linkedin.com/in/pramoddutta](https://www.linkedin.com/in/pramoddutta/)

---

> This guide builds on the [basic Ollama setup from Chapter 1](../../chapter_01_foundation_model/practical_guides/ch_01_ollama_local_llm_setup.md) with advanced configurations for QA workflows.

---

## Quick Reference

```bash
# Basic commands
ollama run llama3          # Run a model
ollama list                # List installed models
ollama pull codellama      # Download a model
ollama serve               # Start server (default port 11434)
```

---

## Advanced Installation

### Windows (WSL2)

```bash
# Install WSL2 if not already
wsl --install

# Inside WSL2
curl -fsSL https://ollama.com/install.sh | sh

# Start Ollama
ollama serve
```

### Mac (Homebrew)

```bash
# Install via Homebrew
brew install ollama

# Start as service
brew services start ollama

# Or run manually
ollama serve
```

### Linux (Systemd Service)

```bash
# Install
curl -fsSL https://ollama.com/install.sh | sh

# Enable service
sudo systemctl enable ollama
sudo systemctl start ollama

# Check status
sudo systemctl status ollama
```

---

## Model Management

### Recommended Models for QA

| Model | Size | Command | Best For |
|-------|------|---------|----------|
| `llama3:8b` | 4.7GB | `ollama pull llama3:8b` | General QA tasks |
| `codellama:13b` | 7.4GB | `ollama pull codellama:13b` | Test code generation |
| `mistral:7b` | 4.1GB | `ollama pull mistral:7b` | Fast responses |
| `deepseek-coder:6.7b` | 3.8GB | `ollama pull deepseek-coder:6.7b` | Code-focused tasks |
| `phi3:mini` | 2.2GB | `ollama pull phi3:mini` | Lightweight tasks |

### Model Variants

```bash
# Different quantization levels
ollama pull llama3:8b-instruct-q4_0    # Smaller, faster
ollama pull llama3:8b-instruct-q8_0    # Larger, better quality
ollama pull llama3:8b-instruct-fp16    # Full precision (most VRAM)
```

### Managing Models

```bash
# List all models
ollama list

# Show model details
ollama show llama3:8b

# Remove a model
ollama rm llama3:8b

# Copy/rename model
ollama cp llama3:8b my-qa-model
```

---

## Custom Modelfiles for QA

Create specialized QA models with Modelfiles.

### QA Test Generator Model

Create `Modelfile.qa-tester`:

```dockerfile
FROM llama3:8b

# Set system prompt for QA
SYSTEM """You are a Senior QA Engineer specializing in test automation.

When generating test cases:
- Always use structured format (ID, Description, Steps, Expected Result)
- Include positive, negative, and edge cases
- Consider boundary values and error conditions
- Follow the RICE POT framework

When writing test code:
- Use Page Object Model pattern
- Include proper waits and assertions
- Add meaningful comments
- Handle exceptions gracefully

Never hallucinate or make up information about APIs or features you haven't been told about."""

# Adjust parameters
PARAMETER temperature 0.3
PARAMETER top_p 0.9
PARAMETER num_ctx 4096
```

Build and run:

```bash
ollama create qa-tester -f Modelfile.qa-tester
ollama run qa-tester
```

### Code Review Model

Create `Modelfile.code-reviewer`:

```dockerfile
FROM codellama:13b

SYSTEM """You are an expert code reviewer focusing on test automation code.

Review code for:
1. Test coverage completeness
2. Assertion quality
3. Potential flaky test issues
4. Maintainability and readability
5. Best practices adherence
6. Security vulnerabilities

Provide specific, actionable feedback with line references."""

PARAMETER temperature 0.2
PARAMETER num_ctx 8192
```

---

## API Server Configuration

### Environment Variables

```bash
# Custom host and port
export OLLAMA_HOST=0.0.0.0:11434

# GPU configuration
export OLLAMA_NUM_GPU=1

# Custom models directory
export OLLAMA_MODELS=/path/to/models

# Enable debug logging
export OLLAMA_DEBUG=1
```

### Running on Different Ports

```bash
# Run on custom port
OLLAMA_HOST=0.0.0.0:8080 ollama serve
```

### Exposing to Network

```bash
# Allow external connections (use with caution)
OLLAMA_HOST=0.0.0.0:11434 ollama serve
```

---

## Integration with Test Frameworks

### Python Integration

```python
import requests

def generate_test_cases(feature_description):
    response = requests.post(
        "http://localhost:11434/api/generate",
        json={
            "model": "qa-tester",
            "prompt": f"""Generate test cases for:
            {feature_description}

            Format as markdown table with columns:
            | Test ID | Description | Steps | Expected Result |""",
            "stream": False
        }
    )
    return response.json()["response"]

# Usage
test_cases = generate_test_cases("User login with email and password")
print(test_cases)
```

### Using with LangChain

```python
from langchain_community.llms import Ollama

llm = Ollama(
    model="qa-tester",
    base_url="http://localhost:11434"
)

response = llm.invoke("""
Generate 5 test cases for a shopping cart feature:
- Add item to cart
- Remove item from cart
- Update quantity
- Apply discount code
- Checkout
""")
print(response)
```

### Pytest Integration

```python
import pytest
import requests

@pytest.fixture
def ollama_client():
    """Fixture for Ollama API client."""
    base_url = "http://localhost:11434"
    return base_url

def test_generate_test_cases(ollama_client):
    """Test that Ollama generates valid test cases."""
    response = requests.post(
        f"{ollama_client}/api/generate",
        json={
            "model": "qa-tester",
            "prompt": "Generate 3 test cases for login form",
            "stream": False
        }
    )

    assert response.status_code == 200
    result = response.json()["response"]
    assert "Test" in result
    assert "Expected" in result
```

---

## Performance Tuning

### GPU Configuration

```bash
# Check GPU availability
ollama run llama3:8b --verbose

# Limit GPU layers (if memory constrained)
# Edit modelfile:
PARAMETER num_gpu 20
```

### Memory Management

```bash
# Monitor memory usage
watch -n 1 'ollama ps'

# Unload model to free memory
curl -X DELETE http://localhost:11434/api/generate -d '{"model": "llama3:8b"}'
```

### Context Length

```dockerfile
# In Modelfile - increase context for large docs
PARAMETER num_ctx 8192   # Default: 2048
PARAMETER num_batch 512  # Batch size
```

---

## QA Workflow Scripts

### Batch Test Generation Script

```bash
#!/bin/bash
# generate_tests.sh

FEATURES=(
    "User login with email and password"
    "User registration with validation"
    "Password reset via email"
    "Shopping cart operations"
)

for feature in "${FEATURES[@]}"; do
    echo "=== Generating tests for: $feature ==="
    curl -s http://localhost:11434/api/generate \
        -d "{
            \"model\": \"qa-tester\",
            \"prompt\": \"Generate comprehensive test cases for: $feature\",
            \"stream\": false
        }" | jq -r '.response'
    echo ""
done
```

### PRD Analysis Script

```python
#!/usr/bin/env python3
"""Analyze PRD and generate test plan using Ollama."""

import sys
import requests

def analyze_prd(prd_file):
    with open(prd_file, 'r') as f:
        prd_content = f.read()

    prompt = f"""Analyze this PRD and create a comprehensive test plan:

{prd_content}

Include:
1. Test Strategy
2. Test Cases (functional, edge cases, negative)
3. Integration Test Scenarios
4. Performance Considerations
5. Risk Assessment
"""

    response = requests.post(
        "http://localhost:11434/api/generate",
        json={
            "model": "qa-tester",
            "prompt": prompt,
            "stream": False
        }
    )

    return response.json()["response"]

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python analyze_prd.py <prd_file>")
        sys.exit(1)

    result = analyze_prd(sys.argv[1])
    print(result)
```

---

## Verification Test

```bash
# Test Ollama is running
curl http://localhost:11434/api/tags

# Test generation
curl http://localhost:11434/api/generate -d '{
  "model": "llama3:8b",
  "prompt": "Generate 3 test cases for a login form. Format as table.",
  "stream": false
}' | jq -r '.response'
```

**Expected Output:** A formatted response with test cases.

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "model not found" | Run `ollama pull <model>` |
| Connection refused | Ensure `ollama serve` is running |
| Out of memory | Use smaller model or reduce `num_gpu` |
| Slow responses | Check GPU usage, reduce context length |
| Model keeps reloading | Increase `OLLAMA_KEEP_ALIVE` |

### Debug Commands

```bash
# Check running models
ollama ps

# View logs
journalctl -u ollama -f   # Linux
tail -f ~/.ollama/logs/*  # Mac

# Test API
curl http://localhost:11434/api/tags | jq
```

---

## Next Steps

- See [Local Models Comparison](ch_03_local_models_comparison.md) for model selection
- Compare with [LM Studio](../desktop_ai_tools/ch_03_lm_studio_setup.md) for GUI experience
- Review Chapter 1's [basic Ollama setup](../../chapter_01_foundation_model/practical_guides/ch_01_ollama_local_llm_setup.md)

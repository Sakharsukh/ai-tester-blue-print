# LM Studio Setup

- **Author:** Pramod Dutta
- **Role:** Principal SDET
- **Website:** [The Testing Academy](https://thetestingacademy.com/)
- **LinkedIn:** [linkedin.com/in/pramoddutta](https://www.linkedin.com/in/pramoddutta/)

---

> LM Studio provides a user-friendly GUI for running local LLMs with no coding required. Perfect for offline QA work and data privacy.

---

## Quick Start

1. Download from [lmstudio.ai](https://lmstudio.ai)
2. Install the application
3. Download a model (e.g., Llama 3, Mistral)
4. Start chatting locally

---

## Detailed Setup Guide

### Step 1: Download LM Studio

#### Windows

1. Go to [lmstudio.ai](https://lmstudio.ai)
2. Click **"Download for Windows"**
3. Run the installer
4. Follow installation wizard
5. Launch LM Studio

**System Requirements:**
- Windows 10/11 (64-bit)
- 16GB RAM minimum (32GB recommended)
- GPU with 6GB+ VRAM (optional but recommended)

#### Mac

1. Go to [lmstudio.ai](https://lmstudio.ai)
2. Click **"Download for Mac"**
3. Choose:
   - **Apple Silicon** (M1/M2/M3)
   - **Intel** (older Macs)
4. Open `.dmg` and drag to Applications
5. Launch LM Studio

**System Requirements:**
- macOS 12.0+ (Monterey or later)
- 16GB RAM minimum
- Apple Silicon recommended for best performance

#### Linux

1. Go to [lmstudio.ai](https://lmstudio.ai)
2. Download the `.AppImage` file
3. Install:
```bash
chmod +x LM-Studio-*.AppImage
./LM-Studio-*.AppImage
```

**System Requirements:**
- Ubuntu 20.04+ or equivalent
- 16GB RAM minimum
- NVIDIA GPU with CUDA support (optional)

### Step 2: Download Models

1. Launch LM Studio
2. Click **"Discover"** tab (magnifying glass icon)
3. Search for recommended models:

| Model | Size | Best For |
|-------|------|----------|
| `Llama-3-8B-Instruct` | ~5GB | General QA tasks |
| `Mistral-7B-Instruct` | ~4GB | Fast responses |
| `CodeLlama-13B` | ~7GB | Code/test generation |
| `Phi-3-mini` | ~2GB | Lightweight tasks |

4. Click **"Download"** on your chosen model
5. Wait for download to complete

### Step 3: Load and Chat

1. Go to **"Chat"** tab
2. Click **"Select a model"** dropdown
3. Choose your downloaded model
4. Wait for model to load (watch progress bar)
5. Start chatting!

---

## Recommended Models for QA

### Best Overall: Llama 3 8B Instruct

```text
Search: "llama-3-8b-instruct"
Download: TheBloke/Llama-3-8B-Instruct-GGUF
Variant: Q4_K_M (balanced quality/speed)
```

### Best for Code: CodeLlama

```text
Search: "codellama-instruct"
Download: TheBloke/CodeLlama-13B-Instruct-GGUF
Variant: Q4_K_M
```

### Lightweight: Phi-3

```text
Search: "phi-3-mini"
Download: microsoft/Phi-3-mini-4k-instruct-gguf
Variant: Q4_K_M
```

### Model Size Guide

| VRAM | Recommended Size |
|------|-----------------|
| 4GB | 7B Q4 models |
| 8GB | 13B Q4 models |
| 16GB | 13B Q8 or 30B Q4 |
| 24GB+ | 70B Q4 models |

---

## QA-Specific Use Cases

### 1. Offline Test Case Generation
```text
Generate test cases for a login form with:
- Email field (required, valid format)
- Password field (required, 8+ chars)
- Remember me checkbox
- Submit button

Include positive, negative, and edge cases.
```

### 2. Private Code Review
```text
Review this test script for best practices:

[Paste your sensitive test code]

Check for:
- Security issues
- Performance problems
- Maintainability
```

### 3. Confidential PRD Analysis
```text
Analyze this confidential PRD and generate test scenarios:

[Paste PRD content]

No data leaves this machine.
```

### 4. Local Test Data Generation
```text
Generate 20 rows of test data for user registration:
- Name, Email, Phone, Address
- Include edge cases and invalid data

Output as JSON.
```

---

## Local Server Mode

Run LM Studio as a local API server for integration with other tools.

### Starting the Server

1. Go to **"Local Server"** tab (left sidebar)
2. Select a model
3. Click **"Start Server"**
4. Server runs at `http://localhost:1234`

### Server Configuration

| Setting | Recommended | Description |
|---------|-------------|-------------|
| Port | 1234 | Default API port |
| CORS | Enabled | For web integrations |
| Context Length | 4096 | Adjust based on needs |

### Using the API

```python
import requests

response = requests.post(
    "http://localhost:1234/v1/chat/completions",
    json={
        "model": "local-model",
        "messages": [
            {"role": "user", "content": "Generate test cases for login"}
        ]
    }
)
print(response.json()["choices"][0]["message"]["content"])
```

### OpenAI-Compatible API

LM Studio's API is OpenAI-compatible:

```python
from openai import OpenAI

client = OpenAI(base_url="http://localhost:1234/v1", api_key="not-needed")

response = client.chat.completions.create(
    model="local-model",
    messages=[{"role": "user", "content": "Generate test cases"}]
)
print(response.choices[0].message.content)
```

---

## Performance Optimization

### GPU Acceleration

1. Go to **Settings** → **Runtime**
2. Enable **GPU Acceleration**
3. Set **GPU Layers** (higher = more VRAM usage)

| GPU VRAM | Recommended Layers |
|----------|-------------------|
| 4GB | 15-20 |
| 8GB | 25-35 |
| 16GB | All (99) |

### CPU-Only Optimization

If no GPU available:

1. Use smaller models (7B or less)
2. Use Q4 quantization (not Q8)
3. Reduce context length
4. Close other applications

### Mac Apple Silicon

Apple Silicon Macs use unified memory efficiently:

1. Enable **Metal GPU**
2. Set high GPU layers
3. Use models optimized for Metal

---

## Verification Test

Use this prompt to verify LM Studio is working:

```text
You are a QA Engineer. Generate 3 test cases for a search feature.

Requirements:
- Search box accepts text input
- Results display below the search box
- Empty search shows "No results"

Format as: Test ID | Description | Steps | Expected Result
```

**Expected Output:** A table with 3 test cases covering basic search, empty search, and special characters.

---

## Comparison with Ollama

| Feature | LM Studio | Ollama |
|---------|-----------|--------|
| GUI | Yes (full GUI) | No (CLI only) |
| Ease of use | Beginner-friendly | Requires terminal |
| Model discovery | Built-in browser | Manual download |
| Performance | Good | Slightly better |
| Server mode | Yes | Yes |
| Best for | Visual users | CLI power users |

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Model won't load | Check RAM/VRAM requirements |
| Slow responses | Reduce GPU layers, use smaller model |
| App crashes | Update to latest version |
| "Out of memory" | Close other apps, use Q4 model |
| GPU not detected | Update GPU drivers |

### Check System Resources

- **Windows**: Task Manager → Performance
- **Mac**: Activity Monitor → Memory
- **Linux**: `htop` or `nvidia-smi`

---

## Next Steps

- Compare with [Ollama](../local_ai_tools/ch_03_ollama_advanced_setup.md) for CLI usage
- See [Local Models Comparison](../local_ai_tools/ch_03_local_models_comparison.md) for model selection
- Review [Security Best Practices](../security_best_practices/ch_03_ai_tools_security.md) for data handling

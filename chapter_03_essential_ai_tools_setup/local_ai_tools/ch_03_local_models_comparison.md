# Local Models Comparison for QA

- **Author:** Pramod Dutta
- **Role:** Principal SDET
- **Website:** [The Testing Academy](https://thetestingacademy.com/)
- **LinkedIn:** [linkedin.com/in/pramoddutta](https://www.linkedin.com/in/pramoddutta/)

---

> Choose the right local model for your QA tasks based on your hardware and requirements.

---

## Quick Recommendation

| Your Situation | Recommended Model |
|----------------|-------------------|
| **Limited RAM (8-16GB)** | `phi3:mini` or `mistral:7b` |
| **Good GPU (8GB+ VRAM)** | `llama3:8b` |
| **Code-focused tasks** | `codellama:13b` or `deepseek-coder:6.7b` |
| **High-end system** | `llama3:70b` or `codellama:34b` |
| **Privacy critical** | Any local model (no data leaves machine) |

---

## Model Comparison Table

| Model | Size | RAM Needed | Best For | QA Rating |
|-------|------|------------|----------|-----------|
| `llama3:8b` | 4.7GB | 8GB | General QA, test cases | ⭐⭐⭐⭐⭐ |
| `llama3:70b` | 40GB | 48GB+ | Complex analysis | ⭐⭐⭐⭐⭐ |
| `codellama:7b` | 3.8GB | 8GB | Basic code tasks | ⭐⭐⭐⭐ |
| `codellama:13b` | 7.4GB | 16GB | Test script generation | ⭐⭐⭐⭐⭐ |
| `codellama:34b` | 19GB | 32GB | Complex code review | ⭐⭐⭐⭐⭐ |
| `mistral:7b` | 4.1GB | 8GB | Fast responses | ⭐⭐⭐⭐ |
| `mixtral:8x7b` | 26GB | 32GB | High quality output | ⭐⭐⭐⭐⭐ |
| `deepseek-coder:6.7b` | 3.8GB | 8GB | Code generation | ⭐⭐⭐⭐ |
| `phi3:mini` | 2.2GB | 4GB | Lightweight tasks | ⭐⭐⭐ |
| `phi3:medium` | 7.9GB | 16GB | Balanced performance | ⭐⭐⭐⭐ |

---

## Detailed Model Analysis

### Llama 3 8B - Best Overall for QA

**Installation:**
```bash
ollama pull llama3:8b
```

**Strengths:**
- Excellent instruction following
- Good at structured output (tables, lists)
- Strong reasoning for test case generation
- Balanced speed and quality

**Weaknesses:**
- Medium context window (8K)
- May struggle with very complex code

**Best QA Uses:**
- Test case generation
- Bug report writing
- Test plan creation
- Documentation review

**Sample Prompt Performance:**
```text
Prompt: "Generate test cases for login with email/password"
Quality: ⭐⭐⭐⭐⭐ - Produces well-structured, comprehensive test cases
Speed: Fast (2-5 seconds for typical response)
```

---

### CodeLlama 13B - Best for Test Code

**Installation:**
```bash
ollama pull codellama:13b
```

**Strengths:**
- Specialized for code understanding
- Excellent test script generation
- Good at code review
- Understands testing frameworks

**Weaknesses:**
- Larger memory footprint
- Slower than 7B models
- May be verbose

**Best QA Uses:**
- Selenium/Playwright script generation
- Code review for tests
- Converting manual tests to automated
- API test script creation

**Sample Prompt Performance:**
```text
Prompt: "Write a Playwright test for login flow"
Quality: ⭐⭐⭐⭐⭐ - Produces working, well-structured test code
Speed: Medium (5-10 seconds)
```

---

### Mistral 7B - Best for Speed

**Installation:**
```bash
ollama pull mistral:7b
```

**Strengths:**
- Very fast responses
- Good instruction following
- Low memory usage
- Efficient for batch operations

**Weaknesses:**
- Less detailed than larger models
- May miss edge cases
- Shorter context window

**Best QA Uses:**
- Quick test case drafts
- Simple code explanations
- Batch processing tasks
- Interactive sessions

**Sample Prompt Performance:**
```text
Prompt: "Generate 3 quick test cases for search feature"
Quality: ⭐⭐⭐⭐ - Good basic coverage, may miss edge cases
Speed: Very Fast (1-3 seconds)
```

---

### DeepSeek Coder 6.7B - Code Specialist

**Installation:**
```bash
ollama pull deepseek-coder:6.7b
```

**Strengths:**
- Optimized for code tasks
- Good at multiple languages
- Understands testing patterns
- Efficient size

**Weaknesses:**
- Less general knowledge
- May struggle with non-code tasks
- Limited documentation generation

**Best QA Uses:**
- Test code generation
- Code completion in tests
- Debugging test failures
- Framework-specific tests

---

### Phi-3 Mini - Lightweight Option

**Installation:**
```bash
ollama pull phi3:mini
```

**Strengths:**
- Very small (2.2GB)
- Runs on limited hardware
- Fast responses
- Surprisingly capable for size

**Weaknesses:**
- Limited complex reasoning
- Shorter responses
- May miss nuances

**Best QA Uses:**
- Quick test ideas
- Simple code snippets
- Resource-constrained environments
- Mobile/embedded testing

---

## Hardware Requirements Guide

### Minimum Specs by Model

| Model | Min RAM | Recommended RAM | GPU VRAM |
|-------|---------|-----------------|----------|
| `phi3:mini` | 4GB | 8GB | 4GB |
| `mistral:7b` | 8GB | 16GB | 6GB |
| `llama3:8b` | 8GB | 16GB | 8GB |
| `codellama:13b` | 16GB | 32GB | 10GB |
| `mixtral:8x7b` | 32GB | 64GB | 24GB |
| `llama3:70b` | 48GB | 64GB+ | 40GB+ |

### Performance by Hardware

| Hardware | Best Model | Expected Speed |
|----------|------------|----------------|
| **Laptop (8GB RAM)** | `phi3:mini` | Good |
| **Laptop (16GB RAM)** | `mistral:7b` | Good |
| **Desktop (32GB RAM)** | `llama3:8b` | Excellent |
| **Desktop + GPU (8GB)** | `codellama:13b` | Excellent |
| **Workstation (64GB+)** | `mixtral:8x7b` | Excellent |
| **Mac M1/M2/M3** | `llama3:8b` | Excellent |

---

## QA Task Recommendations

### Test Case Generation

| Task | Best Model | Alternative |
|------|------------|-------------|
| Simple features | `mistral:7b` | `phi3:mini` |
| Complex features | `llama3:8b` | `mixtral:8x7b` |
| Edge cases focus | `llama3:8b` | `codellama:13b` |

### Test Script Generation

| Task | Best Model | Alternative |
|------|------------|-------------|
| Selenium/Playwright | `codellama:13b` | `deepseek-coder:6.7b` |
| API tests | `codellama:13b` | `llama3:8b` |
| Unit tests | `deepseek-coder:6.7b` | `codellama:7b` |

### Code Review

| Task | Best Model | Alternative |
|------|------------|-------------|
| Test code review | `codellama:13b` | `llama3:8b` |
| Security review | `codellama:34b` | `mixtral:8x7b` |
| Quick feedback | `mistral:7b` | `phi3:mini` |

### Documentation

| Task | Best Model | Alternative |
|------|------------|-------------|
| Test plans | `llama3:8b` | `mistral:7b` |
| Bug reports | `llama3:8b` | `mixtral:8x7b` |
| Quick notes | `phi3:mini` | `mistral:7b` |

---

## Benchmark Results (QA Tasks)

### Test Case Generation Quality

Test: Generate 10 test cases for e-commerce checkout

| Model | Completeness | Structure | Edge Cases | Time |
|-------|--------------|-----------|------------|------|
| `llama3:8b` | 95% | Excellent | Good | 8s |
| `codellama:13b` | 90% | Good | Fair | 12s |
| `mistral:7b` | 85% | Good | Fair | 4s |
| `phi3:mini` | 70% | Fair | Limited | 3s |

### Test Script Generation Quality

Test: Generate Playwright login test

| Model | Working Code | Best Practices | Assertions | Time |
|-------|--------------|----------------|------------|------|
| `codellama:13b` | 95% | Excellent | Complete | 10s |
| `deepseek-coder:6.7b` | 90% | Good | Good | 6s |
| `llama3:8b` | 85% | Good | Good | 7s |
| `mistral:7b` | 75% | Fair | Basic | 4s |

---

## Installation Commands Summary

```bash
# Recommended setup for QA
ollama pull llama3:8b        # General QA tasks
ollama pull codellama:13b    # Test code generation
ollama pull mistral:7b       # Quick tasks

# Lightweight setup
ollama pull phi3:mini        # Resource-constrained

# Power user setup
ollama pull mixtral:8x7b     # Highest quality
ollama pull codellama:34b    # Complex code tasks
```

---

## Verification Test for Each Model

Run this prompt on each model to compare:

```text
Generate 3 test cases for a password reset feature:
- User enters email
- System sends reset link (valid 24 hours)
- User sets new password (min 8 chars, 1 uppercase, 1 number)

Format: | Test ID | Description | Steps | Expected Result |
```

Compare outputs for:
- Completeness
- Structure quality
- Edge case coverage
- Response time

---

## Next Steps

- Set up your chosen model with [Ollama Advanced](ch_03_ollama_advanced_setup.md)
- Try [LM Studio](../desktop_ai_tools/ch_03_lm_studio_setup.md) for GUI experience
- Create custom QA Modelfiles for your specific needs

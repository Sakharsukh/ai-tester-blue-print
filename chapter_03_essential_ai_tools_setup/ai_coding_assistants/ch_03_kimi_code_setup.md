# Kimi Code Setup

- **Author:** Pramod Dutta
- **Role:** Principal SDET
- **Website:** [The Testing Academy](https://thetestingacademy.com/)
- **LinkedIn:** [linkedin.com/in/pramoddutta](https://www.linkedin.com/in/pramoddutta/)

---

> Kimi Code is Moonshot AI's coding assistant extension, powered by Kimi K2's large context window. Excellent for working with large test suites.

---

## Quick Start

1. Open VS Code
2. Install Kimi Code extension
3. Sign in with your Kimi account
4. Start coding with AI assistance

---

## What is Kimi Code?

Kimi Code is Moonshot AI's VS Code extension that brings Kimi K2's capabilities directly into your IDE:

- **128K context window** - Work with large codebases
- **Code completion** - Smart suggestions as you type
- **Code generation** - Create code from descriptions
- **Multi-file analysis** - Understand project context
- **Free tier** - Generous free usage

---

## Detailed Setup Guide

### Step 1: Prerequisites

Ensure you have:
- VS Code installed (version 1.70+)
- Kimi account ([create one here](https://kimi.ai))
- Internet connection

### Step 2: Install Extension

#### Windows / Mac / Linux

1. Open VS Code
2. Go to Extensions (`Ctrl+Shift+X` / `Cmd+Shift+X`)
3. Search for **"Kimi Code"** or **"Moonshot Kimi"**
4. Click **"Install"**
5. Reload VS Code when prompted

### Step 3: Sign In

1. Click the Kimi Code icon in the sidebar
2. Click **"Sign In"**
3. Browser opens for authentication
4. Sign in with your Kimi account
5. Authorize the extension
6. Return to VS Code

### Step 4: Configure Settings

1. Open VS Code Settings (`Ctrl+,` / `Cmd+,`)
2. Search for "Kimi"
3. Configure:

| Setting | Recommended | Description |
|---------|-------------|-------------|
| Enable Completion | On | Code suggestions |
| Context Size | Maximum | Use full 128K context |
| Language | English | Response language |
| Auto Trigger | On | Automatic suggestions |

---

## Key Feature: 128K Context

### Why This Matters for QA

Kimi Code can analyze your entire test project at once:

| Capability | Benefit |
|------------|---------|
| Full test suite analysis | Find duplicates, gaps across all files |
| Project-wide refactoring | Consistent changes across tests |
| Large log analysis | Debug with complete context |
| Multi-file test generation | Understand relationships |

### Context Usage Examples

**Analyze entire test directory:**
```text
@workspace Look at all test files in /tests directory and:
1. Identify missing test coverage
2. Find duplicate test cases
3. Suggest improvements to test structure
```

**Cross-file refactoring:**
```text
@workspace Refactor all Page Object classes to use a consistent pattern:
- Base class with common methods
- Proper locator organization
- Wait strategies
```

---

## QA-Specific Use Cases

### 1. Large Test Suite Analysis

```text
Analyze my entire test suite and provide:
1. Test coverage summary by feature
2. Duplicate or redundant tests
3. Missing edge cases
4. Flaky test indicators
5. Recommendations for improvement

@workspace /tests/**/*.py
```

### 2. Generate Tests from Multiple Specs

```text
Based on these specification files, generate comprehensive tests:
@file /docs/login-spec.md
@file /docs/registration-spec.md
@file /docs/password-reset-spec.md

Create test files following our existing patterns in /tests/
```

### 3. Multi-File Code Review

```text
Review these test files together for consistency:
@file /tests/test_login.py
@file /tests/test_registration.py
@file /tests/test_checkout.py

Check:
- Naming conventions
- Assertion patterns
- Setup/teardown usage
- Error handling
```

### 4. Log Analysis with Full Context

```text
Analyze these test execution logs:
[Paste entire log file - up to 128K tokens]

Identify:
1. Root cause of failures
2. Patterns in failures
3. Performance issues
4. Recommended fixes
```

---

## Free Tier Advantages

Kimi Code's free tier offers:

| Feature | Free Tier |
|---------|-----------|
| Context window | Full 128K |
| Daily requests | Generous limit |
| Code completion | Yes |
| Chat/generation | Yes |
| File analysis | Yes |

### Best Uses for Free Tier

1. **Large project analysis** - Analyze entire test suites
2. **Documentation generation** - Create test documentation
3. **Bulk test generation** - Generate many test cases
4. **Log analysis** - Process extensive logs

---

## Features for QA Professionals

| Feature | How to Use | QA Benefit |
|---------|------------|------------|
| **@workspace** | Reference entire project | Full test suite context |
| **@file** | Reference specific files | Targeted analysis |
| **Code lens** | Click above functions | Quick test generation |
| **Inline chat** | `Ctrl+I` / `Cmd+I` | Ask about selected code |
| **Chat panel** | Sidebar | Extended conversations |

---

## Keyboard Shortcuts

| Action | Windows/Linux | Mac |
|--------|---------------|-----|
| Accept completion | `Tab` | `Tab` |
| Trigger completion | `Ctrl+Space` | `Cmd+Space` |
| Inline chat | `Ctrl+I` | `Cmd+I` |
| Open chat panel | `Ctrl+Shift+K` | `Cmd+Shift+K` |
| Add to context | `Ctrl+Shift+L` | `Cmd+Shift+L` |

---

## Integration Examples

### Generate Test Suite from PRD

```text
Create a complete test suite based on this PRD:

@file /docs/product-requirements.md

Generate:
1. Test plan overview
2. Test cases for each feature
3. Page Object classes needed
4. Test data requirements
5. pytest fixtures

Output to /tests/ directory following our structure.
```

### Refactor Existing Tests

```text
@workspace Refactor all tests in /tests/ui/ to:

1. Use Page Object Model pattern
2. Replace hardcoded waits with explicit waits
3. Add proper assertions with messages
4. Include docstrings
5. Follow PEP 8 style

Show changes for each file.
```

### Generate API Tests from Swagger

```text
Based on this Swagger/OpenAPI spec:

@file /docs/api-spec.yaml

Generate pytest tests for:
- All endpoints
- Request validation
- Response validation
- Error handling
- Edge cases

Use requests library and include fixtures.
```

---

## Verification Test

### Test 1: Large Context

1. Open a project with multiple test files
2. In Kimi Code chat, type:
```text
@workspace Summarize all test files in this project
```
3. **Expected:** Summary covering all test files

### Test 2: Code Generation

1. Create new file `test_new_feature.py`
2. Type comment:
```python
# Generate comprehensive tests for user authentication
# including login, logout, session management, and password reset
```
3. Trigger Kimi Code suggestion
4. **Expected:** Multiple test functions generated

### Test 3: Multi-File Analysis

1. Open chat panel
2. Type:
```text
@file /tests/test_login.py
@file /tests/test_checkout.py

Compare these test files and identify:
- Inconsistencies in style
- Shared code that should be extracted
- Missing test cases in either
```
3. **Expected:** Detailed comparison and recommendations

---

## Best Practices

### Maximize Context Usage

```text
# Good: Use @workspace for broad analysis
@workspace What test patterns are used in this project?

# Good: Use @file for specific analysis
@file /tests/conftest.py
Explain the fixtures defined here and suggest improvements.
```

### Structure Large Requests

```text
# Good: Clear sections
Analyze my test suite:

## Input Files
@workspace /tests/**/*.py

## Analysis Required
1. Coverage gaps
2. Duplicate tests
3. Flaky test indicators

## Output Format
- Summary table
- Detailed findings per file
- Priority recommendations
```

### Iterative Refinement

1. Start with broad analysis
2. Drill down into specific areas
3. Generate targeted improvements
4. Review and refine

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Extension not activating | Check VS Code version (1.70+) |
| Sign-in fails | Try browser sign-in first |
| Slow responses | Large context takes time |
| @workspace not working | Ensure workspace is open |
| Context limit reached | Split request into parts |

### Debug Mode

1. Open Command Palette
2. Type "Kimi Code: Show Logs"
3. Check for errors

---

## Comparison with Other Tools

| Feature | Kimi Code | GitHub Copilot | Claude |
|---------|-----------|----------------|--------|
| Context window | 128K | 8K | 200K |
| Free tier | Generous | No | Limited |
| Multi-file | Excellent | Limited | Via upload |
| Code completion | Yes | Yes | No |
| IDE integration | VS Code | VS Code + more | No |

---

## Next Steps

- Set up [Kimi K2 web interface](../cloud_ai_tools/ch_03_kimi_k2_setup.md) for larger tasks
- Compare with [GitHub Copilot](ch_03_github_copilot_setup.md)
- Use with [RICE POT Framework](../../chapter_02_prompt_engineering/core_concepts/ch_02_rice_pot_framework.md)

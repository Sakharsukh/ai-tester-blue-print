# Augment Setup

- **Author:** Pramod Dutta
- **Role:** Principal SDET
- **Website:** [The Testing Academy](https://thetestingacademy.com/)
- **LinkedIn:** [linkedin.com/in/pramoddutta](https://www.linkedin.com/in/pramoddutta/)

---

> Augment is an AI code assistant with deep codebase understanding, excellent for large test automation projects.

---

## Quick Start

1. Install Augment extension in VS Code or JetBrains
2. Sign up for account
3. Index your codebase
4. Start coding with AI assistance

---

## What is Augment?

Augment provides AI-powered coding assistance with:

- **Codebase understanding** - Learns your entire project
- **Context awareness** - References relevant code automatically
- **Chat interface** - Ask questions about your code
- **Code generation** - Generate code matching your style
- **Multi-IDE** - Works in VS Code and JetBrains

---

## Detailed Setup Guide

### Step 1: Install Extension

#### VS Code

1. Open Extensions (`Ctrl+Shift+X` / `Cmd+Shift+X`)
2. Search for **"Augment"**
3. Click **"Install"**
4. Reload VS Code

#### JetBrains (IntelliJ, PyCharm)

1. Open Settings → Plugins
2. Search for **"Augment"**
3. Click **"Install"**
4. Restart IDE

### Step 2: Create Account

1. Click Augment icon in sidebar
2. Click **"Sign Up"** or **"Sign In"**
3. Create account with email or GitHub
4. Verify email
5. Return to IDE

### Step 3: Index Your Codebase

1. Open your test project folder
2. Augment automatically starts indexing
3. Wait for indexing to complete (status bar shows progress)
4. Once indexed, AI has full codebase context

### Step 4: Configure Settings

1. Open Augment settings
2. Configure:

| Setting | Recommended | Description |
|---------|-------------|-------------|
| Auto-index | On | Index on file changes |
| Completion | On | Show inline suggestions |
| Context depth | High | More relevant context |

---

## Key Feature: Codebase Understanding

### How It Works

1. **Indexing**: Augment analyzes your entire codebase
2. **Learning**: Understands patterns, styles, relationships
3. **Context**: References relevant code in suggestions
4. **Consistency**: Generates code matching your style

### Benefits for QA

| Capability | QA Benefit |
|------------|------------|
| Full project context | Understands test architecture |
| Pattern matching | Follows existing test patterns |
| Cross-file references | Knows about Page Objects, fixtures |
| Style consistency | Matches your coding style |

---

## QA-Specific Use Cases

### 1. Generate Tests Matching Your Style

```text
@codebase Generate tests for the checkout feature
following the same patterns used in test_login.py
```

Augment generates tests that match your existing:
- Naming conventions
- Assertion styles
- Fixture usage
- Documentation format

### 2. Ask About Test Architecture

```text
How are fixtures organized in this test suite?

What's the Page Object pattern we use?

Where are API test utilities defined?
```

### 3. Generate Consistent Page Objects

```text
Create a Page Object for the profile page
matching the style of our existing Page Objects
```

### 4. Find Related Tests

```text
Show me all tests related to user authentication

What tests cover the payment flow?
```

---

## Features for QA Professionals

| Feature | How to Use | QA Benefit |
|---------|------------|------------|
| **@codebase** | Reference entire project | Full context for generation |
| **Style matching** | Automatic | Consistent test code |
| **Chat** | Sidebar panel | Ask about test suite |
| **Completions** | Type and Tab | Faster test writing |
| **References** | Auto-included | Smart context selection |

---

## Chat Examples

### Understanding Test Suite

```text
User: @codebase How is our test suite organized?

Augment: Your test suite is organized as follows:
- /tests/unit/ - Unit tests for individual functions
- /tests/integration/ - Integration tests for APIs
- /tests/e2e/ - End-to-end UI tests using Playwright
- /tests/conftest.py - Shared fixtures
- Page Objects are in /tests/pages/
...
```

### Generating Tests

```text
User: @codebase Generate API tests for the new /orders endpoint
using our existing API test patterns

Augment: Based on your patterns in test_users_api.py, here are tests:
[Generates tests matching your style]
```

### Code Review

```text
User: @codebase Review this test for issues:
[Paste test code]

Augment: I found these issues based on your codebase patterns:
1. Missing explicit wait (your tests use WebDriverWait)
2. Assertion doesn't include message (your style includes messages)
3. Should use the login_fixture from conftest.py
...
```

---

## Keyboard Shortcuts

| Action | Windows/Linux | Mac |
|--------|---------------|-----|
| Accept completion | `Tab` | `Tab` |
| Open chat | `Ctrl+Shift+A` | `Cmd+Shift+A` |
| Inline generation | `Ctrl+Enter` | `Cmd+Enter` |
| Reference codebase | Type `@codebase` | Type `@codebase` |

---

## Plans and Pricing

| Plan | Price | Features |
|------|-------|----------|
| **Free** | $0 | Limited requests, basic indexing |
| **Pro** | ~$30/mo | Unlimited, full indexing |
| **Enterprise** | Custom | Team features, SSO |

---

## Integration with Test Frameworks

### pytest Integration

Augment understands pytest patterns:

```text
Generate a parametrized test for email validation
using our pytest patterns from test_forms.py
```

Generated code uses your:
- `@pytest.mark.parametrize` style
- Fixture naming conventions
- Assertion patterns

### Playwright Integration

```text
Create a Playwright test for the search feature
matching our Page Object Model in /tests/pages/
```

---

## Verification Test

### Test 1: Codebase Indexing

1. Open a test project
2. Wait for Augment to index (check status bar)
3. In chat, ask: "@codebase What testing framework do we use?"
4. **Expected:** Accurate answer about your project

### Test 2: Style Matching

1. In chat, type:
```text
@codebase Generate a test for user logout
matching our existing test style
```
2. **Expected:** Test code matching your patterns

### Test 3: Code Understanding

1. Ask:
```text
@codebase Explain how the authentication fixtures work
```
2. **Expected:** Accurate explanation of your fixtures

---

## Best Practices

### Maximize Codebase Understanding

1. **Index completely** - Wait for full indexing
2. **Use @codebase** - Reference for context
3. **Be specific** - Name files/patterns to match
4. **Iterate** - Refine based on output

### Effective Prompts

```text
# Good: Specific reference
@codebase Generate tests for /api/payments using patterns from test_orders_api.py

# Good: Clear requirements
@codebase Create a Page Object for checkout with methods for:
- fill_shipping_address
- select_payment_method
- place_order
Match the style in pages/LoginPage.py

# Less effective: Vague
Generate some tests
```

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Indexing stuck | Restart IDE, re-index |
| Wrong suggestions | Use @codebase for context |
| Slow responses | Large codebase, wait for indexing |
| Not matching style | Reference specific files |

### Re-index Codebase

1. Open Command Palette
2. Type "Augment: Re-index"
3. Wait for completion

---

## Comparison with Other Tools

| Feature | Augment | Copilot | Cursor |
|---------|---------|---------|--------|
| Codebase indexing | Deep | Limited | Good |
| Style matching | Excellent | Good | Good |
| Multi-IDE | VS Code, JetBrains | VS Code, JetBrains | Own editor |
| Free tier | Yes | No | Limited |

---

## Next Steps

- Configure [VS Code AI Setup](ch_03_vscode_ai_setup.md) with Augment
- Compare with [GitHub Copilot](../ai_coding_assistants/ch_03_github_copilot_setup.md)
- Use with [RICE POT Framework](../../chapter_02_prompt_engineering/core_concepts/ch_02_rice_pot_framework.md)

# Cursor for Testers

- **Author:** Pramod Dutta
- **Role:** Principal SDET
- **Website:** [The Testing Academy](https://thetestingacademy.com/)
- **LinkedIn:** [linkedin.com/in/pramoddutta](https://www.linkedin.com/in/pramoddutta/)

---

> Cursor is an AI-native code editor built on VS Code, offering deep AI integration for test automation workflows.

---

## Quick Start

1. Download from [cursor.com](https://cursor.com)
2. Install and import VS Code settings
3. Sign in or use free tier
4. Start writing tests with AI assistance

---

## What is Cursor?

Cursor is a code editor built specifically for AI-assisted development:

- **Built on VS Code** - Familiar interface, extensions work
- **Deep AI integration** - AI is core, not an extension
- **Composer** - Generate multi-file changes
- **Chat** - Contextual AI conversations
- **Cmd+K** - Inline code generation and editing

---

## Detailed Setup Guide

### Step 1: Download Cursor

#### Windows

1. Go to [cursor.com](https://cursor.com)
2. Click **"Download for Windows"**
3. Run installer
4. Follow installation wizard

#### Mac

1. Go to [cursor.com](https://cursor.com)
2. Click **"Download for Mac"**
3. Choose Intel or Apple Silicon
4. Open `.dmg`, drag to Applications

#### Linux

1. Go to [cursor.com](https://cursor.com)
2. Download `.AppImage` or `.deb`
3. Install:
```bash
# AppImage
chmod +x cursor-*.AppImage
./cursor-*.AppImage

# Debian/Ubuntu
sudo dpkg -i cursor_*.deb
```

### Step 2: Initial Setup

1. Launch Cursor
2. **Import VS Code settings**: Click "Import" when prompted
   - Extensions
   - Settings
   - Keybindings
3. Sign in (optional for Pro features) or continue with free tier

### Step 3: Configure AI Settings

1. Open Settings (`Ctrl+,` / `Cmd+,`)
2. Go to **Cursor Settings** (gear icon with sparkle)
3. Configure:

| Setting | Recommended | Description |
|---------|-------------|-------------|
| Model | GPT-4 / Claude | AI model for completions |
| Enable Copilot++ | On | Enhanced completions |
| Auto Import | On | Auto-import modules |
| Codebase Indexing | On | Better context awareness |

---

## Cursor Features for QA

### 1. Cmd+K (Inline Generation)

Select code or place cursor, press `Cmd+K` / `Ctrl+K`:

**Generate test from scratch:**
```
Press Cmd+K, type:
"Generate pytest tests for login functionality with valid/invalid credentials"
```

**Edit existing test:**
```
Select test code, Cmd+K:
"Add boundary value tests for the age parameter"
```

### 2. Composer (Multi-File)

Press `Cmd+Shift+I` / `Ctrl+Shift+I` for Composer:

```text
Create a complete Page Object Model structure for our e-commerce site:
- LoginPage
- ProductPage
- CartPage
- CheckoutPage

Each should have:
- Locators
- Action methods
- Verification methods

Also create conftest.py with browser fixtures.
```

Composer creates multiple files at once.

### 3. Chat (@mentions)

Use `@` to reference context:

```text
@test_login.py Why might this test be flaky?

@Codebase What patterns are we using for API tests?

@file:conftest.py Add a fixture for database cleanup
```

### 4. Codebase Awareness

Cursor indexes your codebase for context:

```text
@Codebase Generate tests for the checkout flow
that match our existing test style
```

---

## QA-Specific Use Cases

### 1. Generate Test Suite

**Using Composer:**

```text
Based on @requirements.md, create a complete test suite:

1. Test files for each feature
2. Page Object classes
3. Fixtures in conftest.py
4. Test data files

Follow the patterns in @tests/test_login.py
```

### 2. Convert Manual to Automated

**Using Cmd+K:**

Select manual test case, then:

```text
Convert this manual test to Playwright Python:

Test Case: TC-001
Title: Add item to cart
Steps:
1. Navigate to product page
2. Select size "Medium"
3. Click "Add to Cart"
4. Verify cart badge shows "1"
Expected: Item added successfully
```

### 3. Debug Flaky Tests

**Using Chat:**

```text
@test_checkout.py

This test fails intermittently. Analyze and:
1. Identify potential causes of flakiness
2. Suggest fixes with code examples
3. Add proper wait strategies
```

### 4. Generate API Tests

**Using Cmd+K in new file:**

```text
Generate pytest API tests for:
POST /api/orders
- Request body: { items: [], shipping_address: {} }
- Auth: Bearer token
- Success: 201 with order_id
- Errors: 400 for invalid items, 401 for no auth

Include fixtures for auth token and test data.
```

---

## Keyboard Shortcuts

| Action | Windows/Linux | Mac | Description |
|--------|---------------|-----|-------------|
| Inline generate | `Ctrl+K` | `Cmd+K` | Generate/edit code |
| Composer | `Ctrl+Shift+I` | `Cmd+Shift+I` | Multi-file generation |
| Chat | `Ctrl+L` | `Cmd+L` | Open chat panel |
| Accept suggestion | `Tab` | `Tab` | Accept completion |
| Toggle AI | `Ctrl+Shift+J` | `Cmd+Shift+J` | Enable/disable AI |

---

## Plans and Pricing

| Plan | Price | Features |
|------|-------|----------|
| **Free** | $0 | Limited requests, basic models |
| **Pro** | $20/mo | Unlimited, GPT-4, Claude |
| **Business** | $40/user/mo | Team features, admin |

### Free Tier Limits

- ~50 slow requests/month (GPT-4)
- ~200 fast requests/month (GPT-3.5)
- Basic code completions

---

## Composer Examples for QA

### Example 1: Create Test Framework Structure

```text
Create a test automation framework structure:

/tests
  /pages (Page Objects)
  /api (API test helpers)
  /data (Test data)
  /utils (Utilities)
  conftest.py
  pytest.ini

Include:
- Base page class with common methods
- API client wrapper
- JSON test data loader
- Logging utility
```

### Example 2: Generate Tests from Spec

```text
Based on this API specification:

@api-spec.yaml

Generate:
1. pytest tests for all endpoints
2. Request/response models
3. Fixtures for authentication
4. Parametrized tests for edge cases
```

### Example 3: Refactor Test Suite

```text
@tests/

Refactor this test suite to:
1. Use Page Object Model
2. Extract common fixtures
3. Add proper logging
4. Implement retry mechanism for flaky tests

Show all file changes.
```

---

## Integration with Test Frameworks

### Playwright Configuration

```text
Using Cmd+K in conftest.py:

Create Playwright fixtures for:
- Browser instances (chrome, firefox)
- Authenticated page
- Screenshot on failure
- Video recording
- Trace capture
```

### pytest Configuration

```text
Generate pytest.ini with:
- Test markers for smoke, regression, api
- Parallel execution config
- HTML report settings
- Logging configuration
```

---

## Verification Test

### Test 1: Cmd+K Generation

1. Open new Python file
2. Press `Cmd+K` / `Ctrl+K`
3. Type: "Generate a Playwright test for user registration with validation"
4. Press Enter
5. **Expected:** Complete test function generated

### Test 2: Composer Multi-File

1. Press `Cmd+Shift+I` / `Ctrl+Shift+I`
2. Type: "Create Page Object for login page and 3 test cases for it"
3. **Expected:** Multiple files created (page object + test file)

### Test 3: Chat with Context

1. Open existing test file
2. Press `Cmd+L` / `Ctrl+L`
3. Type: "@file What assertions are missing in this test?"
4. **Expected:** Analysis of selected file with suggestions

---

## Tips for QA Testers

### Use @ Mentions Effectively

```text
# Reference specific files
@test_login.py Add error handling

# Reference codebase patterns
@Codebase Match the style used in existing tests

# Reference documentation
@readme.md Follow the setup instructions
```

### Iterate with Cmd+K

1. Generate initial test
2. Select generated code
3. Cmd+K: "Add negative test cases"
4. Select more
5. Cmd+K: "Add parametrization"

### Use Composer for Big Changes

- Creating new test modules
- Refactoring multiple files
- Setting up new frameworks
- Generating test infrastructure

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| AI not responding | Check internet, try different model |
| Slow completions | Using free tier limits, wait or upgrade |
| Wrong context | Use @mentions to specify files |
| Extensions not working | Re-import from VS Code settings |

### Reset Cursor

1. Open Command Palette
2. Type "Cursor: Reset"
3. Restart Cursor

---

## Comparison with VS Code + Copilot

| Feature | Cursor | VS Code + Copilot |
|---------|--------|-------------------|
| AI integration | Built-in, deep | Extension-based |
| Multi-file edit | Composer | Limited |
| Context awareness | Codebase indexing | File-based |
| Chat | Integrated | Copilot Chat |
| Inline edit | Cmd+K | Limited |
| Price | $20/mo Pro | $10/mo Copilot |
| Learning curve | Low (VS Code based) | Low |

---

## Next Steps

- Compare with [VS Code + GitHub Copilot](../ide_integrations/ch_03_vscode_ai_setup.md)
- Try [Anti Gravity](ch_03_antigravity_setup.md) in VS Code
- Apply [RICE POT Framework](../../chapter_02_prompt_engineering/core_concepts/ch_02_rice_pot_framework.md) for prompts

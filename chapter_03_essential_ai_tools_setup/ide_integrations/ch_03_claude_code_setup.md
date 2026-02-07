# Claude Code Setup

- **Author:** Pramod Dutta
- **Role:** Principal SDET
- **Website:** [The Testing Academy](https://thetestingacademy.com/)
- **LinkedIn:** [linkedin.com/in/pramoddutta](https://www.linkedin.com/in/pramoddutta/)

---

> Claude Code is Anthropic's official CLI tool bringing Claude's capabilities directly to your terminal for powerful AI-assisted coding.

---

## Quick Start

```bash
# Install
npm install -g @anthropic-ai/claude-code

# Run
claude

# Start coding with AI
```

---

## What is Claude Code?

Claude Code is a command-line AI assistant that:

- **Understands your codebase** - Reads and analyzes files
- **Generates code** - Create tests, functions, entire modules
- **Edits files** - Make changes directly
- **Runs commands** - Execute tests, builds, git operations
- **Conversational** - Iterative development workflow

---

## Detailed Setup Guide

### Step 1: Prerequisites

Ensure you have:
- Node.js 18+ installed
- npm or yarn
- Terminal access

```bash
# Check Node version
node --version  # Should be 18+
```

### Step 2: Install Claude Code

#### Windows / Mac / Linux

```bash
# Using npm
npm install -g @anthropic-ai/claude-code

# Using yarn
yarn global add @anthropic-ai/claude-code
```

### Step 3: Authentication

1. Run Claude Code:
```bash
claude
```

2. On first run, browser opens for authentication
3. Sign in with your Anthropic account
4. Authorize Claude Code
5. Return to terminal

### Step 4: Verify Installation

```bash
claude --version
claude --help
```

---

## Basic Usage

### Start Claude Code

```bash
# In any directory
claude

# In your test project
cd /path/to/test-project
claude
```

### Basic Commands in Claude Code

Once inside Claude Code:

```text
> help                    # Show available commands
> /clear                  # Clear conversation
> /compact                # Compact mode
> exit                    # Exit Claude Code
```

---

## QA-Specific Use Cases

### 1. Generate Test Suite

```text
> Generate comprehensive pytest tests for the user authentication module.
  Include:
  - Login tests (valid/invalid credentials)
  - Registration tests
  - Password reset flow
  - Session management

  Follow our existing test patterns in tests/
```

Claude Code:
- Reads existing test files for patterns
- Generates matching test code
- Creates files directly

### 2. Analyze Test Coverage

```text
> Analyze the test coverage in this project.
  What features are missing tests?
  What edge cases are not covered?
```

### 3. Fix Failing Tests

```text
> The test test_checkout_flow is failing with this error:
  [paste error]

  Analyze and fix the issue.
```

### 4. Create Page Objects

```text
> Create Page Object classes for our e-commerce site:
  - HomePage (search, categories, featured products)
  - ProductPage (add to cart, reviews, details)
  - CheckoutPage (shipping, payment, confirmation)

  Follow the pattern in tests/pages/LoginPage.py
```

### 5. Convert Manual to Automated

```text
> Convert these manual test cases to Playwright tests:

  TC-001: User can add item to cart
  1. Open product page
  2. Select quantity 2
  3. Click "Add to Cart"
  4. Verify cart shows 2 items

  TC-002: User can remove item from cart
  ...
```

---

## Advanced Features

### File Operations

Claude Code can read, create, and edit files:

```text
> Read the file tests/conftest.py and explain the fixtures

> Create a new test file tests/test_api_orders.py with:
  - Tests for creating orders
  - Tests for order status updates
  - Tests for order cancellation

> Edit tests/test_login.py to add a test for invalid email format
```

### Running Commands

Claude Code can execute terminal commands:

```text
> Run the tests and show me the failures

> Run pytest tests/test_login.py -v and analyze the output

> Check git status and show recent commits to test files
```

### Project Analysis

```text
> Analyze this test project structure and suggest improvements

> What testing patterns are used in this codebase?

> Find all tests that might be flaky and explain why
```

---

## Configuration

### Config File

Create `~/.claude/config.json`:

```json
{
  "theme": "dark",
  "defaultModel": "claude-3-opus",
  "autoSave": true,
  "confirmFileChanges": true
}
```

### Environment Variables

```bash
# Set in .bashrc/.zshrc
export ANTHROPIC_API_KEY="sk-ant-..."  # If using API key
export CLAUDE_CODE_THEME="dark"
```

---

## Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Submit prompt | `Enter` |
| Multi-line input | `Shift+Enter` |
| Clear screen | `Ctrl+L` |
| Cancel | `Ctrl+C` |
| Exit | `Ctrl+D` or type `exit` |

---

## Workflow Examples

### Workflow 1: TDD with Claude Code

```text
# Step 1: Describe the feature
> I need to implement a discount calculator that:
  - Applies percentage discounts
  - Has maximum discount limits
  - Handles multiple discount codes

  First, generate the tests.

# Step 2: Review tests
> Show me the test file

# Step 3: Implement
> Now implement the function to pass these tests

# Step 4: Run tests
> Run the tests
```

### Workflow 2: Test Debugging

```text
# Step 1: Share the error
> This test is failing:
  [paste test and error]

# Step 2: Get analysis
> What's causing this failure?

# Step 3: Apply fix
> Fix the test

# Step 4: Verify
> Run the test again
```

### Workflow 3: Test Refactoring

```text
# Step 1: Analyze
> Analyze tests/test_checkout.py for:
  - Code duplication
  - Missing assertions
  - Potential improvements

# Step 2: Refactor
> Refactor to use fixtures for common setup

# Step 3: Review changes
> Show me the diff

# Step 4: Verify
> Run all checkout tests to ensure nothing broke
```

---

## Best Practices for QA

### Be Specific

```text
# Good: Specific requirements
> Generate pytest tests for the login API endpoint:
  - POST /api/login
  - Body: {"email": string, "password": string}
  - Success: 200 with JWT token
  - Failures: 401, 400, 429 (rate limited)
  Include fixtures for test users.

# Less effective: Vague
> Write login tests
```

### Provide Context

```text
# Good: Reference existing patterns
> Create API tests matching the style in tests/test_users_api.py

# Good: Specify framework
> Generate Playwright tests using Python bindings
```

### Iterate

```text
# Start with basics
> Generate basic login test

# Add complexity
> Now add edge cases

# Refine
> Add better assertions with error messages
```

---

## Verification Test

### Test 1: Basic Operation

```bash
# Start Claude Code
claude

# Ask a question
> What testing frameworks does this project use?
```

**Expected:** Claude Code analyzes project and responds.

### Test 2: File Creation

```text
> Create a simple test file tests/test_demo.py with:
  - One passing test
  - One test that verifies 1+1=2
```

**Expected:** File created with test code.

### Test 3: Run Commands

```text
> Run: pytest tests/test_demo.py -v
```

**Expected:** Test runs and output displayed.

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "command not found" | Check npm global path in PATH |
| Auth fails | Clear browser cache, try again |
| Slow responses | Check internet connection |
| Can't edit files | Check file permissions |

### Debug Mode

```bash
# Run with debug output
DEBUG=* claude
```

### Reset Authentication

```bash
# Clear auth cache
rm -rf ~/.claude/auth
claude  # Will prompt to re-authenticate
```

---

## Pricing

Claude Code uses your Claude subscription:

| Plan | Access |
|------|--------|
| **Claude Pro** | Full access |
| **Claude Free** | Limited usage |
| **API** | Pay per token |

---

## Comparison with Other Tools

| Feature | Claude Code | GitHub Copilot CLI | Cursor |
|---------|-------------|-------------------|--------|
| Environment | Terminal | Terminal | GUI |
| File editing | Yes | Limited | Yes |
| Command execution | Yes | Yes | Yes |
| Project analysis | Excellent | Limited | Good |
| Conversation | Yes | Limited | Yes |

---

## Next Steps

- Set up [Claude Desktop](../desktop_ai_tools/ch_03_claude_desktop_setup.md) for GUI experience
- Configure [VS Code](ch_03_vscode_ai_setup.md) with AI extensions
- Use with [RICE POT Framework](../../chapter_02_prompt_engineering/core_concepts/ch_02_rice_pot_framework.md) for prompts

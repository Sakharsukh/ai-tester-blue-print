# Blackbox AI Setup

- **Author:** Pramod Dutta
- **Role:** Principal SDET
- **Website:** [The Testing Academy](https://thetestingacademy.com/)
- **LinkedIn:** [linkedin.com/in/pramoddutta](https://www.linkedin.com/in/pramoddutta/)

---

> Blackbox AI is an AI-powered coding assistant that helps with code generation, explanation, and test writing.

---

## Quick Start

1. Go to [blackbox.ai](https://www.blackbox.ai)
2. Sign up for an account
3. Install the VS Code extension
4. Start generating code and tests

---

## Detailed Setup Guide

### Step 1: Create Account

**Windows / Mac / Linux** (Browser-based)

1. Navigate to [https://www.blackbox.ai](https://www.blackbox.ai)
2. Click **"Sign Up"** or **"Get Started"**
3. Choose sign-up method:
   - Email address
   - Google account
   - GitHub account
4. Complete verification
5. Set up your profile

### Step 2: Explore Web Interface

1. After login, access the chat interface
2. Try the AI chat for code generation
3. Explore features:
   - Code generation
   - Code explanation
   - Code search
   - Image to code

### Step 3: Install VS Code Extension

#### Windows / Mac / Linux

1. Open VS Code
2. Go to Extensions (`Ctrl+Shift+X` / `Cmd+Shift+X`)
3. Search for **"Blackbox AI"**
4. Click **"Install"**
5. Reload VS Code if prompted
6. Sign in when prompted

### Step 4: Configure Extension

1. Open VS Code Settings (`Ctrl+,` / `Cmd+,`)
2. Search for "Blackbox"
3. Configure options:
   - Enable/disable autocomplete
   - Set keyboard shortcuts
   - Configure inline suggestions

---

## Plans and Pricing

| Plan | Price | Features |
|------|-------|----------|
| **Free** | $0 | Basic code completion, chat, limited requests |
| **Pro** | ~$12/mo | Unlimited requests, advanced models, priority |
| **Enterprise** | Custom | Team features, SSO, admin controls |

---

## QA-Specific Use Cases

### 1. Generate Test Scripts
```text
Generate a Playwright test script for:
- Navigate to login page
- Enter valid credentials
- Click submit
- Verify redirect to dashboard

Use TypeScript with async/await.
```

### 2. Convert Manual Tests to Automated
```text
Convert this manual test case to Selenium Python:

Test Case: Verify user registration
1. Open registration page
2. Enter name: "John Doe"
3. Enter email: "john@test.com"
4. Enter password: "Test@123"
5. Click Register button
6. Verify success message appears
```

### 3. Explain Test Code
```text
Explain what this test code does and identify any issues:

[Paste test code here]
```

### 4. Generate Test Data
```text
Generate mock test data for API testing:
- 10 user objects with name, email, role
- Include edge cases (long names, special chars)
- Format as JSON array
```

---

## VS Code Features

### Code Autocomplete

1. Start typing code
2. Blackbox suggests completions
3. Press `Tab` to accept

### Inline Chat

1. Select code
2. Press `Ctrl+Shift+B` / `Cmd+Shift+B`
3. Ask questions about selected code

### Code Generation

1. Write a comment describing what you want:
```python
# Generate a pytest fixture for database connection
```
2. Press `Tab` to generate code

### Code Explanation

1. Select code block
2. Right-click → **"Blackbox: Explain Code"**
3. View explanation in sidebar

---

## Features for QA

| Feature | How to Use | QA Benefit |
|---------|------------|------------|
| **Code Generation** | Describe test in comment | Quick test script creation |
| **Code Search** | Search across codebases | Find similar test patterns |
| **Image to Code** | Upload UI screenshot | Generate selectors from UI |
| **Chat** | Ask questions | Debug test failures |
| **Autocomplete** | Type and Tab | Faster test writing |

---

## Image to Code (QA Useful)

Convert UI screenshots to code:

1. Go to [blackbox.ai](https://www.blackbox.ai)
2. Click **"Image to Code"**
3. Upload screenshot of UI
4. Get generated:
   - HTML/CSS for the UI
   - Selectors for testing
   - Component structure

### Example Use Case

1. Screenshot a login form
2. Upload to Blackbox
3. Get selectors:
```python
# Generated selectors
email_input = "input[name='email']"
password_input = "input[type='password']"
submit_button = "button[type='submit']"
```

---

## Verification Test

### Web Interface Test

```text
Generate a pytest test for a REST API endpoint:
- Endpoint: POST /api/users
- Body: {"name": "string", "email": "string"}
- Expected: 201 status, user object returned

Include setup, test, and assertions.
```

**Expected Output:** Complete pytest function with requests library, assertions, and proper structure.

### VS Code Extension Test

1. Open a Python file
2. Type comment:
```python
# Generate a Selenium test for login page with valid credentials
```
3. Press Tab or wait for suggestion
4. Verify code is generated

---

## Keyboard Shortcuts

| Action | Windows/Linux | Mac |
|--------|---------------|-----|
| Accept suggestion | `Tab` | `Tab` |
| Open Blackbox chat | `Ctrl+Shift+B` | `Cmd+Shift+B` |
| Explain selected code | `Ctrl+Shift+E` | `Cmd+Shift+E` |
| Generate code | `Ctrl+Enter` | `Cmd+Enter` |

---

## Comparison with Other Tools

| Feature | Blackbox AI | GitHub Copilot | Cursor |
|---------|-------------|----------------|--------|
| Free tier | Yes | No | Limited |
| Code completion | Yes | Yes | Yes |
| Chat interface | Yes | Yes (Copilot Chat) | Yes |
| Image to code | Yes | No | No |
| Code search | Yes | No | No |
| Price (Pro) | ~$12/mo | $10/mo | $20/mo |

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Extension not working | Sign out and sign in again |
| Slow suggestions | Check internet connection |
| No autocomplete | Enable in extension settings |
| Login loop | Clear VS Code extension cache |

### Reset Extension

1. Open Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`)
2. Type "Blackbox: Sign Out"
3. Reload VS Code
4. Sign in again

---

## Security Considerations

- Code is sent to Blackbox servers for processing
- Review privacy policy for sensitive code
- Consider local alternatives for confidential projects
- See [Security Best Practices](../security_best_practices/ch_03_ai_tools_security.md)

---

## Next Steps

- Compare with [GitHub Copilot](../ai_coding_assistants/ch_03_github_copilot_setup.md)
- Try [Cursor](../ai_coding_assistants/ch_03_cursor_for_testers.md) for AI-native IDE
- Set up [VS Code AI Configuration](../ide_integrations/ch_03_vscode_ai_setup.md)

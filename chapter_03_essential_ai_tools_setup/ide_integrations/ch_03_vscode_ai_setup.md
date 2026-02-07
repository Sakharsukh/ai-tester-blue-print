# VS Code AI Setup ⭐ PRIMARY

- **Author:** Pramod Dutta
- **Role:** Principal SDET
- **Website:** [The Testing Academy](https://thetestingacademy.com/)
- **LinkedIn:** [linkedin.com/in/pramoddutta](https://www.linkedin.com/in/pramoddutta/)

---

> **Recommended Setup** - Configure VS Code as your AI-powered test automation IDE with the best extensions and settings.

---

## Quick Start

1. Install VS Code from [code.visualstudio.com](https://code.visualstudio.com)
2. Install recommended AI extensions
3. Configure settings for QA workflow
4. Start writing tests with AI assistance

---

## Why VS Code for QA?

| Advantage | Benefit |
|-----------|---------|
| **Free** | No cost for the editor |
| **Extensions** | Thousands of testing extensions |
| **AI Support** | Best AI extension ecosystem |
| **Cross-platform** | Windows, Mac, Linux |
| **Customizable** | Tailor to QA workflows |

---

## Installation

### Windows

1. Download from [code.visualstudio.com](https://code.visualstudio.com)
2. Run installer
3. Check "Add to PATH" option
4. Launch VS Code

### Mac

```bash
# Via Homebrew (recommended)
brew install --cask visual-studio-code

# Or download from website
```

### Linux

```bash
# Ubuntu/Debian
sudo apt update
sudo apt install code

# Or via snap
sudo snap install code --classic
```

---

## Recommended AI Extensions

### Primary AI Extensions

Install these for a complete AI-powered QA setup:

| Extension | Purpose | Priority |
|-----------|---------|----------|
| **GitHub Copilot** | Code completion, generation | ⭐ Primary |
| **GitHub Copilot Chat** | AI conversations | ⭐ Primary |
| **Anti Gravity** | Google's AI assistant | ⭐ Primary |
| **Kimi Code** | 128K context coding | Secondary |

### Install Command

```bash
# Install via command line
code --install-extension GitHub.copilot
code --install-extension GitHub.copilot-chat
```

Or search in VS Code Extensions panel.

### Testing Extensions

| Extension | Purpose |
|-----------|---------|
| **Playwright Test** | Playwright test runner |
| **Python** | Python support |
| **Pytest IntelliSense** | pytest support |
| **Test Explorer UI** | Visual test runner |
| **REST Client** | API testing |

---

## Settings Configuration

### settings.json for QA

Open settings: `Ctrl+,` / `Cmd+,` → Click `{}` icon

```json
{
  // AI Settings
  "github.copilot.enable": {
    "*": true,
    "python": true,
    "javascript": true,
    "typescript": true,
    "yaml": true,
    "json": true
  },
  "github.copilot.advanced": {
    "inlineSuggest.enable": true
  },

  // Editor Settings for Testing
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.organizeImports": "explicit"
  },

  // Python/Testing Settings
  "python.testing.pytestEnabled": true,
  "python.testing.unittestEnabled": false,
  "python.testing.pytestArgs": [
    "-v",
    "--tb=short"
  ],

  // Terminal
  "terminal.integrated.defaultProfile.windows": "PowerShell",
  "terminal.integrated.defaultProfile.osx": "zsh",

  // File Associations
  "files.associations": {
    "*.spec.ts": "typescript",
    "*.test.py": "python"
  },

  // Emmet for HTML test pages
  "emmet.includeLanguages": {
    "javascript": "html"
  }
}
```

### Workspace Settings for Test Projects

Create `.vscode/settings.json` in your project:

```json
{
  "python.testing.pytestEnabled": true,
  "python.testing.pytestPath": "pytest",
  "python.envFile": "${workspaceFolder}/.env",

  "playwright.reuseBrowser": true,
  "playwright.showTrace": true,

  "github.copilot.chat.welcomeMessage": "start",

  "[python]": {
    "editor.defaultFormatter": "ms-python.black-formatter",
    "editor.formatOnSave": true
  }
}
```

---

## Keyboard Shortcuts for AI

### Default Shortcuts

| Action | Windows/Linux | Mac |
|--------|---------------|-----|
| **Copilot: Accept** | `Tab` | `Tab` |
| **Copilot: Next** | `Alt+]` | `Option+]` |
| **Copilot: Previous** | `Alt+[` | `Option+[` |
| **Copilot Chat** | `Ctrl+Shift+I` | `Cmd+Shift+I` |
| **Inline Chat** | `Ctrl+I` | `Cmd+I` |

### Custom Shortcuts for QA

Add to `keybindings.json`:

```json
[
  {
    "key": "ctrl+shift+t",
    "command": "github.copilot.generate",
    "when": "editorTextFocus"
  },
  {
    "key": "ctrl+shift+r",
    "command": "testing.runAtCursor",
    "when": "editorTextFocus"
  },
  {
    "key": "ctrl+shift+d",
    "command": "testing.debugAtCursor",
    "when": "editorTextFocus"
  }
]
```

---

## Snippets for Test Automation

### Create User Snippets

1. `Ctrl+Shift+P` / `Cmd+Shift+P`
2. Type "Configure User Snippets"
3. Select "python.json"

```json
{
  "Playwright Test": {
    "prefix": "pwtest",
    "body": [
      "def test_${1:name}(page: Page):",
      "    \"\"\"${2:Test description}.\"\"\"",
      "    page.goto(\"${3:url}\")",
      "    $0"
    ],
    "description": "Playwright test function"
  },
  "pytest Fixture": {
    "prefix": "pyfixture",
    "body": [
      "@pytest.fixture",
      "def ${1:fixture_name}():",
      "    \"\"\"${2:Fixture description}.\"\"\"",
      "    ${3:setup}",
      "    yield ${4:value}",
      "    ${5:teardown}"
    ],
    "description": "pytest fixture"
  },
  "Test Class": {
    "prefix": "testclass",
    "body": [
      "class Test${1:Feature}:",
      "    \"\"\"Tests for ${2:feature description}.\"\"\"",
      "",
      "    def test_${3:scenario}(self, page: Page):",
      "        \"\"\"${4:Test description}.\"\"\"",
      "        $0"
    ],
    "description": "Test class"
  },
  "API Test": {
    "prefix": "apitest",
    "body": [
      "def test_${1:endpoint}_${2:scenario}(api_client):",
      "    \"\"\"Test ${3:description}.\"\"\"",
      "    response = api_client.${4:get}(\"${5:/api/endpoint}\")",
      "    assert response.status_code == ${6:200}",
      "    $0"
    ],
    "description": "API test function"
  }
}
```

---

## AI-Powered Workflows

### Workflow 1: Test Generation

1. Write a descriptive comment:
```python
# Test user login with valid credentials verifies redirect to dashboard
```

2. Press Enter, wait for Copilot
3. Tab to accept suggestion
4. Review and refine

### Workflow 2: Test from Spec

1. Copy requirement into comment:
```python
# Requirement: Users can reset password via email link
# - Enter email on forgot password page
# - Receive email with reset link (valid 24 hours)
# - Click link, enter new password
# - New password must be 8+ chars with 1 uppercase
```

2. Type `def test_password_reset`
3. Let AI generate complete test

### Workflow 3: Chat-Based Generation

1. Open Copilot Chat (`Ctrl+Shift+I`)
2. Type:
```text
/tests Generate comprehensive tests for user registration
including:
- Valid registration
- Invalid email format
- Password too short
- Duplicate email
- Missing required fields
```

3. Review generated tests
4. Insert into file

### Workflow 4: Explain and Debug

1. Select failing test code
2. Open inline chat (`Ctrl+I`)
3. Type: "Why might this test fail intermittently?"
4. Get explanation and fix suggestions

---

## Test Runner Integration

### Configure Test Explorer

1. Install "Test Explorer UI" extension
2. Configure in settings:

```json
{
  "testExplorer.useNativeTesting": true,
  "python.testing.pytestEnabled": true
}
```

### Run Tests from Editor

- **Run single test**: Click "Run Test" lens above test
- **Run all tests**: Click play button in Test Explorer
- **Debug test**: Click "Debug Test" lens

---

## Launch Configurations

Create `.vscode/launch.json`:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "pytest: Current File",
      "type": "python",
      "request": "launch",
      "module": "pytest",
      "args": ["${file}", "-v"],
      "console": "integratedTerminal"
    },
    {
      "name": "Playwright: Debug",
      "type": "node",
      "request": "launch",
      "program": "${workspaceFolder}/node_modules/.bin/playwright",
      "args": ["test", "--debug"],
      "console": "integratedTerminal"
    },
    {
      "name": "pytest: All Tests",
      "type": "python",
      "request": "launch",
      "module": "pytest",
      "args": ["-v", "--tb=short"],
      "console": "integratedTerminal"
    }
  ]
}
```

---

## Tasks Configuration

Create `.vscode/tasks.json`:

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Run All Tests",
      "type": "shell",
      "command": "pytest -v",
      "group": {
        "kind": "test",
        "isDefault": true
      }
    },
    {
      "label": "Run Smoke Tests",
      "type": "shell",
      "command": "pytest -v -m smoke"
    },
    {
      "label": "Generate Report",
      "type": "shell",
      "command": "pytest --html=report.html"
    },
    {
      "label": "Playwright: Run",
      "type": "shell",
      "command": "npx playwright test"
    },
    {
      "label": "Playwright: Show Report",
      "type": "shell",
      "command": "npx playwright show-report"
    }
  ]
}
```

---

## Verification Test

### Test 1: AI Completion

1. Create `test_verify.py`
2. Type:
```python
def test_login_valid_
```
3. Wait for Copilot suggestion
4. **Expected:** Function body suggested

### Test 2: Test Runner

1. Write a simple test:
```python
def test_example():
    assert 1 + 1 == 2
```
2. Click "Run Test" above function
3. **Expected:** Test runs, shows pass/fail

### Test 3: Chat

1. Open Copilot Chat
2. Ask: "Generate a Page Object for login page"
3. **Expected:** Complete class generated

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Copilot not suggesting | Check subscription, sign in again |
| Tests not discovered | Check pytest is enabled in settings |
| Python not found | Set Python interpreter (`Ctrl+Shift+P` → "Select Interpreter") |
| Extensions not working | Reload window (`Ctrl+Shift+P` → "Reload Window") |

---

## Next Steps

- Install [GitHub Copilot](../ai_coding_assistants/ch_03_github_copilot_setup.md) extension
- Set up [Anti Gravity](../ai_coding_assistants/ch_03_antigravity_setup.md) for additional AI
- Configure [Claude Code CLI](ch_03_claude_code_setup.md) for terminal AI

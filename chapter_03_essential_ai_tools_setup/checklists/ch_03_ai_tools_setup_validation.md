# AI Tools Setup Validation Checklist

- **Author:** Pramod Dutta
- **Role:** Principal SDET
- **Website:** [The Testing Academy](https://thetestingacademy.com/)
- **LinkedIn:** [linkedin.com/in/pramoddutta](https://www.linkedin.com/in/pramoddutta/)

---

> Complete this checklist to verify your AI tools are properly configured for QA work.

---

## How to Use This Checklist

1. Work through each section in order
2. Mark items as complete when verified
3. Use the test prompts to verify each tool
4. Document any issues for troubleshooting

---

## Verification Test Prompt

Use this prompt to test each AI tool:

```text
Role: Senior QA Engineer
Intent: Verify AI tool is working correctly for QA tasks
Context: Testing a user registration form with fields: name, email, password, confirm password

Task: Generate 3 test cases in this exact format:

| Test ID | Type | Description | Steps | Expected Result |

Include: 1 positive test, 1 negative test, 1 edge case.
```

**Expected output characteristics:**
- Table format with 5 columns
- 3 test cases (positive, negative, edge)
- Clear, actionable steps
- Specific expected results

---

## Section 1: Cloud AI Tools

### Claude (Recommended)

- [ ] Account created at claude.ai
- [ ] Email verified
- [ ] Can send and receive messages
- [ ] Test prompt returns valid test cases
- [ ] (Optional) Pro subscription for higher limits

**Verification:**
```
Status: [ ] Working  [ ] Not Working  [ ] Not Set Up
Notes: _______________________________________
```

### ChatGPT

- [ ] Account created at chat.openai.com
- [ ] Email verified
- [ ] Can send and receive messages
- [ ] Test prompt returns valid test cases
- [ ] (Optional) Custom instructions configured

**Verification:**
```
Status: [ ] Working  [ ] Not Working  [ ] Not Set Up
Notes: _______________________________________
```

### Gemini

- [ ] Signed in with Google account
- [ ] Can send and receive messages
- [ ] Test prompt returns valid test cases
- [ ] (Optional) Extensions enabled

**Verification:**
```
Status: [ ] Working  [ ] Not Working  [ ] Not Set Up
Notes: _______________________________________
```

### Kimi K2

- [ ] Account created at kimi.ai
- [ ] Can send and receive messages
- [ ] Test prompt returns valid test cases
- [ ] Large context (128K) working

**Verification:**
```
Status: [ ] Working  [ ] Not Working  [ ] Not Set Up
Notes: _______________________________________
```

---

## Section 2: Desktop AI Tools

### Claude Desktop

- [ ] Downloaded from claude.ai/download
- [ ] Installed successfully
- [ ] Signed in with Claude account
- [ ] Can send messages
- [ ] (Optional) MCP configured for file access

**Verification:**
```
Status: [ ] Working  [ ] Not Working  [ ] Not Set Up
Notes: _______________________________________
```

### LM Studio

- [ ] Downloaded from lmstudio.ai
- [ ] Installed successfully
- [ ] At least one model downloaded
- [ ] Model loads and responds
- [ ] (Optional) Local server mode works

**Verification:**
```
Status: [ ] Working  [ ] Not Working  [ ] Not Set Up
Model used: _______________________________________
```

---

## Section 3: Local AI Tools

### Ollama

- [ ] Installed (`ollama --version` works)
- [ ] At least one model pulled (e.g., `llama3:8b`)
- [ ] Can run model (`ollama run llama3`)
- [ ] Test prompt returns valid response
- [ ] (Optional) API server accessible at localhost:11434

**Verification:**
```bash
# Run these commands to verify:
ollama --version
ollama list
curl http://localhost:11434/api/tags
```

```
Status: [ ] Working  [ ] Not Working  [ ] Not Set Up
Model(s) installed: _______________________________________
```

---

## Section 4: AI Coding Assistants

### Anti Gravity (Recommended)

- [ ] Extension installed in VS Code
- [ ] Signed in with Google account
- [ ] Code completion working
- [ ] Can generate test from comment

**Test:**
1. Create new Python file
2. Type: `# Test user login with valid credentials`
3. Press Enter and wait for suggestion
4. Verify test function is suggested

```
Status: [ ] Working  [ ] Not Working  [ ] Not Set Up
Notes: _______________________________________
```

### GitHub Copilot (Recommended)

- [ ] Subscription active (Individual, Business, or free via education)
- [ ] Extension installed in VS Code
- [ ] Signed in with GitHub account
- [ ] Code completion working (Tab to accept)
- [ ] Copilot Chat working

**Test:**
1. Create new file `test_copilot.py`
2. Type: `def test_add_to_cart_`
3. Wait for gray suggestion text
4. Press Tab to accept
5. Verify reasonable test generated

```
Status: [ ] Working  [ ] Not Working  [ ] Not Set Up
Subscription type: _______________________________________
```

### Kimi Code

- [ ] Extension installed in VS Code
- [ ] Signed in with Kimi account
- [ ] Code completion working
- [ ] @workspace command works

```
Status: [ ] Working  [ ] Not Working  [ ] Not Set Up
Notes: _______________________________________
```

### Cursor

- [ ] Downloaded from cursor.com
- [ ] Installed successfully
- [ ] VS Code settings imported (optional)
- [ ] Cmd+K inline generation works
- [ ] Composer multi-file works

```
Status: [ ] Working  [ ] Not Working  [ ] Not Set Up
Notes: _______________________________________
```

---

## Section 5: IDE Integrations

### VS Code AI Setup (Recommended)

- [ ] VS Code installed and updated
- [ ] Python extension installed
- [ ] At least one AI extension active (Copilot/Anti Gravity)
- [ ] settings.json configured for testing
- [ ] Can run tests from editor

**Configuration check:**
```json
// Verify these settings exist in settings.json
{
  "python.testing.pytestEnabled": true,
  "github.copilot.enable": { "*": true }
}
```

```
Status: [ ] Working  [ ] Not Working  [ ] Not Set Up
AI extensions installed: _______________________________________
```

### Claude Code CLI

- [ ] Installed via npm (`npm install -g @anthropic-ai/claude-code`)
- [ ] `claude` command works
- [ ] Authenticated successfully
- [ ] Can generate code from prompts
- [ ] Can read/edit files

**Test:**
```bash
claude --version
claude
# Then type: "Generate a simple pytest test"
```

```
Status: [ ] Working  [ ] Not Working  [ ] Not Set Up
Notes: _______________________________________
```

---

## Section 6: Security Configuration

### API Key Management

- [ ] `.env` file created for local development
- [ ] `.env` added to `.gitignore`
- [ ] `.env.example` created (without real keys)
- [ ] Verified `.env` not tracked by git (`git status`)
- [ ] API keys loaded via environment variables in code

**Verification:**
```bash
# Check .gitignore contains .env
grep ".env" .gitignore

# Verify .env not tracked
git status | grep ".env"  # Should return nothing
```

```
Status: [ ] Secure  [ ] Needs Work  [ ] Not Configured
Notes: _______________________________________
```

### Code Security

- [ ] No API keys hardcoded in source files
- [ ] No passwords in test files
- [ ] Test data uses fake/anonymized information
- [ ] Sensitive URLs not exposed in prompts

```
Status: [ ] Secure  [ ] Needs Work  [ ] Not Reviewed
Notes: _______________________________________
```

---

## Summary

### Quick Status

| Category | Status |
|----------|--------|
| Cloud AI (at least 1) | [ ] Ready |
| Desktop AI (optional) | [ ] Ready / [ ] Skipped |
| Local AI (optional) | [ ] Ready / [ ] Skipped |
| Coding Assistant (at least 1) | [ ] Ready |
| IDE Setup | [ ] Ready |
| Security | [ ] Ready |

### Minimum Setup (Required)

- [ ] **One cloud AI tool** working (Claude recommended)
- [ ] **One coding assistant** in VS Code (GitHub Copilot or Anti Gravity)
- [ ] **Security configured** (.env, .gitignore)

### Full Setup (Recommended)

- [ ] All minimum requirements met
- [ ] Local AI option available (Ollama or LM Studio)
- [ ] Claude Desktop with MCP for file access
- [ ] Multiple AI tools for comparison

---

## Troubleshooting Quick Reference

| Issue | Solution |
|-------|----------|
| Extension not loading | Restart VS Code, check for updates |
| Auth fails | Clear browser cookies, try incognito |
| No suggestions | Verify subscription/account status |
| API key not working | Check key validity in provider console |
| Local model slow | Reduce model size or add more RAM |
| .env not loading | Install python-dotenv, verify load_dotenv() called |

---

## Completion

**Date completed:** ________________

**Total tools configured:** ______ / ______

**Notes / Issues:**
```
_________________________________________________
_________________________________________________
_________________________________________________
```

**Next steps:**
- [ ] Practice using tools with Chapter 3 exercises
- [ ] Integrate AI tools into daily QA workflow
- [ ] Share setup with team members

# Claude Setup ⭐ PRIMARY

- **Author:** Pramod Dutta
- **Role:** Principal SDET
- **Website:** [The Testing Academy](https://thetestingacademy.com/)
- **LinkedIn:** [linkedin.com/in/pramoddutta](https://www.linkedin.com/in/pramoddutta/)

---

> **Recommended Tool** - Claude excels at complex reasoning, test case analysis, and detailed explanations.

---

## Quick Start

1. Go to [claude.ai](https://claude.ai)
2. Sign up with email or Google account
3. Verify your email
4. Start chatting with Claude

---

## Detailed Setup Guide

### Step 1: Create Account

**Windows / Mac / Linux** (Browser-based)

1. Open your browser and navigate to [https://claude.ai](https://claude.ai)
2. Click **"Sign Up"**
3. Choose sign-up method:
   - Email address
   - Google account
   - Apple ID (if available)
4. Complete email verification
5. Accept terms of service

### Step 2: Choose Your Plan

| Plan | Price | Features | Best For |
|------|-------|----------|----------|
| **Free** | $0 | Limited messages, Claude 3.5 Sonnet | Getting started, light usage |
| **Pro** | $20/mo | More messages, Claude 3.5 Opus, Projects | Daily QA work |
| **Team** | $25/user/mo | Admin controls, higher limits, collaboration | QA teams |

### Step 3: Configure Settings

1. Click your profile icon (top right)
2. Go to **Settings**
3. Configure:
   - **Theme**: Light/Dark mode
   - **Language**: English (recommended for QA)
   - **Data**: Review data usage settings

### Step 4: Create a QA Project (Pro/Team)

1. Click **"Projects"** in sidebar
2. Click **"New Project"**
3. Name it: `QA Test Automation`
4. Add project instructions:

```text
You are a QA automation expert. When generating test cases:
- Use the RICE POT framework
- Follow anti-hallucination rules from Chapter 1
- Always include assertions
- Provide both positive and negative test cases
```

---

## QA-Specific Use Cases

### 1. Test Case Generation
```text
Role: Senior QA Engineer
Intent: Generate comprehensive test cases
Context: Login page with email/password fields
Expected Output: Test cases with steps, expected results, and assertions
```

### 2. Bug Report Analysis
```text
Analyze this bug report and suggest:
1. Missing information
2. Reproduction steps clarity
3. Priority recommendation
```

### 3. Code Review for Tests
```text
Review this Selenium test script for:
- Best practices
- Potential flaky test issues
- Missing assertions
- Maintainability
```

### 4. PRD to Test Cases
```text
Convert this PRD section into:
- Functional test cases
- Edge cases
- Negative test scenarios
```

---

## Features for QA Professionals

| Feature | How to Use | QA Benefit |
|---------|------------|------------|
| **Projects** | Create QA-specific projects | Persistent context for test automation |
| **Artifacts** | Generate code in artifacts | Copy test scripts directly |
| **File Upload** | Upload PRDs, specs, logs | Analyze documents for testing |
| **Long Context** | 200K token window | Analyze large test suites |

---

## API Access (Optional)

For automation and integration:

1. Go to [console.anthropic.com](https://console.anthropic.com)
2. Create an account (separate from claude.ai)
3. Navigate to **API Keys**
4. Click **"Create Key"**
5. Store securely (see [Security Best Practices](../security_best_practices/ch_03_ai_tools_security.md))

```bash
# Set environment variable
export ANTHROPIC_API_KEY="sk-ant-..."
```

---

## Verification Test Prompt

Use this prompt to verify Claude is working correctly:

```text
Role: QA Engineer
Task: Generate 3 test cases for a login form

Context:
- Email field (required, must be valid email format)
- Password field (required, minimum 8 characters)
- "Remember me" checkbox
- Submit button

Output Format:
| Test ID | Description | Steps | Expected Result |
```

**Expected Output:** A table with 3 well-structured test cases including positive, negative, and edge case scenarios.

---

## Pricing Comparison

| Feature | Free | Pro ($20/mo) | Team ($25/user/mo) |
|---------|------|--------------|-------------------|
| Messages/day | ~20-30 | ~100+ | Higher limits |
| Claude 3.5 Sonnet | Yes | Yes | Yes |
| Claude 3.5 Opus | No | Yes | Yes |
| Projects | No | Yes | Yes |
| File uploads | Limited | Unlimited | Unlimited |
| Priority access | No | Yes | Yes |

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "Usage limit reached" | Wait for reset or upgrade to Pro |
| Slow responses | Try during off-peak hours |
| Can't upload file | Check file size (<10MB) and format |
| Project not saving | Refresh page, check internet connection |

---

## Next Steps

- Set up [Claude Desktop](../desktop_ai_tools/ch_03_claude_desktop_setup.md) for local file access
- Configure [Claude Code CLI](../ide_integrations/ch_03_claude_code_setup.md) for terminal usage
- Review [Security Best Practices](../security_best_practices/ch_03_ai_tools_security.md) for API keys

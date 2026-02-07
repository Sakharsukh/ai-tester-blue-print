# ChatGPT Setup

- **Author:** Pramod Dutta
- **Role:** Principal SDET
- **Website:** [The Testing Academy](https://thetestingacademy.com/)
- **LinkedIn:** [linkedin.com/in/pramoddutta](https://www.linkedin.com/in/pramoddutta/)

---

> ChatGPT by OpenAI is a versatile AI assistant suitable for general QA tasks and test generation.

---

## Quick Start

1. Go to [chat.openai.com](https://chat.openai.com)
2. Sign up with email, Google, Microsoft, or Apple account
3. Verify your account
4. Start chatting

---

## Detailed Setup Guide

### Step 1: Create Account

**Windows / Mac / Linux** (Browser-based)

1. Navigate to [https://chat.openai.com](https://chat.openai.com)
2. Click **"Sign up"**
3. Choose authentication method:
   - Email address
   - Google account
   - Microsoft account
   - Apple ID
4. Complete verification (email or phone)
5. Fill in your profile details

### Step 2: Choose Your Plan

| Plan | Price | Features | Best For |
|------|-------|----------|----------|
| **Free** | $0 | GPT-4o mini, limited GPT-4o | Basic QA tasks |
| **Plus** | $20/mo | GPT-4o, GPT-4, DALL-E, Advanced Data Analysis | Individual QA professionals |
| **Team** | $25/user/mo | Higher limits, admin controls, workspace | QA teams |
| **Enterprise** | Custom | SSO, advanced security, unlimited | Large organizations |

### Step 3: Configure Settings

1. Click your profile icon (bottom left)
2. Select **"Settings"**
3. Configure:
   - **General**: Theme, language
   - **Data controls**: Chat history settings
   - **Custom instructions**: Set up QA-specific defaults

### Step 4: Set Up Custom Instructions

1. Go to Settings → **Personalization** → **Custom instructions**
2. Add QA context:

**What would you like ChatGPT to know about you?**
```text
I am a QA Engineer working on test automation. I primarily use:
- Selenium/Playwright for UI testing
- Python/JavaScript for scripting
- REST APIs for backend testing
I follow the RICE POT framework for prompts.
```

**How would you like ChatGPT to respond?**
```text
- Provide structured test cases with clear steps
- Include both positive and negative scenarios
- Add assertions and expected results
- Use code blocks for test scripts
- Follow testing best practices
```

---

## QA-Specific Use Cases

### 1. Test Case Generation
```text
Generate test cases for an e-commerce checkout flow:
- Shopping cart with multiple items
- Shipping address form
- Payment processing (credit card)
- Order confirmation

Include boundary tests and error scenarios.
```

### 2. Test Data Generation
```text
Generate 10 rows of test data for user registration:
- Name (valid and invalid formats)
- Email (valid, invalid, edge cases)
- Phone (international formats)
- Age (boundary values)

Output as JSON.
```

### 3. API Test Script
```text
Write a Python requests script to test this API:
- POST /api/users
- Body: {"name": "string", "email": "string"}
- Expected: 201 Created

Include error handling and assertions.
```

### 4. Bug Report Writing
```text
Convert this informal bug description into a proper bug report:
"The submit button doesn't work sometimes on mobile"

Include: Summary, Steps, Expected, Actual, Environment, Severity
```

---

## Features for QA Professionals

| Feature | How to Use | QA Benefit |
|---------|------------|------------|
| **Custom GPTs** | Create specialized QA GPT | Consistent test generation |
| **Code Interpreter** | Upload data files | Analyze test results |
| **Web Browsing** | Research testing tools | Stay updated on best practices |
| **DALL-E** | Generate UI mockups | Visual test planning |
| **Voice** | Dictate test scenarios | Hands-free documentation |

---

## Creating a Custom GPT for QA (Plus/Team)

1. Go to [chat.openai.com/gpts](https://chat.openai.com/gpts)
2. Click **"Create"**
3. Configure:

**Name:** `QA Test Generator`

**Description:** `Generates comprehensive test cases following RICE POT framework`

**Instructions:**
```text
You are a Senior QA Engineer specializing in test automation.

When generating test cases:
1. Always use structured format (ID, Description, Steps, Expected Result)
2. Include positive, negative, and edge cases
3. Consider boundary values
4. Add prerequisite conditions
5. Follow the RICE POT framework

When writing test scripts:
1. Use Page Object Model pattern
2. Include proper waits and assertions
3. Add meaningful comments
4. Handle exceptions gracefully
```

---

## API Access (Optional)

For integrating ChatGPT into your workflows:

1. Go to [platform.openai.com](https://platform.openai.com)
2. Create an API account
3. Navigate to **API Keys**
4. Click **"Create new secret key"**
5. Store securely

```bash
# Set environment variable
export OPENAI_API_KEY="sk-..."
```

---

## Verification Test Prompt

Use this prompt to verify ChatGPT is working correctly:

```text
Act as a QA Engineer. Generate 3 test cases for a password reset feature.

Requirements:
- User enters email address
- System sends reset link (valid for 24 hours)
- Link redirects to password change form
- New password must be 8+ characters with 1 uppercase and 1 number

Format: Table with Test ID, Description, Steps, Expected Result
```

**Expected Output:** A table with test cases covering happy path, invalid email, and expired link scenarios.

---

## Pricing Comparison

| Feature | Free | Plus ($20/mo) | Team ($25/user/mo) |
|---------|------|---------------|-------------------|
| GPT-4o mini | Unlimited | Unlimited | Unlimited |
| GPT-4o | Limited | 80 msgs/3hr | Higher limits |
| Custom GPTs | Use only | Create & use | Create & share |
| Advanced Data Analysis | No | Yes | Yes |
| DALL-E | No | Yes | Yes |
| Priority access | No | Yes | Yes |

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "You've reached the limit" | Wait 3 hours or upgrade |
| Slow responses | Switch to GPT-4o mini |
| Code not running | Check Code Interpreter is enabled |
| Custom instructions not applying | Verify they're saved and enabled |

---

## Next Steps

- Create a Custom GPT for your specific QA needs
- Set up [API access](../security_best_practices/ch_03_ai_tools_security.md) for automation
- Compare with [Claude](ch_03_claude_setup.md) for different use cases

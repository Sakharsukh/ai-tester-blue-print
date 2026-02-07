# Gemini Setup

- **Author:** Pramod Dutta
- **Role:** Principal SDET
- **Website:** [The Testing Academy](https://thetestingacademy.com/)
- **LinkedIn:** [linkedin.com/in/pramoddutta](https://www.linkedin.com/in/pramoddutta/)

---

> Google Gemini offers multimodal capabilities, making it excellent for visual testing and analyzing screenshots.

---

## Quick Start

1. Go to [gemini.google.com](https://gemini.google.com)
2. Sign in with your Google account
3. Start chatting with Gemini

---

## Detailed Setup Guide

### Step 1: Access Gemini

**Windows / Mac / Linux** (Browser-based)

1. Navigate to [https://gemini.google.com](https://gemini.google.com)
2. Click **"Sign in"** (requires Google account)
3. If you don't have a Google account:
   - Click **"Create account"**
   - Follow the registration process
4. Accept terms of service

### Step 2: Choose Your Plan

| Plan | Price | Features | Best For |
|------|-------|----------|----------|
| **Free** | $0 | Gemini (basic), limited features | Basic tasks |
| **Gemini Advanced** | $19.99/mo | Gemini 1.5 Pro, 1M context, Google One | Power users |
| **Google One AI Premium** | $19.99/mo | Includes 2TB storage + Gemini Advanced | Full Google ecosystem |

### Step 3: Configure Settings

1. Click the gear icon (Settings)
2. Configure:
   - **Extensions**: Enable Google Workspace integration
   - **Dark mode**: Toggle based on preference
   - **Response length**: Set default verbosity

### Step 4: Enable Extensions (Advanced)

1. Go to Settings → **Extensions**
2. Enable useful integrations:
   - **Google Workspace**: Access Docs, Sheets, Gmail
   - **Google Maps**: Location-based testing
   - **YouTube**: Video content analysis
   - **Google Flights/Hotels**: Travel app testing

---

## QA-Specific Use Cases

### 1. Visual Testing (Screenshot Analysis)
```text
Analyze this screenshot of our login page:
[Upload screenshot]

Check for:
- UI alignment issues
- Missing elements
- Accessibility concerns
- Mobile responsiveness issues
```

### 2. Multimodal Test Case Generation
```text
Look at this UI mockup and generate test cases:
[Upload image]

Include:
- Functional tests for each element
- Usability tests
- Accessibility tests (color contrast, labels)
```

### 3. Log Analysis
```text
Analyze these application logs and identify:
[Paste logs]

1. Error patterns
2. Performance issues
3. Potential bugs
4. Security concerns
```

### 4. Test Documentation Review
```text
Review this test plan document:
[Upload PDF]

Provide feedback on:
- Coverage completeness
- Missing scenarios
- Risk areas
- Improvement suggestions
```

---

## Features for QA Professionals

| Feature | How to Use | QA Benefit |
|---------|------------|------------|
| **Image Analysis** | Upload screenshots | Visual regression testing |
| **PDF Reading** | Upload test docs | Review test plans |
| **Code Generation** | Ask for test scripts | Automated test creation |
| **Extensions** | Connect Google Workspace | Access test docs directly |
| **1M Context** (Advanced) | Large codebases | Analyze entire test suites |

---

## Google AI Studio (Developer Access)

For API access and advanced features:

### Setup Steps

1. Go to [aistudio.google.com](https://aistudio.google.com)
2. Sign in with Google account
3. Click **"Get API key"**
4. Create a new API key
5. Store securely

```bash
# Set environment variable
export GOOGLE_API_KEY="AIza..."
```

### Using AI Studio for QA

1. **Prompt Gallery**: Browse pre-built QA prompts
2. **Structured Prompts**: Create consistent test generation
3. **Fine-tuning**: Customize models for your domain (Advanced)

---

## Verification Test Prompt

Use this prompt to verify Gemini is working correctly:

```text
You are a QA Engineer. Generate 3 test cases for a file upload feature.

Requirements:
- Accepts: JPG, PNG, PDF (max 5MB)
- Shows preview for images
- Displays progress bar during upload
- Shows success/error message

Format as a table with: Test ID | Description | Steps | Expected Result
```

**Expected Output:** A table with test cases for valid upload, invalid file type, and file size exceeded scenarios.

---

## Multimodal Testing Example

### Testing with Screenshots

1. Take a screenshot of your application
2. Upload to Gemini
3. Use this prompt:

```text
Analyze this UI screenshot and:

1. List all interactive elements you can identify
2. Generate test cases for each element
3. Identify any potential accessibility issues
4. Suggest improvements for user experience

Be specific about element locations and expected behaviors.
```

---

## Pricing Comparison

| Feature | Free | Advanced ($19.99/mo) |
|---------|------|---------------------|
| Gemini model | Basic | Gemini 1.5 Pro |
| Context window | 32K | 1M tokens |
| Image analysis | Yes | Enhanced |
| Extensions | Limited | Full access |
| Priority access | No | Yes |
| Google One storage | No | 2TB included |

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "Not available in your country" | Use VPN or wait for regional availability |
| Image upload fails | Check file size (<20MB) and format |
| Extensions not working | Re-enable in settings, check permissions |
| Slow responses | Try during off-peak hours |

---

## Next Steps

- Set up [Google AI Studio](https://aistudio.google.com) for API access
- Explore multimodal testing with screenshots
- Compare with [Claude](ch_03_claude_setup.md) for text-heavy tasks
- Review [Security Best Practices](../security_best_practices/ch_03_ai_tools_security.md)

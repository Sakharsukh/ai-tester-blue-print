# Amazon Q Developer Setup

- **Author:** Pramod Dutta
- **Role:** Principal SDET
- **Website:** [The Testing Academy](https://thetestingacademy.com/)
- **LinkedIn:** [linkedin.com/in/pramoddutta](https://www.linkedin.com/in/pramoddutta/)

---

> Amazon Q Developer is AWS's AI coding assistant with strong security scanning capabilities, ideal for enterprise QA teams.

---

## Quick Start

1. Install Amazon Q extension in VS Code or JetBrains
2. Sign in with AWS Builder ID (free) or AWS account
3. Start coding with AI assistance and security scanning

---

## What is Amazon Q Developer?

Amazon Q Developer provides:

- **Code completion** - AI-powered suggestions
- **Code generation** - Generate from natural language
- **Security scanning** - Find vulnerabilities automatically
- **AWS integration** - Deep AWS service knowledge
- **Free tier** - Generous free usage with Builder ID

---

## Detailed Setup Guide

### Step 1: Create AWS Builder ID (Free)

1. Go to [profile.aws.amazon.com](https://profile.aws.amazon.com)
2. Click **"Create AWS Builder ID"**
3. Enter email and name
4. Verify email
5. Complete profile

> **Note:** Builder ID is free and separate from AWS account.

### Step 2: Install Extension

#### VS Code

1. Open Extensions (`Ctrl+Shift+X` / `Cmd+Shift+X`)
2. Search for **"Amazon Q"**
3. Click **"Install"**
4. Reload VS Code

#### JetBrains (IntelliJ, PyCharm)

1. Open Settings → Plugins
2. Search for **"Amazon Q"**
3. Click **"Install"**
4. Restart IDE

### Step 3: Sign In

1. Click Amazon Q icon in sidebar
2. Select **"Use for Free with Builder ID"**
3. Browser opens for authentication
4. Sign in with Builder ID
5. Authorize the extension
6. Return to IDE

### Step 4: Configure Settings

1. Open Amazon Q settings
2. Configure:

| Setting | Recommended | Description |
|---------|-------------|-------------|
| Suggestions | On | Show code suggestions |
| Security Scans | On | Auto-scan for vulnerabilities |
| Reference Log | On | Track code references |

---

## Key Features for QA

### 1. Security Scanning

Amazon Q automatically scans for:

| Vulnerability Type | Example |
|-------------------|---------|
| Injection flaws | SQL injection in test data |
| Hardcoded secrets | API keys in test files |
| Insecure dependencies | Vulnerable packages |
| Misconfigurations | Security settings |

### 2. AWS Service Knowledge

Perfect for testing AWS-integrated applications:

- Lambda function tests
- API Gateway testing
- DynamoDB test data
- S3 operations in tests
- IAM permission testing

### 3. Free Tier Benefits

| Feature | Free Tier (Builder ID) |
|---------|----------------------|
| Code suggestions | 50/month |
| Security scans | Unlimited |
| Chat | Yes |
| Code generation | Yes |

---

## QA-Specific Use Cases

### 1. Generate Secure Test Code

```text
Generate pytest tests for a user authentication API
ensuring no hardcoded credentials
```

Amazon Q generates tests with:
- Environment variables for credentials
- Secure test data handling
- Proper secret management

### 2. Scan Tests for Vulnerabilities

1. Open test file
2. Click **"Run Security Scan"** in Amazon Q panel
3. Review findings
4. Fix issues with AI suggestions

### 3. AWS Service Testing

```text
Generate tests for Lambda function that processes S3 events:
- Test event parsing
- Test error handling
- Test response format
Use moto for AWS mocking.
```

### 4. Generate API Tests with Auth

```text
Create API tests for AWS API Gateway endpoints:
- GET /users (requires API key)
- POST /orders (requires JWT)
Include proper authentication handling.
```

---

## Security Scanning for Tests

### Run Security Scan

1. Open file or folder
2. Right-click → **"Amazon Q: Run Security Scan"**
3. Or use Command Palette: "Amazon Q: Run Security Scan"
4. Review results in Problems panel

### Common QA Security Issues

| Issue | Description | Fix |
|-------|-------------|-----|
| Hardcoded API key | `api_key = "sk-..."` | Use environment variables |
| Hardcoded password | `password = "test123"` | Use fixtures or env vars |
| Insecure URLs | `http://` in tests | Use `https://` |
| Debug code | `print(password)` | Remove before commit |

### Example Security Fix

**Before (flagged):**
```python
def test_api_auth():
    api_key = "sk-test-12345"  # Security issue!
    headers = {"Authorization": f"Bearer {api_key}"}
```

**After (secure):**
```python
import os

def test_api_auth():
    api_key = os.environ.get("API_KEY")
    headers = {"Authorization": f"Bearer {api_key}"}
```

---

## Chat Examples

### Generate AWS Tests

```text
User: Generate tests for a Lambda function that:
- Receives SQS messages
- Processes JSON payloads
- Writes to DynamoDB

Amazon Q: Here are pytest tests using moto for AWS mocking:
[Generates complete test suite with AWS mocks]
```

### Security Review

```text
User: Review this test file for security issues:
[Paste test code]

Amazon Q: I found these security issues:
1. Line 15: Hardcoded database password
2. Line 23: Test URL uses HTTP instead of HTTPS
3. Line 45: API key in plain text
Here's how to fix each...
```

### AWS Best Practices

```text
User: What's the best way to mock S3 in tests?

Amazon Q: For mocking S3 in Python tests, I recommend using moto:
[Provides example with best practices]
```

---

## Keyboard Shortcuts

| Action | Windows/Linux | Mac |
|--------|---------------|-----|
| Accept suggestion | `Tab` | `Tab` |
| Open Amazon Q chat | `Ctrl+Shift+Q` | `Cmd+Shift+Q` |
| Run security scan | Via Command Palette | Via Command Palette |
| Trigger suggestions | `Ctrl+Space` | `Cmd+Space` |

---

## Plans and Pricing

| Plan | Price | Features |
|------|-------|----------|
| **Free (Builder ID)** | $0 | 50 suggestions/mo, unlimited scans |
| **Pro** | $19/user/mo | Unlimited suggestions, admin features |

### Free vs Pro

| Feature | Free | Pro |
|---------|------|-----|
| Code suggestions | 50/month | Unlimited |
| Security scans | Unlimited | Unlimited |
| Code references | Yes | Yes |
| Admin controls | No | Yes |
| SSO | No | Yes |

---

## Integration with Testing Frameworks

### pytest with AWS

```python
# Amazon Q helps generate AWS-aware tests
import pytest
import boto3
from moto import mock_aws

@pytest.fixture
def aws_credentials():
    """Mock AWS credentials for testing."""
    os.environ["AWS_ACCESS_KEY_ID"] = "testing"
    os.environ["AWS_SECRET_ACCESS_KEY"] = "testing"
    os.environ["AWS_SECURITY_TOKEN"] = "testing"
    os.environ["AWS_SESSION_TOKEN"] = "testing"

@mock_aws
def test_s3_upload(aws_credentials):
    """Test S3 upload functionality."""
    s3 = boto3.client("s3", region_name="us-east-1")
    s3.create_bucket(Bucket="test-bucket")
    s3.put_object(Bucket="test-bucket", Key="test.txt", Body="content")

    response = s3.get_object(Bucket="test-bucket", Key="test.txt")
    assert response["Body"].read() == b"content"
```

---

## Verification Test

### Test 1: Code Suggestions

1. Create new Python file
2. Type:
```python
def test_api_response_
```
3. Wait for Amazon Q suggestion
4. **Expected:** Function completion suggested

### Test 2: Security Scan

1. Create file with intentional issue:
```python
api_key = "sk-test-secret-key-12345"
```
2. Run security scan
3. **Expected:** Warning about hardcoded secret

### Test 3: Chat

1. Open Amazon Q chat
2. Ask: "Generate tests for DynamoDB CRUD operations"
3. **Expected:** Complete test suite with moto mocks

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| No suggestions | Check sign-in status |
| Scan not running | Ensure file is saved |
| Extension not loading | Update to latest version |
| Auth issues | Sign out and sign in again |

### Check Status

1. Click Amazon Q icon in status bar
2. Verify "Connected" status
3. Check suggestion count remaining

---

## Best Practices for QA

### Secure Test Data

```python
# Good: Environment variables
import os

DB_PASSWORD = os.environ.get("TEST_DB_PASSWORD")
API_KEY = os.environ.get("TEST_API_KEY")

# Good: Fixtures with cleanup
@pytest.fixture
def api_credentials():
    return {
        "key": os.environ.get("API_KEY"),
        "secret": os.environ.get("API_SECRET")
    }
```

### Regular Security Scans

1. Scan before every commit
2. Include in CI/CD pipeline
3. Review and fix all findings
4. Document exceptions

---

## Next Steps

- Configure [VS Code AI Setup](ch_03_vscode_ai_setup.md) with Amazon Q
- Review [Security Best Practices](../security_best_practices/ch_03_ai_tools_security.md)
- Compare with [GitHub Copilot](../ai_coding_assistants/ch_03_github_copilot_setup.md)

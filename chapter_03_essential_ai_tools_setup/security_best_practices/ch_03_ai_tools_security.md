# AI Tools Security Best Practices

- **Author:** Pramod Dutta
- **Role:** Principal SDET
- **Website:** [The Testing Academy](https://thetestingacademy.com/)
- **LinkedIn:** [linkedin.com/in/pramoddutta](https://www.linkedin.com/in/pramoddutta/)

---

> Essential security guidelines for QA professionals using AI tools in testing workflows.

---

## Overview

When using AI tools for QA, you must protect:

- **API keys and secrets** - Credentials for AI services
- **Test data** - Potentially sensitive information
- **Source code** - Proprietary test automation code
- **Company data** - Information sent to AI services

---

## API Key Management

### Rule 1: Never Hardcode API Keys

**Bad Practice:**
```python
# NEVER DO THIS!
OPENAI_API_KEY = "sk-abc123..."
ANTHROPIC_API_KEY = "sk-ant-..."

def test_with_ai():
    client = OpenAI(api_key="sk-abc123...")  # Dangerous!
```

**Good Practice:**
```python
import os

# Use environment variables
OPENAI_API_KEY = os.environ.get("OPENAI_API_KEY")
ANTHROPIC_API_KEY = os.environ.get("ANTHROPIC_API_KEY")

def test_with_ai():
    client = OpenAI(api_key=os.environ["OPENAI_API_KEY"])
```

### Rule 2: Use .env Files (Local Development)

Create `.env` file (never commit!):

```bash
# .env file - add to .gitignore
OPENAI_API_KEY=sk-abc123...
ANTHROPIC_API_KEY=sk-ant-abc123...
GOOGLE_API_KEY=AIza...
MOONSHOT_API_KEY=sk-...
```

Load in Python:
```python
from dotenv import load_dotenv
load_dotenv()

api_key = os.environ.get("OPENAI_API_KEY")
```

### Rule 3: Always Add to .gitignore

```gitignore
# .gitignore - MUST include these
.env
.env.local
.env.*.local
*.key
*_key.txt
secrets.json
credentials.json

# IDE AI configs with keys
.vscode/settings.json  # If contains API keys
.idea/  # JetBrains settings
```

### Rule 4: Use Secret Managers (Production)

| Environment | Solution |
|-------------|----------|
| **AWS** | AWS Secrets Manager, Parameter Store |
| **Azure** | Azure Key Vault |
| **GCP** | Secret Manager |
| **CI/CD** | GitHub Secrets, GitLab CI Variables |
| **Local** | .env files with dotenv |

Example with AWS:

```python
import boto3

def get_api_key(secret_name):
    client = boto3.client('secretsmanager')
    response = client.get_secret_value(SecretId=secret_name)
    return response['SecretString']

OPENAI_API_KEY = get_api_key("prod/openai/api-key")
```

---

## Data Privacy

### Know What You're Sending

| AI Tool | Data Sent | Storage |
|---------|-----------|---------|
| **ChatGPT** | Prompts, code | May train models (opt-out available) |
| **Claude** | Prompts, code | Not used for training |
| **Copilot** | Code context | Used to improve suggestions |
| **Local (Ollama)** | Nothing | Stays on your machine |

### Sensitive Data Guidelines

**Never send to cloud AI:**

| Data Type | Example | Risk |
|-----------|---------|------|
| Production credentials | DB passwords, API keys | Credential leak |
| Customer PII | Names, emails, SSN | Privacy violation |
| Financial data | Credit cards, bank info | Compliance violation |
| Health data | Medical records | HIPAA violation |
| Internal URLs | staging.company.internal | Infrastructure exposure |

### Safe Practices

**Anonymize test data:**
```python
# Bad: Real customer data
test_data = {
    "name": "John Smith",  # Real name
    "email": "john.smith@company.com",  # Real email
    "ssn": "123-45-6789"  # Real SSN!
}

# Good: Fake/anonymized data
test_data = {
    "name": "Test User",
    "email": "testuser@example.com",
    "ssn": "000-00-0000"
}
```

**Use data generators:**
```python
from faker import Faker
fake = Faker()

test_user = {
    "name": fake.name(),
    "email": fake.email(),
    "address": fake.address()
}
```

---

## Cloud vs Local AI

### When to Use Cloud AI

| Scenario | Acceptable |
|----------|------------|
| Learning/practice | Yes |
| Open source projects | Yes |
| Public documentation | Yes |
| Generic test patterns | Yes |
| Non-sensitive code | Yes |

### When to Use Local AI

| Scenario | Use Local |
|----------|-----------|
| Proprietary algorithms | Yes |
| Customer data analysis | Yes |
| Security-sensitive code | Yes |
| Compliance-restricted | Yes |
| Air-gapped environments | Yes |

### Local AI Options

```bash
# Ollama - runs completely locally
ollama run llama3

# LM Studio - GUI for local models
# Download from lmstudio.ai

# No data leaves your machine!
```

---

## Enterprise Considerations

### Data Residency

| AI Service | Data Location | Enterprise Option |
|------------|---------------|-------------------|
| ChatGPT | US | ChatGPT Enterprise (configurable) |
| Claude | US | Anthropic Enterprise |
| Copilot | US | Copilot Business (policy controls) |
| Azure OpenAI | Configurable | Regional deployment |

### Compliance Checklist

- [ ] AI tool approved by security team
- [ ] Data processing agreement signed
- [ ] Training data opt-out enabled
- [ ] Audit logging enabled
- [ ] Data retention policies understood
- [ ] Regional compliance verified (GDPR, etc.)

### Enterprise Features

| Feature | ChatGPT Enterprise | Copilot Business | Claude Team |
|---------|-------------------|------------------|-------------|
| SSO | Yes | Yes | Yes |
| Audit logs | Yes | Yes | Yes |
| No training on data | Yes | Yes | Yes |
| Admin controls | Yes | Yes | Yes |
| SOC 2 | Yes | Yes | Yes |

---

## Secure Configuration

### VS Code Settings Security

**Don't store keys in settings.json:**
```json
// settings.json - BAD!
{
  "myExtension.apiKey": "sk-abc123..."  // NEVER!
}
```

**Use authentication flows instead:**
```json
// settings.json - GOOD
{
  "github.copilot.enable": true
  // Keys managed through auth flow, not in settings
}
```

### Environment Isolation

```bash
# Use separate API keys for different environments
export OPENAI_API_KEY_DEV="sk-dev-..."    # Development
export OPENAI_API_KEY_TEST="sk-test-..."  # Testing
export OPENAI_API_KEY_PROD="sk-prod-..."  # Production (restricted)
```

### Key Rotation

| Frequency | Key Type |
|-----------|----------|
| Monthly | Development keys |
| Quarterly | Test environment keys |
| Immediately | If any suspicion of leak |

---

## Security Checklist for AI Tools

### Initial Setup

- [ ] API keys stored in environment variables
- [ ] .env file added to .gitignore
- [ ] No secrets in code or config files
- [ ] Team informed of security policies

### Daily Usage

- [ ] Review prompts before sending sensitive code
- [ ] Use anonymized test data
- [ ] Don't paste production credentials
- [ ] Check for accidental secret inclusion

### Code Review

- [ ] No hardcoded API keys in commits
- [ ] .env.example provided (without real values)
- [ ] Security scan passes
- [ ] No PII in test fixtures

### Periodic Review

- [ ] Rotate API keys quarterly
- [ ] Review AI tool access permissions
- [ ] Audit usage logs (if available)
- [ ] Update security policies

---

## Quick Reference Cards

### Safe Prompt Checklist

Before sending a prompt, ask:

1. **Credentials?** - Are there any API keys, passwords, tokens?
2. **PII?** - Any names, emails, phone numbers, addresses?
3. **Internal URLs?** - Any staging/internal system URLs?
4. **Proprietary code?** - Any algorithms that are trade secrets?
5. **Customer data?** - Any real customer information?

### Key Storage Quick Guide

| Environment | Store Keys In |
|-------------|---------------|
| Local dev | `.env` file (gitignored) |
| CI/CD | Platform secrets (GitHub, GitLab) |
| Production | Secret manager (AWS, Azure, GCP) |
| Docker | Environment variables / secrets |

### AI Tool Security Matrix

| Tool | Data Privacy | Enterprise Ready | Local Option |
|------|--------------|------------------|--------------|
| Claude | Good | Yes (Team/Enterprise) | No |
| ChatGPT | Moderate | Yes (Enterprise) | No |
| Copilot | Moderate | Yes (Business) | No |
| Ollama | Excellent | N/A (self-hosted) | Yes |
| LM Studio | Excellent | N/A (self-hosted) | Yes |

---

## Incident Response

### If API Key is Leaked

1. **Immediately revoke** the key in the provider's console
2. **Generate new key** and update all systems
3. **Audit usage** - Check for unauthorized use
4. **Update gitignore** if needed
5. **Notify security team** per company policy

### If Sensitive Data Sent to AI

1. **Document** what was sent and when
2. **Check provider's data policies** for deletion options
3. **Report** to security/compliance team
4. **Review** and update procedures

---

## Summary

| Do | Don't |
|----|-------|
| Use environment variables | Hardcode API keys |
| Use .gitignore for secrets | Commit .env files |
| Anonymize test data | Send real customer data |
| Use local AI for sensitive code | Send proprietary code to cloud |
| Rotate keys regularly | Use same key everywhere |
| Review prompts before sending | Blindly paste code |

---

## Next Steps

- Review [AI Tools Setup Validation](../checklists/ch_03_ai_tools_setup_validation.md) checklist
- Set up [Local AI with Ollama](../local_ai_tools/ch_03_ollama_advanced_setup.md) for sensitive work
- Configure enterprise options for your team

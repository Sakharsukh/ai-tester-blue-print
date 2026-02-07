# Chapter 3: Exercises - Solutions

- **Author:** Pramod Dutta
- **Role:** Principal SDET
- **Website:** [The Testing Academy](https://thetestingacademy.com/)
- **LinkedIn:** [linkedin.com/in/pramoddutta](https://www.linkedin.com/in/pramoddutta/)

---

> Reference solutions and expected outputs for Chapter 3 exercises.

---

## Exercise 1: Cloud AI Tool Setup - Solution

### Expected Test Case Output

Using the RICE POT prompt, a good AI response should look like:

| Test ID | Type | Description | Steps | Expected Result |
|---------|------|-------------|-------|-----------------|
| TC-001 | Positive | Valid login with correct credentials | 1. Enter valid email "user@test.com" 2. Enter valid password "Pass@123" 3. Check "Remember Me" 4. Click Login | User successfully logged in, redirected to dashboard |
| TC-002 | Negative | Login with invalid email format | 1. Enter invalid email "usertest" 2. Enter valid password 3. Click Login | Error message "Please enter a valid email" displayed |
| TC-003 | Negative | Login with short password | 1. Enter valid email 2. Enter password "Pass1" (5 chars) 3. Click Login | Error message "Password must be at least 8 characters" |
| TC-004 | Edge | Login with email at max length | 1. Enter 254-char valid email 2. Enter valid password 3. Click Login | Login succeeds or appropriate error for email too long |
| TC-005 | Edge | Remember Me persistence | 1. Login with Remember Me checked 2. Close browser 3. Reopen and navigate to site | User remains logged in |

### Evaluation Criteria

**Good response characteristics:**
- Follows table format exactly
- Includes all test types (positive, negative, edge)
- Steps are numbered and clear
- Expected results are specific and verifiable
- Considers the parameters mentioned (email format, password length)

---

## Exercise 2: VS Code AI Setup - Solution

### Expected settings.json

```json
{
  "python.testing.pytestEnabled": true,
  "python.testing.pytestArgs": ["-v"],
  "github.copilot.enable": {
    "*": true,
    "python": true,
    "javascript": true,
    "typescript": true
  },
  "editor.formatOnSave": true,
  "[python]": {
    "editor.defaultFormatter": "ms-python.python"
  }
}
```

### Expected AI-Generated Test (from completion)

When typing `def test_user_login_`, Copilot should suggest something like:

```python
def test_user_login_with_valid_credentials(page):
    """Test successful login with valid email and password."""
    page.goto("/login")
    page.fill("#email", "testuser@example.com")
    page.fill("#password", "ValidPass123!")
    page.click("button[type='submit']")

    # Verify successful login
    expect(page).to_have_url("/dashboard")
    expect(page.locator(".welcome-message")).to_be_visible()
```

### Expected Page Object (from Copilot Chat)

```python
class ShoppingCartPage:
    """Page Object for shopping cart functionality."""

    def __init__(self, page):
        self.page = page
        self.cart_items = page.locator(".cart-item")
        self.quantity_input = page.locator(".quantity-input")
        self.remove_button = page.locator(".remove-item")
        self.subtotal = page.locator("#subtotal")
        self.checkout_button = page.locator("#checkout")

    def get_cart_count(self) -> int:
        """Return number of items in cart."""
        return self.cart_items.count()

    def update_quantity(self, item_index: int, quantity: int):
        """Update quantity for specific item."""
        self.quantity_input.nth(item_index).fill(str(quantity))

    def remove_item(self, item_index: int):
        """Remove item from cart."""
        self.remove_button.nth(item_index).click()

    def get_subtotal(self) -> float:
        """Return cart subtotal as float."""
        text = self.subtotal.inner_text()
        return float(text.replace("$", "").replace(",", ""))

    def proceed_to_checkout(self):
        """Click checkout button."""
        self.checkout_button.click()
```

---

## Exercise 3: Local AI Setup - Solution

### Ollama Verification

```bash
# Successful installation looks like:
$ ollama --version
ollama version 0.1.x

$ ollama run llama3:8b
>>> Generate 3 test cases for password reset...
```

### Expected Local AI Output

```
| Test ID | Description | Steps | Expected Result |
|---------|-------------|-------|-----------------|
| TC-001 | Valid password reset request | 1. Navigate to forgot password 2. Enter registered email 3. Click submit | Success message, email sent |
| TC-002 | Reset with expired link | 1. Use reset link after 24 hours 2. Attempt to set new password | Error: Link expired, request new reset |
| TC-003 | New password validation | 1. Click valid reset link 2. Enter password "short" (7 chars) 3. Submit | Error: Password must be at least 8 characters |
```

### Cloud vs Local Comparison

| Aspect | Cloud AI (Claude/ChatGPT) | Local AI (Ollama) |
|--------|---------------------------|-------------------|
| Response quality | Higher, more detailed | Good, sometimes less nuanced |
| Speed | Fast (depends on load) | Depends on hardware |
| Privacy | Data sent to cloud | Fully private |
| Cost | Subscription/usage based | Free (hardware cost) |
| Best for | Complex analysis | Sensitive code, offline work |

---

## Exercise 4: Security Best Practices - Solution

### Correct .gitignore

```gitignore
# Environment variables
.env
.env.local
.env.*.local
.env.production
.env.development

# API keys and secrets
*.key
*.pem
secrets.json
credentials.json

# Python
__pycache__/
*.py[cod]
*$py.class
venv/
.venv/

# IDE
.vscode/settings.json  # Only if it contains secrets
.idea/

# OS
.DS_Store
Thumbs.db
```

### Correct .env.example

```bash
# AI Service API Keys
# Copy this file to .env and replace with your actual values
# NEVER commit the actual .env file!

# OpenAI
OPENAI_API_KEY=sk-your-openai-key-here

# Anthropic (Claude)
ANTHROPIC_API_KEY=sk-ant-your-anthropic-key-here

# Google AI
GOOGLE_API_KEY=your-google-ai-key-here

# Moonshot (Kimi)
MOONSHOT_API_KEY=sk-your-moonshot-key-here

# Test Environment
TEST_BASE_URL=http://localhost:3000
TEST_DB_URL=postgresql://localhost:5432/test_db
```

### Secure Code Example

```python
"""Secure AI integration example."""
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

def get_api_client(service: str):
    """
    Create API client with secure key management.

    Args:
        service: Name of AI service (openai, anthropic, google)

    Returns:
        Configured API client

    Raises:
        ValueError: If API key not found
    """
    key_mapping = {
        "openai": "OPENAI_API_KEY",
        "anthropic": "ANTHROPIC_API_KEY",
        "google": "GOOGLE_API_KEY"
    }

    env_var = key_mapping.get(service)
    if not env_var:
        raise ValueError(f"Unknown service: {service}")

    api_key = os.environ.get(env_var)
    if not api_key:
        raise ValueError(
            f"API key not found. Set {env_var} environment variable."
        )

    # Never log full API key
    print(f"Initialized {service} client with key ending in ...{api_key[-4:]}")

    return api_key


def test_secure_api_usage():
    """Test that API keys are loaded securely."""
    # This should work if .env is configured
    try:
        key = get_api_client("openai")
        assert key is not None
        assert len(key) > 10
        assert key.startswith("sk-")  # OpenAI key format
        print("Security test passed!")
    except ValueError as e:
        print(f"Expected in CI without secrets: {e}")


if __name__ == "__main__":
    test_secure_api_usage()
```

---

## Exercise 5: AI Tool Comparison - Solution

### Sample Evaluation Table

| Criteria (1-5) | Claude | ChatGPT | GitHub Copilot |
|----------------|--------|---------|----------------|
| Completeness | 5 | 5 | 4 |
| Code quality | 5 | 4 | 4 |
| Error handling | 5 | 4 | 3 |
| Fixtures usage | 5 | 4 | 4 |
| Assertions quality | 5 | 4 | 4 |
| Response time | 4 | 5 | 5 |
| **Total** | **29** | **26** | **24** |

### Sample Recommendation

> **Recommendation: Claude for API Test Generation**
>
> Based on my evaluation, I recommend Claude for generating API tests for the following reasons:
>
> 1. **Completeness**: Claude generated tests for all five endpoints with both success and error cases, while other tools sometimes missed edge cases.
>
> 2. **Code Quality**: The generated code followed best practices including proper imports, docstrings, and PEP 8 style. Fixtures were well-organized and reusable.
>
> 3. **Error Handling**: Claude included tests for 400, 401, 404, and 500 responses, whereas ChatGPT focused mainly on happy paths.
>
> 4. **Assertions**: Claude's assertions were specific and included helpful error messages, making test failures easier to debug.
>
> However, for real-time code completion while writing tests, GitHub Copilot remains excellent due to its speed and IDE integration. The ideal workflow is using Claude for initial test generation and Copilot for implementation and refinement.

---

## Exercise 6: Validation Checklist - Solution

### Completed Checklist Example

**Cloud AI Tools:**
- [x] Claude - Account created, verified with test prompt
- [x] ChatGPT - Account created, verified with test prompt
- [ ] Gemini - Skipped (not available in my region)
- [ ] Kimi K2 - Not set up yet

**Coding Assistants:**
- [x] GitHub Copilot - Installed in VS Code, working
- [ ] Anti Gravity - Will set up next
- [ ] Cursor - Downloaded, not configured

**Security:**
- [x] .env file created with API keys
- [x] .gitignore updated to exclude .env
- [x] .env.example created for team reference
- [x] Verified .env not tracked by git

**IDE Setup:**
- [x] VS Code configured with settings.json
- [x] Python testing enabled
- [x] Copilot extension active

---

## Bonus Exercise: QA AI Workflow - Solution

### Sample Workflow Document

```markdown
# AI-Assisted QA Workflow: E-Commerce Checkout Testing

## Step 1: Requirements Analysis

**Tool used:** Claude

**Prompt:**
```
Analyze these checkout requirements and identify all testable scenarios:

Requirements:
- User can add items to cart
- Cart persists across sessions
- User enters shipping address
- User selects shipping method (standard, express)
- User enters payment (credit card)
- Order confirmation displayed
- Confirmation email sent

List: functional tests, edge cases, error scenarios, integration points
```

**Output Summary:**
- 15 functional test scenarios identified
- 8 edge cases (empty cart, max items, etc.)
- 12 error scenarios (invalid card, address validation, etc.)
- 5 integration points (payment gateway, email service, inventory)

## Step 2: Test Case Generation

**Tool used:** ChatGPT

**Prompt:**
```
Generate detailed test cases for e-commerce checkout.
Focus on payment processing:
- Valid credit card
- Invalid card number
- Expired card
- Insufficient funds
- Network timeout

Format: | Test ID | Scenario | Preconditions | Steps | Expected Result |
```

**Output:** 12 test cases generated covering all payment scenarios

## Step 3: Test Code Generation

**Tool used:** GitHub Copilot in VS Code

**Approach:**
1. Created test file structure
2. Wrote comment describing each test
3. Let Copilot complete the implementation

**Code snippet:**
```python
# Test valid credit card payment completes successfully
def test_checkout_valid_payment(page, cart_with_items):
    checkout = CheckoutPage(page)
    checkout.fill_shipping(valid_address)
    checkout.select_shipping("standard")
    checkout.fill_payment(valid_card)
    checkout.place_order()

    expect(page.locator(".confirmation")).to_have_text("Order Confirmed")
    expect(page.locator(".order-number")).to_be_visible()
```

## Step 4: Review and Refinement

**Tool used:** Claude

**What I reviewed:**
- Test coverage completeness
- Assertion quality
- Edge case handling

**Improvements made:**
1. Added explicit waits for async operations
2. Improved assertion messages for debugging
3. Added cleanup fixtures
4. Parameterized similar tests

## Lessons Learned

**What worked well:**
- Claude excellent for initial analysis and review
- Copilot speeds up implementation significantly
- Using RICE POT framework improved prompt quality

**What could be improved:**
- Need to verify AI-generated selectors
- Some generated assertions too generic
- Should add more negative test cases

**Recommended tools for this workflow:**
1. Claude - Requirements analysis, test case review
2. GitHub Copilot - Code implementation
3. ChatGPT - Test case generation (good tabular output)
```

---

## Grading Rubric

| Exercise | Points | Criteria |
|----------|--------|----------|
| Exercise 1 | 15 | Working AI tool, good test output |
| Exercise 2 | 20 | VS Code configured, AI working |
| Exercise 3 | 15 | Local AI running, comparison done |
| Exercise 4 | 20 | Secure setup, all files correct |
| Exercise 5 | 15 | Fair comparison, good recommendation |
| Exercise 6 | 15 | Checklist complete, documented |
| **Bonus** | +20 | Complete workflow documented |
| **Total** | 100 (+20 bonus) | |

---

## Common Mistakes to Avoid

1. **Committing .env files** - Always verify with `git status`
2. **Hardcoding API keys** - Even "temporarily" is risky
3. **Not testing AI output** - Always run generated tests
4. **Accepting AI code blindly** - Review assertions and logic
5. **Ignoring security warnings** - Address all flagged issues

# GitHub Copilot Setup ⭐ PRIMARY

- **Author:** Pramod Dutta
- **Role:** Principal SDET
- **Website:** [The Testing Academy](https://thetestingacademy.com/)
- **LinkedIn:** [linkedin.com/in/pramoddutta](https://www.linkedin.com/in/pramoddutta/)

---

> **Recommended Tool** - GitHub Copilot is the industry-standard AI coding assistant with excellent test generation capabilities.

---

## Quick Start

1. Subscribe to GitHub Copilot ($10/mo or free for students/OSS)
2. Install VS Code extension
3. Sign in with GitHub
4. Start coding with AI assistance

---

## What is GitHub Copilot?

GitHub Copilot is an AI pair programmer developed by GitHub and OpenAI:

- **Code completion** - Real-time suggestions as you type
- **Code generation** - Generate code from comments
- **Copilot Chat** - Ask questions, get explanations
- **Test generation** - Automatic test case creation
- **Multi-language** - Supports all major languages

---

## Detailed Setup Guide

### Step 1: Get GitHub Copilot Subscription

#### Individual Plan ($10/month)

1. Go to [github.com/features/copilot](https://github.com/features/copilot)
2. Click **"Start my free trial"** or **"Buy now"**
3. Sign in with GitHub account
4. Complete subscription

#### Free Access

- **Students**: Apply at [education.github.com](https://education.github.com)
- **Open Source Maintainers**: Check eligibility on GitHub
- **Organization Members**: Ask your admin

### Step 2: Install VS Code Extension

#### Windows / Mac / Linux

1. Open VS Code
2. Go to Extensions (`Ctrl+Shift+X` / `Cmd+Shift+X`)
3. Search for **"GitHub Copilot"**
4. Click **"Install"**
5. Also install **"GitHub Copilot Chat"** (separate extension)
6. Reload VS Code

### Step 3: Sign In

1. After installation, click the Copilot icon in status bar
2. Click **"Sign in to GitHub"**
3. Browser opens for authentication
4. Authorize VS Code
5. Return to VS Code
6. Verify status bar shows Copilot is active

### Step 4: Configure Settings

1. Open Settings (`Ctrl+,` / `Cmd+,`)
2. Search for "Copilot"
3. Configure:

| Setting | Recommended | Description |
|---------|-------------|-------------|
| Enable | On | Master toggle |
| Inline Suggest: Enable | On | Show inline suggestions |
| Enable Auto Completions | On | Automatic suggestions |

### Step 5: Configure for Specific Languages

In `settings.json`:

```json
{
  "github.copilot.enable": {
    "*": true,
    "python": true,
    "javascript": true,
    "typescript": true,
    "markdown": false,
    "plaintext": false
  }
}
```

---

## QA-Specific Configuration

### Copilot Instructions (`.github/copilot-instructions.md`)

Create this file in your repo root:

```markdown
# Copilot Instructions for QA Project

## Context
This is a test automation project using:
- Framework: Playwright with Python
- Pattern: Page Object Model
- Runner: pytest

## Code Style
- Use explicit waits, never hardcoded sleeps
- Include docstrings for all test functions
- Use fixtures for setup/teardown
- Assert with meaningful messages

## Test Structure
- Group related tests in classes
- Use parametrize for data-driven tests
- Include both positive and negative cases
- Handle cleanup in fixtures
```

### Workspace Settings

`.vscode/settings.json`:

```json
{
  "github.copilot.advanced": {
    "inlineSuggest.enable": true,
    "listCount": 5
  },
  "github.copilot.chat.welcomeMessage": "start"
}
```

---

## QA-Specific Use Cases

### 1. Generate Test from Comment

Type a descriptive comment:

```python
# Test that user cannot login with incorrect password
# Should show error message and remain on login page
```

Press `Tab` to accept Copilot's suggestion:

```python
# Test that user cannot login with incorrect password
# Should show error message and remain on login page
def test_login_incorrect_password(page: Page):
    page.goto("/login")
    page.fill("#email", "user@example.com")
    page.fill("#password", "wrongpassword")
    page.click("#submit")

    error = page.locator(".error-message")
    expect(error).to_be_visible()
    expect(error).to_have_text("Invalid credentials")
    expect(page).to_have_url("/login")
```

### 2. Generate Tests for Function

Write function, Copilot suggests tests:

```python
def calculate_discount(price, discount_percent):
    """Calculate discounted price."""
    if discount_percent < 0 or discount_percent > 100:
        raise ValueError("Invalid discount percentage")
    return price * (1 - discount_percent / 100)

# Test calculate_discount function
```

Copilot generates:

```python
def test_calculate_discount_valid():
    assert calculate_discount(100, 20) == 80
    assert calculate_discount(50, 10) == 45

def test_calculate_discount_zero():
    assert calculate_discount(100, 0) == 100

def test_calculate_discount_full():
    assert calculate_discount(100, 100) == 0

def test_calculate_discount_invalid_negative():
    with pytest.raises(ValueError):
        calculate_discount(100, -10)

def test_calculate_discount_invalid_over_100():
    with pytest.raises(ValueError):
        calculate_discount(100, 150)
```

### 3. Create Page Object

```python
# Page Object for checkout page with cart items,
# shipping form, payment method, and place order button
class CheckoutPage:
```

Copilot completes:

```python
class CheckoutPage:
    def __init__(self, page: Page):
        self.page = page
        self.cart_items = page.locator(".cart-item")
        self.subtotal = page.locator("#subtotal")
        self.shipping_form = page.locator("#shipping-form")
        self.payment_methods = page.locator("[name='payment']")
        self.place_order_btn = page.locator("#place-order")

    def get_cart_count(self) -> int:
        return self.cart_items.count()

    def get_subtotal(self) -> float:
        return float(self.subtotal.inner_text().replace("$", ""))

    def fill_shipping(self, address: dict):
        self.page.fill("#address", address["street"])
        self.page.fill("#city", address["city"])
        self.page.fill("#zip", address["zip"])

    def select_payment(self, method: str):
        self.payment_methods.filter(has_text=method).click()

    def place_order(self):
        self.place_order_btn.click()
```

### 4. Using Copilot Chat for QA

Open Copilot Chat (`Ctrl+Shift+I` / `Cmd+Shift+I`):

```text
/tests Generate comprehensive test cases for the login function
in the selected code, including edge cases and error handling
```

Or ask questions:

```text
@workspace What test coverage is missing in our test suite?
```

---

## Copilot Chat Commands

| Command | Usage | Description |
|---------|-------|-------------|
| `/tests` | `/tests` | Generate tests for selected code |
| `/fix` | `/fix` | Fix issues in selected code |
| `/explain` | `/explain` | Explain selected code |
| `/doc` | `/doc` | Generate documentation |
| `@workspace` | `@workspace [query]` | Query entire workspace |

### QA-Specific Queries

```text
/tests Generate edge case tests for this function

@workspace Find all tests that might be flaky

/explain Why might this test fail intermittently?

@workspace What assertions are we missing for the checkout flow?
```

---

## Keyboard Shortcuts

| Action | Windows/Linux | Mac |
|--------|---------------|-----|
| Accept suggestion | `Tab` | `Tab` |
| Reject suggestion | `Esc` | `Esc` |
| Next suggestion | `Alt+]` | `Option+]` |
| Previous suggestion | `Alt+[` | `Option+[` |
| Open Copilot Chat | `Ctrl+Shift+I` | `Cmd+Shift+I` |
| Inline chat | `Ctrl+I` | `Cmd+I` |
| Accept word | `Ctrl+Right` | `Cmd+Right` |

---

## Test Generation Patterns

### Data-Driven Tests

```python
# Parametrized test for email validation
@pytest.mark.parametrize("email,is_valid", [
```

Copilot suggests:

```python
@pytest.mark.parametrize("email,is_valid", [
    ("user@example.com", True),
    ("user.name@example.com", True),
    ("user@subdomain.example.com", True),
    ("invalid", False),
    ("@example.com", False),
    ("user@", False),
    ("", False),
    ("user@.com", False),
])
def test_email_validation(email, is_valid):
    assert validate_email(email) == is_valid
```

### API Tests

```python
# Test POST /api/users creates user and returns 201
def test_create_user_success(api_client):
```

### Fixture Generation

```python
# Pytest fixture that creates authenticated browser session
@pytest.fixture
def authenticated_session():
```

---

## Verification Test

### Test 1: Inline Completion

1. Create new file `test_copilot.py`
2. Type:
```python
def test_add_item_to_cart
```
3. Wait for Copilot suggestion (gray text)
4. **Expected:** Complete test function suggested

### Test 2: Comment-Driven Generation

1. Type comment:
```python
# Test that empty cart shows "Your cart is empty" message
```
2. Press Enter and wait
3. **Expected:** Test function generated

### Test 3: Copilot Chat

1. Open Copilot Chat
2. Select any function in your code
3. Type `/tests`
4. **Expected:** Test cases generated in chat

---

## Plans and Pricing

| Plan | Price | Features |
|------|-------|----------|
| **Individual** | $10/mo | Full access |
| **Business** | $19/user/mo | Admin, policies, audit |
| **Enterprise** | $39/user/mo | SSO, compliance, support |
| **Free** | $0 | Students, OSS maintainers |

---

## Best Practices for QA

### Write Descriptive Comments

```python
# Good: Specific test intent
# Test login fails after 3 incorrect attempts, shows lockout message

# Bad: Vague
# Test login failure
```

### Provide Context

```python
# Good: Context in comments
# Using Playwright, test the search feature:
# - Enter search term
# - Click search button
# - Verify results contain search term

# Good: Context via file naming
# test_checkout_shipping.py - tests for shipping form in checkout
```

### Review and Refine

1. Accept Copilot suggestion
2. Review generated code
3. Add missing edge cases
4. Improve assertions
5. Run tests to verify

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| No suggestions | Check subscription is active |
| Copilot icon red | Sign in again |
| Poor suggestions | Add more context/comments |
| Slow suggestions | Check internet connection |
| Chat not working | Install Copilot Chat extension |

### Check Status

1. Click Copilot icon in status bar
2. Check "Status" shows "Ready"
3. If not ready, try signing out and in

---

## Next Steps

- Set up [VS Code AI Configuration](../ide_integrations/ch_03_vscode_ai_setup.md) with Copilot
- Compare with [Anti Gravity](ch_03_antigravity_setup.md)
- Try [Cursor](ch_03_cursor_for_testers.md) for AI-native experience
- Apply [RICE POT Framework](../../chapter_02_prompt_engineering/core_concepts/ch_02_rice_pot_framework.md) in prompts

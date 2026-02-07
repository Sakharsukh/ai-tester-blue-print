# Anti Gravity Setup ⭐ PRIMARY

- **Author:** Pramod Dutta
- **Role:** Principal SDET
- **Website:** [The Testing Academy](https://thetestingacademy.com/)
- **LinkedIn:** [linkedin.com/in/pramoddutta](https://www.linkedin.com/in/pramoddutta/)

---

> **Recommended Tool** - Google's Anti Gravity is a powerful AI coding assistant with excellent support for test automation workflows.

---

## Quick Start

1. Open VS Code
2. Install Anti Gravity extension
3. Sign in with Google account
4. Start generating test code

---

## What is Anti Gravity?

Anti Gravity is Google's AI-powered coding assistant that integrates directly into your IDE. It provides:

- **Code completion** - Intelligent suggestions as you type
- **Code generation** - Generate code from natural language
- **Code explanation** - Understand complex code
- **Test generation** - Create test cases automatically
- **Refactoring** - Improve code quality

---

## Detailed Setup Guide

### Step 1: Prerequisites

Ensure you have:
- VS Code installed (latest version)
- Google account
- Internet connection

### Step 2: Install Extension

#### Windows / Mac / Linux

1. Open VS Code
2. Click Extensions icon (`Ctrl+Shift+X` / `Cmd+Shift+X`)
3. Search for **"Anti Gravity"** or **"Google Anti Gravity"**
4. Click **"Install"**
5. Wait for installation to complete
6. Reload VS Code if prompted

### Step 3: Sign In

1. After installation, click the Anti Gravity icon in the sidebar
2. Click **"Sign in with Google"**
3. Browser opens for authentication
4. Select your Google account
5. Grant necessary permissions
6. Return to VS Code (automatic redirect)

### Step 4: Configure Settings

1. Open Settings (`Ctrl+,` / `Cmd+,`)
2. Search for "Anti Gravity"
3. Configure key settings:

| Setting | Recommended | Description |
|---------|-------------|-------------|
| Enable Autocomplete | On | Real-time code suggestions |
| Suggestion Delay | 300ms | Time before showing suggestions |
| Max Suggestions | 3 | Number of alternatives shown |
| Inline Hints | On | Show hints in editor |

---

## QA-Specific Configuration

### Set Up for Test Automation

1. Open Anti Gravity settings
2. Add context about your QA work:

**Custom Instructions (if available):**
```text
I am a QA Engineer working on test automation. Primary technologies:
- Selenium WebDriver / Playwright
- Python / JavaScript / TypeScript
- pytest / Jest / Mocha
- REST API testing

When generating code:
- Follow Page Object Model pattern
- Include proper assertions
- Add explicit waits
- Handle exceptions
- Use meaningful variable names
```

### Workspace Configuration

Create `.vscode/settings.json` in your test project:

```json
{
  "antigravity.enabled": true,
  "antigravity.autocomplete.enabled": true,
  "antigravity.testGeneration.framework": "pytest",
  "antigravity.codeStyle.language": "python"
}
```

---

## QA-Specific Use Cases

### 1. Generate Test from Comment

Type a comment describing your test:

```python
# Test login with valid email and password, verify redirect to dashboard
```

Press `Tab` or wait for suggestion:

```python
# Test login with valid email and password, verify redirect to dashboard
def test_login_valid_credentials(page):
    page.goto("https://example.com/login")
    page.fill("#email", "user@test.com")
    page.fill("#password", "ValidPass123")
    page.click("button[type='submit']")
    expect(page).to_have_url("https://example.com/dashboard")
    expect(page.locator("h1")).to_have_text("Welcome")
```

### 2. Generate Test Cases from Function

Select a function and ask Anti Gravity:

```text
Generate test cases for this function including:
- Happy path
- Edge cases
- Error handling
- Boundary values
```

### 3. Convert Manual Test to Code

```text
Convert this manual test to Playwright:

1. Open homepage
2. Search for "laptop"
3. Filter by price: $500-$1000
4. Sort by "Highest Rated"
5. Verify first result has rating >= 4.5
```

### 4. Generate Page Object

```text
Create a Page Object class for this login page:
- Email input field
- Password input field
- Remember me checkbox
- Submit button
- Forgot password link
- Error message display
```

---

## Features for QA Professionals

| Feature | How to Access | QA Benefit |
|---------|---------------|------------|
| **Code Completion** | Type and Tab | Faster test writing |
| **Generate Test** | Select code → "Generate Test" | Automatic test creation |
| **Explain Code** | Select → "Explain" | Understand existing tests |
| **Fix Issues** | Select error → "Fix" | Debug test failures |
| **Refactor** | Select → "Refactor" | Improve test quality |
| **Chat** | Sidebar panel | Ask QA questions |

---

## Keyboard Shortcuts

| Action | Windows/Linux | Mac |
|--------|---------------|-----|
| Accept suggestion | `Tab` | `Tab` |
| Next suggestion | `Alt+]` | `Option+]` |
| Previous suggestion | `Alt+[` | `Option+[` |
| Trigger suggestion | `Ctrl+Space` | `Cmd+Space` |
| Open chat | `Ctrl+Shift+A` | `Cmd+Shift+A` |
| Generate test | `Ctrl+Shift+T` | `Cmd+Shift+T` |

---

## Integration with Test Frameworks

### Playwright (TypeScript)

```typescript
// Type comment, Anti Gravity generates:
// Test user registration flow with validation

test('user registration with validation', async ({ page }) => {
  await page.goto('/register');

  // Fill form with valid data
  await page.fill('[name="firstName"]', 'John');
  await page.fill('[name="lastName"]', 'Doe');
  await page.fill('[name="email"]', 'john.doe@test.com');
  await page.fill('[name="password"]', 'SecurePass123!');
  await page.fill('[name="confirmPassword"]', 'SecurePass123!');

  // Submit and verify
  await page.click('[type="submit"]');
  await expect(page).toHaveURL('/welcome');
  await expect(page.locator('.success-message')).toBeVisible();
});
```

### Selenium (Python)

```python
# Test product search and filter functionality

def test_product_search_and_filter(driver):
    driver.get("https://shop.example.com")

    # Search for product
    search_box = driver.find_element(By.ID, "search")
    search_box.send_keys("laptop")
    search_box.send_keys(Keys.RETURN)

    # Apply filter
    WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.CLASS_NAME, "filter-panel"))
    )
    driver.find_element(By.CSS_SELECTOR, "[data-filter='price-500-1000']").click()

    # Verify results
    results = driver.find_elements(By.CLASS_NAME, "product-card")
    assert len(results) > 0, "No products found"
```

### pytest

```python
# Generate fixtures and parameterized tests

@pytest.fixture
def authenticated_user(page):
    """Login and return authenticated page."""
    page.goto("/login")
    page.fill("#email", "test@example.com")
    page.fill("#password", "password123")
    page.click("#submit")
    page.wait_for_url("/dashboard")
    return page

@pytest.mark.parametrize("search_term,expected_count", [
    ("laptop", 10),
    ("phone", 15),
    ("", 0),
    ("xyz123", 0),
])
def test_search_results(authenticated_user, search_term, expected_count):
    authenticated_user.fill("#search", search_term)
    authenticated_user.click("#search-btn")
    results = authenticated_user.locator(".result-item")
    assert results.count() >= expected_count
```

---

## Verification Test

### Test 1: Code Completion

1. Create a new Python file
2. Type:
```python
def test_login_
```
3. Wait for Anti Gravity suggestion
4. **Expected:** Completion with test function body

### Test 2: Test Generation

1. Write a simple function:
```python
def add_to_cart(item_id, quantity):
    if quantity <= 0:
        raise ValueError("Quantity must be positive")
    # Add item logic
    return {"item_id": item_id, "quantity": quantity}
```
2. Select the function
3. Right-click → "Generate Tests"
4. **Expected:** Multiple test cases including edge cases

### Test 3: Chat Query

1. Open Anti Gravity chat
2. Ask:
```text
Generate a Page Object class for a checkout page with:
- Cart items list
- Subtotal display
- Shipping address form
- Payment method selection
- Place order button
```
3. **Expected:** Complete Page Object class with methods

---

## Best Practices for QA

### Writing Effective Comments

```python
# Good: Specific and actionable
# Test login fails with invalid email format, verify error message

# Bad: Vague
# Test login error
```

### Using Context

Provide context for better suggestions:

```python
# Context: E-commerce checkout flow
# Framework: Playwright with Python
# Pattern: Page Object Model

# Test applying discount code reduces total by percentage
```

### Iterating on Suggestions

1. Accept initial suggestion
2. Refine with additional comments
3. Use "Improve" or "Refactor" for enhancements

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| No suggestions appearing | Check if extension is enabled |
| Slow suggestions | Increase suggestion delay in settings |
| Wrong language suggestions | Set file type correctly |
| Sign-in issues | Clear VS Code cache, try again |
| Extension not loading | Update VS Code, reinstall extension |

### Reset Extension

1. Open Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`)
2. Type "Anti Gravity: Reset"
3. Confirm reset
4. Sign in again

---

## Pricing

| Plan | Price | Features |
|------|-------|----------|
| **Free** | $0 | Basic completions, limited requests |
| **Pro** | Varies | Unlimited requests, advanced features |
| **Enterprise** | Custom | Team management, SSO |

---

## Next Steps

- Set up [VS Code AI Configuration](../ide_integrations/ch_03_vscode_ai_setup.md) for optimal workflow
- Compare with [GitHub Copilot](ch_03_github_copilot_setup.md)
- Use with [RICE POT Framework](../../chapter_02_prompt_engineering/core_concepts/ch_02_rice_pot_framework.md) for prompts

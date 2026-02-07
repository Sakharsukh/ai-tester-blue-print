# IntelliJ AI Assistant Setup

- **Author:** Pramod Dutta
- **Role:** Principal SDET
- **Website:** [The Testing Academy](https://thetestingacademy.com/)
- **LinkedIn:** [linkedin.com/in/pramoddutta](https://www.linkedin.com/in/pramoddutta/)

---

> JetBrains AI Assistant integrates directly into IntelliJ IDEA, PyCharm, and other JetBrains IDEs for seamless AI-powered testing.

---

## Quick Start

1. Open IntelliJ IDEA or PyCharm
2. Enable AI Assistant in Settings
3. Sign in with JetBrains account
4. Start coding with AI assistance

---

## What is JetBrains AI Assistant?

JetBrains AI Assistant provides:

- **Native integration** - Built into JetBrains IDEs
- **Code completion** - Smart suggestions
- **Code generation** - Generate from descriptions
- **Chat** - Ask questions in IDE
- **Refactoring** - AI-powered code improvements

---

## Supported IDEs

| IDE | Use For |
|-----|---------|
| **IntelliJ IDEA** | Java, Kotlin tests |
| **PyCharm** | Python tests (pytest, unittest) |
| **WebStorm** | JavaScript/TypeScript tests |
| **Rider** | .NET tests |
| **GoLand** | Go tests |

---

## Detailed Setup Guide

### Step 1: Verify IDE Version

Ensure you have a recent version:
- IntelliJ IDEA 2023.2+
- PyCharm 2023.2+

### Step 2: Enable AI Assistant

1. Open IDE
2. Go to **Settings** (`Ctrl+Alt+S` / `Cmd+,`)
3. Navigate to **Plugins**
4. Search for **"AI Assistant"**
5. Click **"Enable"** (bundled with IDE)
6. Restart IDE if prompted

### Step 3: Sign In

1. After restart, click AI Assistant icon in toolbar
2. Click **"Log In to JetBrains Account"**
3. Browser opens for authentication
4. Sign in or create JetBrains account
5. Return to IDE

### Step 4: Configure Settings

1. Go to Settings → **Tools** → **AI Assistant**
2. Configure:

| Setting | Recommended | Description |
|---------|-------------|-------------|
| Enable completions | On | Show inline suggestions |
| Enable chat | On | AI chat panel |
| Smart chat | On | Context-aware responses |

---

## Plans and Pricing

| Plan | Price | Features |
|------|-------|----------|
| **Trial** | Free (7 days) | Full access |
| **Subscription** | $10/mo | Full access |
| **IDE Subscription** | Included* | With All Products Pack |

*AI Assistant included with JetBrains All Products Pack subscription.

---

## QA-Specific Use Cases

### 1. Generate JUnit/TestNG Tests (Java)

Select a class, then:

```text
Right-click → AI Actions → Generate Tests
```

Or in chat:

```text
Generate JUnit 5 tests for this UserService class
including:
- Happy path tests
- Exception handling tests
- Edge cases
- Mock dependencies with Mockito
```

### 2. Generate pytest Tests (Python)

```text
Create pytest tests for this function:

def calculate_shipping(weight, distance, express=False):
    base = weight * 0.5 + distance * 0.1
    return base * 1.5 if express else base

Include:
- Valid calculations
- Boundary values
- Invalid inputs
```

### 3. Convert Tests Between Frameworks

```text
Convert this JUnit 4 test to JUnit 5:

@Test(expected = IllegalArgumentException.class)
public void testInvalidInput() {
    calculator.divide(10, 0);
}
```

### 4. Generate Test Data

```text
Generate test data for Customer class:
- 10 valid customers
- 5 edge cases (empty names, special chars)
- JSON format
```

---

## AI Actions Menu

Right-click on code to access AI Actions:

| Action | Description |
|--------|-------------|
| **Generate Tests** | Create tests for selected code |
| **Explain Code** | Get explanation of logic |
| **Find Problems** | Identify issues |
| **Suggest Refactoring** | Improvement suggestions |
| **Generate Documentation** | Add Javadoc/docstrings |

---

## Chat Examples

### Generate Test Class

```text
User: Generate a test class for UserRepository with:
- Test findById returns user
- Test findById returns empty for invalid id
- Test save persists user
- Test delete removes user
Use Mockito for mocking

AI: Here's a complete test class:
@ExtendWith(MockitoExtension.class)
class UserRepositoryTest {
    @Mock
    private JdbcTemplate jdbcTemplate;

    @InjectMocks
    private UserRepository repository;
    ...
}
```

### Explain Test Failure

```text
User: This test fails intermittently:

@Test
void testAsyncOperation() {
    service.startAsync();
    assertEquals("completed", service.getStatus());
}

AI: This test has a race condition. The async operation
hasn't completed when you check the status. Here's the fix:

@Test
void testAsyncOperation() {
    service.startAsync();
    await().atMost(5, SECONDS)
           .until(() -> service.getStatus().equals("completed"));
}
```

### Generate Page Object (Selenium)

```text
User: Create a Page Object for login page with Selenium Java:
- URL: /login
- Email input
- Password input
- Remember me checkbox
- Submit button
- Error message display

AI: Here's the Page Object following POM pattern:
public class LoginPage {
    private WebDriver driver;

    @FindBy(id = "email")
    private WebElement emailInput;
    ...
}
```

---

## Keyboard Shortcuts

| Action | Windows/Linux | Mac |
|--------|---------------|-----|
| Accept completion | `Tab` | `Tab` |
| Show AI Actions | `Alt+Enter` | `Option+Enter` |
| Open AI Chat | `Ctrl+Shift+A` | `Cmd+Shift+A` |
| Generate (in chat) | `Enter` | `Enter` |

---

## Integration with Test Frameworks

### JUnit 5 (Java)

```java
// Type comment, AI suggests test
// Test that user service throws exception for null email

@Test
void shouldThrowExceptionForNullEmail() {
    assertThrows(IllegalArgumentException.class, () ->
        userService.createUser(null, "password")
    );
}
```

### pytest (Python)

```python
# Test API endpoint returns 404 for non-existent resource

def test_get_nonexistent_user(client):
    response = client.get("/api/users/99999")
    assert response.status_code == 404
    assert response.json()["error"] == "User not found"
```

### TestNG (Java)

```java
// Generate data provider for login tests

@DataProvider(name = "loginCredentials")
public Object[][] loginData() {
    return new Object[][] {
        {"valid@email.com", "ValidPass1!", true},
        {"invalid", "pass", false},
        {"", "", false}
    };
}

@Test(dataProvider = "loginCredentials")
void testLogin(String email, String password, boolean shouldSucceed) {
    // Test implementation
}
```

---

## Verification Test

### Test 1: Code Completion

1. Create new test file
2. Type:
```java
@Test
void testCalculator
```
3. Wait for AI suggestion
4. **Expected:** Test method body suggested

### Test 2: Generate Tests

1. Select a method in your code
2. Right-click → AI Actions → Generate Tests
3. **Expected:** Test class generated

### Test 3: Chat Query

1. Open AI Chat panel
2. Ask: "Generate parameterized tests for email validation"
3. **Expected:** Complete parameterized test

---

## IDE-Specific Features

### IntelliJ IDEA

- Java/Kotlin test generation
- Spring Boot test support
- JUnit/TestNG integration
- Mockito suggestions

### PyCharm

- pytest/unittest generation
- Django test support
- Fixture suggestions
- parametrize completion

### WebStorm

- Jest test generation
- Mocha/Jasmine support
- Playwright/Cypress suggestions

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| AI Assistant not showing | Enable in Plugins settings |
| No suggestions | Check subscription status |
| Slow responses | Check internet connection |
| Wrong language suggestions | Verify file type |

### Reset AI Assistant

1. Settings → Tools → AI Assistant
2. Click "Reset to Defaults"
3. Sign out and sign in again

---

## Comparison with Other Tools

| Feature | JetBrains AI | GitHub Copilot | Amazon Q |
|---------|--------------|----------------|----------|
| Native integration | Excellent | Plugin | Plugin |
| IDE support | JetBrains only | Multiple | Multiple |
| Code context | Excellent | Good | Good |
| Price | $10/mo | $10/mo | Free tier |
| Refactoring | Built-in | Limited | Limited |

---

## Next Steps

- Compare with [VS Code AI Setup](ch_03_vscode_ai_setup.md)
- Try [GitHub Copilot](../ai_coding_assistants/ch_03_github_copilot_setup.md) in JetBrains
- Apply [RICE POT Framework](../../chapter_02_prompt_engineering/core_concepts/ch_02_rice_pot_framework.md)

# SOP: Salesforce Login Automation Framework

## 1. Objective
Create a modular, robust, and enterprise-grade Selenium-Java framework for automating Salesforce Login.

## 2. Framework Layers

### Layer A: Data/Locators (Invariants)
- All locators must be defined in the Page Object using `FindBy` with XPath.
- No CSS or Name based locators are permitted.

### Layer B: Page Object Model (POM)
- **Class:** `LoginPage`
- **Initialisation:** Use `PageFactory.initElements(driver, this)`.
- **Methods:**
    - `enterUsername(String user)`
    - `enterPassword(String pass)`
    - `clickLogin()`
    - `getErrorMessage()`
    - `toggleRememberMe()`

### Layer C: Test Scripts (TestNG)
- **BaseTest:** Handle browser setup (@BeforeTest) and teardown (@AfterTest).
- **LoginTests:**
    - `testValidLogin()`: Standard happy path.
    - `testInvalidLogin()`: Verification of error messages.

## 3. Implementation Rules
1. **Implicit Waiting:** Set a global wait but prefer `WebDriverWait` for specific element availability.
2. **Exception Strategy:** Wrap locator actions in try-catch. Throw descriptive custom errors if elements are missing.
3. **No Explanations:** The final output should be raw, runnable Java files as per user constraint.

## 4. Verification
- Validate the Maven lifecycle (`mvn test`) runs smoothly.

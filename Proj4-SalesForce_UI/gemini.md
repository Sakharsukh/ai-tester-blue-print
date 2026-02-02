# PROJ4 Constitution (gemini.md)

## 📌 Project Identity
- **Name:** Proj4-SalesForce_UI
- **Mission:** Build a deterministic, enterprise-grade Selenium-Java framework for Salesforce Login verification.
- **North Star:** Complete Maven project with POM and TestNG scripts utilizing XPath-only selectors and robust error handling.

## 🏰 Integrations & Environment
- **Language:** Java
- **Build Tool:** Maven
- **Test Runner:** TestNG
- **Web Driver:** Selenium WebDriver
- **URL:** https://login.salesforce.com/?locale=in

## 🛡️ Behavioral Rules
1. **XPath-Only:** You are strictly forbidden from using CSS selectors, direct ID, or Name lookups. Use XPath constructs exclusively.
2. **Deterministic Waiting:** NO `Thread.sleep()`. Use `WebDriverWait` or FluentWait for all synchronization.
3. **Robustness:** Implement try-catch blocks in both Page Objects and Test scripts.
4. **Architecture:** Use Page Object Model (POM) with `PageFactory.initElements`.
5. **Output Shape:** Deliverable must be a functional Maven structure.

## 📐 Data Schemas (XPath Mappings)

### 1. `LoginPage` Selectors
```json
{
  "username": "//input[@id='username']",
  "password": "//input[@id='password']",
  "loginButton": "//input[@id='Login']",
  "rememberMe": "//input[@id='rememberUn']",
  "errorMsg": "//div[@id='error']"
}
```

## 🏗️ Architectural Invariants
- 3-Layer Build approach.
- Standard Maven directory layout (src/main/java, src/test/java).

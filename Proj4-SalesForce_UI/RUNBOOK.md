# 📘 Proj4 Operational Runbook (SalesForce Automation)

## 🚨 Critical Constraints (READ FIRST)
1. **Maven Configuration:** Ensure `mvn -version` works in your terminal. If not, Maven is located at:
   `C:\Program Files\JetBrains\IntelliJ IDEA 2024.3.3\plugins\maven\lib\maven3\bin`
2. **XPath Requirement:** Strictly use **XPath ONLY** for locators. Direct IDs for Login (username, password, Login) are mapped as XPaths in the POM.
3. **No Thread.sleep:** Synchronization MUST be handled via `WebDriverWait`.
4. **Exception Handling:** All actions are wrapped in `try-catch` blocks for enterprise-grade robustness.

---

## 🚀 How to Run the System

### 1. Compile and Run All Tests
```powershell
cd e:\AITesterBluePrint_VS\ai-tester-blue-print\Proj4-SalesForce_UI
mvn clean test
```

### 2. View Test Results
TestNG generates reports in the `target/surefire-reports` directory. 

To open the HTML report:
```powershell
explorer e:\AITesterBluePrint_VS\ai-tester-blue-print\Proj4-SalesForce_UI\target\surefire-reports\index.html
```

---

## 🛠️ Maintenance & Troubleshooting

### If Selenium fails to find an element:
1. Verify the Salesforce Login UI hasn't changed its structure.
2. Update the XPath in `src/main/java/pages/LoginPage.java`.
3. Re-run `mvn test`.

### If Browser Driver issues occur:
The project uses `WebDriverManager` to automatically handle driver binaries. If a specialized browser version is required:
```java
// In BaseTest.java
WebDriverManager.chromedriver().browserVersion("version_number").setup();
```

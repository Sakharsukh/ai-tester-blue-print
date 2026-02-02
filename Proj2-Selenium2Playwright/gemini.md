# PROJ2 Constitution (gemini.md)

## 📌 Project Identity
- **Name:** Proj2-Selenium2Playwright
- **Mission:** Create a Web UI application that converts existing Selenium test scripts (from a local folder) into JavaScript-based Playwright scripts, displaying the differences and saving the output.
- **North Star:** A UI web app to view differences for entered test code for Selenium and Playwright code generated in JS.

## 🏰 Integrations & Environment
- **External Services:** GitHub.
- **AI Backend:** Local LLM (Ollama) via `http://localhost:11434`.
- **Source of Truth:** A local folder containing Selenium test scripts mixed with user inputs.
- **Delivery Payload:**
    1.  **Web UI:** Visual Diff View.
    2.  **File System:** Generated Playwright scripts saved to a new folder.

## 🛡️ Behavioral Rules
1.  **Output Language:** MUST use **JavaScript** for Playwright.
2.  **Documentation:** Generated code MUST include comments.
3.  **Data-First:** No code without a defined schema in this file.
4.  **Deterministic:** No guessing at business logic.
5.  **Atomic:** Tools must be small and testable.

## 🚨 Operational Rules (Learned from Usage)
1.  **LLM Sanitization:** Always use `// END_CODE` sentinel token to strip chatty output from small models.
2.  **Shell Security:** Always use `cmd /c` wrapper for node scripts on Windows.
3.  **Timeouts:** API calls to Ollama must have `timeout=300`.

## 📐 Data Schemas (Draft)

### 1. `InputScript`
```json
{
  "filename": "login_test.py",
  "content": "driver.find_element(By.ID, 'submit').click()...",
  "language": "python" // or java/js (assuming input might vary, but mostly selenium is python/java)
}
```

### 2. `ConversionRequest`
```json
{
  "source_scripts": ["InputScript"],
  "target_language": "javascript-playwright",
  "options": {
    "include_comments": true
  }
}
```

### 3. `ConversionResult`
```json
{
  "filename": "login_test.spec.js",
  "original_content": "...",
  "converted_content": "await page.locator('#submit').click(); // Converted from...",
  "diff_html": "<span class='diff'>...</span>",
  "status": "success"
}
```

## 🏗️ Architectural Invariants
- 3-Layer Architecture (Architecture -> Navigation -> Tools)
- Python for backend tools (unless otherwise specified).
- `.tmp/` for all temporary files.

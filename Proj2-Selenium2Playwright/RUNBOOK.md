# 📘 Proj2 Operational Runbook

## 🚨 Critical Constraints (READ FIRST)
1. **PowerShell Security:** You MUST wrap `npx` and `npm` commands in `cmd /c "..."` to bypass `PSSecurityException`.
   - ❌ `npx playwright test`
   - ✅ `cmd /c "npx playwright test"`
2. **LLM Output Cleaning:** The local model (`llama3.2:1b`) is chatty. The backend relies on the `// END_CODE` sentinel token. 
   - **Do not remove** the stop-token logic in `tools/convert_code.py` or `main.py`.
3. **Timeouts:** The local model needs >60s to load. The backend timeout is set to **300s**. Do not lower it.
4. **Networking:** Use `127.0.0.1` instead of `localhost` for report servers to avoid IPv6 binding issues.

---

## 🚀 How to Run the System

### 1. Start the Backend (FastAPI)
```powershell
# In terminal 1
cd e:\AITesterBluePrint_VS\ai-tester-blue-print\Proj2-Selenium2Playwright
python main.py
```
*Port: 8000*

### 2. Start the Frontend (react)
```powershell
# In terminal 2
cd e:\AITesterBluePrint_VS\ai-tester-blue-print\Proj2-Selenium2Playwright\ui
cmd /c "npm run dev"
```
*Port: 5173* (Use `http://localhost:5173`)

### 3. Run Conversion
1. Open UI at `http://localhost:5173`.
2. Click **"📂 Load Demo Data"** (auto-fills local test_data path).
3. Click **"Convert Scripts"**.
4. Wait for completion (files saved to `output_playwright/`).

### 4. Verify Tests (Headless)
```powershell
# In terminal
cd e:\AITesterBluePrint_VS\ai-tester-blue-print\Proj2-Selenium2Playwright\output_playwright
cmd /c "npx playwright test"
```

### 5. View HTML Report
If `npx playwright show-report` fails with port issues:
```powershell
# Robust fallback
cd e:\AITesterBluePrint_VS\ai-tester-blue-print\Proj2-Selenium2Playwright\output_playwright\playwright-report
python -m http.server 9325 --bind 127.0.0.1
```
*Open http://127.0.0.1:9325*

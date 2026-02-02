# Findings - Proj2-Selenium2Playwright

| ID | Type | Description | Status |
|----|------|-------------|--------|
| F-001 | Initialization | Project directory created freshly. | Done |
| F-002 | Error | **Read Timeout**: Ollama 1B model takes >60s to load first time. **Fix**: Increased timeout to 300s. | Resolved |
| F-003 | Error | **SyntaxError**: LLM kept adding "Notes:" at the end of code. **Fix**: Added `// END_CODE` sentinel token. | Resolved |
| F-004 | Environment | **PSSecurityException**: `npx` blocked by PowerShell. **Fix**: Use `cmd /c`. | Resolved |
| F-005 | Network | **EADDRINUSE**: `npx playwright show-report` failed on port 9323. **Fix**: Use Python `http.server`. | Resolved |

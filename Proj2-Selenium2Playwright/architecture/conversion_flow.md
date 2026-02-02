# SOP: Conversion Flow

## 1. Objective
Convert Selenium (Python/Java) test scripts into Playwright (JavaScript) scripts using a local LLM, ensuring visual diffs are available.

## 2. Inputs
- **Source Folder:** A path on the local machine containing `.py` or `.java` files.
- **Target Language:** Hardcoded to `javascript` (Playwright).

## 3. Process Flow

### Step 1: Ingestion
- User provides a folder path via the Web UI (or API).
- System scans for `*.py` files (ignoring `__init__.py`).
- System reads file content.

### Step 2: Translation (LLM)
- For each file:
    - Construct the **Prompt**:
        - **System:** "You are an expert QA Automation Engineer. Convert this Selenium code to Playwright JS."
        - **Constraints:**
            - Use `await page.locator(...)` instead of `driver.find_element`.
            - Add comments for every translated line.
            - Return ONLY the code, no markdown backticks if possible (or strip them).
        - **User:** [Raw Code Content]
    - Send to `llama3.2:1b` via Ollama.
    - Receive generated code.

### Step 3: Comparison & Storage
- Save input code and output code to a JSON object (for the UI Diff).
- Write the output code to a new file in a `output_playwright/` folder (e.g., `login_test.py` -> `login_test.spec.js`).

## 4. Error Handling
- If LLM fails or times out: Retry once.
- If syntax error in input: Log it but attempt conversion.
- If output is empty: Flag as "Failed".

## 5. Output
- A JSON response containing the list of files, their original content, and converted content.

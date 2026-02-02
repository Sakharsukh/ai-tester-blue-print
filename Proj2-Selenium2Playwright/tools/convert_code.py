"""
Tool: convert_code.py
Purpose: Send code to Ollama for conversion to Playwright.
"""
import requests
import json

OLLAMA_URL = "http://127.0.0.1:11434/api/generate"
MODEL_NAME = "llama3.2:1b"

SYSTEM_PROMPT = """You are a code translator. Your ONLY job is to convert Python Selenium code to JavaScript Playwright code.

Examples:
Input: driver.find_element(By.ID, 'login').click()
Output: await page.locator('#login').click(); // Converted from By.ID

Input: driver.get("https://google.com")
Output: await page.goto("https://google.com");

Input: element = driver.find_element(By.XPATH, "//div[@class='test']")
Output: const element = page.locator("//div[@class='test']");

Rules:
1. Always use 'await page.locator' logic.
2. Output ONLY the javascript code.
3. No markdown, no 'Here is the code'.
4. END your response with exactly: // END_CODE
"""

def convert_to_playwright(source_code):
    """
    Sends source code to Ollama and returns the converted JS code.
    """
    full_prompt = f"{SYSTEM_PROMPT}\n\n[SOURCE CODE]\n{source_code}\n\n[CONVERTED CODE]\n"
    
    payload = {
        "model": MODEL_NAME,
        "prompt": full_prompt,
        "stream": False,
        "options": {
            "temperature": 0.2  # Low temperature for deterministic code
        }
    }

    try:
        # Increased timeout to 300s (5m) because local models can be slow to load initially
        response = requests.post(OLLAMA_URL, json=payload, timeout=300)
        
        if response.status_code == 200:
            data = response.json()
            return data.get("response", "").strip()
        else:
            return f"// [ERROR] API Failed: {response.status_code}"

    except Exception as e:
        return f"// [ERROR] Connection Failed: {str(e)}"

if __name__ == "__main__":
    # Test stub
    sample_code = "driver.find_element(By.ID, 'login').click()"
    print(convert_to_playwright(sample_code))

"""
Handshake Script: check_llm.py
Purpose: Verify connection to the Local LLM (Ollama)
"""
import requests
import json
import sys

OLLAMA_URL = "http://127.0.0.1:11434/api/generate"
MODEL_NAME = "llama3.2:1b" 

def check_connection():
    print(f"[LINK] Linking to Local LLM at {OLLAMA_URL}...")
    
    payload = {
        "model": MODEL_NAME,
        "prompt": "Hello",
        "stream": False
    }

    try:
        response = requests.post(OLLAMA_URL, json=payload)
        
        if response.status_code == 200:
            print("[SUCCESS] Link Established: Ollama is reachable.")
            data = response.json()
            print(f"[RESPONSE] Model says: {data.get('response')}")
            return True
        else:
            print(f"[FAILED] Link Failed: Status Code {response.status_code}")
            print(f"Reason: {response.text}")
            return False

    except requests.exceptions.ConnectionError:
        print("[FAILED] Link Failed: Could not connect to Ollama. Is it running?")
        return False
    except Exception as e:
        print(f"[ERROR] Link Error: {str(e)}")
        return False

if __name__ == "__main__":
    success = check_connection()
    if not success:
        sys.exit(1)

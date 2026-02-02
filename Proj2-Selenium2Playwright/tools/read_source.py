"""
Tool: read_source.py
Purpose: Scan a directory for python selenium scripts.
"""
import os
import glob

def scan_directory(folder_path):
    """
    Scans the folder for .py files.
    Returns a list of dicts: {'filename': str, 'content': str}
    """
    if not os.path.exists(folder_path):
        return {"error": f"Folder '{folder_path}' does not exist."}

    # Find all .py files
    search_path = os.path.join(folder_path, "*.py")
    files = glob.glob(search_path)
    
    results = []
    
    for file_path in files:
        filename = os.path.basename(file_path)
        # Skip init files
        if filename.startswith("__"):
            continue
            
        try:
            with open(file_path, "r", encoding="utf-8") as f:
                content = f.read()
                results.append({
                    "filename": filename,
                    "content": content,
                    "path": file_path
                })
        except Exception as e:
            print(f"[ERROR] Could not read {filename}: {e}")
            
    return results

if __name__ == "__main__":
    # Test run
    import sys
    if len(sys.argv) > 1:
        print(scan_directory(sys.argv[1]))
    else:
        print("Usage: python read_source.py <folder_path>")

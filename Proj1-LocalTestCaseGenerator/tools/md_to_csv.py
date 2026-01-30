import csv
import re
import os

def convert_md_to_csv(md_file, csv_file):
    if not os.path.exists(md_file):
        print(f"Error: {md_file} not found.")
        return

    with open(md_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the table in the markdown
    # Tables are typically | col 1 | col 2 | ...
    lines = content.split('\n')
    table_lines = [line.strip() for line in lines if line.strip().startswith('|') and line.strip().endswith('|')]

    if not table_lines:
        print("Error: No markdown table found in the file.")
        return

    # Extract header (first line)
    header = [cell.strip().replace('**', '') for cell in table_lines[0].split('|') if cell.strip()]
    
    # Skip separator line (second line, usually |---|---|)
    rows = []
    for line in table_lines[2:]:
        row = [cell.strip() for cell in line.split('|') if cell.strip()]
        if row:
            rows.append(row)

    with open(csv_file, 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerow(header)
        writer.writerows(rows)

    print(f"Successfully converted {md_file} to {csv_file}")

if __name__ == "__main__":
    convert_md_to_csv("test_cases.md", "test_cases.csv")

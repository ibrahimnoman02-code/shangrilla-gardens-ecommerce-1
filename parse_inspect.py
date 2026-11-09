import json
import re

# Let's inspect the categories and items extracted
with open('extracted_full_menu.txt', 'r', encoding='utf-8') as f:
    lines = [line.strip() for line in f if line.strip()]

print(f"Total lines in extracted menu: {len(lines)}")
for i in range(min(50, len(lines))):
    print(f"{i+1}: {lines[i]}")

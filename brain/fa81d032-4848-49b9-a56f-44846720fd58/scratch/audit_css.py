import os
import re

css_path = r'c:\Durgesh\actova-html\assets\css\main-style.css'
base_dir = r'c:\Durgesh\actova-html\assets\css'

with open(css_path, 'r') as f:
    content = f.read()

urls = re.findall(r'url\((.*?)\)', content)
broken_links = []

for url in urls:
    url = url.strip('\'"')
    if url.startswith('data:'):
        continue
    if url.startswith('http'):
        continue
    
    full_path = os.path.abspath(os.path.join(base_dir, url))
    if not os.path.exists(full_path):
        broken_links.append((url, full_path))

if broken_links:
    print(f"Found {len(broken_links)} broken links in {css_path}:")
    for link, full in broken_links[:20]:
        print(f"  {link} -> {full}")
else:
    print("No broken links found in CSS.")

import os
import re

html_file = 'contact.html'

if not os.path.exists(html_file):
    print("File not found")
    exit()

with open(html_file, 'r', encoding='utf-8') as f:
    content = f.read()

# Find all src="..." in tags
srcs = re.findall(r'src=["\'](.*?)["\']', content)
# Find all href="..." in tags (for icons/favicons)
hrefs = re.findall(r'href=["\'](.*?)["\']', content)

all_assets = set(srcs + hrefs)
broken = []

for asset in all_assets:
    if asset.startswith(('http', 'data:', '#')):
        continue
    
    # Clean query strings/hashes
    clean_asset = asset.split('?')[0].split('#')[0]
    
    if not os.path.exists(clean_asset):
        broken.append(asset)

if broken:
    print(f"Found {len(broken)} broken assets in {html_file}:")
    for b in sorted(broken):
        print(f"  {b}")
else:
    print("No broken assets found.")

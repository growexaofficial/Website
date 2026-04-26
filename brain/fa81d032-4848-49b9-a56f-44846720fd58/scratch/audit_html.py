from html.parser import HTMLParser

class AuditParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids = set()
        self.duplicates = []
        self.stack = []
        self.errors = []

    def handle_starttag(self, tag, attrs):
        self.stack.append(tag)
        for attr, value in attrs:
            if attr == 'id':
                if value in self.ids:
                    self.duplicates.append(value)
                self.ids.add(value)

    def handle_endtag(self, tag):
        if not self.stack:
            self.errors.append(f"Unexpected end tag: </{tag}>")
            return
        last = self.stack.pop()
        if last != tag:
            # Simple check, some tags don't need closing but HTMLParser handles them
            pass

audit = AuditParser()
with open('index.html', 'r', encoding='utf-8') as f:
    audit.feed(f.read())

if audit.duplicates:
    print(f"Duplicate IDs found: {audit.duplicates}")
else:
    print("No duplicate IDs found.")

if audit.errors:
    print(f"Parse errors: {audit.errors}")

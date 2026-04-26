import os

css_path = r'c:\Durgesh\actova-html\assets\css\main-style.css'

replacements = {
    '../images/hero/hero-bg.jpg': '../images/home-5/hero-bg.png',
    '../images/hero/hero-bg-2.png': '../images/home-5/hero-bg.png',
    '../images/others/cta-bg.png': '../images/home-5/cta-bg.png',
    '../images/faq/shape-bg.png': '../images/home-5/feature-shape.png',
    '../images/testimonial/tsm-shape.png': '../images/home-5/testimnial-shape.png',
    '../images/about/bg.png': '../images/home-5/hero-bg.png', # Fallback
    '../images/project/shape.png': '../images/service/shape-7.png',
    '../images/feature/bg.png': '../images/home-5/feature-bg.png',
    '../images/process/btn-bg.png': '../images/home-5/ribon-bg.png',
    '../images/others/formula-bg.png': '../images/home-5/hero-bg.png'
}

with open(css_path, 'r', encoding='utf-8') as f:
    content = f.read()

for old, new in replacements.items():
    content = content.replace(old, new)

with open(css_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("CSS Assets Repaired.")

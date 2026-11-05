import re
import html

def extract_content(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        raw = f.read()

    print(f"\n=======================================================")
    print(f"FILE: {filename}")
    print(f"=======================================================")

    # Title & description
    title = re.search(r'<title>(.*?)</title>', raw, re.I | re.S)
    print("TITLE:", title.group(1).strip() if title else "N/A")
    desc = re.search(r'<meta[^>]*name=["\']description["\'][^>]*content=["\']([^"\']+)["\']', raw, re.I)
    print("DESCRIPTION:", desc.group(1).strip() if desc else "N/A")

    # Headings
    headings = re.findall(r'<(h[1-6])[^>]*>(.*?)</\1>', raw, re.I | re.S)
    print("\n--- HEADINGS ---")
    for tag, text in headings:
        clean = re.sub(r'<[^>]+>', ' ', text)
        clean = ' '.join(clean.split())
        if clean:
            print(f"[{tag.upper()}] {clean}")

    # Paragraphs
    paras = re.findall(r'<p[^>]*>(.*?)</p>', raw, re.I | re.S)
    print(f"\n--- PARAGRAPHS ({len(paras)}) ---")
    for p in paras:
        clean = re.sub(r'<[^>]+>', ' ', p)
        clean = ' '.join(clean.split())
        clean = html.unescape(clean)
        if len(clean) > 20: # filter out tiny empty paragraphs
            print(f"- {clean}\n")

    # Images
    imgs = re.findall(r'<img[^>]*src=["\']([^"\']+)["\'][^>]*>', raw, re.I)
    img_alts = re.findall(r'<img[^>]*alt=["\']([^"\']*)["\'][^>]*>', raw, re.I)
    print(f"\n--- IMAGES ({len(imgs)}) ---")
    for img in imgs[:15]:
        print(f"  src: {img[:120]}")
    print(f"Alt texts: {set(filter(None, img_alts))}")

for fn in ['corporatec-research/page-content/homepage.html', 
           'corporatec-research/page-content/services.html', 
           'corporatec-research/page-content/technology.html']:
    extract_content(fn)

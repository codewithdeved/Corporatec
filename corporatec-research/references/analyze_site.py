import re
from urllib.parse import urljoin, urlparse

with open('corporatec-research/page-content/homepage.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Title
title_match = re.search(r'<title>(.*?)</title>', content, re.IGNORECASE | re.DOTALL)
print('TITLE:', title_match.group(1).strip() if title_match else 'None')

# Generator or CMS clues
generators = re.findall(r'<meta[^>]*name=["\']generator["\'][^>]*content=["\']([^"\']+)["\']', content, re.IGNORECASE)
print('GENERATOR:', generators)

# Meta description
desc = re.findall(r'<meta[^>]*name=["\']description["\'][^>]*content=["\']([^"\']+)["\']', content, re.IGNORECASE)
print('DESCRIPTION:', desc)

# Scripts and stylesheets clues (Wix, WordPress, Squarespace, Webflow, custom?)
scripts = re.findall(r'<script[^>]*src=["\']([^"\']+)["\']', content, re.IGNORECASE)
links_css = re.findall(r'<link[^>]*href=["\']([^"\']+)["\']', content, re.IGNORECASE)
cms_hints = []
for s in scripts + links_css:
    if 'wp-content' in s:
        cms_hints.append('WordPress')
    elif 'wix' in s:
        cms_hints.append('Wix')
    elif 'squarespace' in s:
        cms_hints.append('Squarespace')
    elif 'webflow' in s:
        cms_hints.append('Webflow')
    elif 'hubspot' in s:
        cms_hints.append('HubSpot')
    elif 'drupal' in s or 'joomla' in s:
        cms_hints.append('Drupal/Joomla')

print('CMS HINTS:', set(cms_hints))

# Extract all a href links
raw_links = re.findall(r'<a\s+[^>]*href=["\']([^"\']+)["\'][^>]*>(.*?)</a>', content, re.IGNORECASE | re.DOTALL)
internal_links = {}
external_links = {}

for href, link_text in raw_links:
    clean_text = re.sub(r'<[^>]+>', ' ', link_text)
    clean_text = ' '.join(clean_text.split())
    clean_href = href.strip()
    
    # Check if internal
    if clean_href.startswith('http://') or clean_href.startswith('https://'):
        parsed = urlparse(clean_href)
        if 'corporatec.co.uk' in parsed.netloc:
            internal_links[clean_href] = clean_text
        else:
            external_links[clean_href] = clean_text
    elif clean_href.startswith('#') or clean_href.startswith('tel:') or clean_href.startswith('mailto:'):
        internal_links[clean_href] = clean_text
    elif clean_href.startswith('/'):
        internal_links[urljoin('https://www.corporatec.co.uk', clean_href)] = clean_text
    elif not clean_href.startswith('javascript:'):
        internal_links[urljoin('https://www.corporatec.co.uk/', clean_href)] = clean_text

print('\n--- INTERNAL / SAME DOMAIN LINKS ---')
for u, t in sorted(internal_links.items()):
    print(f'{u} => "{t}"')

print('\n--- EXTERNAL LINKS ---')
for u, t in sorted(external_links.items()):
    print(f'{u} => "{t}"')

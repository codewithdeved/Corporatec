import urllib.request, ssl, os

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE
headers = {'User-Agent': 'Mozilla/5.0'}

certs = {
    '9001.jpg': 'https://static.wixstatic.com/media/8a5516_46d6255de8a3449cbfdcd11062022e48~mv2_d_1666_1726_s_2.jpg/v1/fill/w_200,h_200,al_c,q_85,enc_avif,quality_auto/9001.jpg',
    '27001.jpg': 'https://static.wixstatic.com/media/8a5516_50a252b7da8e485996d9efb0d95725e7~mv2_d_1666_1726_s_2.jpg/v1/fill/w_200,h_200,al_c,q_85,enc_avif,quality_auto/27001.jpg',
    'CyberEssentials.png': 'https://static.wixstatic.com/media/8a5516_bc665a705625435dac83e5b02574e40e~mv2.png/v1/fill/w_200,h_200,al_c,q_85,enc_avif,quality_auto/CyberEssentials.png',
    'CyberEssentialsPlus.png': 'https://static.wixstatic.com/media/8a5516_86819f094c144086b10cb3833c80cc0d~mv2.png/v1/fill/w_200,h_200,al_c,q_85,enc_avif,quality_auto/CyberEssentialsPlus.png'
}

for fname, url in certs.items():
    dest = os.path.join('public', 'assets', 'certs', fname)
    print(f'Fetching {fname}...')
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, context=ctx, timeout=10) as resp:
            data = resp.read()
            with open(dest, 'wb') as f:
                f.write(data)
            print(f'  Saved {dest}')
    except Exception as e:
        print(f'  Error: {e}')

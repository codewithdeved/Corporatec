const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function extractLogo() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox']
  });
  const page = await browser.newPage();
  await page.goto('https://www.corporatec.co.uk/', { waitUntil: 'networkidle2' });
  
  // Find logo img element
  const logoEl = await page.$('img[alt*="Logo"], header img, a[href="https://www.corporatec.co.uk"] img');
  if (logoEl) {
    const dest = path.join(__dirname, '..', 'brand-assets', 'corporatec-logo-live.png');
    await logoEl.screenshot({ path: dest });
    console.log('Saved logo screenshot to:', dest);
  } else {
    console.log('Logo element not found directly, capturing header');
  }

  // Also check certification badge images on homepage
  const certs = await page.$$eval('img', imgs => imgs.map(i => ({ src: i.src, alt: i.alt, width: i.width, height: i.height })));
  fs.writeFileSync(path.join(__dirname, '..', 'references', 'page_images.json'), JSON.stringify(certs, null, 2));

  await browser.close();
}

extractLogo().catch(console.error);

const puppeteer = require('puppeteer-core');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const artifactDir = 'C:\\Users\\Dell 5530\\.gemini\\antigravity\\brain\\5543cee5-b888-4b47-8dff-08bba429bc95';

async function capture() {
  const browser = await puppeteer.launch({ executablePath: CHROME_PATH, headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await page.goto('http://localhost:4173', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 800));

  // Find "What Our Clients Say" section and screenshot it
  await page.evaluate(() => {
    const el = document.evaluate("//h2[contains(., 'What Our Clients Say')]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (el) {
      el.scrollIntoView({ behavior: 'instant', block: 'center' });
    }
  });

  await new Promise(r => setTimeout(r, 600));
  const testPath = path.join(artifactDir, 'verification-testimonials.png');
  await page.screenshot({ path: testPath });
  console.log('Saved', testPath);

  // Navigate to About Us
  await page.evaluate(() => {
    const btn = Array.from(document.querySelectorAll('button')).find(x => x.textContent.trim() === 'About Us');
    if (btn) btn.click();
  });
  await new Promise(r => setTimeout(r, 800));

  const aboutPath = path.join(artifactDir, 'verification-about.png');
  await page.screenshot({ path: aboutPath });
  console.log('Saved', aboutPath);

  await browser.close();
}

capture().catch(console.error);

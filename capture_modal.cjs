const puppeteer = require('puppeteer-core');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const artifactDir = 'C:\\Users\\Dell 5530\\.gemini\\antigravity\\brain\\5543cee5-b888-4b47-8dff-08bba429bc95';

async function captureModal() {
  const browser = await puppeteer.launch({ executablePath: CHROME_PATH, headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await page.goto('http://localhost:4173', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 800));

  // Click "Request Consultation"
  await page.evaluate(() => {
    const btn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('Request Consultation'));
    if (btn) btn.click();
  });

  await new Promise(r => setTimeout(r, 600));

  const modalPath = path.join(artifactDir, 'verification-modal.png');
  await page.screenshot({ path: modalPath });
  console.log('Saved', modalPath);

  await browser.close();
}

captureModal().catch(console.error);

const puppeteer = require('puppeteer-core');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function testHeader() {
  const browser = await puppeteer.launch({ executablePath: CHROME_PATH, headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await page.goto('http://localhost:4173', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 800));

  // Capture navbar area (top 150px)
  await page.screenshot({
    path: path.join(__dirname, '..', '..', 'corporatec-redesign-final', 'desktop', 'navbar-fixed-desktop.png'),
    clip: { x: 0, y: 0, width: 1440, height: 160 }
  });
  console.log('Saved navbar-fixed-desktop.png');

  // Also capture full hero with header
  await page.screenshot({
    path: path.join(__dirname, '..', '..', 'corporatec-redesign-final', 'desktop', 'home-desktop-hero.png'),
    clip: { x: 0, y: 0, width: 1440, height: 950 }
  });
  console.log('Saved home-desktop-hero.png');

  await browser.close();
}

testHeader().catch(console.error);

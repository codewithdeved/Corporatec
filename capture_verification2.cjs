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

  await page.evaluate(() => {
    const el = document.evaluate("//h2[contains(., 'Launching a New Fund')]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (el) {
      el.scrollIntoView({ behavior: 'instant', block: 'start' });
    }
  });

  await new Promise(r => setTimeout(r, 600));

  const launchpadPath = path.join(artifactDir, 'verification-launchpad.png');
  // screenshot visible viewport
  await page.screenshot({
    path: launchpadPath
  });
  console.log('Saved', launchpadPath);

  await browser.close();
}

capture().catch(console.error);

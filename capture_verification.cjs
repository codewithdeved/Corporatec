const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const artifactDir = 'C:\\Users\\Dell 5530\\.gemini\\antigravity\\brain\\5543cee5-b888-4b47-8dff-08bba429bc95';

async function capture() {
  const browser = await puppeteer.launch({ executablePath: CHROME_PATH, headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await page.goto('http://localhost:4173', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 1000));

  // 1. Hero
  const heroPath = path.join(artifactDir, 'verification-hero.png');
  await page.screenshot({
    path: heroPath,
    clip: { x: 0, y: 0, width: 1440, height: 950 }
  });
  console.log('Saved', heroPath);

  // 2. Scroll to Launchpad section
  await page.evaluate(() => {
    window.scrollTo(0, 1500);
  });
  await new Promise(r => setTimeout(r, 600));

  const launchpadPath = path.join(artifactDir, 'verification-launchpad.png');
  await page.screenshot({
    path: launchpadPath,
    clip: { x: 0, y: 0, width: 1440, height: 900 }
  });
  console.log('Saved', launchpadPath);

  await browser.close();
}

capture().catch(console.error);

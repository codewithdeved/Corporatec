const puppeteer = require('puppeteer-core');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const artifactDir = 'C:\\Users\\Dell 5530\\.gemini\\antigravity\\brain\\5543cee5-b888-4b47-8dff-08bba429bc95';
const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function testNav() {
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });

  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle2' });
  await sleep(1000);

  // Test clicking 'Services' nav button
  await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll('header nav button'));
    const btn = buttons.find(b => b.textContent.includes('Services'));
    if (btn) btn.click();
  });
  await sleep(800);
  await page.screenshot({ path: path.join(artifactDir, 'nav-test-services.png') });
  console.log('Services click screenshot saved');

  // Test clicking 'Why Corporatec' nav button
  await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll('header nav button'));
    const btn = buttons.find(b => b.textContent.includes('Why Corporatec'));
    if (btn) btn.click();
  });
  await sleep(800);
  await page.screenshot({ path: path.join(artifactDir, 'nav-test-why-us.png') });
  console.log('Why Corporatec click screenshot saved');

  // Test clicking 'Contact' nav button
  await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll('header nav button'));
    const btn = buttons.find(b => b.textContent.includes('Contact'));
    if (btn) btn.click();
  });
  await sleep(800);
  await page.screenshot({ path: path.join(artifactDir, 'nav-test-contact.png') });
  console.log('Contact click screenshot saved');

  await browser.close();
}

testNav().catch(err => {
  console.error(err);
  process.exit(1);
});

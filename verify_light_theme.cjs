const puppeteer = require('puppeteer-core');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const artifactDir = 'C:\\Users\\Dell 5530\\.gemini\\antigravity\\brain\\5543cee5-b888-4b47-8dff-08bba429bc95';
const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function verify() {
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });

  console.log('Navigating to http://localhost:5173/ ...');
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle2' });
  await sleep(1000);

  // 1. Capture Hero & Navbar in Light Theme
  const heroPath = path.join(artifactDir, 'verification-light-hero.png');
  await page.screenshot({ path: heroPath });
  console.log('Saved:', heroPath);

  // 2. Scroll down to test Scroll to Top button visibility
  await page.evaluate(() => window.scrollBy(0, 1200));
  await sleep(600);

  const scrollBtnPath = path.join(artifactDir, 'verification-light-scroll-top.png');
  await page.screenshot({ path: scrollBtnPath });
  console.log('Saved:', scrollBtnPath);

  // 3. Click Scroll to Top button
  await page.evaluate(() => {
    const btn = document.querySelector('button[title="Return to top of page"]');
    if (btn) btn.click();
  });
  await sleep(800);

  // 4. Test clicking 'Contact' nav link
  const contactLink = await page.$('a[href="#contact"]');
  if (contactLink) {
    await contactLink.click();
    await sleep(800);
    const contactPath = path.join(artifactDir, 'verification-light-contact-scroll.png');
    await page.screenshot({ path: contactPath });
    console.log('Saved:', contactPath);
  }

  // 5. Capture full page in light theme
  const fullPath = path.join(artifactDir, 'verification-light-fullpage.png');
  await page.screenshot({ path: fullPath, fullPage: true });
  console.log('Saved full page screenshot:', fullPath);

  await browser.close();
  console.log('Verification completed successfully!');
}

verify().catch(err => {
  console.error('Error during verification:', err);
  process.exit(1);
});

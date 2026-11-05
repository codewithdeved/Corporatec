const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const pages = [
  { name: 'homepage', url: 'https://www.corporatec.co.uk/' },
  { name: 'services', url: 'https://www.corporatec.co.uk/services' },
  { name: 'technology', url: 'https://www.corporatec.co.uk/technology' }
];

const viewports = [
  { device: 'desktop', width: 1440, height: 900, isMobile: false },
  { device: 'tablet', width: 768, height: 1024, isMobile: true },
  { device: 'mobile', width: 375, height: 812, isMobile: true }
];

async function capture() {
  console.log('Launching browser with Chrome...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  });

  for (const pageInfo of pages) {
    for (const vp of viewports) {
      const page = await browser.newPage();
      await page.setViewport({
        width: vp.width,
        height: vp.height,
        isMobile: vp.isMobile,
        deviceScaleFactor: 2
      });

      console.log(`Navigating to ${pageInfo.url} on ${vp.device}...`);
      try {
        await page.goto(pageInfo.url, { waitUntil: 'networkidle2', timeout: 30000 });
        // wait 2 seconds for any wix animations / lazy loading
        await new Promise(r => setTimeout(r, 2000));

        // Full page screenshot
        const fullPagePath = path.join(__dirname, '..', 'screenshots', vp.device, `${pageInfo.name}-${vp.device}.png`);
        await page.screenshot({ path: fullPagePath, fullPage: true });
        console.log(`Saved: ${fullPagePath}`);

        // Above the fold screenshot
        const foldPath = path.join(__dirname, '..', 'screenshots', vp.device, `${pageInfo.name}-${vp.device}-hero.png`);
        await page.screenshot({ path: foldPath, fullPage: false });
        console.log(`Saved hero: ${foldPath}`);

      } catch (err) {
        console.error(`Error capturing ${pageInfo.name} on ${vp.device}:`, err.message);
      } finally {
        await page.close();
      }
    }
  }

  await browser.close();
  console.log('All screenshots completed successfully!');
}

capture().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});

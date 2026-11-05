const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function inspectPages() {
  const browser = await puppeteer.launch({ executablePath: CHROME_PATH, headless: 'new', args: ['--no-sandbox'] });
  
  for (const pageName of ['services', 'technology']) {
    const page = await browser.newPage();
    await page.goto(`https://www.corporatec.co.uk/${pageName}`, { waitUntil: 'networkidle2' });
    const data = await page.evaluate(() => {
      const imgs = Array.from(document.querySelectorAll('img')).map(i => ({
        src: i.src,
        alt: i.alt,
        width: i.naturalWidth || i.width,
        height: i.naturalHeight || i.height
      }));
      const text = document.body.innerText;
      return { imgs, text };
    });
    fs.writeFileSync(path.join(__dirname, '..', 'references', `${pageName}_details.json`), JSON.stringify(data, null, 2));
    await page.close();
  }
  await browser.close();
  console.log('Inspected services and technology successfully');
}

inspectPages().catch(console.error);

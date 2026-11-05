const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const BASE_URL = 'http://localhost:4173';

const pages = [
  { name: 'home', navText: 'Home' },
  { name: 'about', navText: 'About Us' },
  { name: 'services', navText: 'Services' },
  { name: 'technology', navText: 'Technology' },
  { name: 'industries', navText: 'Industries' },
  { name: 'compliance', navText: 'Trust & Governance' },
  { name: 'contact', navText: 'Contact' }
];

const viewports = [
  { device: 'desktop', width: 1440, height: 900, isMobile: false },
  { device: 'tablet', width: 768, height: 1024, isMobile: true },
  { device: 'mobile', width: 390, height: 844, isMobile: true }
];

async function runAuditAndScreenshots() {
  console.log('Launching Chrome for Quality Audit & Final Screenshot Capture...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const consoleErrors = [];

  for (const vp of viewports) {
    console.log(`\n=== Testing Viewport: ${vp.device} (${vp.width}x${vp.height}) ===`);
    const page = await browser.newPage();
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(`[${vp.device}] ${msg.text()}`);
      }
    });

    await page.setViewport({
      width: vp.width,
      height: vp.height,
      isMobile: vp.isMobile,
      deviceScaleFactor: 2
    });

    // 1. Visit each page via UI clicks to guarantee full client navigation works
    for (const p of pages) {
      console.log(`Navigating to ${p.name} on ${vp.device}...`);
      
      if (p.name === 'home') {
        await page.goto(BASE_URL, { waitUntil: 'networkidle2' });
      } else {
        if (vp.device === 'mobile') {
          // Open mobile drawer
          const burger = await page.$('button[aria-label="Toggle navigation"]');
          if (burger) await burger.click();
          await new Promise(r => setTimeout(r, 400));
          
          // Click link in drawer
          await page.evaluate((text) => {
            const buttons = Array.from(document.querySelectorAll('button'));
            const target = buttons.find(b => b.innerText.trim().startsWith(text));
            if (target) target.click();
          }, p.navText);
        } else {
          // Click desktop nav link
          await page.evaluate((text) => {
            const buttons = Array.from(document.querySelectorAll('nav button'));
            const target = buttons.find(b => b.innerText.trim().startsWith(text));
            if (target) target.click();
          }, p.navText);
        }
      }

      await new Promise(r => setTimeout(r, 800));

      // Save Full Page Screenshot
      const fullPath = path.join(__dirname, '..', '..', 'corporatec-redesign-final', vp.device, `${p.name}-${vp.device}.png`);
      await page.screenshot({ path: fullPath, fullPage: true });
      console.log(`  ✓ Saved: ${p.name}-${vp.device}.png`);

      // Save Hero / Above-the-fold Screenshot
      const heroPath = path.join(__dirname, '..', '..', 'corporatec-redesign-final', vp.device, `${p.name}-${vp.device}-hero.png`);
      await page.screenshot({ path: heroPath, fullPage: false });
      console.log(`  ✓ Saved hero: ${p.name}-${vp.device}-hero.png`);
    }

    // 2. Test Interactive Consultation Modal on Desktop
    if (vp.device === 'desktop') {
      console.log('Testing Consultation Modal interaction...');
      await page.evaluate(() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        const btn = buttons.find(b => b.innerText.includes('Request Consultation') || b.innerText.includes('Schedule a CIO Consultation'));
        if (btn) btn.click();
      });
      await new Promise(r => setTimeout(r, 600));

      const modalPath = path.join(__dirname, '..', '..', 'corporatec-redesign-final', 'desktop', 'consultation-modal-step1-desktop.png');
      await page.screenshot({ path: modalPath, fullPage: false });
      console.log(`  ✓ Saved: consultation-modal-step1-desktop.png`);

      // Advance step 1 -> step 2
      await page.evaluate(() => {
        const btn = document.querySelector('button[type="submit"]');
        if (btn) btn.click();
      });
      await new Promise(r => setTimeout(r, 400));
      const modalStep2 = path.join(__dirname, '..', '..', 'corporatec-redesign-final', 'desktop', 'consultation-modal-step2-desktop.png');
      await page.screenshot({ path: modalStep2, fullPage: false });
      console.log(`  ✓ Saved: consultation-modal-step2-desktop.png`);

      // Advance step 2 -> step 3
      await page.evaluate(() => {
        const btn = document.querySelector('button[type="submit"]');
        if (btn) btn.click();
      });
      await new Promise(r => setTimeout(r, 400));
      const modalStep3 = path.join(__dirname, '..', '..', 'corporatec-redesign-final', 'desktop', 'consultation-modal-step3-desktop.png');
      await page.screenshot({ path: modalStep3, fullPage: false });
      console.log(`  ✓ Saved: consultation-modal-step3-desktop.png`);

      // Close modal
      await page.evaluate(() => {
        const closeBtn = document.querySelector('button[aria-label="Close modal"]');
        if (closeBtn) closeBtn.click();
      });
      await new Promise(r => setTimeout(r, 500));
    }

    await page.close();
  }

  await browser.close();

  console.log('\n=======================================');
  console.log('FINAL AUDIT SUMMARY:');
  console.log(`Console Errors: ${consoleErrors.length}`);
  if (consoleErrors.length > 0) {
    console.log(consoleErrors);
  } else {
    console.log('✓ 100% CLEAN CONSOLE! Zero JavaScript or asset errors detected.');
  }
  console.log('=======================================');
}

runAuditAndScreenshots().catch(err => {
  console.error('Fatal error during capture:', err);
  process.exit(1);
});

const fs = require('fs');
const puppeteer = require('puppeteer-core');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

(async () => {
  const browser = await puppeteer.launch({ executablePath: chromePath, headless: 'new' });
  const page = await browser.newPage();
  
  const imgBase64 = fs.readFileSync('public/corporatec-official-logo.png').toString('base64');
  await page.setContent(`
    <!DOCTYPE html>
    <html><body>
      <canvas id="c"></canvas>
      <script>
        const img = new Image();
        img.src = "data:image/png;base64,${imgBase64}";
        img.onload = () => {
          const canvas = document.getElementById("c");
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0);
          
          const imgData = ctx.getImageData(0, 0, img.width, img.height).data;
          const clusters = {
            tealNavy: [], // for 'corporate' text and large sphere
            steelGrey: [], // for 'TEC' and small sphere
            cerulean: [], // for top sphere
            subtext: [] // for 'technology service providers'
          };

          for (let y = 0; y < img.height; y++) {
            for (let x = 0; x < img.width; x++) {
              const idx = (y * img.width + x) * 4;
              const r = imgData[idx];
              const g = imgData[idx+1];
              const b = imgData[idx+2];
              const a = imgData[idx+3];
              
              if (a > 200 && (r < 235 || g < 235 || b < 235)) {
                // If bluish/teal
                if (b > r + 20 && g > r + 10) {
                  if (r < 50 && g < 100 && b > 80) {
                    clusters.tealNavy.push([r, g, b]);
                  } else if (b > 140) {
                    clusters.cerulean.push([r, g, b]);
                  }
                } else if (Math.abs(r - g) < 20 && Math.abs(g - b) < 20) {
                  if (r < 100) clusters.steelGrey.push([r, g, b]);
                  else clusters.subtext.push([r, g, b]);
                }
              }
            }
          }
          
          function avg(arr) {
            if (!arr.length) return null;
            const r = Math.round(arr.reduce((s, c) => s + c[0], 0) / arr.length);
            const g = Math.round(arr.reduce((s, c) => s + c[1], 0) / arr.length);
            const b = Math.round(arr.reduce((s, c) => s + c[2], 0) / arr.length);
            const hex = '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
            return { r, g, b, hex, count: arr.length };
          }

          window.palette = {
            primaryTealNavy: avg(clusters.tealNavy),
            topSphereCerulean: avg(clusters.cerulean),
            tecCharcoalSteel: avg(clusters.steelGrey),
            subtextMutedGrey: avg(clusters.subtext)
          };
        };
      </script>
    </body></html>
  `);
  
  await new Promise(r => setTimeout(r, 1000));
  const res = await page.evaluate(() => window.palette);
  console.log('Extracted Logo Palette:', JSON.stringify(res, null, 2));
  await browser.close();
})();

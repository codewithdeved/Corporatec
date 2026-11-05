const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'corporatec-research', 'page-content');
const files = fs.readdirSync(dir);

files.forEach(file => {
  const p = path.join(dir, file);
  const html = fs.readFileSync(p, 'utf8');
  const clean = html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
    .replace(/<[^>]+>/g, '\n')
    .split('\n')
    .map(s => s.trim())
    .filter(s => s.length > 2)
    .join('\n');
  console.log('==============================');
  console.log('FILE:', file);
  console.log('==============================');
  console.log(clean);
  console.log('\n\n');
});

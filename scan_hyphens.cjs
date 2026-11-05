const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(fullPath));
    } else if (file.endsWith('.jsx') || file.endsWith('.js')) {
      results.push(fullPath);
    }
  });
  return results;
}

const files = walk('./src');
const textIssues = [];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const lines = content.split('\n');
  lines.forEach((line, idx) => {
    if (line.includes('import ') || line.includes('className=')) return;
    
    // Check for " - " or " — " or " – "
    if (line.includes(' - ') || line.includes(' — ') || line.includes(' – ')) {
      textIssues.push({ file: f, line: idx + 1, text: line.trim() });
    }
    
    // Check for common hyphenated words in copy like "end-to-end", "mission-critical", "high-stakes", "on-site", "well-known"
    const hyphenWords = ['end-to-end', 'mission-critical', 'high-stakes', 'on-site', 'day-one', 'day-zero', 'top-tier', 'full-scope', 'first-class'];
    hyphenWords.forEach(w => {
      if (line.toLowerCase().includes(w)) {
        textIssues.push({ file: f, line: idx + 1, word: w, text: line.trim() });
      }
    });
  });
});

console.log('Text dash issues found:', textIssues.length);
textIssues.forEach(i => console.log(`${i.file}:${i.line} -> ${i.text}`));

const fs = require('fs');
const path = require('path');

function findDashes(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const f of files) {
    const full = path.join(dir, f.name);
    if (f.isDirectory()) {
      findDashes(full);
    } else if (f.name.endsWith('.jsx') || f.name.endsWith('.js')) {
      const content = fs.readFileSync(full, 'utf8');
      const lines = content.split('\n');
      lines.forEach((line, idx) => {
        const trimmed = line.trim();
        // check for unicode dash
        if (/[\u2010-\u2015\u2212]/.test(line)) {
          console.log(`${f.name}:${idx+1} [UNICODE_DASH]: ${trimmed}`);
        }
        // check for hyphens in user facing strings or JSX
        // look for words with hyphens like High-Stakes, zero-downtime, etc.
        const wordHyphens = trimmed.match(/[a-zA-Z0-9]+-[a-zA-Z0-9]+/g);
        if (wordHyphens && !trimmed.startsWith('import ') && !trimmed.includes('className=') && !trimmed.includes('from ') && !trimmed.includes('svg') && !trimmed.includes('path') && !trimmed.includes('stroke') && !trimmed.includes('xmlns')) {
          console.log(`${f.name}:${idx+1} [WORD_HYPHEN]: ${wordHyphens.join(', ')} in: ${trimmed.slice(0, 80)}`);
        }
        // check for standalone dash in text like " - "
        if (/\s+-\s+/.test(trimmed) && !trimmed.startsWith('//') && !trimmed.startsWith('/*')) {
          console.log(`${f.name}:${idx+1} [STANDALONE_HYPHEN]: ${trimmed.slice(0, 80)}`);
        }
      });
    }
  }
}

findDashes(path.join(__dirname, 'src'));

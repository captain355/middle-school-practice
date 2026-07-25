const fs = require('fs');
const c = fs.readFileSync('prisma/seed-questions/english-pep.ts', 'utf8');
const lines = c.split('\n');
let inString = false;
let quote = '';

for (let i = 0; i < lines.length; i++) {
  const l = lines[i];
  for (let j = 0; j < l.length; j++) {
    const ch = l[j];
    if (!inString && (ch === "'" || ch === '"')) {
      inString = true;
      quote = ch;
    } else if (inString && ch === quote) {
      // Check if escaped
      let numBackslashes = 0;
      let k = j - 1;
      while (k >= 0 && l[k] === '\\') { numBackslashes++; k--; }
      if (numBackslashes % 2 === 0) {
        inString = false;
      }
    }
  }
  if (inString) {
    console.log('Line ' + (i + 1) + ' (unterminated): ' + l.substring(0, 100));
  }
}

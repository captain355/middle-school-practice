const fs = require('fs');
const fp = '/opt/middle-school-practice/practice-app/packages/server/prisma/seed-questions/english-pep.ts';
let c = fs.readFileSync(fp, 'utf8');

// Fix 1: nested ASCII double quotes inside double-quoted TS strings
const nq = [
  ['\u610f\u4e3a"\u6211\u4e5f\u5f88\u9ad8\u5174\u89c1\u5230\u4f60"', '\u610f\u4e3a\u201c\u6211\u4e5f\u5f88\u9ad8\u5174\u89c1\u5230\u4f60\u201d'],
  ['\u95ee\u7684\u662f"\u4ed6\u7684"\u540d\u5b57', '\u95ee\u7684\u662f\u201c\u4ed6\u7684\u201d\u540d\u5b57'],
  ['\u8868\u793a"\u7236\u4eb2\u7684"', '\u8868\u793a\u201c\u7236\u4eb2\u7684\u201d'],
  ['\u9075\u5faa"\u5c31\u8fd1\u539f\u5219"', '\u9075\u5faa\u201c\u5c31\u8fd1\u539f\u5219\u201d'],
  ['\u8868\u793a"\u542c\u8d77\u6765\u4e0d\u9519"', '\u8868\u793a\u201c\u542c\u8d77\u6765\u4e0d\u9519\u201d'],
];
let t = 0;
for (const [o, n] of nq) {
  if (c.includes(o)) { c = c.split(o).join(n); t++; console.log('  quote fix: ' + o.substring(0,20) + '...'); }
}

// Fix 2: collapse multi-line single-quoted strings
let lines = c.split('\n');
let newLines = [];
let mlFix = 0;
for (let i = 0; i < lines.length; i++) {
  let line = lines[i];
  // Count unescaped single quotes not inside double quotes
  let inSq = false, inDq = false;
  for (let j = 0; j < line.length; j++) {
    if (line[j] === '\\') { j++; continue; }
    if (line[j] === '"' && !inSq) inDq = !inDq;
    if (line[j] === "'" && !inDq) inSq = !inSq;
  }
  if (inSq && i + 1 < lines.length) {
    newLines.push(line + ' ' + lines[i + 1].trim());
    i++; // skip next line
    mlFix++;
    continue;
  }
  newLines.push(line);
}
if (mlFix > 0) { c = newLines.join('\n'); console.log('  multiline fix: ' + mlFix + ' strings collapsed'); }

// Fix 3: English contractions
const ct = [
  ["What's","What\\'s"],["It's","It\\'s"],["I'm ","I\\'m "],
  ["I'll","I\\'ll"],["Let's","Let\\'s"],["That's","That\\'s"],
  ["don't ","don\\'t "],["doesn't ","doesn\\'t "],["didn't ","didn\\'t "],
  ["isn't ","isn\\'t "],["aren't ","aren\\'t "],["wasn't ","wasn\\'t "],
  ["won't ","won\\'t "],["can't ","can\\'t "],["couldn't ","couldn\\'t "],
  ["wouldn't ","wouldn\\'t "],["shouldn't ","shouldn\\'t "],
  ["you're ","you\\'re "],["they're ","they\\'re "],["we're ","we\\'re "],
];
let ctTotal = 0;
for (const [o, n] of ct) {
  const idx = c.indexOf(o);
  if (idx !== -1) {
    // Only replace inside single-quoted strings
    let result = '';
    let inStr = false, strChar = '';
    for (let j = 0; j < c.length; j++) {
      if (!inStr && (c[j] === "'" || c[j] === '"')) {
        inStr = true; strChar = c[j]; result += c[j];
      } else if (inStr && c[j] === strChar) {
        let bs = 0, k = j - 1;
        while (k >= 0 && c[k] === '\\') { bs++; k--; }
        if (bs % 2 === 0) { inStr = false; result += c[j]; }
        else result += c[j];
      } else if (inStr && strChar === "'" && c.substring(j, j + o.length) === o) {
        result += n; j += o.length - 1; ctTotal++;
      } else {
        result += c[j];
      }
    }
    c = result;
  }
}
if (ctTotal > 0) console.log('  contraction fix: ' + ctTotal + ' replacements');

// Fix 4: do another pass to collapse any remaining multi-line strings
lines = c.split('\n');
newLines = [];
let mlFix2 = 0;
for (let i = 0; i < lines.length; i++) {
  let line = lines[i];
  let inSq = false, inDq = false;
  for (let j = 0; j < line.length; j++) {
    if (line[j] === '\\') { j++; continue; }
    if (line[j] === '"' && !inSq) inDq = !inDq;
    if (line[j] === "'" && !inDq) inSq = !inSq;
  }
  if (inSq && i + 1 < lines.length) {
    newLines.push(line + ' ' + lines[i + 1].trim());
    i++; mlFix2++; continue;
  }
  newLines.push(line);
}
if (mlFix2 > 0) { c = newLines.join('\n'); console.log('  pass2 multiline fix: ' + mlFix2); }

fs.writeFileSync(fp, c, 'utf8');
console.log('\nDone! Total: ' + (t + mlFix + mlFix2 + ctTotal) + ' fixes');
console.log('Now run: cd /opt/middle-school-practice/practice-app/packages/server && npx tsx prisma/seed-questions/index.ts');

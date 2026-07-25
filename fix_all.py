import json

fp = r'C:\Users\X13\AppData\Roaming\TRAE SOLO CN\ModularData\ai-agent\work-mode-projects\6a5ec3aa202f66d316480092\practice-app\packages\server\prisma\seed-questions\english-pep.ts'

with open(fp, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix 1: Replace nested ASCII double quotes inside double-quoted TS strings
# with Unicode left/right double quotation marks
pairs = [
    ('\u610f\u4e3a"\u6211\u4e5f\u5f88\u9ad8\u5174\u89c1\u5230\u4f60"', '\u610f\u4e3a\u201c\u6211\u4e5f\u5f88\u9ad8\u5174\u89c1\u5230\u4f60\u201d'),
    ('\u95ee\u7684\u662f"\u4ed6\u7684"\u540d\u5b57', '\u95ee\u7684\u662f\u201c\u4ed6\u7684\u201d\u540d\u5b57'),
    ('\u8868\u793a"\u7236\u4eb2\u7684"', '\u8868\u793a\u201c\u7236\u4eb2\u7684\u201d'),
    ('\u9075\u5faa"\u5c31\u8fd1\u539f\u5219"', '\u9075\u5faa\u201c\u5c31\u8fd1\u539f\u5219\u201d'),
    ('\u8868\u793a"\u542c\u8d77\u6765\u4e0d\u9519"', '\u8868\u793a\u201c\u542c\u8d77\u6765\u4e0d\u9519\u201d'),
]
for old, new in pairs:
    if old in content:
        content = content.replace(old, new)
        print(f'Fixed nested quotes: {old[:30]}...')

# Fix 2: Collapse multi-line single-quoted strings into single lines
lines = content.split('\n')
new_lines = []
i = 0
multiline_fixes = 0
while i < len(lines):
    line = lines[i]
    # Check if this line has an unclosed single quote string
    # Count single quotes (ignoring escaped ones)
    sq_count = 0
    j = 0
    in_sq = False
    in_dq = False
    while j < len(line):
        ch = line[j]
        if ch == '\\' and j + 1 < len(line):
            j += 2  # skip escaped char
            continue
        if ch == '"' and not in_sq:
            in_dq = not in_dq
        elif ch == "'" and not in_dq:
            in_sq = not in_sq
        j += 1
    
    if in_sq and i + 1 < len(lines):
        # This line has unclosed single quote - merge with next line
        # Replace newline with space to keep string on one line
        merged = line + ' ' + lines[i + 1].strip()
        new_lines.append(merged)
        i += 2
        multiline_fixes += 1
        # Check if merged line is still unclosed
        # Re-scan
        in_sq2 = False
        in_dq2 = False
        j2 = 0
        while j2 < len(merged):
            ch2 = merged[j2]
            if ch2 == '\\' and j2 + 1 < len(merged):
                j2 += 2
                continue
            if ch2 == '"' and not in_sq2:
                in_dq2 = not in_dq2
            elif ch2 == "'" and not in_dq2:
                in_sq2 = not in_sq2
            j2 += 1
        if in_sq2:
            print(f'WARNING: Line {i+1} still unclosed after merge')
        continue
    new_lines.append(line)
    i += 1

if multiline_fixes > 0:
    content = '\n'.join(new_lines)
    print(f'Fixed {multiline_fixes} multi-line strings')

# Fix 3: English contractions in single-quoted strings
contractions = [
    ("What's", "What\\'s"), ("It's", "It\\'s"),
    ("I'm ", "I\\'m "), ("I'll", "I\\'ll"),
    ("Let's", "Let\\'s"), ("That's", "That\\'s"),
    ("don't ", "don\\'t "), ("doesn't ", "doesn\\'t "),
    ("didn't ", "didn\\'t "), ("isn't ", "isn\\'t "),
    ("aren't ", "aren\\'t "), ("wasn't ", "wasn\\'t "),
    ("won't ", "won\\'t "), ("can't ", "can\\'t "),
    ("couldn't ", "couldn\\'t "), ("wouldn't ", "wouldn\\'t "),
    ("shouldn't ", "shouldn\\'t "), ("you're ", "you\\'re "),
    ("they're ", "they\\'re "), ("we're ", "we\\'re "),
]
total_c = 0
for old, new in contractions:
    n = content.count(old)
    if n > 0:
        content = content.replace(old, new)
        total_c += n
        print(f'Fixed contraction: {old} ({n})')

with open(fp, 'w', encoding='utf-8') as f:
    f.write(content)

print(f'\nAll fixes applied: {multiline_fixes} multi-line + {total_c} contractions + nested quotes')
print('Verifying with esbuild...')

# -*- coding: utf-8 -*-
"""
Comprehensive fix for english-pep.ts.
1. Replace ASCII " used as Chinese semantic quotes inside double-quoted strings
   with Unicode \u201c \u201d
2. Escape English contractions (apostrophes) inside single-quoted strings.
"""
import sys

fp = '/opt/middle-school-practice/practice-app/packages/server/prisma/seed-questions/english-pep.ts'
with open(fp, 'r', encoding='utf-8') as f:
    content = f.read()

total = 0

# ===== Fix 1: Nested ASCII double quotes in double-quoted string values =====
# These are explanation lines where the outer string uses " but inner
# Chinese semantic quotes also use ASCII " which breaks esbuild.
# We match by the unique text content and replace with Unicode quotes.

nested_quote_fixes = [
    ('意为"我也很高兴见到你"', '意为\u201c我也很高兴见到你\u201d'),
    ('问的是"他的"名字', '问的是\u201c他的\u201d名字'),
    ('表示"父亲的"', '表示\u201c父亲的\u201d'),
    ('遵循"就近原则"', '遵循\u201c就近原则\u201d'),
    ('表示"听起来不错"', '表示\u201c听起来不错\u201d'),
    # Also check for other patterns
    ('回答是"我也很高兴见到你"', '回答是\u201c我也很高兴见到你\u201d'),
    ('可知问的是"他的"', '可知问的是\u201c他的\u201d'),
    ('需要表示"父亲的"', '需要表示\u201c父亲的\u201d'),
    ('There be 句型遵循"就近原则"', 'There be 句型遵循\u201c就近原则\u201d'),
    ('That sounds good 表示"听起来不错"', 'That sounds good 表示\u201c听起来不错\u201d'),
    # Double check with context
    ("Nice to meet you 的固定回答是 Nice to meet you, too.\uff0c意为", "Nice to meet you 的固定回答是 Nice to meet you, too.\uff0c意为"),
    ("根据回答 His name 可知问的是", "根据回答 His name 可知问的是"),
    ("这里需要表示", "这里需要表示"),
]

for old, new in nested_quote_fixes:
    if old != new and old in content:
        n = content.count(old)
        content = content.replace(old, new)
        total += n
        print(f'  Nested quote fix: {old[:40]}... ({n})')

# ===== Fix 2: scan ALL lines for double-quoted values containing ASCII " =====
# More aggressive: find any line like: key: "...inner..." where inner has "
lines = content.split('\n')
fix2_count = 0
new_lines = []
for line in lines:
    stripped = line.strip()
    # Find property lines with double-quoted string values
    if ': "' in stripped and stripped.endswith('",'):
        # Extract the value between first " and last ",
        first_quote = stripped.index(': "') + 2
        last_comma_quote = stripped.rindex('",')
        inner = stripped[first_quote:last_comma_quote]
        if '"' in inner:
            # Replace inner " with Unicode quotes
            new_inner = inner.replace('"', '\u201c', 1)
            # Find next unescaped " and replace with \u201d
            idx = new_inner.find('"')
            while idx != -1:
                # Alternate between \u201c and \u201d
                count_open = new_inner[:idx].count('\u201c')
                count_close = new_inner[:idx].count('\u201d')
                if count_open > count_close:
                    new_inner = new_inner[:idx] + '\u201d' + new_inner[idx+1:]
                else:
                    new_inner = new_inner[:idx] + '\u201c' + new_inner[idx+1:]
                idx = new_inner.find('"', idx+1)
            # Reconstruct line
            indent = line[:len(line) - len(line.lstrip())]
            key_part = stripped[:first_quote - 2]  # up to : 
            new_line = indent + key_part + ': "' + new_inner + '",'
            # Only apply if we actually changed something
            if new_inner != inner:
                new_lines.append(new_line)
                fix2_count += 1
                continue
    new_lines.append(line)

if fix2_count > 0:
    content = '\n'.join(new_lines)
    total += fix2_count
    print(f'  Aggressive nested quote fix: {fix2_count} lines')

# ===== Fix 3: English contractions in single-quoted strings =====
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
for old, new in contractions:
    n = content.count(old)
    if n > 0:
        content = content.replace(old, new)
        total += n
        print(f'  Contraction: {old} -> escaped ({n})')

# ===== Fix 4: father's inside double-quoted strings =====
# Line 310 has father's inside a "..." string
if "father's" in content:
    # This is inside a double-quoted string, the ' is fine
    # but let's check if there are other issues
    pass

with open(fp, 'w', encoding='utf-8') as f:
    f.write(content)

print(f'\nTotal: {total} changes applied')
print('Done. Now run: cd /opt/middle-school-practice/practice-app/packages/server && npx tsx prisma/seed-questions/index.ts')

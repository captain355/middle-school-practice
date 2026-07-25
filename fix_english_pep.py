# -*- coding: utf-8 -*-
fp = '/opt/middle-school-practice/practice-app/packages/server/prisma/seed-questions/english-pep.ts'
with open(fp, 'r', encoding='utf-8') as f:
    lines = f.readlines()
changed = 0
quote_fixes = {
    48: '    explanation: "Nice to meet you \u7684\u56fa\u5b9a\u56de\u7b54\u662f Nice to meet you, too.\uff0c\u610f\u4e3a\u201c\u6211\u4e5f\u5f88\u9ad8\u5174\u89c1\u5230\u4f60\u201d\u3002",\n',
    57: '    explanation: "\u6839\u636e\u56de\u7b54 His name \u53ef\u77e5\u95ee\u7684\u662f\u201c\u4ed6\u7684\u201d\u540d\u5b57\uff0c\u5e94\u7528 his\u3002",\n',
    309: '    explanation: "\u8fd9\u91cc\u9700\u8981\u8868\u793a\u201c\u7236\u4eb2\u7684\u201d\uff0c\u7528\u540d\u8bcd\u6240\u6709\u683c father\'s\u3002",\n',
    451: '    explanation: "There be \u53e5\u578b\u9075\u5faa\u201c\u5c31\u8fd1\u539f\u5219\u201d\uff0cbe \u52a8\u8bcd\u7684\u5f62\u5f0f\u7531\u7d27\u6328\u7740\u5b83\u7684\u540d\u8bcd\u51b3\u5b9a\u3002a book \u662f\u5355\u6570\uff0c\u6240\u4ee5\u7528 is\u3002",\n',
    745: '    explanation: "That sounds good \u8868\u793a\u201c\u542c\u8d77\u6765\u4e0d\u9519\u201d\uff1bnow \u63d0\u793a\u6b63\u5728\u8fdb\u884c\uff0c\u7528 doing \u5f62\u5f0f\u3002",\n',
}
for line_idx, new_line in quote_fixes.items():
    if line_idx < len(lines):
        lines[line_idx] = new_line
        changed += 1
        print(f'  Fixed line {line_idx + 1}')
content = ''.join(lines)
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
        changed += n
        print(f'  Contraction: {old} -> {new} ({n})')
with open(fp, 'w', encoding='utf-8') as f:
    f.write(content)
print(f'Total changes: {changed}')

import { readFile, access } from 'node:fs/promises';
import { resolve } from 'node:path';
const html = await readFile('dist/dr-johny/index.html', 'utf8');
const refs = [...html.matchAll(/(?:src|href)="([^"]+)"/g)].map(m => m[1]);
for (const ref of new Set(refs)) {
  if (ref.startsWith('/dr-johny/')) await access(resolve('dist', ref.slice(1)));
  if (ref.startsWith('./')) await access(resolve('dist/dr-johny', ref));
}
if (html.includes('Explore treatment')) throw new Error('Repeated treatment label remains');
for (const label of ['Protect your dental health', 'Explore alignment options', 'Discover smile design', 'See restoration options', 'Understand specialist care', 'Plan your child']) {
  if (!html.includes(label)) throw new Error(`Missing treatment action: ${label}`);
}
console.log('Clinic export: all linked assets resolve and six distinct treatment actions are present.');

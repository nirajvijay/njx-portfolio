import { cp, mkdir, access } from 'node:fs/promises';
import { resolve } from 'node:path';

// Run after: cd dr-johny-dental-concept && NJX_BASE_PATH=/dr-johny npm run build
const source = resolve('dr-johny-dental-concept/dist/client');
await access(resolve(source, 'index.html'));
await mkdir('public/dr-johny', { recursive: true });
await cp(resolve(source, 'dr-johny/_next'), 'public/dr-johny/_next', { recursive: true });
for (const asset of ['index.html', 'index.rsc', 'dr-johny.jpg', 'clinic-interior.webp', 'favicon.svg']) {
  await cp(resolve(source, asset), resolve('public/dr-johny', asset));
}
console.log('Synced the clinic export to public/dr-johny. Run npm run build next.');

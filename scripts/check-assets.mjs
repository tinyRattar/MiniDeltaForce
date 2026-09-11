import { access, readFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
import { LOCAL_ICONS } from '../src/data/local-icons.js';
import { CONTAINER_ICON_URLS } from '../src/data/container-icons.js';
import { CONTAINER_TYPES } from '../src/data/containers.js';
import { REGIONS } from '../src/data/expedition.js';
import { GEAR_ICONS } from '../src/data/gear-icons.js';
import { EQUIPMENT, MEDICINES } from '../src/data/equipment.js';
const root = new URL('../', import.meta.url);
const assets = new Set([...Object.values(LOCAL_ICONS), ...Object.values(CONTAINER_ICON_URLS), ...Object.values(GEAR_ICONS), './index.html', './styles/main.css', './src/app.js']);
await Promise.all([...assets].map(asset => access(new URL(asset, root))));
for(const id of [...Object.keys(EQUIPMENT),...Object.keys(MEDICINES)]) {
  assert.ok(GEAR_ICONS[id],`Missing gear/medicine icon: ${id}`);
  const bytes=await readFile(new URL(GEAR_ICONS[id],root));
  assert.equal(bytes.subarray(0,8).toString('hex'),'89504e470d0a1a0a',`Invalid PNG: ${id}`);
}
for (const region of REGIONS) for (const type of region.types) {
  assert.ok(CONTAINER_TYPES[type], `Missing container ${type}`);
  assert.ok(CONTAINER_ICON_URLS[type], `Missing container icon ${type}`);
}
const html = await readFile(new URL('index.html', root), 'utf8');
assert.match(html, /name="viewport"/);
assert.match(html, /type="module"/);
console.log(`${assets.size} local assets verified; all routes have valid containers and icons.`);

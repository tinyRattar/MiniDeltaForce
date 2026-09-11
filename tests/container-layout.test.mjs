import test from 'node:test';
import assert from 'node:assert/strict';
import {containerLayout} from '../src/domain/container-layout.js';
import {CATALOG} from '../src/domain/expedition.js';
import {fits} from '../src/domain/inventory.js';

test('container layout preserves real sizes, empty pickup slots and reveal positions',()=>{
  const entries=['boss-watch','rat-gift','mandel-note','extract-ticket'].map((itemId,i)=>({id:'loot-'+i,itemId,revealed:false}));
  const before=containerLayout(entries,CATALOG);assert.equal(before.length,1);assert.equal(before[0].width,8);assert.equal(before[0].height,8);
  for(const e of before[0].items){assert.deepEqual([e.w,e.h],CATALOG[e.itemId].size);assert.ok(fits(before[0],e,e.id));}
  entries[0].revealed=true;entries[0].taken=true;entries[1].revealed=true;
  const positions=pages=>pages.flatMap(p=>p.items.map(({id,x,y,w,h})=>({id,x,y,w,h})));
  assert.deepEqual(positions(containerLayout(entries,CATALOG)),positions(before));
});
test('all current item sizes and worst-case generated contents fit an 8 by 8 container',()=>{
  for(const item of Object.values(CATALOG)){
    const entries=Array.from({length:4},(_,i)=>({id:'item-'+i,itemId:item.id}));
    entries.push({id:'med',itemId:'consumable-14020000003'});
    const pages=containerLayout(entries,CATALOG);assert.equal(pages.length,1,item.name);
    for(const e of pages[0].items)assert.ok(fits(pages[0],e,e.id));
  }
});

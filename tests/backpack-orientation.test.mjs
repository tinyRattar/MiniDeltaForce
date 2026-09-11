import test from 'node:test';
import assert from 'node:assert/strict';
import {act,newState,loadState,SAVE_KEY,carried,preparation} from '../src/domain/expedition.js';
import {fits} from '../src/domain/inventory.js';
const restore=s=>loadState({getItem:key=>key===SAVE_KEY?JSON.stringify(s):null});
function gear(id='gto'){const s=newState();s.money=2000000;return act(s,{type:'buyGear',id});}
test('old wide backpack saves transpose occupied cells without losing items, charges or medicine capacity',()=>{
  let s=act(gear(),{type:'start',seed:12});delete s.inventoryOrientation;
  const bag=s.run.spaces.find(sp=>sp.key==='bag');bag.width=9;bag.height=5;
  const med=carried(s.run)[0];const source=s.run.spaces.find(sp=>sp.key===med.spaceKey);source.items=source.items.filter(e=>e.id!==med.id);
  bag.items=[{...med,x:8,y:4,w:1,h:1,remaining:17},{id:'legacy-large',itemId:'rat-gift',revealed:true,x:6,y:2,w:2,h:1}];
  const migrated=restore(s),out=migrated.run.spaces.find(sp=>sp.key==='bag');
  assert.deepEqual([out.width,out.height],[5,9]);assert.equal(migrated.money,s.money);
  assert.deepEqual(out.items.map(e=>[e.x,e.y,e.w,e.h]),[[4,8,1,1],[2,6,1,2]]);
  assert.equal(out.items[0].remaining,17);for(const e of out.items)assert.ok(fits(out,e,e.id));
  assert.deepEqual(restore(migrated),migrated);
});
test('old preparation positions migrate once and deployment uses five columns and nine rows',()=>{
  const s=gear();delete s.inventoryOrientation;const item=carried(preparation(s))[0];
  s.loadoutPlacements={[item.id]:{target:'bag',placement:{x:8,y:4,w:1,h:1}}};
  const migrated=restore(s);assert.deepEqual(migrated.loadoutPlacements[item.id].placement,{x:4,y:8,w:1,h:1});
  assert.deepEqual(restore(migrated),migrated);
  const run=act(migrated,{type:'start',seed:7}).run,bag=run.spaces.find(sp=>sp.key==='bag');
  assert.deepEqual([bag.width,bag.height],[5,9]);assert.ok(bag.items.some(e=>e.x===4&&e.y===8));
});

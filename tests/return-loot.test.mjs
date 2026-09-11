import test from 'node:test';
import assert from 'node:assert/strict';
import {act,carried,loadState,SAVE_KEY,CATALOG} from '../src/domain/expedition.js';
import {containerLayout} from '../src/domain/container-layout.js';
import {CONNECTIONS} from '../src/data/map.js';
import {startAtExit} from './fixtures.mjs';
const restore=s=>loadState({getItem:key=>key===SAVE_KEY?JSON.stringify(s):null});
function fixture(){const s=startAtExit();s.run.loot={name:'箱子',items:[{id:'gift',itemId:'rat-gift',revealed:true},{id:'watch',itemId:'boss-watch',revealed:false}]};return s;}

test('returning rotated loot reuses empty cells without moving hidden items or duplicating pickup',()=>{
  let s=fixture();const before=containerLayout(s.run.loot.items,CATALOG)[0].items.find(e=>e.id==='watch');
  s=act(s,{type:'take',id:'gift'});s=act(s,{type:'returnLoot',id:'gift',placement:{x:4,y:4,w:2,h:1}});
  assert.equal(carried(s.run).some(e=>e.id==='gift'),false);assert.equal(s.run.loot.items.filter(e=>e.id==='gift').length,1);
  let layout=containerLayout(s.run.loot.items,CATALOG)[0],returned=layout.items.find(e=>e.id==='gift');
  assert.deepEqual([returned.x,returned.y,returned.w,returned.h],[4,4,2,1]);
  const hidden=layout.items.find(e=>e.id==='watch');assert.deepEqual([hidden.x,hidden.y],[before.x,before.y]);assert.equal(hidden.revealed,false);
  assert.deepEqual(restore(s),s);s=act(s,{type:'take',id:'gift'});assert.equal(carried(s.run).filter(e=>e.id==='gift').length,1);
  assert.throws(()=>act(s,{type:'take',id:'gift'}));
});
test('returning personal medicine preserves remaining dose and cannot overlap or shrink items',()=>{
  let s=fixture();const id=carried(s.run).find(e=>e.itemId==='consumable-14020000003').id;s.run.hp=90;s=act(s,{type:'useMed',id});
  const time=s.run.timeLeft,hp=s.run.hp,money=s.money;
  s=act(s,{type:'returnLoot',id,placement:{x:7,y:7,w:1,h:1}});assert.equal(s.run.loot.items.find(e=>e.id===id).remaining,50);
  assert.equal(s.run.timeLeft,time);assert.equal(s.run.hp,hp);assert.equal(s.money,money);
  const other=carried(s.run)[0],snapshot=structuredClone(s);
  assert.throws(()=>act(s,{type:'returnLoot',id:other.id,placement:{x:7,y:7,w:1,h:1}}),/放不下/);assert.deepEqual(s,snapshot);
  assert.throws(()=>act(s,{type:'returnLoot',id:other.id,placement:{x:4,y:4,w:2,h:2}}),/放不下/);
  s=act(restore(s),{type:'take',id});assert.equal(carried(s.run).find(e=>e.id===id).remaining,50);
  s.run.loot=null;assert.throws(()=>act(s,{type:'returnLoot',id}),/打开/);
});
test('maintenance and parking connect directly in both directions, including active old saves',()=>{
  assert.ok(CONNECTIONS.maintenance.includes('parking'));assert.ok(CONNECTIONS.parking.includes('maintenance'));
  let s=startAtExit();Object.assign(s.run,{locationId:'maintenance',room:{regionId:'maintenance',boxes:[],threat:false},routes:CONNECTIONS.maintenance.filter(id=>id!=='parking')});
  s=restore(s);assert.ok(s.run.routes.includes('parking'));const t=s.run.timeLeft;
  s=act(s,{type:'travel',id:'parking'});assert.equal(s.run.timeLeft,t-90);
  s.run.event=null;s=act(s,{type:'travel',id:'maintenance'});assert.equal(s.run.locationId,'maintenance');
});

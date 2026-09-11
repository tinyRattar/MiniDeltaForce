import { startAtExit, atWestExit } from './fixtures.mjs';
import test from 'node:test';
import assert from 'node:assert/strict';
import { act, newState, loadState, SAVE_KEY, CATALOG, carried, bagValue, safeValue, freeSlots, nearestExtraction, choiceAvailable, RAID_SECONDS, SEARCH_SECONDS, EXTRACT_SECONDS, rank } from '../src/domain/expedition.js';
import { ITEMS } from '../src/data/items.js';
import { CONTAINER_TYPES } from '../src/data/containers.js';
import { REGIONS, REGION_BY_ID, CURIOS } from '../src/data/expedition.js';
import { CONNECTIONS } from '../src/data/map.js';
import { BACKPACKS, EQUIPMENT, MEDICINES } from '../src/data/equipment.js';
import { ENCOUNTERS } from '../src/data/encounters.js';
import { fits, firstFit, organize, usedArea } from '../src/domain/inventory.js';
const start=startAtExit;
const restore=s=>loadState({getItem:key=>key===SAVE_KEY?JSON.stringify(s):null});
function travel(s,id='cement-plant'){return act(s,{type:'travel',id,confirm:true});}
function open(s){return act(s,{type:'open',id:s.run.room.boxes.find(b=>!b.opened).id});}
function reveal(s){while(s.run?.loot?.items.some(e=>!e.revealed))s=act(s,{type:'reveal'});return s;}
function gift(s,itemId='rat-gift'){const e={id:`find-${++s.run.serial}`,itemId,revealed:true};s.run.ground.push(e);return e;}
function pickEvent(s,id,index){s.run.event={id};return act(s,{type:'choose',index});}
function resolve(s,index=1){if(!s.run?.event)return s;const e=ENCOUNTERS.find(e=>e.id===s.run.event.id);if(!choiceAvailable(s.run,e.choices[index]))index=e.choices.findIndex(c=>choiceAvailable(s.run,c));return act(s,{type:'choose',index});}
function toExit(s){while(s.run){if(s.run.loot)s=act(reveal(s),{type:'closeLoot',confirm:true});s=resolve(s);if(!s.run)break;const next=nearestExtraction(s.run).path[0];if(!next)return act(s,{type:'extract',confirm:true});s=travel(s,next);}return s;}

test('all zero-value items are absent from catalog and every container pool',()=>{
  assert.ok(ITEMS.length>200);assert.ok(ITEMS.every(i=>i.value>0));assert.ok(Object.values(CATALOG).every(i=>i.value>0));
  for(const c of Object.values(CONTAINER_TYPES))for(const e of c.pools)assert.ok(CATALOG[e.itemId||e[0]]?.value>0);
});
test('user backpack dimensions and independent rig/pocket compartments are preserved',()=>{
  assert.deepEqual(BACKPACKS.map(b=>b.size),[[3,5],[3,6],[5,4],[5,5],[4,7],[5,6],[5,7],[5,9]]);
  const s=start();assert.deepEqual(s.run.spaces.find(s=>s.kind==='bag')?.width,3);
  assert.equal(s.run.spaces.filter(s=>s.kind==='pockets').length,6);
  assert.ok(s.run.spaces.filter(s=>s.kind==='pockets').every(s=>s.width===1&&s.height===1));
  assert.equal(s.run.spaces.filter(s=>s.kind==='rig').reduce((n,s)=>n+s.width*s.height,0),9);
});
test('packing respects bounds, rotation, collisions and free area versus contiguous space',()=>{
  const space={width:3,height:3,items:[{id:'x',x:1,y:0,w:1,h:3}]};
  assert.equal(usedArea(space),3);assert.equal(firstFit(space,[2,2]),null);
  assert.equal(fits(space,{x:0,y:0,w:2,h:1}),false);
  assert.equal(fits(space,{x:0,y:0,w:1,h:3}),true);
  assert.equal(fits(space,{x:0,y:0,w:1.5,h:1}),false);
  assert.deepEqual(firstFit({width:1,height:2,items:[]},[2,1]),{x:0,y:0,w:1,h:2});
});
test('explicit placement cannot shrink an item, stretch it, or cross pockets',()=>{
  const s=start(),e=gift(s,'rat-gift');
  assert.throws(()=>act(s,{type:'take',source:'ground',id:e.id,target:'pocket-5'}),/放不下/);
  assert.throws(()=>act(s,{type:'take',source:'ground',id:e.id,target:'safeBox',placement:{x:0,y:0,w:1,h:1}}),/放不下/);
  assert.throws(()=>act(s,{type:'take',source:'ground',id:e.id,target:'safeBox',placement:{x:0,y:0,w:1,h:3}}),/放不下/);
  assert.equal(s.run.ground.length,1);
});
test('pickup, rotation, cross-container moves and dropping are atomic and lossless',()=>{
  let s=start(),e=gift(s,'rat-gift');s=act(s,{type:'take',source:'ground',id:e.id,target:'bag',placement:{x:0,y:0,w:1,h:2}});
  s=act(s,{type:'rotate',id:e.id});let item=carried(s.run).find(i=>i.id===e.id);assert.equal(item.w,2);assert.equal(item.h,1);
  s=act(s,{type:'move',id:e.id,target:'safeBox',placement:{x:1,y:1,w:2,h:1}});assert.equal(safeValue(s.run),CATALOG[e.itemId].value);
  const before=structuredClone(s);assert.throws(()=>act(s,{type:'move',id:e.id,target:'pocket-4'}));assert.deepEqual(s,before);
  s=act(s,{type:'drop',id:e.id});assert.equal(safeValue(s.run),0);assert.ok(s.run.ground.some(i=>i.id===e.id));
  s=act(s,{type:'take',source:'ground',id:e.id,target:'bag'});assert.equal(carried(s.run).filter(i=>i.id===e.id).length,1);
});
test('organizing keeps every item and preserves original packing on failure',()=>{
  const space={width:3,height:3,items:[{id:'a',x:0,y:0,w:1,h:2},{id:'b',x:2,y:2,w:1,h:1},{id:'c',x:1,y:0,w:2,h:2}]};
  const result=organize(space);assert.ok(result);assert.deepEqual(result.map(i=>i.id).sort(),['a','b','c']);
  for(const i of result)assert.ok(fits({...space,items:result},i,i.id));
});
test('same seed and saved RNG yield identical unopened routes, boxes and reveals',()=>{
  const a=open(travel(start(2026))),b=open(travel(restore(start(2026))));assert.deepEqual(a,b);assert.deepEqual(restore(a),a);
  assert.deepEqual(act(a,{type:'reveal'}),act(restore(a),{type:'reveal'}));
});
test('hidden items cannot be picked up; one click cannot double-spend or reopen loot',()=>{
  let s=open(travel(start()));const id=s.run.loot.items[0].id,box=s.run.room.boxes[0].id;
  assert.throws(()=>act(s,{type:'take',id}),/揭晓/);assert.throws(()=>act(s,{type:'open',id:box}),/眼前/);
  assert.throws(()=>act(s,{type:'closeLoot',confirm:true}),/揭晓/);s=reveal(s);
  const before=s.run.timeLeft;s=act(s,{type:'closeLoot',confirm:true});assert.equal(s.run.timeLeft,before);assert.throws(()=>act(s,{type:'open',id:box}),/已经搜过/);
});
test('returning to a location after restore never regenerates its searched containers',()=>{
  let s=reveal(open(travel(start())));s=act(s,{type:'closeLoot',confirm:true});const boxes=structuredClone(s.run.room.boxes);
  s=restore(travel(s,'west-extract'));s=resolve(travel(s,'cement-plant'));
  assert.deepEqual(s.run.room.boxes,boxes);assert.throws(()=>act(s,{type:'open',id:boxes[0].id}),/已经搜过/);
});
test('time is charged by actions, reveal/packing costs no time, and zero is a failure',()=>{
  let s=travel(start());assert.equal(s.run.timeLeft,RAID_SECONDS-90);s=open(s);assert.equal(s.run.timeLeft,RAID_SECONDS-90-SEARCH_SECONDS);
  const t=s.run.timeLeft;s=reveal(s);s=act(s,{type:'takeAll'});assert.equal(s.run.timeLeft,t);
  s=act(s,{type:'closeLoot',confirm:true});s.run.timeLeft=SEARCH_SECONDS;s=open(s);assert.equal(s.run,null);assert.equal(s.lastResult.success,false);assert.match(s.lastResult.reason,/时间/);
});
test('nearest extraction uses original connected routes and includes 10 seconds of boarding',()=>{
  const s=travel(start());assert.deepEqual(nearestExtraction(s.run),{id:'west-extract',seconds:100,path:['west-extract']});
  for(const region of REGIONS){const r={locationId:region.id},route=nearestExtraction(r);let prev=r.locationId;for(const next of route.path){assert.ok(CONNECTIONS[prev].includes(next));prev=next;}assert.ok(REGION_BY_ID[route.id].extract);}
  assert.throws(()=>act(s,{type:'extract'}),/撤离点/);
});
test('9 seconds is too late; exactly 10 seconds succeeds; bleeding can still kill during extraction',()=>{
  let s=start();s.run.timeLeft=EXTRACT_SECONDS-1;s=act(s,{type:'extract'});assert.equal(s.lastResult.success,false);
  s=start();s.run.timeLeft=EXTRACT_SECONDS;s=act(s,{type:'extract'});assert.equal(s.lastResult.success,true);
  s=start();s.run.timeLeft=EXTRACT_SECONDS;s.run.hp=2;s.run.bleeding=true;s=act(s,{type:'extract'});assert.equal(s.lastResult.success,false);
});
test('failed extraction preserves only safe-box items and loses exactly the carried gear copy',()=>{
  let state=newState();state.money=100000;state=act(state,{type:'buyGear',id:'small'});let s=atWestExit(act(state,{type:'start',seed:5}));
  const safe=gift(s,'rat-gift'),lost=gift(s,'boss-watch');s=act(s,{type:'take',source:'ground',id:safe.id,target:'safeBox'});s=act(s,{type:'take',source:'ground',id:lost.id,target:'bag'});
  s.run.coins=12345;s.run.timeLeft=9;const wallet=s.money;s=act(s,{type:'extract'});
  assert.equal(s.lastResult.total,CATALOG['rat-gift'].value);assert.equal(s.money,wallet+CATALOG['rat-gift'].value);
  assert.equal(s.owned.small,1);assert.equal(s.owned.universal,0);assert.equal(s.equipment.rig,null);assert.equal(s.equipment.bag,'small');
  assert.equal(s.collection['boss-watch'],undefined);assert.equal(s.collection['rat-gift'],1);assert.equal(s.lastResult.bonus,0);assert.equal(s.lastResult.coins,0);
  assert.throws(()=>act(s,{type:'extract'}),/先开始/);
});
test('successful extraction keeps equipment and pays contracts exactly once',()=>{
  let s=start(),e=gift(s);s=act(s,{type:'take',source:'ground',id:e.id,target:'bag'});s.run.contracts=['boxes','rare'];s.run.stats.boxes=6;s.run.stats.rare=4;
  const wallet=s.money;s=act(s,{type:'extract'});assert.equal(s.lastResult.bonus,52000);assert.equal(s.money,wallet+CATALOG['rat-gift'].value+52000);assert.equal(s.owned.small,1);assert.equal(s.stats.successes,1);
});
test('on failure insured medicine returns to stock while pocket medicine is lost',()=>{
  let s=start();const doses=carried(s.run).filter(e=>e.itemId==='consumable-14020000003');
  s=act(s,{type:'move',id:doses[0].id,target:'safeBox'});s.run.timeLeft=1;s=act(s,{type:'extract'});
  assert.equal(s.medicines['consumable-14020000003'],1);assert.equal(s.lastResult.returnedMeds,1);assert.equal(s.lastResult.total,0);
  assert.deepEqual(restore(s),s);
});
test('medical loadout removes stock only once; surviving unused meds return to stock',()=>{
  let s=start();assert.equal(s.medicines['consumable-14020000003'],0);assert.equal(carried(s.run).filter(e=>e.itemId==='consumable-14020000003').length,2);
  assert.throws(()=>act(s,{type:'start'}));assert.throws(()=>act(s,{type:'buyMed',id:'medkit'}),/特勤处/);
  s=act(s,{type:'extract'});assert.equal(s.medicines['consumable-14020000003'],2);assert.equal(s.lastResult.total,0);
});
test('using an injection heals 60, consumes one dose, costs 8 seconds and cannot resurrect',()=>{
  let s=start(),e=carried(s.run).find(e=>e.itemId==='consumable-14020000003');s.run.hp=30;const t=s.run.timeLeft;
  s=act(s,{type:'useMed',id:e.id});assert.equal(s.run.hp,90);assert.equal(s.run.timeLeft,t-8);assert.ok(!carried(s.run).some(i=>i.id===e.id));assert.throws(()=>act(s,{type:'useMed',id:e.id}));
  let doomed=start(),dose=carried(doomed.run).find(e=>e.itemId==='consumable-14020000003');doomed.run.hp=1;doomed.run.bleeding=true;doomed.run.bleedClock=9;
  doomed=act(doomed,{type:'useMed',id:dose.id});assert.equal(doomed.run,null);assert.equal(doomed.lastResult.success,false);
});
test('bandaging stops accumulated bleed and bag access adds five seconds',()=>{
  let s=start(),e=carried(s.run).find(e=>e.itemId==='bandage');s.run.bleeding=true;s.run.hp=60;s.run.bleedClock=9;
  s=act(s,{type:'useMed',id:e.id});assert.equal(s.run.hp,58);assert.equal(s.run.bleeding,false);assert.equal(s.run.bleedClock,0);
  e=carried(s.run).find(e=>e.itemId==='consumable-14020000003');s=act(s,{type:'move',id:e.id,target:'bag'});const t=s.run.timeLeft;s=act(s,{type:'useMed',id:e.id});assert.equal(s.run.timeLeft,t-13);assert.equal(s.run.hp,100);
});
test('bleeding drains by accumulated action time, not by reading/revealing',()=>{
  let s=travel(start());s.run.bleeding=true;s.run.hp=100;s=open(s);assert.equal(s.run.hp,92);assert.equal(s.run.bleedClock,5);const hp=s.run.hp;s=reveal(s);assert.equal(s.run.hp,hp);
});
test('event choices are deterministic, affordable alternatives exist, gifts do not auto-pack',()=>{
  for(const e of ENCOUNTERS)for(let index=0;index<e.choices.length;index++){
    let s=travel(start(77));s.run.event={id:e.id};s.run.coins=50000;const before=structuredClone(s);s=act(s,{type:'choose',index});assert.ok(s.run);assert.equal(s.run.timeLeft,before.run.timeLeft-e.choices[index].seconds);assert.equal(s.run.event,null);assert.equal(s.eventBook[e.id],1);assert.deepEqual(s,act(restore(before),{type:'choose',index}));assert.throws(()=>act(s,{type:'choose',index}));
    if(e.choices[index].effects.item)assert.ok(s.run.ground.some(i=>i.itemId===e.choices[index].effects.item));
    const poor=start();assert.ok(e.choices.some(c=>choiceAvailable(poor.run,c)));
  }
});
test('rat signal has both genuine gifts and betrayal, patrol can kill an untreated player',()=>{
  let giftCount=0,betrayalCount=0;
  for(let seed=0;seed<100;seed++){const s=pickEvent(travel(start(seed)),'rat-signal',0);if(s.run.ground.some(e=>e.itemId==='rat-gift'))giftCount++;if(s.run.bleeding)betrayalCount++;}
  assert.ok(giftCount>0&&betrayalCount>0);
  let s=travel(start());s.run.hp=10;s=pickEvent(s,'haavk-patrol',0);assert.equal(s.run,null);assert.equal(s.lastResult.success,false);
});
test('ignoring high-risk warning persists and can kill during search; leaving breaks contact',()=>{
  let deaths=0;
  for(let seed=0;seed<100;seed++){let s=travel(start(seed));s=pickEvent(s,'danger-search',0);assert.equal(s.run.room.threat,true);s.run.hp=25;s=open(s);if(!s.run)deaths++;}
  assert.ok(deaths>20&&deaths<95);
  let s=travel(start());s=pickEvent(s,'danger-search',0);s=travel(s,'west-extract');assert.equal(s.run.room.threat,false);
});
test('pity and eighth new search location guarantee purple and gold',()=>{
  for(let seed=1;seed<=80;seed++){
    let s=travel(start(seed));s.run.stats.boxes=3;s.run.pity=3;s=open(s);assert.ok(s.run.loot.items.some(e=>rank(CATALOG[e.itemId])>=3));assert.equal(s.run.pity,0);
    let gold=start(seed);gold.run.stats.rooms=7;gold=resolve(travel(gold));assert.equal(gold.run.room.boxes[0].gilded,true);gold=open(gold);assert.ok(gold.run.loot.items.some(e=>rank(CATALOG[e.itemId])>=4));
  }
});
test('buying/equipping gear charges exact prices, owned spare gear survives, and poor players can restart',()=>{
  let s=newState();s.money=2000000;const wallet=s.money;s=act(s,{type:'buyGear',id:'gto'});assert.equal(s.money,wallet-EQUIPMENT.gto.price);assert.equal(s.equipment.bag,'gto');s=atWestExit(act(s,{type:'start',seed:1}));assert.equal(s.run.spaces.find(s=>s.kind==='bag').width,5);assert.throws(()=>act(s,{type:'equip',id:'small'}));
  s.run.timeLeft=1;s=act(s,{type:'extract'});assert.equal(s.owned.small,1);assert.equal(s.owned.gto,0);
  s.money=0;s.equipment={bag:null,rig:null};s=act(s,{type:'start',seed:2});assert.equal(freeSlots(s.run,'bag'),0);assert.equal(s.run.spaces.length,7);
});
test('v2 migration refunds purchased upgrades, cashes carried loot once, preserves history',()=>{
  const old={version:2,money:100,upgrades:{bag:2,energy:1,luck:0},collection:{'meme-cat':1},stats:{runs:4,boxes:12,best:5000},run:{coins:500,bag:[{itemId:'rat-gift'}]}};
  const s=loadState({getItem:key=>key.includes('v2')?JSON.stringify(old):null});assert.equal(s.money,100+105000+45000+500+CATALOG['rat-gift'].value);assert.equal(s.collection['meme-cat'],1);assert.equal(s.stats.runs,4);assert.deepEqual(restore(s),s);
});
test('invalid inventory saves cannot create overlap or change item sizes on restore',()=>{
  const s=start();s.run.spaces.find(s=>s.kind==='pockets'&&s.items.length).items[0].w=7;const recovered=restore(s);assert.equal(recovered.run,null);assert.equal(recovered.money,s.money);assert.match(recovered.notice,/异常/);
  assert.equal(loadState({getItem:()=>'{bad'}).run,null);assert.equal(loadState({getItem:()=>{throw Error('denied');}}).run,null);
});
test('500 seeded raids cover survival, death, inventory and recovery invariants',()=>{
  let successes=0,failures=0,boxes=0;const events=new Set();
  for(let seed=1;seed<=500;seed++){
    let s=act(newState(),{type:'start',seed});const reckless=seed%3===0;
    for(let step=0;step<45&&s.run;step++){
      if(s.run.event){events.add(s.run.event.id);s=resolve(s,reckless?0:1);if(!s.run)break;}
      s=act(s,{type:'takeAll',source:'ground'});
      if(!reckless&&s.run.hp<55){const med=carried(s.run).find(e=>MEDICINES[e.itemId]?.heal);if(med)s=act(s,{type:'useMed',id:med.id});if(!s.run)break;}
      if(!reckless&&(s.run.timeLeft<nearestExtraction(s.run).seconds+240||s.run.stats.boxes>=6||s.run.hp<25)){s=toExit(s);break;}
      if(s.run.room.boxes.some(b=>!b.opened)&&(step%3!==2||reckless)){
        s=open(s);if(!s.run)break;s=reveal(s);s=act(s,{type:'takeAll'});s=act(s,{type:'closeLoot',confirm:true});
      }else s=travel(s,s.run.routes[(seed+step)%s.run.routes.length]);
      if(!s.run)break;
      assert.deepEqual(restore(s),s);assert.ok(s.run.timeLeft>0&&s.run.hp>0);
      const ids=carried(s.run).map(i=>i.id);assert.equal(ids.length,new Set(ids).size);
      for(const space of s.run.spaces){assert.ok(usedArea(space)<=space.width*space.height);for(const e of space.items)assert.ok(fits(space,e,e.id));}
    }
    if(s.run)s=toExit(s);assert.equal(s.run,null);assert.ok(s.lastResult.total>=0);boxes+=s.lastResult.stats.boxes;s.lastResult.success?successes++:failures++;
  }
  assert.ok(successes>100&&failures>100,`${successes} successes / ${failures} failures`);assert.ok(boxes>1500);assert.equal(events.size,ENCOUNTERS.length);
});

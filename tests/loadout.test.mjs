import test from 'node:test';
import assert from 'node:assert/strict';
import {act,newState,loadState,SAVE_KEY,SPAWNS,carried,preparation,nearestExtraction,extractionAvailable,medRemaining,EXTRACT_SECONDS} from '../src/domain/expedition.js';
import {REGION_BY_ID} from '../src/data/expedition.js';
import {startAtExit,atWestExit} from './fixtures.mjs';
const restore=s=>loadState({getItem:key=>key===SAVE_KEY?JSON.stringify(s):null});
const injection='consumable-14020000003',surgery='consumable-14030000001';

test('random starts cover all six spawn locations, keep RNG and disable the same-side exit',()=>{
  const seen=new Set();
  for(let seed=1;seed<=600;seed++){
    const s=act(newState(),{type:'start',seed}),run=s.run;seen.add(run.spawnId);
    assert.deepEqual(s,act(newState(),{type:'start',seed}));assert.deepEqual(restore(s),s);
    assert.ok(SPAWNS.some(p=>p.id===run.locationId&&p.side===run.spawnSide));
    assert.equal(extractionAvailable(run,'west-extract'),run.spawnSide==='east');
    assert.equal(extractionAvailable(run,'east-extract'),run.spawnSide==='west');
    assert.equal(nearestExtraction(run).id,run.spawnSide==='west'?'east-extract':'west-extract');
    if(!REGION_BY_ID[run.locationId].extract)assert.ok(run.room.boxes.length>0);
    if(run.locationId==='west-extract')assert.throws(()=>act(s,{type:'extract'}),/不可用/);
  }
  assert.equal(seen.size,6);assert.equal(EXTRACT_SECONDS,10);
});
test('partial injections preserve overflow through placement, reload, extraction and next deployment',()=>{
  let s=startAtExit();let item=carried(s.run).find(e=>e.itemId===injection);s.run.hp=85;
  s=act(s,{type:'useMed',id:item.id});item=carried(s.run).find(e=>e.id===item.id);
  assert.equal(s.run.hp,100);assert.equal(item.remaining,45);assert.equal(s.run.timeLeft,1800-8);
  assert.throws(()=>act(s,{type:'useMed',id:item.id}),/无需/);
  s=act(s,{type:'move',id:item.id,target:'safeBox'});s=restore(s);assert.equal(carried(s.run).find(e=>e.id===item.id).remaining,45);
  s=act(s,{type:'extract'});assert.ok(s.medReserves[injection].includes(45));
  s=act(restore(s),{type:'start',seed:6});assert.ok(carried(s.run).some(e=>e.itemId===injection&&e.remaining===45));
  item=carried(s.run).find(e=>e.itemId===injection&&e.remaining===45);s.run.hp=10;s=act(s,{type:'useMed',id:item.id});
  assert.equal(s.run.hp,55);assert.ok(!carried(s.run).some(e=>e.id===item.id));
});
test('two-use surgery occupies one cell and preserves remaining use across a failed insured extraction',()=>{
  let s=act(newState(),{type:'buyMed',id:surgery});s=act(s,{type:'loadMed',id:surgery,count:1});s=atWestExit(act(s,{type:'start',seed:7}));
  let item=carried(s.run).find(e=>e.itemId===surgery);assert.equal(item.w*item.h,1);assert.equal(item.remaining,2);
  s.run.hp=40;s.run.bleeding=true;s=act(s,{type:'useMed',id:item.id});assert.equal(s.run.hp,66);assert.equal(s.run.bleeding,false);
  assert.equal(carried(s.run).find(e=>e.id===item.id).remaining,1);
  s=act(s,{type:'move',id:item.id,target:'safeBox'});s.run.timeLeft=1;s=act(s,{type:'extract'});
  assert.deepEqual(s.medReserves[surgery],[1]);s=atWestExit(act(restore(s),{type:'start',seed:12}));
  item=carried(s.run).find(e=>e.itemId===surgery);s.run.hp=40;s=act(s,{type:'useMed',id:item.id});
  assert.equal(s.run.hp,70);assert.ok(!carried(s.run).some(e=>e.id===item.id));
});
test('preparation commits exact positions without using stock or time; invalid moves are atomic',()=>{
  let s=newState();const before=structuredClone(s.medicines),item=carried(preparation(s)).find(e=>e.itemId===injection);
  s=act(s,{type:'movePrep',id:item.id,target:'safeBox',placement:{x:2,y:2,w:1,h:1}});
  assert.deepEqual(s.medicines,before);assert.equal(s.run,null);s=restore(s);
  const saved=structuredClone(s);assert.throws(()=>act(s,{type:'movePrep',id:item.id,target:'safeBox',placement:{x:3,y:2,w:1,h:1}}));assert.deepEqual(s,saved);
  const expected=preparation(s).spaces;s=act(s,{type:'start',seed:10});assert.deepEqual(s.run.spaces,expected);assert.equal(s.run.timeLeft,1800);
  assert.equal(carried(s.run).find(e=>e.id===item.id).spaceKey,'safeBox');assert.equal(s.medicines[injection],0);
});
test('oversized preparation blocks deployment without losing assets; gear changes reset layout',()=>{
  let s=newState();s.equipment={bag:null,rig:null};s.medicines['field-med']=1;s.medReserves['field-med']=[100];s.loadout['field-med']=1;
  assert.equal(preparation(s).unplaced.length,1);const before=structuredClone(s);assert.throws(()=>act(s,{type:'start',seed:1}),/放不下/);assert.deepEqual(s,before);
  s=act(s,{type:'equip',id:'small'});assert.equal(preparation(s).unplaced.length,0);
  const item=carried(preparation(s))[0];s=act(s,{type:'movePrep',id:item.id,target:'safeBox'});assert.ok(Object.keys(s.loadoutPlacements).length);
  s=act(s,{type:'buyGear',id:'3h'});assert.deepEqual(s.loadoutPlacements,{});assert.equal(preparation(s).spaces[0].width,3);
});
test('old v3 saves expand starter backpack and initialize medicine reserves without losing live cargo',()=>{
  const old=startAtExit();delete old.medReserves;delete old.loadoutPlacements;delete old.run.spawnId;delete old.run.spawnSide;
  old.run.spaces[0].height=4;for(const sp of old.run.spaces)for(const item of sp.items)delete item.remaining;
  const s=restore(old);assert.ok(s.run);assert.equal(s.run.spaces[0].height,5);assert.equal(s.run.spawnSide,'west');
  assert.equal(carried(s.run).length,carried(old.run).length);assert.equal(medRemaining(carried(s.run)[0]),60);
  assert.deepEqual(restore(s),s);
});

import { startAtExit } from './fixtures.mjs';
import test from 'node:test';
import assert from 'node:assert/strict';
import { act, newState, carried, preparation, SAVE_KEY } from '../src/domain/expedition.js';
let serial=0;
async function ui(t,fixture=newState()){
  const saved=new Map([[SAVE_KEY,JSON.stringify(fixture)]]),listeners={};
  const toast={textContent:'',classList:{add(){},remove(){}}};
  const overlay={scrollTop:0,showModal(){},addEventListener(){},querySelectorAll(){return[];}};
  const app={innerHTML:'',addEventListener(type,callback){listeners[type]=callback;},querySelectorAll(){return[];}};
  const storage={getItem:key=>saved.get(key)||null,setItem:(key,value)=>saved.set(key,value)};
  t.mock.method(globalThis,'setTimeout',()=>1);t.mock.method(globalThis,'clearTimeout',()=>{});
  globalThis.window={localStorage:storage,scrollTo(){},addEventListener(){}};
  globalThis.document={activeElement:null,hidden:true,querySelector(selector){return selector==='#app'?app:selector==='#toast'?toast:selector==='#overlay'&&app.innerHTML.includes('<dialog')?overlay:null;},addEventListener(){}};
  await import(`../src/app.js?integration=${++serial}`);
  return {
    html:()=>app.innerHTML,
    state:()=>JSON.parse(saved.get(SAVE_KEY)),
    message:()=>toast.textContent,
    click(action,fields={}) {
      const button={disabled:false,dataset:{action,...Object.fromEntries(Object.entries(fields).map(([k,v])=>[k,String(v)]))}};
      listeners.click({preventDefault(){},target:{closest(){return button;}}});
    },
  };
}

test('UI starts a raid, shows persistent metrics, and highlights the continue-search button',async t=>{
  const app=await ui(t,startAtExit());assert.ok(app.html().indexOf('tactical-hud')<app.html().indexOf('<main>'));
  for(const text of ['剩余时间','背包空位','预计收益','100/100'])assert.ok(app.html().includes(text));
  app.click('travel',{id:'cement-plant'});const id=app.state().run.room.boxes[0].id;app.click('open',{id});app.click('revealAll');
  assert.match(app.html(),/class="continue-search" data-action="closeLoot"/);
  assert.ok(app.html().includes('选择位置 / 放保险'));
  app.click('takeAll',{source:'loot'});assert.ok(carried(app.state().run).length>=3);
  app.click('closeLoot');if(app.html().includes('<dialog'))app.click('confirm');assert.equal(app.state().run.loot,null);
});
test('UI can place ground loot in insurance, rotate it and move to a selected grid cell',async t=>{
  const state=act(newState(),{type:'start',seed:9});const id=`find-${++state.run.serial}`;state.run.ground.push({id,itemId:'rat-gift',revealed:true});
  const app=await ui(t,state);app.click('selectLoot',{id,source:'ground'});assert.ok(app.html().includes('保险箱 3×3'));
  assert.ok(app.html().includes('tactical-hud in-modal'));app.click('place',{target:'safeBox',x:0,y:0});
  assert.equal(app.state().run.spaces.find(s=>s.key==='safeBox').items[0].id,id);
  app.click('selectCarry',{id});app.click('turnSelection');app.click('inventoryTab',{tab:'bag'});app.click('place',{target:'bag',x:1,y:0});
  const e=carried(app.state().run).find(e=>e.id===id);assert.deepEqual([e.spaceKey,e.x,e.y,e.w,e.h],['bag',1,0,2,1]);
  app.click('selectCarry',{id});app.click('drop',{id});assert.ok(app.state().run.ground.some(e=>e.id===id));
});
test('UI can buy gear, equip stock, buy medicines and set the outgoing medical loadout',async t=>{
  const fixture=newState();fixture.money=500000;const app=await ui(t,fixture);app.click('shop');app.click('buyGear',{id:'ga'});assert.equal(app.state().equipment.bag,'ga');
  app.click('shopTab',{tab:'rig'});app.click('buyGear',{id:'g01'});assert.equal(app.state().equipment.rig,'g01');
  app.click('shopTab',{tab:'med'});app.click('buyMed',{id:'medkit'});app.click('loadMed',{id:'medkit',count:2});assert.equal(app.state().loadout.medkit,2);
  app.click('dismiss');app.click('start');assert.equal(carried(app.state().run).filter(e=>e.itemId==='medkit').length,2);
});
test('fatal medical action from the camp HUD shows failure result and does not keep the modal open',async t=>{
  const fixture=act(newState(),{type:'start',seed:1});fixture.run.hp=10;fixture.run.timeLeft=1;
  const med=carried(fixture.run).find(e=>e.itemId==='consumable-14020000003');const app=await ui(t,fixture);
  app.click('home');app.click('medical');app.click('useMed',{id:med.id});assert.ok(app.html().includes('时间不够完成这次行动'));
  app.click('confirm');assert.equal(app.state().run,null);assert.ok(app.html().includes('这趟，回特勤处了。'));assert.equal(app.html().includes('<dialog'),false);
});
test('UI carries a search through extraction and returns unused medicine to stock',async t=>{
  const app=await ui(t,startAtExit());app.click('travel',{id:'cement-plant'});app.click('open',{id:app.state().run.room.boxes[0].id});app.click('revealAll');app.click('takeAll',{source:'loot'});app.click('closeLoot');if(app.html().includes('<dialog'))app.click('confirm');
  app.click('travel',{id:'west-extract'});app.click('extract');app.click('confirm');assert.equal(app.state().lastResult.success,true);assert.ok(app.html().includes('成功带出来了'));assert.equal(app.state().medicines['consumable-14020000003'],2);
});

test('pre-deployment screen displays gear images and all compartments, and carries the chosen layout',async t=>{
  const app=await ui(t);app.click('prep');
  for(const token of ['出战准备','assets/equipment/small.png','assets/equipment/universal.png','data-region="bag"','data-region="rig"','data-region="safeBox"','data-region="pockets"'])assert.ok(app.html().includes(token),token);
  const item=carried(preparation(app.state()))[0];app.click('selectCarry',{id:item.id});app.click('place',{target:'safeBox',x:1,y:2});
  app.click('start');const placed=carried(app.state().run).find(e=>e.id===item.id);assert.deepEqual([placed.spaceKey,placed.x,placed.y],['safeBox',1,2]);
  assert.ok(app.html().includes('time-dial remaining-dial'));assert.ok(app.html().includes('落地'));
});
test('search keeps own inventory on the left, container on the right, and manual placement stays inline',async t=>{
  const app=await ui(t,startAtExit());app.click('travel',{id:'cement-plant'});app.click('open',{id:app.state().run.room.boxes[0].id});app.click('revealAll');
  assert.ok(app.html().indexOf('own-inventory')<app.html().indexOf('container-inventory'));
  for(const kind of ['bag','rig','safeBox','pockets'])assert.ok(app.html().includes('data-region="'+kind+'"'));
  const item=app.state().run.loot.items[0];app.click('selectLoot',{id:item.id,source:'loot'});assert.equal(app.html().includes('<dialog'),false);
  assert.ok(app.html().includes('旋转 ↻'));assert.ok(app.html().includes('data-drag-source="loot"'));
});

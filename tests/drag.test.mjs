import test from 'node:test';
import assert from 'node:assert/strict';
import {gridDrop,installDragging} from '../src/ui/drag.js';
const grid={dataset:{space:'safeBox',width:'3',height:'3'},getBoundingClientRect:()=>({left:100,top:200,right:250,bottom:350,width:150,height:150}),classList:{add(){},remove(){}}};
test('drag coordinate mapping respects bounds and row/column orientation',()=>{
  assert.deepEqual(gridDrop(grid,101,201),{target:'safeBox',x:0,y:0});
  assert.deepEqual(gridDrop(grid,249,299),{target:'safeBox',x:2,y:1});
  for(const [x,y] of [[99,201],[250,201],[101,350],[101,199]])assert.equal(gridDrop(grid,x,y),null);
});
test('pointer dragging preserves normal clicks, handles touch drop and cancellation',()=>{
  const listeners={},calls=[],captures=new Set();let removed=0;
  const root={addEventListener:(type,fn)=>listeners[type]=fn,setPointerCapture:id=>captures.add(id),hasPointerCapture:id=>captures.has(id),releasePointerCapture:id=>captures.delete(id)};
  const item={dataset:{dragId:'prep-injection-0',dragSource:'carry'},classList:{contains:name=>name==='grid-item'},querySelector:()=>({textContent:'注射器'}),closest:()=>null};
  const target={closest:selector=>selector==='[data-drag-id]'||selector==='button'?item:null};
  const documentBefore=globalThis.document;
  globalThis.document={createElement:()=>({style:{},remove(){removed++;}}),body:{append(){}},elementFromPoint:()=>({closest:s=>s==='.inventory-grid'?grid:null})};
  const event=(x,y,extra={})=>({button:0,isPrimary:true,pointerId:1,clientX:x,clientY:y,target,preventDefault(){},...extra});
  try{
    installDragging(root,{select:(...a)=>calls.push(['select',...a]),drop:p=>calls.push(['drop',p]),cancel:()=>calls.push(['cancel'])});
    listeners.pointerdown(event(105,205));assert.equal(captures.size,0);
    listeners.pointerup(event(105,205));assert.deepEqual(calls,[]);
    let suppressed=false;listeners.click({preventDefault(){},stopImmediatePropagation(){suppressed=true;}});assert.equal(suppressed,false);
    listeners.pointerdown(event(105,205,{pointerType:'touch'}));listeners.pointermove(event(190,260,{pointerType:'touch'}));assert.equal(captures.size,1);
    listeners.pointerup(event(190,260));assert.deepEqual(calls,[['select','carry','prep-injection-0'],['drop',{target:'safeBox',x:1,y:1}]]);assert.equal(captures.size,0);assert.equal(removed,1);
    listeners.click({preventDefault(){},stopImmediatePropagation(){suppressed=true;}});assert.equal(suppressed,true);
    listeners.pointerdown(event(105,205));listeners.pointermove(event(190,260));listeners.pointercancel();assert.equal(calls.at(-1)[0],'cancel');assert.equal(removed,2);
  }finally{globalThis.document=documentBefore;}
});

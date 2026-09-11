import { ITEMS, QUALITY_ORDER } from '../data/items.js?v=3.1.3';
import { preserveContainerLayout } from './container-layout.js?v=3.1.3';
import { CONTAINER_TYPES } from '../data/containers.js?v=3.1.3';
import { REGIONS, REGION_BY_ID, CURIOS, CONTRACTS } from '../data/expedition.js?v=3.1.3';
import { CONNECTIONS, START_LOCATION_ID } from '../data/map.js?v=3.1.3';
import { EQUIPMENT, MEDICINES } from '../data/equipment.js?v=3.1.3';
import { ENCOUNTERS } from '../data/encounters.js?v=3.1.3';
import { fits, firstFit, usedArea, organize } from './inventory.js?v=3.1.3';

export const SAVE_KEY = 'mini-delta-force-expedition-v3';
export const RAID_SECONDS = 30 * 60;
export const SEARCH_SECONDS = 45;
export const EXTRACT_SECONDS = 10;
const LEGACY_CURIOS = [
  ['meme-fish','带薪摸鱼许可证',18888,'purple'], ['meme-cake','老板画的大饼',66666,'gold'],
  ['meme-duck','嘴硬的鸭子',23333,'purple'], ['meme-stone','情绪稳定的石头',8888,'blue'],
  ['meme-cat','纸箱的真正主人',88888,'gold'], ['meme-ticket','下次一定兑换券',16888,'purple'],
  ['meme-disc','永不放弃的磁带',233333,'red'], ['meme-crown','欧皇体验卡',77777,'gold'],
].map(([id,name,value,quality]) => ({id,name,value,quality,size:[1,1],insure:true,story:'v2 冒险纪念藏品'}));
export const CATALOG = Object.fromEntries([...ITEMS, ...CURIOS, ...LEGACY_CURIOS].filter(i => i.value > 0).map(i => [i.id, { ...i, ...(MEDICINES[i.id] ? { value: MEDICINES[i.id].price, symbol: MEDICINES[i.id].symbol } : {}) }]));
export const QUALITY_NAMES = { white:'普通',green:'精良',blue:'稀有',purple:'史诗',gold:'传奇',red:'传说' };
const pools = QUALITY_ORDER.map(q => ITEMS.filter(i => i.value > 0 && i.quality === q && i.id.startsWith('collectible-')));
export const money = n => Math.round(n).toLocaleString('zh-CN');
export const clock = seconds => `${String(Math.floor(Math.max(0,seconds)/60)).padStart(2,'0')}:${String(Math.max(0,seconds)%60).padStart(2,'0')}`;
export const rank = item => QUALITY_ORDER.indexOf(item.quality);
export const getSpaces = run => run.spaces;
export const carried = run => run.spaces.flatMap(s => s.items.map(item => ({...item, spaceKey:s.key, kind:s.kind})));
export const bagValue = run => carried(run).reduce((n,e) => n + (MEDICINES[e.itemId] ? 0 : CATALOG[e.itemId].value), 0);
export const safeValue = run => run.spaces.filter(s => s.kind === 'safeBox').flatMap(s=>s.items).reduce((n,e)=>n+(MEDICINES[e.itemId]?0:CATALOG[e.itemId].value),0);
export const freeSlots = (run, kind) => run.spaces.filter(s=>!kind || s.kind===kind).reduce((n,s)=>n+s.width*s.height-usedArea(s),0);
export const contractProgress = (run,id) => run.stats[id] || 0;
export const contractBonus = run => CONTRACTS.filter(c=>run.contracts.includes(c.id)&&contractProgress(run,c.id)>=c.target).reduce((n,c)=>n+c.reward,0);
export const estimatedYield = run => bagValue(run)+run.coins+contractBonus(run);
export const travelSeconds = id => REGION_BY_ID[id].risk === '高' ? 120 : 90;
export const SPAWNS = [
  {id:'west-extract',side:'west'}, {id:'pipe-zone',side:'west'},
  {id:'admin-west',side:'west'}, {id:'admin-east',side:'east'},
  {id:'field-camp',side:'east'}, {id:'visitor-center',side:'east'},
];
export const extractionAvailable = (run,id=run.locationId) => Boolean(REGION_BY_ID[id]?.extract) && id !== (run.spawnSide==='east'?'east-extract':'west-extract');
export const medCapacity = id => MEDICINES[id]?.capacity || MEDICINES[id]?.uses || 1;
export const medRemaining = e => e.remaining ?? medCapacity(e.itemId);
export const medLabel = e => MEDICINES[e.itemId] ? '剩余 '+medRemaining(e)+'/'+medCapacity(e.itemId)+(MEDICINES[e.itemId].capacity?' 点':' 次') : '';
const fail = text => { throw Error(text); };
const nonnegative = n => Number.isFinite(n) ? Math.max(0, Math.floor(n)) : 0;

export function newState() {
  return {version:3,money:50000,owned:{...Object.fromEntries(Object.keys(EQUIPMENT).map(id=>[id,0])),small:1,universal:1},equipment:{bag:'small',rig:'universal'},
    medicines:{'consumable-14020000003':2,medkit:1,bandage:2,'field-med':0,'consumable-14030000001':0},
    loadout:{'consumable-14020000003':2,medkit:0,bandage:1,'field-med':0,'consumable-14030000001':0},
    medReserves:{'consumable-14020000003':[60,60],medkit:[80],bandage:[1,1],'field-med':[],'consumable-14030000001':[]},loadoutPlacements:{},collection:{},eventBook:{},stats:{runs:0,successes:0,boxes:0,best:0},run:null,lastResult:null};
}
function entriesValid(space, seen) {
  if (!Array.isArray(space.items)) return false;
  return space.items.every(e => {
    const item = CATALOG[e.itemId];
    if (MEDICINES[e.itemId] && (!Number.isInteger(medRemaining(e)) || medRemaining(e)<=0 || medRemaining(e)>medCapacity(e.itemId))) return false;
    if (!item || typeof e.id !== 'string' || seen.has(e.id)) return false;
    seen.add(e.id);
    return ((e.w===item.size[0]&&e.h===item.size[1])||(e.w===item.size[1]&&e.h===item.size[0])) && fits(space,e,e.id);
  });
}
function validRun(run) {
  if (!run || !Number.isInteger(run.rng) || !Number.isInteger(run.serial) || !Number.isInteger(run.timeLeft) || run.timeLeft<=0 || run.timeLeft>RAID_SECONDS || !Number.isFinite(run.hp) || run.hp<=0 || run.hp>100) return false;
  if (!SPAWNS.some(s=>s.id===run.spawnId&&s.side===run.spawnSide)) return false;
  if (!REGION_BY_ID[run.locationId] || !Array.isArray(run.routes) || !run.routes.every(id => CONNECTIONS[run.locationId].includes(id)) || !run.roomCache || !Array.isArray(run.path) || !run.path.every(id=>REGION_BY_ID[id])) return false;
  if (!run.stats || !['rooms','boxes','events','rare'].every(k=>Number.isInteger(run.stats[k])&&run.stats[k]>=0) || !Array.isArray(run.seenEvents) || !Array.isArray(run.log) || !Array.isArray(run.contracts) || !run.contracts.every(id=>CONTRACTS.some(c=>c.id===id))) return false;
  if (![run.coins,run.luck,run.pity,run.bleedClock].every(n=>Number.isFinite(n)&&n>=0)) return false;
  const expected = createSpaces(run.equipment || {}), seen = new Set();
  if (!Array.isArray(run.spaces)||run.spaces.length!==expected.length) return false;
  if (!run.spaces.every((s,i)=>s.key===expected[i].key && s.kind===expected[i].kind && s.width===expected[i].width && s.height===expected[i].height && entriesValid(s,seen))) return false;
  const validRoom = r => r && REGION_BY_ID[r.regionId] && Array.isArray(r.boxes) && r.boxes.every(b=>CONTAINER_TYPES[b.typeId]&&typeof b.id==='string');
  if (!validRoom(run.room) || Object.values(run.roomCache).some(r=>!validRoom(r))) return false;
  if (!Array.isArray(run.ground) || run.ground.some(e=>!CATALOG[e.itemId])) return false;
  if (run.loot && (!Array.isArray(run.loot.items)||run.loot.items.some(e=>!CATALOG[e.itemId]))) return false;
  return !run.event || ENCOUNTERS.some(e=>e.id===run.event.id);
}
export function loadState(storage) {
  try {
    const saved = JSON.parse(storage.getItem(SAVE_KEY));
    if (saved?.version === 3) {
      const state = {...newState(),...saved,money:nonnegative(saved.money)};
      state.owned = Object.fromEntries(Object.keys(EQUIPMENT).map(id=>[id,nonnegative(saved.owned?.[id])]));
      state.equipment = Object.fromEntries(['bag','rig'].map(kind=>[kind,EQUIPMENT[saved.equipment?.[kind]]?.kind===kind&&state.owned[saved.equipment[kind]] ? saved.equipment[kind] : null]));
      for (const key of ['medicines','loadout']) state[key]=Object.fromEntries(Object.keys(MEDICINES).map(id=>[id,nonnegative(saved[key]?.[id])]));
      state.medReserves = Object.fromEntries(Object.keys(MEDICINES).map(id=>[id,Array.from({length:state.medicines[id]},(_,i)=>{const n=saved.medReserves?.[id]?.[i];return Number.isInteger(n)&&n>0&&n<=medCapacity(id)?n:medCapacity(id);})]));
      state.loadoutPlacements = saved.loadoutPlacements || {};
      if(state.run){
        state.run.spawnId ??= 'west-extract'; state.run.spawnSide ??= 'west';
        const bag=state.run.spaces?.find(s=>s.key==='bag');
        if(state.run.equipment?.bag==='small'&&bag?.width===3&&bag.height===4){bag.height=5;bag.label=EQUIPMENT.small.name;}
      }
      state.collection = Object.fromEntries(Object.entries(saved.collection||{}).filter(([id,n])=>CATALOG[id]&&nonnegative(n)).map(([id,n])=>[id,nonnegative(n)]));
      state.eventBook = Object.fromEntries(ENCOUNTERS.filter(e=>nonnegative(saved.eventBook?.[e.id])).map(e=>[e.id,nonnegative(saved.eventBook[e.id])]));
      state.stats=Object.fromEntries(Object.keys(newState().stats).map(k=>[k,nonnegative(saved.stats?.[k])]));
      if (state.run&&!validRun(state.run)) { state.run=null; state.notice='进行中的存档格式异常，已保留营地资产并返回整备。'; }
      if(state.run)state.run.routes=[...CONNECTIONS[state.run.locationId]];
      const r=state.lastResult;
      if (r&&(!Array.isArray(r.items)||r.items.some(e=>!CATALOG[e.itemId])||!r.stats||!Array.isArray(r.newItems)||!Array.isArray(r.lostEquipment)||!['total','cargo','coins','bonus','lostValue'].every(k=>Number.isFinite(r[k])))) state.lastResult=null;
      return state;
    }
    const state=newState();
    const old=JSON.parse(storage.getItem('mini-delta-force-expedition-v2'))||JSON.parse(storage.getItem('mini-delta-force-save-v1'));
    if (old) {
      state.money=nonnegative(old.money);
      state.collection=Object.fromEntries(Object.entries(old.collection||{}).filter(([id])=>CATALOG[id]));
      const refund=Object.entries({bag:35000,energy:45000,luck:60000}).reduce((n,[key,price])=>{const level=Math.min(4,nonnegative(old.upgrades?.[key]));return n+price*level*(level+1)/2;},0);
      state.money+=refund+nonnegative(old.run?.coins);
      for (const e of [...(Array.isArray(old.stash)?old.stash:[]),...(Array.isArray(old.run?.bag)?old.run.bag:[])]) if(CATALOG[e.itemId]) {
        state.money+=CATALOG[e.itemId].value; state.collection[e.itemId]=(state.collection[e.itemId]||0)+1;
      }
      state.stats={...newState().stats,runs:nonnegative(old.stats?.runs),successes:nonnegative(old.stats?.runs),boxes:nonnegative(old.stats?.boxes),best:nonnegative(old.stats?.best)};
      state.notice=`已保留旧资金与收藏，旧局已装包物品已兑现，永久升级退还 ${money(refund)}。本轮赠送初始背包、胸挂与药品，原存档仍保留。`;
    }
    return state;
  } catch { const state=newState();state.notice='无法读取旧记录，已建立新的本机存档。';return state; }
}
function random(run) {run.rng=(Math.imul(1664525,run.rng)+1013904223)>>>0;return run.rng/4294967296;}
function pick(run,array){return array[Math.floor(random(run)*array.length)];}
function sample(run,array,count){const copy=[...array],result=[];while(copy.length&&result.length<count)result.push(copy.splice(Math.floor(random(run)*copy.length),1)[0]);return result;}
function log(run,text){run.log.unshift(text);run.log=run.log.slice(0,40);}
function entry(run,itemId,revealed=false){return{id:`find-${++run.serial}`,itemId,revealed,...(MEDICINES[itemId]?{remaining:medCapacity(itemId)}:{})};}
export function createSpaces(equipment) {
  const spaces=[];
  const add=(key,kind,label,[width,height])=>spaces.push({key,kind,label,width,height,items:[]});
  if(EQUIPMENT[equipment.bag]?.kind==='bag')add('bag','bag',EQUIPMENT[equipment.bag].name,EQUIPMENT[equipment.bag].size);
  if(EQUIPMENT[equipment.rig]?.kind==='rig')EQUIPMENT[equipment.rig].slots.forEach((size,i)=>add(`rig-${i}`,'rig',`胸挂仓 ${i+1}`,size));
  add('safeBox','safeBox','保险箱',[3,3]);
  for(let i=0;i<6;i++)add(`pocket-${i}`,'pockets',`口袋 ${i+1}`,[1,1]);
  return spaces;
}
function put(run,item,targetKey=null,placement=null) {
  const metadata=CATALOG[item.itemId];
  if(placement&&!((placement.w===metadata.size[0]&&placement.h===metadata.size[1])||(placement.w===metadata.size[1]&&placement.h===metadata.size[0])))return false;
  const order=MEDICINES[item.itemId]?['pockets','rig','bag']:['bag','rig','pockets'];
  const spaces=targetKey?run.spaces.filter(s=>s.key===targetKey):order.flatMap(kind=>run.spaces.filter(s=>s.kind===kind));
  for(const space of spaces){
    if(space.kind==='safeBox'&&metadata.insure===false)continue;
    const p=placement||(firstFit(space,metadata.size));
    if(p&&fits(space,p)){space.items.push({...item,...p});return true;}
  }
  return false;
}
export function preparation(state) {
  const run={equipment:{...state.equipment},spaces:createSpaces(state.equipment),unplaced:[]};
  const pending=[];
  for(const id of Object.keys(MEDICINES))for(let i=0;i<Math.min(state.loadout[id]||0,state.medicines[id]||0);i++)pending.push({id:'prep-'+id+'-'+i,itemId:id,revealed:true,remaining:state.medReserves?.[id]?.[i]??medCapacity(id)});
  // Reserve every explicit position before automatically packing other supplies.
  for(const item of pending.filter(e=>state.loadoutPlacements?.[e.id])){const p=state.loadoutPlacements[item.id];if(!put(run,item,p.target,p.placement))run.unplaced.push(item);}
  for(const item of pending.filter(e=>!state.loadoutPlacements?.[e.id]))if(!put(run,item))run.unplaced.push(item);
  return run;
}
function spend(run,seconds){
  run.timeLeft=Math.max(0,run.timeLeft-seconds);
  if(run.bleeding){const ticks=run.bleedClock+seconds;run.hp=Math.max(0,run.hp-Math.floor(ticks/10)*2);run.bleedClock=ticks%10;}
  return run.timeLeft>0&&run.hp>0;
}
function requireFree(run){if(run.loot)fail('先收好眼前的箱子。');if(run.event)fail('先处理眼前的遭遇；可以先从医疗面板用药。');}
function qualityIndex(run,boost){const roll=random(run)*100,b=Math.min(10,boost);return roll>=99.2-b*.2?5:roll>=94-b*.9?4:roll>=74-b*2?3:roll>=39?2:roll>=12?1:0;}
function lootItem(run,typeId,q){const theme=CONTAINER_TYPES[typeId].pools.map(e=>CATALOG[e.itemId||e[0]]).filter(i=>i?.id.startsWith('collectible-')&&rank(i)===q);return pick(run,theme.length?theme:pools[q]);}
function effects(run,fx={}){
  const damage=(fx.damage||0)+(fx.damageRange?fx.damageRange[0]+Math.floor(random(run)*(fx.damageRange[1]-fx.damageRange[0]+1)):0);
  run.hp=Math.max(0,run.hp-damage);
  if(run.hp<=0)return;
  run.hp=Math.min(100,run.hp+(fx.heal||0));
  if(fx.bleed)run.bleeding=true;
  if(fx.stopBleed){run.bleeding=false;run.bleedClock=0;}
  if(fx.threat)run.room.threat=true;
  if(fx.clearThreat)run.room.threat=false;
  run.coins=Math.max(0,run.coins+(fx.coins||0));run.luck=Math.min(10,run.luck+(fx.luck||0));
  if(fx.item)run.ground.push(entry(run,fx.item,true));
}
export function choiceAvailable(run,choice){return run.coins>=(choice.requires||0);}
export function nearestExtraction(run){
  const queue=[{id:run.locationId,seconds:EXTRACT_SECONDS,path:[]}],seen=new Set();
  while(queue.length){queue.sort((a,b)=>a.seconds-b.seconds);const node=queue.shift();if(seen.has(node.id))continue;seen.add(node.id);
    if(extractionAvailable(run,node.id))return node;
    for(const id of CONNECTIONS[node.id])if(!seen.has(id))queue.push({id,seconds:node.seconds+travelSeconds(id),path:[...node.path,id]});
  }
}
function settle(state,success,reason){
  const run=state.run,all=carried(run),items=all.filter(e=>success||e.kind==='safeBox');
  const collectibles=items.filter(e=>!MEDICINES[e.itemId]);
  for(const item of items.filter(e=>MEDICINES[e.itemId])){
    const id=item.itemId;state.medReserves[id]??=Array(state.medicines[id]||0).fill(medCapacity(id));
    state.medReserves[id].push(medRemaining(item));state.medicines[id]=(state.medicines[id]||0)+1;
  }
  state.loadoutPlacements={};
  const cargo=collectibles.reduce((n,e)=>n+CATALOG[e.itemId].value,0),coins=success?run.coins:0,bonus=success?contractBonus(run):0;
  const newItems=[...new Set(collectibles.map(e=>e.itemId))].filter(id=>!state.collection[id]);
  for(const item of collectibles)state.collection[item.itemId]=(state.collection[item.itemId]||0)+1;
  const lostEquipment=[];
  if(!success)for(const kind of ['bag','rig']){const id=run.equipment[kind];if(id){lostEquipment.push(id);state.owned[id]=Math.max(0,(state.owned[id]||0)-1);if(!state.owned[id])state.equipment[kind]=null;}}
  const lostValue=success?0:all.filter(e=>e.kind!=='safeBox').reduce((n,e)=>n+CATALOG[e.itemId].value,0)+lostEquipment.reduce((n,id)=>n+EQUIPMENT[id].price,0)+run.coins;
  const total=cargo+coins+bonus;state.money+=total;state.stats.runs++;state.stats.successes+=success?1:0;state.stats.boxes+=run.stats.boxes;state.stats.best=Math.max(state.stats.best,total);
  state.lastResult={success,reason,cargo,coins,bonus,total,lostValue,lostEquipment,stats:run.stats,newItems,items:collectibles,returnedMeds:items.filter(e=>MEDICINES[e.itemId]).length,log:run.log,path:run.path};state.run=null;
}
export function act(previous,action){
  const state=structuredClone(previous);state.medReserves??={};state.loadoutPlacements??={};
  if(['movePrep','organizePrep','resetPrep'].includes(action.type)){
    if(state.run)fail('战局中不能修改出战配置。');
    if(action.type==='resetPrep'){state.loadoutPlacements={};return state;}
    const draft=preparation(state);if(draft.unplaced.length)fail('有药品放不下，请先减少携带或重新自动摆放。');
    const changed=act({...state,run:{...draft,hp:100,timeLeft:RAID_SECONDS}}, {...action,type:action.type==='movePrep'?'move':'organize'}).run;
    state.loadoutPlacements=Object.fromEntries(carried(changed).map(e=>[e.id,{target:e.spaceKey,placement:{x:e.x,y:e.y,w:e.w,h:e.h}}]));return state;
  }
  if(['buyGear','equip','buyMed','loadMed'].includes(action.type)){
    if(state.run)fail('回到特勤处后才能购买和整备。');
    if(action.type==='buyGear'||action.type==='equip'){
      const gear=EQUIPMENT[action.id];if(!gear)fail('没有这件装备。');
      if(action.type==='buyGear'){if(state.money<gear.price)fail('资金不足。');state.money-=gear.price;state.owned[gear.id]=(state.owned[gear.id]||0)+1;}
      if(!state.owned[gear.id])fail('请先购买装备。');state.equipment[gear.kind]=gear.id;state.loadoutPlacements={};
    }else{
      const med=MEDICINES[action.id];if(!med)fail('没有这种药品。');
      if(action.type==='buyMed'){if(state.money<med.price)fail('资金不足。');state.money-=med.price;state.medReserves[action.id]??=Array(state.medicines[action.id]||0).fill(medCapacity(action.id));state.medReserves[action.id].push(medCapacity(action.id));state.medicines[action.id]=(state.medicines[action.id]||0)+1;}
      else{const n=action.count;if(!Number.isInteger(n)||n<0||n>state.medicines[action.id]||n>12)fail('携带数量不可用。');state.loadout[action.id]=n;state.loadoutPlacements={};}
    }
    return state;
  }
  if(action.type==='start'){
    if(state.run)fail('当前战局还没结束。');
    const run={rng:(action.seed??Date.now())>>>0,serial:0,timeLeft:RAID_SECONDS,hp:100,bleeding:false,bleedClock:0,equipment:{...state.equipment},spaces:createSpaces(state.equipment),coins:0,luck:0,pity:0,ground:[],loot:null,event:null,eventResult:null,locationId:START_LOCATION_ID,room:{regionId:START_LOCATION_ID,boxes:[],threat:false},roomCache:{},routes:[...CONNECTIONS[START_LOCATION_ID]],path:[START_LOCATION_ID],seenEvents:[],log:[],stats:{rooms:0,boxes:0,events:0,rare:0},contracts:[]};
    run.contracts=sample(run,CONTRACTS,2).map(c=>c.id);
    const spawn=pick(run,SPAWNS),region=REGION_BY_ID[spawn.id];
    run.spawnId=spawn.id;run.spawnSide=spawn.side;run.locationId=spawn.id;run.path=[spawn.id];run.routes=[...CONNECTIONS[spawn.id]];
    run.stats.rooms=region.extract?0:1;
    run.room={regionId:spawn.id,threat:false,boxes:sample(run,region.types,Math.min(3,region.types.length)).map((typeId,i)=>({id:spawn.id+'-'+i,typeId,opened:false,gilded:false}))};
    const draft=preparation(state);if(draft.unplaced.length)fail('选择的药品放不下，请减少携带数量或重新摆放。');run.spaces=draft.spaces;
    for(const id of Object.keys(MEDICINES)){const count=Math.min(state.loadout[id]||0,state.medicines[id]||0);state.medicines[id]-=count;if(state.medReserves[id])state.medReserves[id].splice(0,count);}
    log(run,'落地：'+region.name+'；本局前往'+(spawn.side==='west'?'东部':'西部')+'撤离点，接应 10 秒。');
    state.run=run;return state;
  }
  const run=state.run;if(!run)fail('先开始一场战局。');
  switch(action.type){
    case 'travel':{
      requireFree(run);if(!run.routes.includes(action.id))fail('这里不是相邻地点。');
      if(run.ground.length&&!action.confirm)fail('还有地面物品没有带走。');
      if(!spend(run,travelSeconds(action.id)))break;
      run.roomCache[run.locationId]=structuredClone(run.room);run.ground=[];run.locationId=action.id;
      const region=REGION_BY_ID[action.id],fresh=!run.roomCache[action.id];
      if(fresh&&!region.extract)run.stats.rooms++;
      run.room=fresh?{regionId:region.id,threat:false,boxes:sample(run,region.types,Math.min(3,region.types.length)).map((typeId,i)=>({id:`${region.id}-${i}`,typeId,opened:false,gilded:run.stats.rooms===8&&i===0}))}:structuredClone(run.roomCache[action.id]);
      // Leaving breaks contact, but never regenerates searched containers.
      run.room.threat=false;run.routes=[...CONNECTIONS[action.id]];run.path.push(action.id);run.eventResult=null;
      if(!region.extract&&(fresh&&run.stats.rooms>1&&(run.stats.rooms%2===0||random(run)<.45)||!fresh&&random(run)<.2)){
        const unseen=ENCOUNTERS.filter(e=>!run.seenEvents.includes(e.id));if(unseen.length)run.event={id:pick(run,unseen).id};
      }
      log(run,`抵达${region.name}，耗时 ${travelSeconds(action.id)} 秒${run.event?'；有新的遭遇。':'。'}`);break;
    }
    case 'open':{
      requireFree(run);const box=run.room.boxes.find(b=>b.id===action.id);if(!box||box.opened)fail('这个容器已经搜过了。');
      if(!spend(run,SEARCH_SECONDS))break;
      box.opened=true;run.stats.boxes++;
      if(run.room.threat&&random(run)<.65){const damage=30+Math.floor(random(run)*26);run.hp=Math.max(0,run.hp-damage);log(run,`硬搜暴露位置！被击中，损失 ${damage} 生命。`);if(run.hp<=0)break;}
      const region=REGION_BY_ID[run.locationId],count=3+(random(run)<.3?1:0),boost=region.quality+run.luck;
      const guaranteed=box.gilded?4:run.pity>=3||run.stats.boxes===1?3:0,items=[];
      for(let i=0;i<count;i++)items.push(entry(run,lootItem(run,box.typeId,Math.max(qualityIndex(run,boost),i===0?guaranteed:0)).id));
      if(['medical-box','medical-bag'].includes(box.typeId))items.push(entry(run,pick(run,Object.keys(MEDICINES))));
      run.pity=items.some(e=>rank(CATALOG[e.itemId])>=3)?0:run.pity+1;run.luck=0;
      run.loot={name:CONTAINER_TYPES[box.typeId].name,typeId:box.typeId,items,guaranteed};log(run,`搜索${run.loot.name}，耗时 ${SEARCH_SECONDS} 秒，发现 ${items.length} 件物品。`);break;
    }
    case 'reveal':{const item=run.loot?.items.find(e=>!e.revealed);if(!item)fail('已经全部揭晓。');item.revealed=true;if(rank(CATALOG[item.itemId])>=3)run.stats.rare++;break;}
    case 'take':{
      if(run.loot)preserveContainerLayout(run.loot,CATALOG);
      const source=action.source==='ground'?run.ground:run.loot?.items,item=source?.find(e=>e.id===action.id&&e.revealed&&!e.taken);if(!item)fail('物品还没揭晓，或已经装包。');
      if(!put(run,item,action.target,action.placement))fail('放不下：需要连续空格，且不能跨胸挂小仓或口袋；可旋转或调整位置。');
      if(action.source==='ground')run.ground=run.ground.filter(e=>e.id!==item.id);else item.taken=true;break;
    }
    case 'takeAll':{
      if(run.loot)preserveContainerLayout(run.loot,CATALOG);
      const source=action.source==='ground'?run.ground:run.loot?.items;if(!source)fail('没有待拾取的物品。');
      for(const item of source.filter(e=>e.revealed&&!e.taken).sort((a,b)=>CATALOG[b.itemId].value-CATALOG[a.itemId].value))if(put(run,item)){
        if(action.source==='ground')run.ground=run.ground.filter(e=>e.id!==item.id);else item.taken=true;
      }break;
    }
    case 'returnLoot':{
      if(!run.loot)fail('需要先打开一个容器。');
      const source=run.spaces.find(s=>s.items.some(e=>e.id===action.id)),item=source?.items.find(e=>e.id===action.id);
      if(!item)fail('物品已不在身上。');
      const pages=preserveContainerLayout(run.loot,CATALOG),page=action.page??0;
      if(!Number.isInteger(page)||!pages[page])fail('不存在这个容器。');
      const space={...pages[page],items:pages[page].items.filter(e=>!e.taken)},size=CATALOG[item.itemId].size;
      const p=action.placement||firstFit(space,[item.w,item.h]);
      if(!p||!((p.w===size[0]&&p.h===size[1])||(p.w===size[1]&&p.h===size[0]))||!fits(space,p))fail('容器目标位置放不下，请选择连续空格。');
      source.items=source.items.filter(e=>e.id!==item.id);
      run.loot.items=run.loot.items.filter(e=>e.id!==item.id);
      run.loot.items.push({...item,...p,revealed:true,taken:false,containerPlacement:{page,...p}});break;
    }
    case 'move':case 'rotate':{
      const source=run.spaces.find(s=>s.items.some(e=>e.id===action.id)),item=source?.items.find(e=>e.id===action.id);if(!item)fail('物品已不在身上。');
      const target=action.type==='rotate'?source:run.spaces.find(s=>s.key===action.target);if(!target)fail('不存在这个携带区域。');
      if(target.kind==='safeBox'&&CATALOG[item.itemId].insure===false)fail('这件物品不能放入保险箱。');
      const size=action.type==='rotate'?[item.h,item.w]:[item.w,item.h];
      const p=action.type==='rotate'?{x:item.x,y:item.y,w:size[0],h:size[1]}:action.placement||firstFit(target,size,item.id);
      if(!p||!((p.w===size[0]&&p.h===size[1])||(p.w===size[1]&&p.h===size[0]))||!fits(target,p,item.id))fail('目标位置没有足够的连续空格。');
      source.items=source.items.filter(e=>e.id!==item.id);target.items.push({...item,...p});break;
    }
    case 'organize':{
      const space=run.spaces.find(s=>s.key===action.target);if(!space)fail('不存在这个区域。');const sorted=organize(space);if(!sorted)fail('没有找到更合适的排列，已保留原位置。');space.items=sorted;break;
    }
    case 'drop':{
      const source=run.spaces.find(s=>s.items.some(e=>e.id===action.id)),item=source?.items.find(e=>e.id===action.id);if(!item)fail('物品已不在身上。');
      source.items=source.items.filter(e=>e.id!==item.id);run.ground.push({...item,taken:false,revealed:true});break;
    }
    case 'useMed':{
      const source=run.spaces.find(s=>s.items.some(e=>e.id===action.id)),item=source?.items.find(e=>e.id===action.id),med=MEDICINES[item?.itemId];if(!med)fail('这不是可使用的医疗品。');
      if(!(med.stopBleed&&run.bleeding)&&(!med.heal||run.hp===100))fail('当前状态无需使用这件药品。');
      const cost=med.seconds+(['bag','safeBox'].includes(source.kind)?5:0);
      if(!spend(run,cost))break;
      const healing=Math.min(100-run.hp,med.capacity?medRemaining(item):med.heal);
      item.remaining=medRemaining(item)-(med.capacity?healing:1);
      if(item.remaining<=0)source.items=source.items.filter(e=>e.id!==item.id);
      effects(run,{heal:healing,stopBleed:med.stopBleed});log(run,`使用${med.name}，耗时 ${cost} 秒，当前生命 ${run.hp}/100。`);break;
    }
    case 'closeLoot':{
      if(!run.loot)fail('没有正在搜索的箱子。');if(run.loot.items.some(e=>!e.revealed))fail('先揭晓物品。');if(run.loot.items.some(e=>!e.taken)&&!action.confirm)fail('还有物品没拿，请确认放弃。');run.loot=null;break;
    }
    case 'choose':{
      const event=ENCOUNTERS.find(e=>e.id===run.event?.id),choice=event?.choices[action.index];if(!choice||!choiceAvailable(run,choice))fail('本局零钱不足，或选项不可用。');
      if(!spend(run,choice.seconds))break;
      effects(run,choice.effects);let text=choice.result;
      if(run.hp>0&&choice.chance!==undefined){const won=random(run)<choice.chance;effects(run,won?choice.win:choice.lose);text+=won?choice.winText:choice.loseText;}
      run.stats.events++;run.seenEvents.push(event.id);state.eventBook[event.id]=(state.eventBook[event.id]||0)+1;run.eventResult={title:event.title,text,icon:event.icon};log(run,`${event.title}：${text}`);run.event=null;break;
    }
    case 'extract':{
      requireFree(run);if(!extractionAvailable(run))fail('该撤离点不可用：需要抵达出生地另一侧的撤离点。');
      if(run.ground.length&&!action.confirm)fail('还有地面奖励没带走。');
      const inTime=run.timeLeft>=EXTRACT_SECONDS;
      spend(run,EXTRACT_SECONDS);
      if(inTime&&run.hp>0){settle(state,true,'安全撤离');return state;}break;
    }
    default:fail('未知操作。');
  }
  if(run.hp<=0||run.timeLeft<=0)settle(state,false,run.hp<=0?'生命耗尽，撤离失败': '错过接应时间，撤离失败');
  return state;
}

import { ITEMS, ITEM_BY_ID, QUALITY_ORDER } from '../data/items.js';
import { CONTAINER_TYPES } from '../data/containers.js';
import { REGIONS, CURIOS, CONTRACTS, UPGRADES } from '../data/expedition.js';
import { ENCOUNTERS } from '../data/encounters.js';

export const SAVE_KEY = 'mini-delta-force-expedition-v2';
export const MAX_ROOMS = 8;
export const CATALOG = Object.fromEntries([...ITEMS, ...CURIOS].map(item => [item.id, item]));
export const QUALITY_NAMES = { white: '普通', green: '精良', blue: '稀有', purple: '史诗', gold: '传奇', red: '传说' };
const pools = QUALITY_ORDER.map(q => ITEMS.filter(item => item.quality === q && item.id.startsWith('collectible-')));
export const money = n => Math.round(n).toLocaleString('zh-CN');
export const rank = item => QUALITY_ORDER.indexOf(item.quality);
export const bagValue = run => run.bag.reduce((sum, entry) => sum + CATALOG[entry.itemId].value, 0);
export const upgradeCost = (state, key) => UPGRADES[key].base * (state.upgrades[key] + 1);
export const contractProgress = (run, id) => run.stats[id] || 0;
const fail = message => { throw new Error(message); };
const clamp = (n, min, max) => Math.max(min, Math.min(max, n));
const nonnegative = n => Number.isFinite(n) ? Math.max(0, Math.floor(n)) : 0;

export function newState() {
  return { version: 2, money: 50000, upgrades: { bag: 0, energy: 0, luck: 0 }, collection: {}, eventBook: {}, stats: { runs: 0, boxes: 0, best: 0 }, run: null, lastResult: null };
}
export function loadState(storage) {
  try {
    const saved = JSON.parse(storage.getItem(SAVE_KEY));
    if (saved?.version === 2 && Number.isFinite(saved.money) && saved.money >= 0) {
      const state = { ...newState(), ...saved };
      state.upgrades = Object.fromEntries(Object.entries(UPGRADES).map(([key, def]) => [key, clamp(Math.floor(Number(saved.upgrades?.[key]) || 0), 0, def.max)]));
      state.collection = Object.fromEntries(Object.entries(saved.collection || {}).filter(([id, count]) => CATALOG[id] && Number.isInteger(count) && count > 0));
      state.eventBook = Object.fromEntries(ENCOUNTERS.filter(e => nonnegative(saved.eventBook?.[e.id]) > 0).map(e => [e.id, nonnegative(saved.eventBook[e.id])]));
      state.stats = Object.fromEntries(Object.keys(newState().stats).map(key => [key, nonnegative(saved.stats?.[key])]));
      if (state.run && !validRun(state.run)) state.run = null;
      if (state.lastResult && !validResult(state.lastResult)) state.lastResult = null;
      return state;
    }
    const state = newState();
    const old = JSON.parse(storage.getItem('mini-delta-force-save-v1'));
    if (old?.version === 1) {
      state.money = Number.isFinite(old.money) ? Math.max(0, old.money) : 50000;
      for (const entry of Array.isArray(old.stash) ? old.stash : []) {
        if (ITEM_BY_ID[entry.itemId]) {
          state.money += ITEM_BY_ID[entry.itemId].value;
          state.collection[entry.itemId] = (state.collection[entry.itemId] || 0) + 1;
        }
      }
      state.migrated = true;
    }
    return state;
  } catch { return newState(); }
}
function validRun(run) {
  const entriesValid = list => Array.isArray(list) && list.every(e => e && CATALOG[e.itemId] && typeof e.id === 'string');
  return Number.isFinite(run.rng) && Number.isFinite(run.energy) && Number.isFinite(run.maxEnergy)
    && Number.isFinite(run.capacity) && Number.isFinite(run.coins) && Number.isFinite(run.luck)
    && Number.isFinite(run.pity) && Number.isInteger(run.serial) && run.stats
    && ['rooms', 'events', 'boxes', 'rare'].every(key => Number.isInteger(run.stats[key]) && run.stats[key] >= 0)
    && run.stats.rooms <= MAX_ROOMS && Array.isArray(run.log)
    && Array.isArray(run.seenEvents) && Array.isArray(run.path) && Array.isArray(run.contracts)
    && run.contracts.every(id => CONTRACTS.some(c => c.id === id)) && entriesValid(run.bag) && entriesValid(run.ground)
    && (!run.room || REGIONS.some(r => r.id === run.room.regionId) && Array.isArray(run.room.boxes)
      && run.room.boxes.every(b => CONTAINER_TYPES[b.typeId]))
    && (!run.loot || entriesValid(run.loot.items))
    && (!run.event || ENCOUNTERS.some(e => e.id === run.event.id))
    && Array.isArray(run.routes) && run.routes.every(id => REGIONS.some(r => r.id === id));
}
function validResult(result) {
  return result.stats && ['rooms', 'events', 'boxes', 'rare'].every(key => Number.isFinite(result.stats[key]))
    && ['total', 'cargo', 'coins', 'bonus'].every(key => Number.isFinite(result[key]) && result[key] >= 0)
    && Array.isArray(result.items) && result.items.every(e => e && CATALOG[e.itemId])
    && Array.isArray(result.newItems) && result.newItems.every(id => CATALOG[id]);
}
function random(run) {
  run.rng = (Math.imul(1664525, run.rng) + 1013904223) >>> 0;
  return run.rng / 4294967296;
}
function pick(run, array) { return array[Math.floor(random(run) * array.length)]; }
function sample(run, array, count) {
  const copy = [...array], result = [];
  while (copy.length && result.length < count) result.push(copy.splice(Math.floor(random(run) * copy.length), 1)[0]);
  return result;
}
function log(run, text) { run.log.unshift(text); run.log = run.log.slice(0, 30); }
function entry(run, itemId, revealed = false) { return { id: `find-${++run.serial}`, itemId, revealed }; }
function makeRoutes(run) {
  return sample(run, REGIONS.filter(r => r.id !== run.room?.regionId), 3).map(r => r.id);
}
function requireFree(run) {
  if (run.loot) fail('先收好眼前的发现，再继续探索。');
  if (run.event) fail('先完成这次奇遇。');
}
function qualityIndex(run, boost) {
  // Each boost adds 2 percentage points to purple+ probability, up to +20.
  const roll = random(run) * 100;
  const bonus = Math.min(10, boost);
  if (roll >= 99.2 - bonus * 0.2) return 5;
  if (roll >= 94 - bonus * 0.9) return 4;
  if (roll >= 74 - bonus * 2) return 3;
  if (roll >= 39) return 2;
  if (roll >= 12) return 1;
  return 0;
}
function lootItem(run, typeId, quality) {
  const themed = CONTAINER_TYPES[typeId].pools.map(e => ITEM_BY_ID[e.itemId || e[0]])
    .filter(item => item && item.id.startsWith('collectible-') && rank(item) === quality);
  return pick(run, themed.length ? themed : pools[quality]);
}
function applyEffects(run, effects = {}) {
  run.energy = clamp(run.energy + (effects.energy || 0), 0, run.maxEnergy);
  run.coins = Math.max(0, run.coins + (effects.coins || 0));
  run.capacity += effects.capacity || 0;
  run.luck = Math.min(10, run.luck + (effects.luck || 0));
  if (effects.item) run.ground.push(entry(run, effects.item, true));
}
export function choiceAvailable(run, choice) {
  return run.coins >= (choice.requires || 0) && run.energy >= -(choice.effects.energy || 0);
}

// Serializable, deterministic transitions; rendering and reveal timers live outside the engine.
export function act(previous, action) {
  const state = structuredClone(previous);
  if (action.type === 'start') {
    if (state.run) fail('已有冒险正在进行。');
    const maxEnergy = 26 + state.upgrades.energy * 3;
    const run = { rng: (action.seed ?? Date.now()) >>> 0, serial: 0, energy: maxEnergy, maxEnergy,
      capacity: 12 + state.upgrades.bag * 2, coins: 0, luck: 0, pity: 0, bag: [], ground: [], room: null,
      loot: null, event: null, eventResult: null, routes: [], path: [], seenEvents: [], log: [],
      stats: { boxes: 0, events: 0, rare: 0, rooms: 0 }, contracts: [] };
    run.contracts = sample(run, CONTRACTS, 2).map(c => c.id);
    run.routes = makeRoutes(run);
    state.run = run;
    return state;
  }
  if (action.type === 'upgrade') {
    if (state.run) fail('回营后才能升级装备。');
    const def = UPGRADES[action.key];
    if (!def || state.upgrades[action.key] >= def.max) fail('已升至满级。');
    const cost = upgradeCost(state, action.key);
    if (state.money < cost) fail('资金不足，再去摸几个箱子吧。');
    state.money -= cost;
    state.upgrades[action.key]++;
    return state;
  }
  const run = state.run;
  if (!run) fail('先开始一场冒险。');
  switch (action.type) {
    case 'travel': {
      requireFree(run);
      if (run.stats.rooms >= MAX_ROOMS || !run.routes.includes(action.id)) fail('这条路线不可用。');
      const region = REGIONS.find(r => r.id === action.id);
      const cost = 2 + (region.cost || 0);
      if (run.energy < cost) fail('体力不够赶路了，可以带着收获回营。');
      if (run.ground.length && !action.confirm) fail('还有奇遇物品没拿，先装包或确认离开。');
      run.energy = Math.min(run.maxEnergy, run.energy - cost + (region.rest || 0));
      run.ground = [];
      run.stats.rooms++;
      run.path.push(region.id);
      run.room = { regionId: region.id, boxes: region.types.map((typeId, i) => ({ id: `${run.stats.rooms}-${i}`, typeId, opened: false, gilded: run.stats.rooms === MAX_ROOMS && i === 0 })) };
      run.routes = makeRoutes(run);
      run.eventResult = null;
      if (run.stats.rooms % 2 === 0 || run.stats.rooms > 1 && random(run) < 0.4) {
        const unseen = ENCOUNTERS.filter(e => !run.seenEvents.includes(e.id));
        if (unseen.length) run.event = { id: pick(run, unseen).id };
      }
      log(run, `抵达 ${region.name}${run.event ? '，遇到一件怪事。' : '，发现 3 个容器。'}`);
      break;
    }
    case 'open': {
      requireFree(run);
      const box = run.room?.boxes.find(b => b.id === action.id);
      if (!box || box.opened) fail('这个箱子已经搜过了。');
      if (run.energy < 2) fail('搜索需要 2 点体力，可以先回营。');
      run.energy -= 2;
      box.opened = true;
      run.stats.boxes++;
      const region = REGIONS.find(r => r.id === run.room.regionId);
      const count = 3 + (random(run) < 0.3 ? 1 : 0);
      const boost = region.quality + state.upgrades.luck + run.luck;
      const guaranteed = box.gilded ? 4 : run.pity >= 3 || run.stats.boxes === 1 ? 3 : 0;
      const items = [];
      for (let i = 0; i < count; i++) {
        const quality = Math.max(qualityIndex(run, boost), i === 0 ? guaranteed : 0);
        items.push(entry(run, lootItem(run, box.typeId, quality).id));
      }
      // Save outcomes at opening: refresh never rerolls a box.
      run.pity = items.some(e => rank(CATALOG[e.itemId]) >= 3) ? 0 : run.pity + 1;
      run.luck = 0;
      run.loot = { name: CONTAINER_TYPES[box.typeId].name, typeId: box.typeId, items, guaranteed };
      log(run, `搜索 ${CONTAINER_TYPES[box.typeId].name}，发现 ${count} 件物品。`);
      break;
    }
    case 'reveal': {
      const item = run.loot?.items.find(e => !e.revealed);
      if (!item) fail('已经全部揭晓。');
      item.revealed = true;
      if (rank(CATALOG[item.itemId]) >= 3) run.stats.rare++;
      break;
    }
    case 'take': {
      const source = action.source === 'ground' ? run.ground : run.loot?.items;
      const item = source?.find(e => e.id === action.id && e.revealed && !e.taken);
      if (!item) fail('物品还没揭晓，或者已经装包。');
      if (run.bag.length >= run.capacity) fail('背包满了。可以回收一件旧物，再装入新发现。');
      run.bag.push({ ...item });
      if (action.source === 'ground') run.ground = run.ground.filter(e => e.id !== item.id);
      else item.taken = true;
      break;
    }
    case 'takeAll': {
      const source = action.source === 'ground' ? run.ground : run.loot?.items;
      if (!source) fail('这里没有待装包物品。');
      const available = source.filter(e => e.revealed && !e.taken).sort((a, b) => CATALOG[b.itemId].value - CATALOG[a.itemId].value);
      for (const item of available.slice(0, run.capacity - run.bag.length)) {
        run.bag.push({ ...item });
        if (action.source === 'ground') run.ground = run.ground.filter(e => e.id !== item.id);
        else item.taken = true;
      }
      break;
    }
    case 'salvage': {
      const item = run.bag.find(e => e.id === action.id);
      if (!item) fail('物品已不在背包。');
      const value = Math.floor(CATALOG[item.itemId].value * 0.2);
      run.coins += value;
      run.bag = run.bag.filter(e => e.id !== item.id);
      log(run, `回收 ${CATALOG[item.itemId].name}，获得 ${money(value)} 零钱。`);
      break;
    }
    case 'closeLoot': {
      if (!run.loot) fail('没有正在搜索的箱子。');
      if (run.loot.items.some(e => !e.revealed)) fail('先揭晓箱子里的物品。');
      if (run.loot.items.some(e => !e.taken) && !action.confirm) fail('还有物品没装包，确认后才会放弃。');
      run.loot = null;
      break;
    }
    case 'choose': {
      const encounter = ENCOUNTERS.find(e => e.id === run.event?.id);
      const choice = encounter?.choices[action.index];
      if (!choice || !choiceAvailable(run, choice)) fail('当前体力或本局零钱不足。');
      applyEffects(run, choice.effects);
      let result = choice.result;
      if (choice.chance !== undefined) {
        const won = random(run) < choice.chance;
        applyEffects(run, won ? choice.win : choice.lose);
        result += won ? choice.winText : choice.loseText;
      }
      run.stats.events++;
      run.seenEvents.push(encounter.id);
      state.eventBook[encounter.id] = (state.eventBook[encounter.id] || 0) + 1;
      run.eventResult = { title: encounter.title, text: result, icon: encounter.icon };
      log(run, `${encounter.title}：${result}`);
      run.event = null;
      break;
    }
    case 'extract': {
      requireFree(run);
      if (run.ground.length && !action.confirm) fail('还有奇遇奖励没装包。');
      const cargo = bagValue(run);
      const completed = CONTRACTS.filter(c => run.contracts.includes(c.id) && contractProgress(run, c.id) >= c.target);
      const bonus = completed.reduce((sum, c) => sum + c.reward, 0);
      const total = cargo + run.coins + bonus;
      const newItems = [...new Set(run.bag.map(e => e.itemId))].filter(id => !state.collection[id]);
      for (const item of run.bag) state.collection[item.itemId] = (state.collection[item.itemId] || 0) + 1;
      state.money += total;
      state.stats.runs++;
      state.stats.boxes += run.stats.boxes;
      state.stats.best = Math.max(state.stats.best, total);
      state.lastResult = { cargo, coins: run.coins, bonus, total, stats: run.stats, newItems, items: run.bag, completed: completed.map(c => c.id), log: run.log, path: run.path };
      state.run = null;
      break;
    }
    default: fail('未知操作。');
  }
  return state;
}

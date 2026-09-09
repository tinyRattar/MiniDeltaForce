import test from 'node:test';
import assert from 'node:assert/strict';
import { act, newState, loadState, SAVE_KEY, CATALOG, rank, bagValue, choiceAvailable, upgradeCost } from '../src/domain/expedition.js';
import { REGIONS, CURIOS, CONTRACTS } from '../src/data/expedition.js';
import { ENCOUNTERS } from '../src/data/encounters.js';

const start = (seed = 42) => act(newState(), { type: 'start', seed });
function travel(state) {
  return act(state, { type: 'travel', id: state.run.routes[0], confirm: true });
}
function open(state) { return act(state, { type: 'open', id: state.run.room.boxes.find(b => !b.opened).id }); }
function reveal(state) {
  while (state.run.loot?.items.some(e => !e.revealed)) state = act(state, { type: 'reveal' });
  return state;
}
function restore(state) { return loadState({ getItem: key => key === SAVE_KEY ? JSON.stringify(state) : null }); }
function settleEvent(state, choiceIndex = 0) {
  if (!state.run.event) return state;
  const event = ENCOUNTERS.find(e => e.id === state.run.event.id);
  const index = choiceAvailable(state.run, event.choices[choiceIndex]) ? choiceIndex : event.choices.findIndex(c => choiceAvailable(state.run, c));
  assert.ok(index >= 0, 'Every encounter has an affordable exit');
  return act(state, { type: 'choose', index });
}

test('same seed produces identical routes and loot before and after saving', () => {
  const a = open(travel(start(2026)));
  const b = open(travel(restore(start(2026))));
  assert.deepEqual(a, b);
  assert.ok(a.run.loot.items.some(e => rank(CATALOG[e.itemId]) >= 3));
  assert.deepEqual(restore(a), a);
  assert.deepEqual(act(a, { type: 'reveal' }), act(restore(a), { type: 'reveal' }));
});

test('hidden loot cannot be taken, rerolled, or abandoned before reveal', () => {
  const s = open(travel(start()));
  assert.throws(() => act(s, { type: 'take', id: s.run.loot.items[0].id }), /揭晓/);
  assert.throws(() => act(s, { type: 'open', id: s.run.room.boxes[1].id }), /眼前/);
  assert.throws(() => act(s, { type: 'closeLoot', confirm: true }), /揭晓/);
  assert.throws(() => act(s, { type: 'extract' }), /眼前/);
  assert.equal(s.run.loot.items[0].revealed, false);
});

test('pack high-value items first, enforce capacity, and never duplicate items', () => {
  let s = reveal(open(travel(start())));
  s.run.capacity = 1;
  const most = [...s.run.loot.items].sort((a, b) => CATALOG[b.itemId].value - CATALOG[a.itemId].value)[0];
  s = act(s, { type: 'takeAll' });
  assert.equal(s.run.bag[0].id, most.id);
  const remaining = s.run.loot.items.find(e => !e.taken);
  assert.throws(() => act(s, { type: 'take', id: remaining.id }), /背包满/);
  assert.equal(act(s, { type: 'takeAll' }).run.bag.length, 1);
  assert.throws(() => act(s, { type: 'take', id: most.id }), /已经装包/);
  const expected = Math.floor(CATALOG[most.itemId].value * .2);
  s = act(s, { type: 'salvage', id: most.id });
  assert.equal(s.run.coins, expected);
  assert.equal(s.run.bag.length, 0);
  assert.throws(() => act(s, { type: 'salvage', id: most.id }), /已不在/);
  assert.equal(s.collection[most.itemId], undefined);
  s = act(s, { type: 'take', id: remaining.id });
  assert.equal(s.run.bag.length, 1);
});

test('closing a box needs explicit abandonment and it cannot reopen', () => {
  let s = reveal(open(travel(start())));
  const id = s.run.room.boxes[0].id;
  assert.throws(() => act(s, { type: 'closeLoot' }), /确认/);
  s = act(s, { type: 'closeLoot', confirm: true });
  assert.throws(() => act(s, { type: 'open', id }), /已经搜过/);
});

test('pity and final destination each guarantee the advertised minimum', () => {
  for (let seed = 1; seed <= 200; seed++) {
    let s = travel(start(seed));
    s.run.stats.boxes = 3;
    s.run.pity = 3;
    const pity = open(s);
    assert.ok(pity.run.loot.items.some(e => rank(CATALOG[e.itemId]) >= 3));
    assert.equal(pity.run.pity, 0);
    s.run.room.boxes[0].gilded = true;
    const gold = open(s);
    assert.ok(gold.run.loot.items.some(e => rank(CATALOG[e.itemId]) >= 4));
  }
});

test('all event choices resolve once, charge visible costs and persist rewards', () => {
  for (const event of ENCOUNTERS) for (let index = 0; index < event.choices.length; index++) {
    let s = travel(start(index + 1));
    s.run.event = { id: event.id };
    s.run.coins = 50000;
    s.run.energy = 10;
    const choice = event.choices[index];
    const before = structuredClone(s);
    assert.ok(choiceAvailable(s.run, choice));
    s = act(s, { type: 'choose', index });
    assert.equal(s.run.event, null);
    assert.equal(s.run.stats.events, 1);
    assert.equal(s.eventBook[event.id], 1);
    assert.equal(s.run.energy, 10 + (choice.effects.energy || 0));
    assert.equal(s.run.capacity, before.run.capacity + (choice.effects.capacity || 0));
    if (choice.effects.item) assert.equal(s.run.ground[0].itemId, choice.effects.item);
    assert.throws(() => act(s, { type: 'choose', index }));
    assert.deepEqual(restore(s), s);
    assert.deepEqual(act(before, { type: 'choose', index }), s);
  }
});

test('events have a free option even at zero energy and coins', () => {
  for (const event of ENCOUNTERS) {
    let s = travel(start());
    s.run.event = { id: event.id }; s.run.energy = 0; s.run.coins = 0;
    assert.throws(() => act(s, { type: 'open', id: s.run.room.boxes[0].id }), /奇遇/);
    const index = event.choices.findIndex(c => choiceAvailable(s.run, c));
    assert.ok(index >= 0, event.id);
    s = act(s, { type: 'choose', index });
    assert.ok(s.run.energy >= 0);
  }
});

test('event gift is not lost silently when leaving, extracting or packing a full bag', () => {
  let s = travel(start());
  s.run.event = { id: 'cat' };
  s = act(s, { type: 'choose', index: 0 });
  assert.throws(() => act(s, { type: 'travel', id: s.run.routes[0] }), /还有奇遇/);
  assert.throws(() => act(s, { type: 'extract' }), /奇遇奖励/);
  s = act(s, { type: 'takeAll', source: 'ground' });
  assert.equal(s.run.ground.length, 0);
  assert.equal(s.run.bag[0].itemId, 'meme-cat');
});

test('zero-energy extraction pays exact full value, contracts and collection once', () => {
  let s = reveal(open(travel(start())));
  s = act(s, { type: 'takeAll' });
  s = act(s, { type: 'closeLoot' });
  s.run.energy = 0;
  s.run.coins = 1234;
  s.run.contracts = ['boxes', 'rare'];
  s.run.stats.boxes = 6;
  s.run.stats.rare = 4;
  const cargo = bagValue(s.run), initialMoney = s.money, ids = [...new Set(s.run.bag.map(e => e.itemId))];
  s = act(s, { type: 'extract' });
  assert.equal(s.lastResult.total, cargo + 1234 + 24000 + 28000);
  assert.equal(s.money, initialMoney + s.lastResult.total);
  assert.equal(s.stats.runs, 1);
  assert.equal(s.stats.boxes, 6);
  assert.deepEqual(s.lastResult.newItems, ids);
  assert.equal(s.run, null);
  assert.throws(() => act(s, { type: 'extract' }), /先开始/);
  assert.deepEqual(restore(s), s);
});

test('permanent upgrades charge exact prices, enforce caps and apply only to a new run', () => {
  let s = newState(); s.money = 10000000;
  const before = s.money, cost = upgradeCost(s, 'bag');
  s = act(s, { type: 'upgrade', key: 'bag' });
  assert.equal(s.money, before - cost);
  s = act(s, { type: 'upgrade', key: 'energy' });
  for (let i = 1; i < 4; i++) s = act(s, { type: 'upgrade', key: 'bag' });
  assert.throws(() => act(s, { type: 'upgrade', key: 'bag' }), /满级/);
  s = act(s, { type: 'start', seed: 1 });
  assert.equal(s.run.capacity, 20);
  assert.equal(s.run.energy, 29);
  assert.throws(() => act(s, { type: 'upgrade', key: 'energy' }), /回营/);
  assert.throws(() => act(s, { type: 'start' }), /已有/);
});

test('legacy migration preserves wallet and converts stash once without touching old save', () => {
  const id = Object.keys(CATALOG).find(id => id.startsWith('collectible-'));
  const old = JSON.stringify({ version: 1, money: 12345, stash: [{ itemId: id }, { itemId: 'missing' }] });
  const storage = { getItem: key => key === SAVE_KEY ? null : old };
  const s = loadState(storage);
  assert.equal(s.money, 12345 + CATALOG[id].value);
  assert.equal(s.collection[id], 1);
  assert.deepEqual(restore(s), s);
  assert.equal(storage.getItem('mini-delta-force-save-v1'), old);
});

test('malformed saves and storage restrictions recover to a playable state', () => {
  assert.deepEqual(loadState({ getItem: () => '{broken' }), newState());
  assert.deepEqual(loadState({ getItem: () => { throw Error('blocked'); } }), newState());
  const s = start(); s.run.room = { regionId: 'not-a-real-region', boxes: [] };
  const restored = restore(s);
  assert.equal(restored.run, null);
  assert.equal(restored.money, s.money);
  const damaged = newState();
  damaged.stats = { runs: '<bad>', best: -99 };
  damaged.lastResult = { total: 12 };
  const recovered = restore(damaged);
  assert.deepEqual(recovered.stats, newState().stats);
  assert.equal(recovered.lastResult, null);
});

test('500 seeded adventures obey economy, capacity, uniqueness and progression invariants', () => {
  const seen = new Set();
  let totalBoxes = 0;
  for (let seed = 1; seed <= 500; seed++) {
    let s = start(seed);
    for (let room = 0; room < 8; room++) {
      const route = s.run.routes.find(id => s.run.energy >= 2 + (REGIONS.find(r => r.id === id).cost || 0));
      if (!route) break;
      s = act(s, { type: 'travel', id: route, confirm: true });
      if (s.run.event) seen.add(s.run.event.id);
      if (s.run.stats.rooms % 2 === 0) assert.ok(s.run.event);
      s = settleEvent(s, seed % 2);
      s = act(s, { type: 'takeAll', source: 'ground' });
      const boxCount = seed % 3 === 0 ? 0 : seed % 3;
      for (let box = 0; box < boxCount && s.run.energy >= 2; box++) {
        s = reveal(open(s));
        s = act(s, { type: 'takeAll' });
        s = act(s, { type: 'closeLoot', confirm: true });
        assert.ok(s.run.bag.length <= s.run.capacity);
      }
      assert.deepEqual(restore(s), s);
      assert.ok(s.run.energy >= 0 && s.run.energy <= s.run.maxEnergy);
      assert.equal(new Set(s.run.bag.map(e => e.id)).size, s.run.bag.length);
      assert.equal(new Set(s.run.seenEvents).size, s.run.seenEvents.length);
    }
    totalBoxes += s.run.stats.boxes;
    const wallet = s.money;
    s = act(s, { type: 'extract', confirm: true });
    assert.equal(s.money - wallet, s.lastResult.total);
    assert.ok(s.lastResult.total >= 0);
  }
  assert.equal(seen.size, ENCOUNTERS.length);
  assert.ok(totalBoxes > 1500);
});

test('final station is reachable and awards its golden container; no ninth station', () => {
  let s = start(5);
  for (let i = 0; i < 8; i++) {
    s = travel(s); s = settleEvent(s, 1);
  }
  assert.equal(s.run.stats.rooms, 8);
  assert.equal(s.run.room.boxes[0].gilded, true);
  assert.throws(() => travel(s), /路线不可用/);
  s = open(s);
  assert.ok(s.run.loot.items.some(e => rank(CATALOG[e.itemId]) >= 4));
});

test('encounter item ids, route container ids and contracts are consistent', () => {
  assert.equal(new Set(ENCOUNTERS.map(e => e.id)).size, ENCOUNTERS.length);
  for (const e of ENCOUNTERS) for (const c of e.choices) for (const fx of [c.effects, c.win, c.lose]) {
    if (fx?.item) assert.ok(CURIOS.some(item => item.id === fx.item), fx.item);
  }
  assert.equal(CONTRACTS.length, new Set(CONTRACTS.map(c => c.id)).size);
});

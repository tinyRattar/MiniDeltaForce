import { CONTAINER_TYPES } from "../data/containers.js";
import { EVENTS } from "../data/events.js";
import { ITEM_BY_ID, ITEM_ICON_URLS, ITEMS, QUALITY_LABELS, REVEAL_SECONDS } from "../data/items.js";
import { CONNECTIONS, LOCATION_BY_ID, START_LOCATION_ID } from "../data/map.js";

const SAVE_KEY = "mini-delta-force-save-v1";
const RAID_LIMIT = 30;
const BACKPACK_W = 5;
const BACKPACK_H = 4;
const SAFE_BOX_W = 3;
const SAFE_BOX_H = 3;
const POCKET_COUNT = 6;
const OPEN_LOOT_CHANCE = 0.5;
const OPEN_LOOT_SIZE = [4, 3];

const OPEN_LOOT_PROFILES = {
  construction: { points: 4, sources: [["tool-cabinet", 5], ["cement-truck", 4], ["supply-crate", 2]] },
  industrial: { points: 5, sources: [["tool-cabinet", 5], ["cement-truck", 5], ["supply-crate", 2], ["manhole", 1]] },
  admin: { points: 5, sources: [["briefcase", 5], ["computer-case", 3], ["safe-small", 2], ["hacker-pc", 1]] },
  electronics: { points: 5, sources: [["computer-case", 5], ["server-rack", 4], ["hacker-pc", 2], ["tool-cabinet", 1]] },
  military: { points: 4, sources: [["ammo-box", 4], ["weapon-box", 2], ["weapon-box-large", 1], ["supply-crate", 2]] },
  field: { points: 4, sources: [["supply-crate", 4], ["bird-nest", 2], ["clothes", 2], ["medical-box", 1]] },
  logistics: { points: 5, sources: [["express-small", 4], ["express-box", 3], ["aviation-box", 2], ["supply-crate", 2]] },
};

const OPEN_LOOT_PROFILE_BY_LOCATION = {
  "cement-plant": "industrial",
  construction: "construction",
  barracks: "military",
  "new-pipe-zone": "construction",
  river: "field",
  "pipe-zone": "construction",
  "admin-west": "admin",
  "admin-east": "admin",
  containers: "logistics",
  "dam-inside": "electronics",
  parking: "logistics",
  "dam-top": "field",
  maintenance: "field",
  "main-substation": "electronics",
  "backup-substation": "electronics",
  "field-camp": "field",
  "visitor-center": "admin",
};

export function createInitialSave() {
  return { version: 1, money: 50000, stash: [], lastSettlement: null, settings: { compactMoney: true } };
}

export function loadSave() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return createInitialSave();
    const parsed = JSON.parse(raw);
    if (parsed?.version !== 1) return createInitialSave();
    return { ...createInitialSave(), ...parsed };
  } catch {
    return createInitialSave();
  }
}

export function saveGame(save) {
  localStorage.setItem(SAVE_KEY, JSON.stringify(save));
}

export function resetSave() {
  const save = createInitialSave();
  saveGame(save);
  return save;
}

export function createRng(seed = Date.now()) {
  let state = seed >>> 0;
  return {
    seed,
    next() {
      state = (1664525 * state + 1013904223) >>> 0;
      return state / 4294967296;
    },
  };
}

function randInt(rng, min, max) {
  return Math.floor(rng.next() * (max - min + 1)) + min;
}

function weightedEntryId(entry) {
  return Array.isArray(entry) ? entry[0] : entry.itemId ?? entry.id;
}

function weightedEntryWeight(entry) {
  return Array.isArray(entry) ? entry[1] : entry.weight;
}

function weightedPick(rng, weighted) {
  const total = weighted.reduce((sum, item) => sum + weightedEntryWeight(item), 0);
  let roll = rng.next() * total;
  for (const item of weighted) {
    roll -= weightedEntryWeight(item);
    if (roll <= 0) return weightedEntryId(item);
  }
  return weightedEntryId(weighted[weighted.length - 1]);
}

function createInstanceId(prefix) {
  return `${prefix}-${Math.random().toString(36).slice(2, 9)}`;
}

function canPlace(occupied, width, height, x, y, itemWidth, itemHeight) {
  if (x + itemWidth > width || y + itemHeight > height) return false;
  for (let row = y; row < y + itemHeight; row += 1) {
    for (let col = x; col < x + itemWidth; col += 1) {
      if (occupied[row][col]) return false;
    }
  }
  return true;
}

function markPlace(occupied, x, y, itemWidth, itemHeight) {
  for (let row = y; row < y + itemHeight; row += 1) {
    for (let col = x; col < x + itemWidth; col += 1) {
      occupied[row][col] = true;
    }
  }
}

function placeItem(occupied, containerSize, item) {
  const [containerWidth, containerHeight] = containerSize;
  const [itemWidth, itemHeight] = item.size;
  for (let y = 0; y < containerHeight; y += 1) {
    for (let x = 0; x < containerWidth; x += 1) {
      if (canPlace(occupied, containerWidth, containerHeight, x, y, itemWidth, itemHeight)) {
        const placement = { x, y, w: itemWidth, h: itemHeight };
        markPlace(occupied, placement.x, placement.y, placement.w, placement.h);
        return placement;
      }
    }
  }
  return null;
}

function getEntryPlacement(entry) {
  const item = ITEM_BY_ID[entry.itemId];
  return entry.placement ?? { x: 0, y: 0, w: item.size[0], h: item.size[1] };
}

function getPlacementArea(placement) {
  return placement.w * placement.h;
}

function getItemArea(item) {
  return item.size[0] * item.size[1];
}

function getSizeCandidates(item, preferredPlacement = null) {
  const preferred = preferredPlacement ? { w: preferredPlacement.w, h: preferredPlacement.h } : { w: item.size[0], h: item.size[1] };
  const candidates = [preferred];
  if (preferred.w !== preferred.h) candidates.push({ w: preferred.h, h: preferred.w });
  return candidates.filter((candidate, index, list) => list.findIndex((itemSize) => itemSize.w === candidate.w && itemSize.h === candidate.h) === index);
}

function findFirstPlacement(space, item, ignoredInstanceId = null, preferredPlacement = null, allowRotate = false) {
  const occupied = Array.from({ length: space.height }, () => Array(space.width).fill(false));
  for (const entry of space.items) {
    if (entry.instanceId === ignoredInstanceId) continue;
    const placement = getEntryPlacement(entry);
    markPlace(occupied, placement.x, placement.y, placement.w, placement.h);
  }
  const candidates = allowRotate ? getSizeCandidates(item, preferredPlacement) : [preferredPlacement ? { w: preferredPlacement.w, h: preferredPlacement.h } : { w: item.size[0], h: item.size[1] }];
  for (const size of candidates) {
    for (let y = 0; y < space.height; y += 1) {
      for (let x = 0; x < space.width; x += 1) {
        if (canPlace(occupied, space.width, space.height, x, y, size.w, size.h)) {
          return { x, y, w: size.w, h: size.h };
        }
      }
    }
  }
  return null;
}

function canPlaceInSpace(space, placement, ignoredInstanceId = null) {
  const occupied = Array.from({ length: space.height }, () => Array(space.width).fill(false));
  for (const entry of space.items) {
    if (entry.instanceId === ignoredInstanceId) continue;
    const placed = getEntryPlacement(entry);
    markPlace(occupied, placed.x, placed.y, placed.w, placed.h);
  }
  return canPlace(occupied, space.width, space.height, placement.x, placement.y, placement.w, placement.h);
}

function createCarrySpaces() {
  return {
    pockets: { slots: Array.from({ length: POCKET_COUNT }, () => ({ width: 1, height: 1, items: [] })) },
    bag: { width: BACKPACK_W, height: BACKPACK_H, items: [] },
    safeBox: { width: SAFE_BOX_W, height: SAFE_BOX_H, items: [] },
  };
}

function generateContainer(rng, locationId, typeId, index) {
  const type = CONTAINER_TYPES[typeId];
  const count = randInt(rng, type.min, type.max);
  const size = type.size ?? [6, 6];
  const occupied = Array.from({ length: size[1] }, () => Array(size[0]).fill(false));
  const items = [];
  let attempts = 0;
  while (items.length < count && attempts < count * 24) {
    attempts += 1;
    const itemId = weightedPick(rng, type.pools);
    const item = ITEM_BY_ID[itemId];
    const placement = placeItem(occupied, size, item);
    if (!placement) continue;
    items.push({
      instanceId: createInstanceId(item.id),
      itemId,
      placement,
      ...(item.stackSize ? { quantity: randInt(rng, 1, item.stackSize) } : {}),
      revealed: false,
    });
  }
  return {
    id: `${locationId}-${typeId}-${index}`,
    typeId,
    name: type.name,
    size,
    searched: false,
    items,
  };
}

function pickOpenLootItem(rng, profile) {
  const sourceId = weightedPick(rng, profile.sources.map(([id, weight]) => ({ itemId: id, weight })));
  const source = CONTAINER_TYPES[sourceId];
  if (!source?.pools?.length) return null;
  return weightedPick(rng, source.pools);
}

function generateOpenLootPoint(rng, locationId, index) {
  const profile = OPEN_LOOT_PROFILES[OPEN_LOOT_PROFILE_BY_LOCATION[locationId] ?? "field"];
  const itemId = rng.next() < OPEN_LOOT_CHANCE ? pickOpenLootItem(rng, profile) : null;
  const item = itemId ? ITEM_BY_ID[itemId] : null;
  const size = item ? [Math.max(OPEN_LOOT_SIZE[0], item.size[0]), Math.max(OPEN_LOOT_SIZE[1], item.size[1])] : OPEN_LOOT_SIZE;
  return {
    id: `${locationId}-open-${index}`,
    typeId: "open-loot",
    name: "现场",
    size,
    searched: false,
    openLoot: true,
    items: item
      ? [{
          instanceId: createInstanceId(item.id),
          itemId,
          placement: { x: 0, y: 0, w: item.size[0], h: item.size[1] },
          ...(item.stackSize ? { quantity: randInt(rng, 1, item.stackSize) } : {}),
          revealed: true,
        }]
      : [],
  };
}

function generateOpenLootPoints(rng, locationId) {
  const profile = OPEN_LOOT_PROFILES[OPEN_LOOT_PROFILE_BY_LOCATION[locationId] ?? "field"];
  return Array.from({ length: profile.points }, (_, index) => generateOpenLootPoint(rng, locationId, index));
}

function addGeneratedContainer(containersByLocation, rng, locationId, typeId) {
  const index = containersByLocation[locationId].length;
  const container = generateContainer(rng, locationId, typeId, index);
  container.extraHighValue = true;
  container.name = `额外高价值：${container.name}`;
  containersByLocation[locationId].push(container);
}

function addExtraHighValueContainers(containersByLocation, rng) {
  const adminTypes = rng.next() < 0.5 ? ["safe-large", "hacker-pc"] : ["hacker-pc", "safe-large"];
  addGeneratedContainer(containersByLocation, rng, "admin-west", adminTypes[0]);
  addGeneratedContainer(containersByLocation, rng, "admin-east", adminTypes[1]);

  const sideTypes = rng.next() < 0.5 ? ["safe-large", "hacker-pc"] : ["hacker-pc", "safe-large"];
  const westLocation = rng.next() < 0.5 ? "cement-plant" : "barracks";
  const eastLocation = rng.next() < 0.5 ? "main-substation" : "visitor-center";
  addGeneratedContainer(containersByLocation, rng, westLocation, sideTypes[0]);
  addGeneratedContainer(containersByLocation, rng, eastLocation, sideTypes[1]);
}

export function startRaid(seed = Date.now()) {
  const rng = createRng(seed);
  const containersByLocation = {};
  const openLootByLocation = {};
  Object.values(LOCATION_BY_ID).forEach((location) => {
    containersByLocation[location.id] = location.containers.map((typeId, index) => generateContainer(rng, location.id, typeId, index));
    openLootByLocation[location.id] = generateOpenLootPoints(rng, location.id);
  });
  addExtraHighValueContainers(containersByLocation, rng);

  return {
    seed,
    screen: "raid",
    locationId: START_LOCATION_ID,
    timeLeft: RAID_LIMIT,
    maxHp: 100,
    hp: 100,
    debuffs: [],
    painkillerUntil: 0,
    tools: {
      injector: { name: "强效注射剂", count: 4, remainingHeal: 240 },
      surgery: { name: "快拆手术包", count: 4 },
      painkiller: { name: "瓶装止痛药", count: 3 },
    },
    ...createCarrySpaces(),
    eventLog: [{ title: "进入战局", text: "你从西部撤离点附近进入大坝区域。时间够，但不值得浪费。" }],
    containersByLocation,
    openLootByLocation,
    currentSearch: null,
    over: false,
    result: null,
  };
}

export function getLocation(raid) {
  return LOCATION_BY_ID[raid.locationId];
}

export function getAdjacentLocations(raid) {
  return CONNECTIONS[raid.locationId].map((id) => LOCATION_BY_ID[id]);
}

export function hasDebuff(raid, id) {
  return raid.debuffs.some((debuff) => debuff.id === id);
}

function isPainkillerActive(raid) {
  return raid.painkillerUntil > 0;
}

function movementCost(raid) {
  return hasDebuff(raid, "leg-fracture") && !isPainkillerActive(raid) ? 3 : 2;
}

function tickTime(raid, minutes) {
  const next = structuredClone(raid);
  next.timeLeft = Math.max(0, next.timeLeft - minutes);
  next.painkillerUntil = Math.max(0, next.painkillerUntil - minutes);
  if (hasDebuff(next, "wound")) {
    next.hp = Math.max(1, next.hp - minutes * 30);
  }
  if (next.timeLeft <= 0) {
    next.over = true;
    next.result = createSettlement(next, false, "时间耗尽，你没能赶到撤离点。");
  }
  return next;
}

export function moveTo(raid, locationId) {
  if (raid.over || !CONNECTIONS[raid.locationId].includes(locationId)) return raid;
  let next = tickTime(raid, movementCost(raid));
  if (next.over) return next;
  next.locationId = locationId;
  next.screen = "raid";
  next.currentSearch = null;
  next.eventLog.unshift({ title: "移动", text: `你抵达${LOCATION_BY_ID[locationId].name}。` });
  return next;
}

function applyEventEffects(raid, event) {
  let next = structuredClone(raid);
  event.effects.forEach((effect) => {
    if (effect.type === "damage") {
      next.hp = Math.max(0, next.hp - effect.value);
    }
    if (effect.type === "debuff") {
      next.debuffs.push({ id: effect.value, createdAt: RAID_LIMIT - next.timeLeft });
    }
  });
  next.eventLog.unshift({ title: event.title, text: event.text });
  if (next.hp <= 0) {
    next.over = true;
    next.result = createSettlement(next, false, "生命值归零，你倒在了撤离路上。");
  }
  return next;
}

function maybeTriggerEvent(raid) {
  const rng = createRng(raid.seed + raid.timeLeft * 97 + raid.eventLog.length * 31);
  if (rng.next() > 0.1) return raid;
  const location = getLocation(raid);
  const candidates = location.risk === "低" ? EVENTS.filter((event) => event.kind !== "soldier") : EVENTS;
  const event = candidates.find((candidate) => candidate.id === weightedPick(rng, candidates.map((item) => [item.id, item.weight])));
  return applyEventEffects(raid, event);
}

export function searchContainer(raid, containerId) {
  if (raid.over) return raid;
  const containers = raid.containersByLocation[raid.locationId];
  const container = containers.find((item) => item.id === containerId);
  if (!container) return raid;

  let next = tickTime(raid, container.searched ? 0 : 1);
  if (next.over) return next;

  const nextContainer = next.containersByLocation[next.locationId].find((item) => item.id === containerId);
  nextContainer.searched = true;
  next.currentSearch = { containerId };
  next.screen = "search";
  next.eventLog.unshift({ title: "搜索", text: `你打开了${nextContainer.name}。` });
  next = maybeTriggerEvent(next);
  if (next.over) return next;
  next.screen = "search";
  next.currentSearch = { containerId };
  return next;
}

export function searchLocation(raid) {
  if (raid.over) return { raid, ok: false, reason: "行动已经结束。" };
  const containers = raid.containersByLocation[raid.locationId].filter((container) => !container.searched);
  const openPoints = (raid.openLootByLocation?.[raid.locationId] ?? []).filter((point) => !point.searched);
  const candidates = [
    ...containers.map((container) => ({ kind: "container", id: container.id, weight: 1 })),
    ...openPoints.map((point) => ({ kind: "open", id: point.id, weight: 1 })),
  ];
  if (!candidates.length) return { raid, ok: false, reason: "这里已经搜得差不多了。" };

  const rng = createRng(raid.seed + raid.timeLeft * 131 + candidates.length * 17 + raid.eventLog.length * 37);
  const pickedId = weightedPick(rng, candidates.map((candidate) => [{ kind: candidate.kind, id: candidate.id }, candidate.weight]));
  let next = tickTime(raid, 1);
  if (next.over) return { raid: next, ok: true };

  if (pickedId.kind === "container") {
    const container = next.containersByLocation[next.locationId].find((item) => item.id === pickedId.id);
    if (!container) return { raid: next, ok: false, reason: "没有找到可搜索目标。" };
    container.searched = true;
    next.currentSearch = { containerId: container.id };
    next.screen = "search";
    next.eventLog.unshift({ title: "搜索", text: `你发现了${container.name}。` });
    next = maybeTriggerEvent(next);
    if (next.over) return { raid: next, ok: true };
    next.screen = "search";
    next.currentSearch = { containerId: container.id };
    return { raid: next, ok: true, found: "container" };
  }

  const point = next.openLootByLocation[next.locationId].find((item) => item.id === pickedId.id);
  if (!point) return { raid: next, ok: false, reason: "没有找到可搜索目标。" };
  point.searched = true;
  if (!point.items.length) {
    next.screen = "raid";
    next.currentSearch = null;
    next.eventLog.unshift({ title: "搜索", text: "你翻找了一圈，什么也没找到。" });
    next = maybeTriggerEvent(next);
    return { raid: next, ok: true, found: "nothing", reason: "什么也没找到" };
  }
  next.currentSearch = { openLootPointId: point.id };
  next.screen = "search";
  next.eventLog.unshift({ title: "搜索", text: "你发现了一些东西。" });
  next = maybeTriggerEvent(next);
  if (next.over) return { raid: next, ok: true };
  next.screen = "search";
  next.currentSearch = { openLootPointId: point.id };
  return { raid: next, ok: true, found: "open" };
}

export function revealItem(raid, instanceId) {
  const next = structuredClone(raid);
  for (const containers of Object.values(next.containersByLocation)) {
    for (const container of containers) {
      const entry = container.items.find((item) => item.instanceId === instanceId);
      if (entry) entry.revealed = true;
    }
  }
  for (const points of Object.values(next.openLootByLocation ?? {})) {
    for (const point of points) {
      const entry = point.items.find((item) => item.instanceId === instanceId);
      if (entry) entry.revealed = true;
    }
  }
  return next;
}

export function revealAllCurrent(raid) {
  const container = getCurrentContainer(raid);
  if (!container) return raid;
  let next = raid;
  container.items.forEach((entry) => {
    next = revealItem(next, entry.instanceId);
  });
  return next;
}

function usedSpaceArea(space) {
  return space.items.reduce((sum, entry) => sum + getPlacementArea(getEntryPlacement(entry)), 0);
}

export function getCarrySpaces(raid) {
  return [
    { key: "pockets", label: "口袋", ...raid.pockets },
    { key: "bag", label: "背包", ...raid.bag },
    { key: "safeBox", label: "安全箱", ...raid.safeBox },
  ];
}

function allCarriedEntries(raid) {
  return getCarrySpaces(raid).flatMap((space) => getSpaceItems(space));
}

function getSpaceItems(space) {
  if (space.slots) return space.slots.flatMap((slot) => slot.items);
  return space.items;
}

function getSpaceArea(space) {
  if (space.slots) return space.slots.reduce((sum, slot) => sum + slot.width * slot.height, 0);
  return space.width * space.height;
}

export function bagUsed(raid) {
  return getCarrySpaces(raid).reduce((sum, space) => sum + (space.slots ? space.slots.reduce((slotSum, slot) => slotSum + usedSpaceArea(slot), 0) : usedSpaceArea(space)), 0);
}

export function bagCapacity(raid) {
  return getCarrySpaces(raid).reduce((sum, space) => sum + getSpaceArea(space), 0);
}

export function carriedValue(raid) {
  return allCarriedEntries(raid).reduce((sum, entry) => sum + getEntryValue(entry), 0);
}

function getCarryTargetSpace(raid, target) {
  if (target.spaceKey === "pockets") return raid.pockets.slots[target.slotIndex ?? 0] ?? null;
  return raid[target.spaceKey] ?? null;
}

function placeInCarrySpace(raid, entry, target = null) {
  const item = ITEM_BY_ID[entry.itemId];
  const entryPlacement = entry.placement ?? { x: 0, y: 0, w: item.size[0], h: item.size[1] };
  if (target) {
    const space = getCarryTargetSpace(raid, target);
    const placement = { x: target.x, y: target.y, w: entryPlacement.w, h: entryPlacement.h };
    if (space && canPlaceInSpace(space, placement)) {
      space.items.push({ ...entry, placement });
      return target.spaceKey;
    }
    return null;
  }
  for (const key of ["bag", "pockets", "safeBox"]) {
    if (key === "pockets") {
      for (let slotIndex = 0; slotIndex < raid.pockets.slots.length; slotIndex += 1) {
        const slot = raid.pockets.slots[slotIndex];
        const placement = findFirstPlacement(slot, item, null, entryPlacement, true);
        if (!placement) continue;
        slot.items.push({ ...entry, placement });
        return key;
      }
      continue;
    }
    const space = raid[key];
    const placement = findFirstPlacement(space, item, null, entryPlacement, true);
    if (!placement) continue;
    space.items.push({ ...entry, placement });
    return key;
  }
  return null;
}

function findEntryInCarrySpaces(raid, instanceId) {
  for (let slotIndex = 0; slotIndex < raid.pockets.slots.length; slotIndex += 1) {
    const entry = raid.pockets.slots[slotIndex].items.find((item) => item.instanceId === instanceId);
    if (entry) return { key: "pockets", slotIndex, entry };
  }
  for (const key of ["bag", "safeBox"]) {
    const entry = raid[key].items.find((item) => item.instanceId === instanceId);
    if (entry) return { key, entry };
  }
  return null;
}

export function takeItem(raid, instanceId) {
  return takeItemToSpace(raid, instanceId);
}

export function takeItemToSpace(raid, instanceId, target = null) {
  let next = structuredClone(raid);
  const container = getCurrentContainer(next);
  const entry = container?.items.find((item) => item.instanceId === instanceId);
  if (!entry || !entry.revealed) return { raid, ok: false, reason: "物品还没有揭示。" };

  const carriedEntry = {
    instanceId: entry.instanceId,
    itemId: entry.itemId,
    placement: getEntryPlacement(entry),
    ...(entry.quantity ? { quantity: entry.quantity } : {}),
  };
  const spaceKey = placeInCarrySpace(next, carriedEntry, target);
  if (!spaceKey) {
    return { raid, ok: false, reason: "身上的空间放不下了，先整理或丢掉一些物资。" };
  }

  container.items = container.items.filter((item) => item.instanceId !== instanceId);
  const spaceLabel = { bag: "背包", pockets: "口袋", safeBox: "安全箱" }[spaceKey];
  next.eventLog.unshift({ title: "拾取", text: `你把${formatEntryName(entry)}放进了${spaceLabel}。` });
  return { raid: next, ok: true };
}

export function moveCarriedItem(raid, instanceId, target) {
  const next = structuredClone(raid);
  const found = findEntryInCarrySpaces(next, instanceId);
  if (!found) return { raid, ok: false, reason: "没有找到这个物品。" };
  const { key: fromKey, entry } = found;

  const currentPlacement = getEntryPlacement(entry);
  const targetSpace = getCarryTargetSpace(next, target);
  const placement = { x: target.x, y: target.y, w: currentPlacement.w, h: currentPlacement.h };
  const ignoredInstanceId = fromKey === target.spaceKey ? instanceId : null;
  if (!targetSpace || !canPlaceInSpace(targetSpace, placement, ignoredInstanceId)) {
    return { raid, ok: false, reason: "这个位置放不下。" };
  }

  if (fromKey === "pockets") {
    next.pockets.slots[found.slotIndex].items = next.pockets.slots[found.slotIndex].items.filter((item) => item.instanceId !== instanceId);
  } else {
    next[fromKey].items = next[fromKey].items.filter((item) => item.instanceId !== instanceId);
  }
  targetSpace.items.push({ ...entry, placement });
  return { raid: next, ok: true };
}

export function rotateCarriedItem(raid, instanceId) {
  const next = structuredClone(raid);
  const found = findEntryInCarrySpaces(next, instanceId);
  if (!found) return { raid, ok: false, reason: "没有找到这个物品。" };
  const space = found.key === "pockets" ? next.pockets.slots[found.slotIndex] : next[found.key];
  const current = getEntryPlacement(found.entry);
  if (current.w === current.h) return { raid, ok: false, reason: "这个物品旋转后占格不变。" };
  const placement = { x: current.x, y: current.y, w: current.h, h: current.w };
  if (!canPlaceInSpace(space, placement, instanceId)) {
    return { raid, ok: false, reason: "当前位置放不下旋转后的尺寸。" };
  }
  found.entry.placement = placement;
  return { raid: next, ok: true };
}

export function moveContainerItem(raid, instanceId, target) {
  const next = structuredClone(raid);
  const container = getCurrentContainer(next);
  if (!container) return { raid, ok: false, reason: "当前没有打开的容器。" };
  const entry = container.items.find((item) => item.instanceId === instanceId);
  if (!entry || !entry.revealed) return { raid, ok: false, reason: "物品还没有揭示。" };
  const currentPlacement = getEntryPlacement(entry);
  const placement = { x: target.x, y: target.y, w: currentPlacement.w, h: currentPlacement.h };
  const containerSpace = { ...container, width: container.size[0], height: container.size[1] };
  if (!canPlaceInSpace(containerSpace, placement, instanceId)) {
    return { raid, ok: false, reason: "这个位置放不下。" };
  }
  entry.placement = placement;
  return { raid: next, ok: true };
}

export function returnCarriedItemToContainer(raid, instanceId, target = null) {
  const next = structuredClone(raid);
  const container = getCurrentContainer(next);
  if (!container) return { raid, ok: false, reason: "当前没有打开的容器。" };
  const found = findEntryInCarrySpaces(next, instanceId);
  if (!found) return { raid, ok: false, reason: "没有找到这个物品。" };

  const item = ITEM_BY_ID[found.entry.itemId];
  const currentPlacement = getEntryPlacement(found.entry);
  const size = getContainerSize(container);
  const containerSpace = { ...container, width: size[0], height: size[1] };
  const placement = target
    ? { x: target.x, y: target.y, w: currentPlacement.w, h: currentPlacement.h }
    : findFirstPlacement(containerSpace, item, null, currentPlacement, true);
  if (!placement) return { raid, ok: false, reason: "容器里没有足够空间放回去。" };
  if (target && !canPlaceInSpace(containerSpace, placement)) {
    return { raid, ok: false, reason: "这个位置放不下。" };
  }

  if (found.key === "pockets") {
    next.pockets.slots[found.slotIndex].items = next.pockets.slots[found.slotIndex].items.filter((entry) => entry.instanceId !== instanceId);
  } else {
    next[found.key].items = next[found.key].items.filter((entry) => entry.instanceId !== instanceId);
  }
  container.items.push({ ...found.entry, placement, revealed: true });
  next.eventLog.unshift({ title: "放回", text: `你把${formatEntryName(found.entry)}放回了${container.name}。` });
  return { raid: next, ok: true };
}

export function dropBagItem(raid, instanceId) {
  const next = structuredClone(raid);
  const found = findEntryInCarrySpaces(next, instanceId);
  const entry = found?.entry;
  if (found?.key === "pockets") next.pockets.slots[found.slotIndex].items = next.pockets.slots[found.slotIndex].items.filter((item) => item.instanceId !== instanceId);
  else if (found) next[found.key].items = next[found.key].items.filter((item) => item.instanceId !== instanceId);
  if (entry) {
    next.eventLog.unshift({ title: "丢弃", text: `你丢弃了${formatEntryName(entry)}。` });
  }
  return next;
}

export function useTool(raid, toolId, debuffIndex = 0) {
  const next = structuredClone(raid);
  if (toolId === "injector" && next.tools.injector.count > 0 && next.hp < next.maxHp) {
    const heal = Math.min(60, next.tools.injector.remainingHeal, next.maxHp - next.hp);
    next.hp += heal;
    next.tools.injector.remainingHeal -= heal;
    next.tools.injector.count = Math.ceil(next.tools.injector.remainingHeal / 60);
    next.eventLog.unshift({ title: "使用道具", text: `强效注射剂恢复了 ${heal} 点生命值。` });
    return next;
  }
  if (toolId === "surgery" && next.tools.surgery.count > 0 && next.debuffs.length > 0) {
    const removed = next.debuffs.splice(debuffIndex, 1)[0];
    next.tools.surgery.count -= 1;
    next.eventLog.unshift({ title: "使用道具", text: `快拆手术包处理了${debuffLabel(removed.id)}。` });
    return next;
  }
  if (toolId === "painkiller" && next.tools.painkiller.count > 0) {
    next.tools.painkiller.count -= 1;
    next.painkillerUntil = Math.max(next.painkillerUntil, 5);
    next.eventLog.unshift({ title: "使用道具", text: "瓶装止痛药在 5 分钟内压制骨折影响。" });
    return next;
  }
  return raid;
}

export function extract(raid) {
  const location = getLocation(raid);
  if (!location.extract || raid.over) return raid;
  const next = tickTime(raid, 1);
  if (next.over) return next;
  next.over = true;
  next.result = createSettlement(next, true, `你从${location.name}完成撤离。`);
  return next;
}

function createSettlement(raid, success, message) {
  const carriedItems = allCarriedEntries(raid);
  const totalValue = carriedItems.reduce((sum, entry) => sum + getEntryValue(entry), 0);
  const searchedOpenLootCount = Object.values(raid.openLootByLocation ?? {}).flat().filter((point) => point.searched).length;
  return {
    success,
    message,
    totalValue: success ? totalValue : 0,
    keptItems: success ? carriedItems : [],
    lostItems: success ? [] : carriedItems,
    searchedCount: Object.values(raid.containersByLocation).flat().filter((container) => container.searched).length + searchedOpenLootCount,
    timeUsed: RAID_LIMIT - raid.timeLeft,
    hp: raid.hp,
  };
}

export function applySettlementToSave(save, result) {
  const next = structuredClone(save);
  next.lastSettlement = result;
  if (result.success) {
    next.money += result.totalValue;
    next.stash.push(...result.keptItems.map((entry) => ({ ...entry, storedAt: Date.now() })));
  }
  saveGame(next);
  return next;
}

export function getCurrentContainer(raid) {
  if (!raid.currentSearch) return null;
  if (raid.currentSearch.containerId) {
    return raid.containersByLocation[raid.locationId].find((container) => container.id === raid.currentSearch.containerId);
  }
  if (raid.currentSearch.openLootPointId) {
    return raid.openLootByLocation?.[raid.locationId]?.find((point) => point.id === raid.currentSearch.openLootPointId) ?? null;
  }
  return null;
}

export function getLocationSearchProgress(raid, locationId = raid.locationId) {
  const containers = raid.containersByLocation[locationId] ?? [];
  const openPoints = raid.openLootByLocation?.[locationId] ?? [];
  const total = containers.length + openPoints.length;
  const searched = containers.filter((container) => container.searched).length + openPoints.filter((point) => point.searched).length;
  return {
    searched,
    total,
    percent: total ? Math.round((searched / total) * 100) : 100,
    complete: total === 0 || searched >= total,
  };
}

export function getContainerSize(container) {
  return container?.size ?? CONTAINER_TYPES[container?.typeId]?.size ?? [6, 6];
}

export function getRevealDelayMs(raid, itemId) {
  const item = ITEM_BY_ID[itemId];
  const multiplier = hasDebuff(raid, "hand-fracture") && !isPainkillerActive(raid) ? 1.5 : 1;
  return REVEAL_SECONDS[item.quality] * 1000 * multiplier;
}

export function debuffLabel(id) {
  return { "leg-fracture": "腿骨折", "hand-fracture": "手骨折", wound: "伤口" }[id] || id;
}

export function formatMoney(value) {
  if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
  if (value >= 1000) return `${(value / 1000).toFixed(1)}K`;
  return `${value}`;
}

export function itemMeta(itemId) {
  const item = ITEM_BY_ID[itemId];
  return { ...item, iconUrl: ITEM_ICON_URLS[itemId], qualityLabel: QUALITY_LABELS[item.quality], area: getItemArea(item) };
}

export function getEntryQuantity(entry) {
  const item = ITEM_BY_ID[entry.itemId];
  if (!item?.stackSize) return 1;
  return Math.max(1, Math.min(item.stackSize, entry.quantity ?? item.stackSize));
}

export function getEntryValue(entry) {
  const item = ITEM_BY_ID[entry.itemId];
  if (!item?.stackSize) return item?.value ?? 0;
  return Math.round((item.value * getEntryQuantity(entry)) / item.stackSize);
}

export function formatEntryName(entry) {
  const item = ITEM_BY_ID[entry.itemId];
  if (!item?.stackSize) return item?.name ?? entry.itemId;
  return `${item.name} x${getEntryQuantity(entry)}`;
}

export function allItems() {
  return ITEMS;
}

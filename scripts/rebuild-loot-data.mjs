import { readFile, writeFile } from "node:fs/promises";

const QUALITY_BY_CN = {
  白: "white",
  绿: "green",
  蓝: "blue",
  紫: "purple",
  金: "gold",
  红: "red",
};

const QUALITY_WEIGHT = {
  white: 80,
  green: 42,
  blue: 18,
  purple: 6,
  gold: 1.8,
  red: 0.45,
};

const LEGACY_ID_BY_NAME = {
  非洲之心: "africa-heart",
  复苏呼吸机: "resuscitator",
  绝密服务器: "secret-server",
  便携军用雷达: "portable-radar",
  显卡: "military-gpu",
  军用弹道计算机: "ballistic-computer",
  CPU: "cpu",
  摄影机: "camera",
  军用无人机: "drone",
  军用电台: "radio",
  名贵机械表: "watch",
  万足金条: "gold-bar",
  固态硬盘: "ssd",
  内存条: "ram",
  ASOS电脑主板: "motherboard",
  一包水泥: "cement-bag",
  燃油: "fuel",
  燃气罐: "gas-tank",
  工具箱: "toolbox-item",
  高分子布料: "fabric",
  无线便携电钻: "wireless-drill",
  自旋型手锯: "wrench",
  特种钢: "special-steel",
  电火机: "lighter",
  螺丝刀: "screwdriver",
  电线: "wire",
  弹力绷带: "bandage",
  车载急救包: "medkit",
  缓释止痛片: "painkiller-loot",
  野战急救包: "field-med",
  "5.56x45mm RRLP": "ammo-556-rrlp",
  "5.56x45mm FMJ": "ammo-556-fmj",
  "5.56x45mm M855": "ammo-556-m855",
  "5.56x45mm M855A1": "ammo-556-m855a1",
  "5.56x45mm M995": "ammo-556-m995",
};

const CONTAINER_BASE = {
  "bird-nest": { name: "鸟窝", size: [4, 4], min: 1, max: 2 },
  "safe-small": { name: "小保险", size: [5, 5], min: 1, max: 3 },
  "safe-large": { name: "大保险", size: [9, 9], min: 3, max: 5 },
  "hacker-pc": { name: "骇客电脑", size: [7, 6], min: 2, max: 4 },
  "computer-case": { name: "电脑机箱", size: [5, 5], min: 1, max: 3 },
  "server-rack": { name: "服务器", size: [8, 7], min: 2, max: 4 },
  "tool-cabinet": { name: "工具柜", size: [6, 6], min: 2, max: 4 },
  "cement-truck": { name: "水泥车", size: [8, 6], min: 2, max: 4 },
  manhole: { name: "窨井盖", size: [5, 5], min: 1, max: 3 },
  "medical-bag": { name: "医疗包", size: [5, 4], min: 1, max: 3 },
  "medical-box": { name: "医疗箱", size: [6, 5], min: 2, max: 4 },
  "express-small": { name: "快递盒", size: [4, 4], min: 1, max: 2 },
  "express-box": { name: "快递箱", size: [5, 5], min: 1, max: 3 },
  "supply-crate": { name: "野外物资箱", size: [7, 6], min: 2, max: 4 },
  "ammo-box": { name: "弹药箱", size: [6, 5], min: 2, max: 4 },
  "weapon-box": { name: "武器箱", size: [8, 5], min: 2, max: 4 },
  "weapon-box-large": { name: "大武器箱", size: [9, 6], min: 3, max: 5 },
  "aviation-box": { name: "航空箱", size: [9, 7], min: 3, max: 5 },
  "file-cabinet": { name: "文件柜", size: [5, 5], min: 1, max: 3 },
  clothes: { name: "衣服", size: [4, 4], min: 1, max: 2 },
  "travel-bag": { name: "遗留背包", size: [5, 4], min: 1, max: 3 },
  "travel-case": { name: "旅行箱", size: [6, 6], min: 2, max: 4 },
  "travel-case-large": { name: "大旅行箱", size: [8, 7], min: 3, max: 5 },
  briefcase: { name: "手提箱", size: [5, 4], min: 1, max: 3 },
};

const CONTAINER_CATEGORY_WEIGHTS = {
  "bird-nest": { 工艺藏品: 55, 家居物品: 30, 工具材料: 15 },
  "safe-small": { 工艺藏品: 55, 电子物品: 25, 资料情报: 10, 家居物品: 10 },
  "safe-large": { 工艺藏品: 42, 电子物品: 34, 资料情报: 14, 医疗道具: 10 },
  "hacker-pc": { 电子物品: 78, 资料情报: 22 },
  "computer-case": { 电子物品: 75, 工具材料: 15, 资料情报: 10 },
  "server-rack": { 电子物品: 84, 资料情报: 16 },
  "tool-cabinet": { 工具材料: 74, 能源燃料: 16, 电子物品: 10 },
  "cement-truck": { 工具材料: 60, 能源燃料: 30, 工艺藏品: 10 },
  manhole: { 工具材料: 35, 能源燃料: 32, 工艺藏品: 23, 家居物品: 10 },
  "medical-bag": { 消耗品: 62, 医疗道具: 38 },
  "medical-box": { 消耗品: 52, 医疗道具: 48 },
  "express-small": { 家居物品: 35, 工具材料: 24, 电子物品: 18, 医疗道具: 13, 能源燃料: 10 },
  "express-box": { 家居物品: 28, 工具材料: 23, 电子物品: 24, 医疗道具: 12, 能源燃料: 13 },
  "supply-crate": { 工具材料: 24, 消耗品: 18, 医疗道具: 12, 弹药: 20, 能源燃料: 18, 电子物品: 8 },
  "ammo-box": { 弹药: 78, 工具材料: 12, 能源燃料: 10 },
  "weapon-box": { 弹药: 70, 工具材料: 14, 电子物品: 10, 消耗品: 6 },
  "weapon-box-large": { 弹药: 50, 工具材料: 24, 电子物品: 16, 消耗品: 10 },
  "aviation-box": { 电子物品: 24, 工具材料: 22, 消耗品: 12, 医疗道具: 10, 弹药: 14, 能源燃料: 12, 工艺藏品: 6 },
  "file-cabinet": { 资料情报: 50, 电子物品: 20, 工艺藏品: 16, 家居物品: 14 },
  clothes: { 家居物品: 40, 消耗品: 18, 资料情报: 18, 工艺藏品: 14, 工具材料: 10 },
  "travel-bag": { 家居物品: 30, 工具材料: 24, 消耗品: 16, 医疗道具: 8, 资料情报: 14, 工艺藏品: 8 },
  "travel-case": { 家居物品: 30, 工艺藏品: 24, 电子物品: 20, 消耗品: 10, 资料情报: 10, 工具材料: 6 },
  "travel-case-large": { 家居物品: 26, 工艺藏品: 26, 电子物品: 22, 消耗品: 10, 医疗道具: 6, 资料情报: 6, 工具材料: 4 },
  briefcase: { 资料情报: 34, 电子物品: 30, 工艺藏品: 26, 家居物品: 10 },
};

function parseSize(value) {
  const [w, h] = String(value || "1x1").split("x").map((part) => Number.parseInt(part, 10));
  return [Number.isFinite(w) ? w : 1, Number.isFinite(h) ? h : 1];
}

function itemId(row, prefix) {
  return LEGACY_ID_BY_NAME[row["名字"]] ?? `${prefix}-${row.object_id}`;
}

function toItem(row, { prefix, type, category, stackSize = null, ammoValueMultiplier = 1 }) {
  const quality = QUALITY_BY_CN[row["品质"]] ?? "white";
  const value = Math.round(Number(row["价格"] || 0) * ammoValueMultiplier);
  return {
    id: itemId(row, prefix),
    objectId: row.object_id,
    name: row["名字"],
    quality,
    value,
    size: parseSize(row["长x宽"]),
    weight: Number(row["重量"] || 0),
    type,
    category,
    insure: type !== "武器" && type !== "装备",
    ...(stackSize ? { stackSize } : {}),
    iconUrl: row["图片"] || "",
  };
}

function sortItems(items) {
  const qualityRank = { red: 0, gold: 1, purple: 2, blue: 3, green: 4, white: 5 };
  return items.sort((a, b) =>
    (a.category || a.type).localeCompare(b.category || b.type, "zh-Hans") ||
    qualityRank[a.quality] - qualityRank[b.quality] ||
    b.value - a.value ||
    a.name.localeCompare(b.name, "zh-Hans"),
  );
}

function canFit(item, size) {
  return item.size[0] <= size[0] && item.size[1] <= size[1];
}

function weightFor(item, categoryWeight) {
  const base = QUALITY_WEIGHT[item.quality] ?? 10;
  const valuePenalty = item.value > 0 ? Math.max(0.35, Math.min(1, 85000 / item.value)) : 1;
  const ammoMultiplier = item.stackSize ? 0.75 : 1;
  return Number((base * categoryWeight * valuePenalty * ammoMultiplier).toFixed(3));
}

function poolFor(containerId, items) {
  const base = CONTAINER_BASE[containerId];
  const categoryWeights = CONTAINER_CATEGORY_WEIGHTS[containerId];
  const entries = [];
  for (const item of items) {
    const categoryWeight = categoryWeights[item.category] ?? categoryWeights[item.type] ?? 0;
    if (!categoryWeight || !canFit(item, base.size)) continue;
    const weight = weightFor(item, categoryWeight);
    if (weight > 0) entries.push({ itemId: item.id, weight });
  }
  entries.sort((a, b) => b.weight - a.weight || a.itemId.localeCompare(b.itemId));
  return entries;
}

function js(value) {
  return JSON.stringify(value, null, 2);
}

function renderItemsFile(items) {
  const itemRows = items.map(({ iconUrl, ...item }) => item);
  const icons = Object.fromEntries(items.map((item) => [item.id, item.iconUrl]).filter(([, icon]) => icon));
  return `export const QUALITY_ORDER = ["white", "green", "blue", "purple", "gold", "red"];

export const QUALITY_LABELS = {
  white: "白",
  green: "绿",
  blue: "蓝",
  purple: "紫",
  gold: "金",
  red: "红",
};

export const REVEAL_SECONDS = {
  white: 0.5,
  green: 1,
  blue: 1.5,
  purple: 2,
  gold: 3,
  red: 4,
};

export const ITEMS = ${js(itemRows)};

export const ITEM_ICON_URLS = ${js(icons)};

export const ITEM_BY_ID = Object.fromEntries(ITEMS.map((item) => [item.id, item]));
`;
}

function renderContainersFile(items) {
  const containers = {};
  for (const [containerId, base] of Object.entries(CONTAINER_BASE)) {
    containers[containerId] = {
      ...base,
      pools: poolFor(containerId, items),
    };
  }
  return `// pools are container-first loot tables. Each entry is
// { itemId, weight }, where weight is relative inside the same container.
// Category-based generation is handled by scripts/rebuild-loot-data.mjs, but
// the generated table stays explicit so special items can be tuned per container.
export const CONTAINER_TYPES = ${js(containers)};
`;
}

async function main() {
  const collectibles = JSON.parse(await readFile("data/dfhub_collectibles.json", "utf8"));
  const consumables = JSON.parse(await readFile("data/dfhub_consumables.json", "utf8"));
  const ammo556 = JSON.parse(await readFile("data/dfhub_ammo_556.json", "utf8"));

  const items = sortItems([
    ...collectibles.map((row) =>
      toItem(row, {
        prefix: "collectible",
        type: row["类别"],
        category: row["类别"],
      }),
    ),
    ...consumables.map((row) =>
      toItem(row, {
        prefix: "consumable",
        type: "医疗",
        category: "消耗品",
      }),
    ),
    ...ammo556.map((row) =>
      toItem(row, {
        prefix: "ammo",
        type: "弹药",
        category: "弹药",
        stackSize: 60,
        ammoValueMultiplier: 60,
      }),
    ),
  ]);

  const ids = new Set();
  const duplicates = items.filter((item) => {
    if (!ids.has(item.id)) {
      ids.add(item.id);
      return false;
    }
    return true;
  });
  if (duplicates.length) {
    throw new Error(`duplicate item ids: ${duplicates.map((item) => item.id).join(", ")}`);
  }

  await writeFile("src/data/items.js", renderItemsFile(items), "utf8");
  await writeFile("src/data/containers.js", renderContainersFile(items), "utf8");

  const unmappedContainers = Object.keys(CONTAINER_BASE).filter((id) => !CONTAINER_CATEGORY_WEIGHTS[id]);
  const emptyContainers = Object.entries(CONTAINER_BASE)
    .map(([id]) => [id, poolFor(id, items).length])
    .filter(([, count]) => count === 0);

  console.log(`items=${items.length}`);
  console.log(`containers=${Object.keys(CONTAINER_BASE).length}`);
  console.log(`unmapped_containers=${unmappedContainers.length ? unmappedContainers.join(",") : "none"}`);
  console.log(`empty_containers=${emptyContainers.length ? emptyContainers.map(([id]) => id).join(",") : "none"}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

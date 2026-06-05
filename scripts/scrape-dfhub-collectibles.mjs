import { mkdir, writeFile } from "node:fs/promises";
import { createDecipheriv, createHash } from "node:crypto";
import { inflateRawSync } from "node:zlib";
import path from "node:path";

const BASE = "https://www.dfhub.cn";
const API = `${BASE}/api/v1`;
const OUT_DIR = "data";
const TARGET_PRIMARY_CLASS = process.env.DFHUB_PRIMARY_CLASS ?? "props";
const TARGET_SECOND_CLASS = process.env.DFHUB_SECOND_CLASS;
const TARGET_LABEL = process.env.DFHUB_LABEL ?? "收集品";
const OUT_BASENAME = process.env.DFHUB_OUT_BASENAME ?? "dfhub_collectibles";
const SECRET =
  "odw-response-v2-6750b2d9490bb1bad82d2b13b4d128275b0f7fd0d6f76428ec00e72943f5e0e0";
const MAGIC = 57089;
const NONCE_LEN = 12;
const TAG_LEN = 16;

const gradeLabels = {
  1: "白",
  2: "绿",
  3: "蓝",
  4: "紫",
  5: "金",
  6: "红",
};

function decryptResponse(buffer) {
  if (buffer.byteLength < 3 || buffer.readUInt16BE(0) !== MAGIC) {
    const text = buffer.toString("utf8");
    return text ? JSON.parse(text) : null;
  }

  const compensateLen = buffer.readUInt8(2);
  const compensate = buffer.subarray(3, 3 + compensateLen).toString("utf8");
  const nonceStart = 3 + compensateLen;
  const nonce = buffer.subarray(nonceStart, nonceStart + NONCE_LEN);
  const encrypted = buffer.subarray(nonceStart + NONCE_LEN);
  const ciphertext = encrypted.subarray(0, encrypted.length - TAG_LEN);
  const tag = encrypted.subarray(encrypted.length - TAG_LEN);
  const key = createHash("sha256").update(SECRET + compensate).digest();
  const decipher = createDecipheriv("aes-256-gcm", key, nonce);
  decipher.setAuthTag(tag);
  const plain = Buffer.concat([decipher.update(ciphertext), decipher.final()]);
  return JSON.parse(inflateRawSync(plain).toString("utf8"));
}

async function request(method, endpoint, { params, body } = {}) {
  const url = new URL(`${API}${endpoint}`);
  for (const [key, value] of Object.entries(params ?? {})) {
    if (value == null || value === "") continue;
    if (Array.isArray(value)) {
      for (const item of value) url.searchParams.append(key, item);
    } else {
      url.searchParams.set(key, value);
    }
  }

  const response = await fetch(url, {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Referer: `${BASE}/items/`,
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
    },
    body: body == null ? undefined : JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`${method} ${url.pathname} failed: ${response.status}`);
  }

  return decryptResponse(Buffer.from(await response.arrayBuffer()));
}

const get = (endpoint, params) => request("GET", endpoint, { params });
const post = (endpoint, body) => request("POST", endpoint, { body });

function flattenCategories(nodes, parent = null, out = []) {
  for (const node of nodes ?? []) {
    const current = { ...node, parent };
    out.push(current);
    flattenCategories(node.children, current, out);
  }
  return out;
}

function pickValue(node) {
  return (
    node.value ??
    node.class ??
    node.code ??
    node.key ??
    node.second_class ??
    node.name ??
    node.label
  );
}

function findCollectibleClass(categoryData) {
  const roots = categoryData.data ?? categoryData;
  const flat = flattenCategories(roots);
  const candidates = flat.filter((node) => {
    const label = `${node.label ?? ""}${node.name ?? ""}${node.second_class_cn ?? ""}${node.second_class ?? ""}`;
    const parentValue = pickValue(node.parent ?? {});
    return label.includes(TARGET_LABEL) && (node.primary_class === TARGET_PRIMARY_CLASS || parentValue === TARGET_PRIMARY_CLASS);
  });
  return candidates[0] ?? flat.find((node) => `${node.label ?? node.name ?? ""}`.includes(TARGET_LABEL));
}

function summarizeCategories(categoryData) {
  const roots = categoryData.data ?? categoryData;
  return flattenCategories(roots)
    .map((node) => ({
      label: node.label ?? node.name ?? node.primary_class_cn ?? node.second_class_cn ?? "",
      value: pickValue(node),
      parent: node.parent ? pickValue(node.parent) : "",
      rawKeys: Object.keys(node).filter((key) => key !== "children" && key !== "parent").join("|"),
    }))
    .slice(0, 120);
}

async function fetchAllCollectibles(secondClass) {
  const perPage = 100;
  let page = 1;
  let total = Infinity;
  const items = [];

  while (items.length < total) {
    const payload = await get("/items", {
      page,
      per_page: perPage,
      primary_class: TARGET_PRIMARY_CLASS,
      second_class: secondClass,
    });
    const pageItems = payload.data ?? [];
    items.push(...pageItems);
    total = payload.meta?.total ?? items.length;
    if (!pageItems.length) break;
    page += 1;
  }

  return items;
}

function averagePrice(points) {
  if (!points?.length) return null;
  return Math.round(points.reduce((sum, point) => sum + Number(point.price ?? 0), 0) / points.length);
}

function absoluteUrl(url) {
  if (!url) return "";
  return url.startsWith("http") ? url : `${BASE}${url.startsWith("/") ? "" : "/"}${url}`;
}

function formatSize(item) {
  const length =
    item.length ?? item.long ?? item.size_length ?? item.grid_length ?? item.width_len ?? null;
  const width = item.width ?? item.size_width ?? item.grid_width ?? item.height ?? null;
  if (length == null && width == null) return "";
  return `${length ?? ""}x${width ?? ""}`;
}

function toCsv(rows) {
  const headers = ["名字", "品质", "图片", "价格", "重量", "长x宽"];
  const escape = (value) => {
    const text = value == null ? "" : String(value);
    return /[",\r\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
  };
  return [headers.join(","), ...rows.map((row) => headers.map((key) => escape(row[key])).join(","))].join("\n");
}

async function mapLimit(values, limit, worker) {
  const results = new Array(values.length);
  let next = 0;
  async function run() {
    for (;;) {
      const index = next++;
      if (index >= values.length) return;
      results[index] = await worker(values[index], index);
    }
  }
  await Promise.all(Array.from({ length: limit }, run));
  return results;
}

async function main() {
  const categories = await get("/categories");
  const collectible = TARGET_SECOND_CLASS ? null : findCollectibleClass(categories);
  if (!TARGET_SECOND_CLASS && !collectible) {
    console.log(JSON.stringify(summarizeCategories(categories), null, 2));
    throw new Error(`没有在分类树中找到“${TARGET_PRIMARY_CLASS} > ${TARGET_LABEL}”`);
  }

  const secondClass = TARGET_SECOND_CLASS ?? pickValue(collectible);
  console.log(`second_class=${secondClass}`);

  const listItems = await fetchAllCollectibles(secondClass);
  console.log(`list_count=${listItems.length}`);

  const rows = await mapLimit(listItems, 8, async (listItem, index) => {
    const id = listItem.object_id;
    const detail = (await get(`/items/${id}`)).data ?? listItem;
    const history = (await get(`/prices/${id}/history`, { days: 1 })).data ?? [];
    const avg = averagePrice(history) ?? detail.latest_price?.price ?? listItem.latest_price?.price ?? "";
    if ((index + 1) % 25 === 0 || index === listItems.length - 1) {
      console.log(`detail_progress=${index + 1}/${listItems.length}`);
    }
    return {
      名字: detail.object_name ?? listItem.object_name ?? "",
      品质: gradeLabels[detail.grade ?? listItem.grade] ?? detail.grade ?? listItem.grade ?? "",
      图片: absoluteUrl(detail.pic_url || detail.pre_pic_url || listItem.pic_url || listItem.pre_pic_url),
      价格: avg,
      重量: detail.weight ?? "",
      "长x宽": formatSize(detail),
      object_id: id,
    };
  });

  await mkdir(OUT_DIR, { recursive: true });
  const jsonPath = path.join(OUT_DIR, `${OUT_BASENAME}.json`);
  const csvPath = path.join(OUT_DIR, `${OUT_BASENAME}.csv`);
  await writeFile(jsonPath, JSON.stringify(rows, null, 2), "utf8");
  await writeFile(csvPath, `\uFEFF${toCsv(rows)}`, "utf8");
  console.log(`json=${jsonPath}`);
  console.log(`csv=${csvPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

import { mkdir, readFile, writeFile, stat } from "node:fs/promises";
import path from "node:path";

const INPUT = path.join("data", "dfhub_collectibles.json");
const OUT_DIR = path.join("data", "dfhub_collectible_images");

function safeName(value) {
  return String(value)
    .replace(/[<>:"/\\|?*\u0000-\u001f]/g, "_")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 80);
}

async function exists(filePath) {
  try {
    await stat(filePath);
    return true;
  } catch {
    return false;
  }
}

async function download(row, index, total) {
  const url = row["图片"];
  if (!url) return { skipped: true, reason: "missing-url" };

  const ext = path.extname(new URL(url).pathname) || ".png";
  const name = safeName(row["名字"] || row.object_id || index + 1);
  const fileName = `${row.object_id || index + 1}_${name}${ext}`;
  const filePath = path.join(OUT_DIR, fileName);

  if (await exists(filePath)) {
    return { skipped: true, reason: "exists", filePath };
  }

  const response = await fetch(url, {
    headers: {
      Referer: "https://www.dfhub.cn/items/",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
    },
  });

  if (!response.ok) {
    return { skipped: true, reason: `http-${response.status}`, url, row };
  }

  await writeFile(filePath, Buffer.from(await response.arrayBuffer()));
  if ((index + 1) % 50 === 0 || index + 1 === total) {
    console.log(`progress=${index + 1}/${total}`);
  }
  return { skipped: false, filePath };
}

async function mapLimit(values, limit, worker) {
  let next = 0;
  const results = new Array(values.length);
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
  const rows = JSON.parse(await readFile(INPUT, "utf8"));
  await mkdir(OUT_DIR, { recursive: true });
  const results = await mapLimit(rows, 12, (row, index) => download(row, index, rows.length));
  const failures = results.filter((result) => result.reason?.startsWith("http-"));
  const downloaded = results.filter((result) => !result.skipped).length;
  const skipped = results.length - downloaded;
  if (failures.length) {
    await writeFile(
      path.join(OUT_DIR, "_failed.json"),
      JSON.stringify(failures, null, 2),
      "utf8",
    );
  }
  console.log(`downloaded=${downloaded}`);
  console.log(`skipped=${skipped}`);
  console.log(`failed=${failures.length}`);
  console.log(`dir=${OUT_DIR}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

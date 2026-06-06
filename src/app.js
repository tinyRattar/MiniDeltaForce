import {
  allItems,
  applySettlementToSave,
  bagCapacity,
  bagUsed,
  carriedValue,
  debuffLabel,
  dropBagItem,
  extract,
  formatMoney,
  getEntryValue,
  getAdjacentLocations,
  getCarrySpaces,
  getContainerSize,
  getCurrentContainer,
  getLocation,
  getLocationSearchProgress,
  getRevealDelayMs,
  itemMeta,
  loadSave,
  moveCarriedItem,
  moveContainerItem,
  moveTo,
  resetSave,
  returnCarriedItemToContainer,
  revealAllCurrent,
  revealItem,
  rotateCarriedItem,
  saveGame,
  searchContainer,
  searchLocation,
  startRaid,
  takeItem,
  takeItemToSpace,
  useTool,
} from "./domain/game.js";
import { CONNECTIONS, LOCATIONS, MAP_IMAGE_SIZE, MAP_IMAGE_URL, MAP_VIEW } from "./data/map.js";

const app = document.querySelector("#app");

let save = loadSave();
let raid = null;
let toast = "";
let revealTimer = null;
let actionTimer = null;
let pendingAction = "";
let selectedCarryItemId = null;

function setToast(message) {
  toast = message;
  render();
  window.setTimeout(() => {
    if (toast === message) {
      toast = "";
      render();
    }
  }, 2200);
}

function setRaid(nextRaid) {
  raid = nextRaid;
  if (selectedCarryItemId && !findCarriedEntry(selectedCarryItemId)) selectedCarryItemId = null;
  if (raid?.over && raid.result) {
    save = applySettlementToSave(save, raid.result);
    raid.screen = "settlement";
  }
  render();
  scheduleReveal();
}

function runActionAnimation(label, action) {
  window.clearTimeout(actionTimer);
  pendingAction = label;
  render();
  actionTimer = window.setTimeout(() => {
    pendingAction = "";
    action();
  }, 650);
}

function startNewRaid() {
  setRaid(startRaid());
}

function hardReset() {
  if (!window.confirm("确认重置本地存档？")) return;
  save = resetSave();
  raid = null;
  render();
}

function scheduleReveal() {
  window.clearTimeout(revealTimer);
  const container = raid ? getCurrentContainer(raid) : null;
  if (!container || raid.screen !== "search") return;
  const nextEntry = container.items.find((entry) => !entry.revealed);
  if (!nextEntry) return;
  revealTimer = window.setTimeout(() => {
    if (!raid || raid.screen !== "search") return;
    setRaid(revealItem(raid, nextEntry.instanceId));
  }, getRevealDelayMs(raid, nextEntry.itemId));
}

function button(label, attrs = {}) {
  const className = attrs.class ? ` class="${attrs.class}"` : "";
  const disabled = attrs.disabled ? " disabled" : "";
  const data = attrs.action ? ` data-action="${attrs.action}"` : "";
  const id = attrs.id ? ` data-id="${attrs.id}"` : "";
  const index = attrs.index !== undefined ? ` data-index="${attrs.index}"` : "";
  const title = attrs.title ? ` title="${attrs.title}"` : "";
  return `<button${className}${disabled}${data}${id}${index}${title}>${label}</button>`;
}

function renderShell(content) {
  app.innerHTML = `
    <main class="shell">
      ${content}
      ${renderItemModal()}
      ${pendingAction ? `<div class="action-overlay"><div class="action-pulse"></div><strong>${pendingAction}</strong><span>时间在流逝</span></div>` : ""}
      ${toast ? `<div class="toast">${toast}</div>` : ""}
    </main>
  `;
}

function renderHome() {
  const stashValue = save.stash.reduce((sum, entry) => sum + getEntryValue(entry), 0);
  const last = save.lastSettlement;
  renderShell(`
    <section class="topbar">
      <div>
        <p class="eyebrow">特勤处</p>
        <h1>Mini Delta Force</h1>
      </div>
      <div class="money">资金 ${formatMoney(save.money)}</div>
    </section>

    <section class="panel primary-panel">
      <div>
        <h2>行前准备</h2>
        <p>默认携带 4 根强效注射剂、1 个快拆手术包、1 瓶瓶装止痛药。第一版先用固定装备跑通搜打撤闭环。</p>
      </div>
      ${button("开始战局", { action: "start", class: "primary" })}
    </section>

    <section class="grid two">
      <article class="panel">
        <h2>仓库</h2>
        <div class="stat-row"><span>物品</span><strong>${save.stash.length}</strong></div>
        <div class="stat-row"><span>估值</span><strong>${formatMoney(stashValue)}</strong></div>
        <div class="stash-list">
          ${save.stash.slice(-8).reverse().map((entry) => itemPill(entry)).join("") || `<span class="muted">暂无带出物资</span>`}
        </div>
      </article>
      <article class="panel">
        <h2>最近结算</h2>
        ${
          last
            ? `<p class="${last.success ? "good" : "bad"}">${last.message}</p>
               <div class="stat-row"><span>带出价值</span><strong>${formatMoney(last.totalValue)}</strong></div>
               <div class="stat-row"><span>搜索容器</span><strong>${last.searchedCount}</strong></div>`
            : `<p class="muted">还没有战局记录。</p>`
        }
      </article>
    </section>

    <section class="panel">
      <h2>第一版物品池</h2>
      <div class="item-cloud">
        ${allItems().slice(0, 30).map((item) => itemPill(item.id)).join("")}
      </div>
    </section>

    <footer class="footer">
      ${button("重置存档", { action: "reset", class: "ghost" })}
    </footer>
  `);
}

function renderRaid() {
  const location = getLocation(raid);
  const adjacent = getAdjacentLocations(raid);
  const progress = getLocationSearchProgress(raid);
  renderShell(`
    ${renderStatus()}
    <section class="map-panel">
      <div class="location-header">
        <div>
          <p class="eyebrow">${location.risk}风险 ${location.highValue ? " / 高价值区" : ""}</p>
          <h1>${location.name}</h1>
        </div>
        ${location.extract ? button("撤离", { action: "extract", class: "primary" }) : `<span class="tag">非撤离点</span>`}
      </div>

      ${renderTacticalMap(raid, adjacent)}
    </section>

    <section class="panel">
      <div class="search-summary">
        <div>
          <p class="eyebrow">区域搜索度</p>
          <h2>${progress.percent}%</h2>
        </div>
        ${button(progress.complete ? "已搜索完" : "搜索", { action: "search-area", class: "primary", disabled: progress.complete })}
      </div>
      <div class="search-progress" aria-label="区域搜索度">
        <span style="width:${progress.percent}%"></span>
      </div>
    </section>

    ${renderBag()}
    ${renderTools()}
    ${renderLog()}
  `);
}

function renderTacticalMap(raid, adjacent) {
  const adjacentIds = new Set(adjacent.map((node) => node.id));
  const currentId = raid.locationId;
  const lineKeys = new Set();
  const lines = Object.entries(CONNECTIONS).flatMap(([fromId, toIds]) => {
    const from = LOCATIONS.find((location) => location.id === fromId);
    return toIds.flatMap((toId) => {
      const key = [fromId, toId].sort().join(":");
      if (lineKeys.has(key)) return [];
      lineKeys.add(key);
      const to = LOCATIONS.find((location) => location.id === toId);
      if (!from?.map || !to?.map) return [];
      const active = fromId === currentId || toId === currentId;
      return `<line class="map-route ${active ? "map-route--active" : ""}" x1="${from.map.x}" y1="${from.map.y}" x2="${to.map.x}" y2="${to.map.y}" />`;
    });
  });

  const nodes = LOCATIONS.map((node) => {
    const isCurrent = node.id === currentId;
    const isAdjacent = adjacentIds.has(node.id);
    const classes = ["map-node", isCurrent ? "map-node--current" : "", isAdjacent ? "map-node--adjacent" : "", node.extract ? "map-node--extract" : ""].filter(Boolean).join(" ");
    const style = `left:${((node.map.x - MAP_VIEW.x) / MAP_VIEW.width) * 100}%; top:${((node.map.y - MAP_VIEW.y) / MAP_VIEW.height) * 100}%;`;
    const actionAttrs = isAdjacent ? ` data-action="move" data-id="${node.id}"` : "";
    return `<button class="${classes}" style="${style}"${actionAttrs} title="${node.name}" aria-label="${node.name}"></button>`;
  }).join("");

  return `
    <div class="tactical-map" style="--map-aspect:${MAP_VIEW.width} / ${MAP_VIEW.height};" aria-label="零号大坝地图">
      <img src="${MAP_IMAGE_URL}" alt="零号大坝地图底图" style="left:${-(MAP_VIEW.x / MAP_VIEW.width) * 100}%; top:${-(MAP_VIEW.y / MAP_VIEW.height) * 100}%; width:${(MAP_IMAGE_SIZE / MAP_VIEW.width) * 100}%; height:${(MAP_IMAGE_SIZE / MAP_VIEW.height) * 100}%;" />
      <svg class="map-routes" viewBox="${MAP_VIEW.x} ${MAP_VIEW.y} ${MAP_VIEW.width} ${MAP_VIEW.height}" aria-hidden="true">
        ${lines.join("")}
      </svg>
      <div class="map-nodes">
        ${nodes}
      </div>
    </div>
    <div class="route-list route-list--compact">
      ${adjacent.map((node) => button(node.name, { action: "move", id: node.id, class: node.extract ? "extract-node" : "" })).join("")}
    </div>
  `;
}

function renderSearch() {
  const container = getCurrentContainer(raid);
  if (!container) {
    setRaid({ ...raid, screen: "raid" });
    return;
  }
  const hiddenCount = container.items.filter((entry) => !entry.revealed).length;
  const [containerWidth, containerHeight] = getContainerSize(container);
  const searchTitle = container.openLoot ? "发现了一些东西" : container.name;
  renderShell(`
    ${renderStatus()}
    <section class="panel search-panel">
      <div class="location-header">
        <div>
          <p class="eyebrow">${getLocation(raid).name}</p>
          <h1>${searchTitle}</h1>
        </div>
        <div class="actions">
          ${hiddenCount ? button("快速揭示", { action: "reveal-all", class: "ghost" }) : ""}
          ${button("返回地图", { action: "back-raid" })}
        </div>
      </div>
      <div class="loot-grid" data-space="container" style="--grid-w:${containerWidth}; --grid-h:${containerHeight};">
        ${container.items.map((entry) => renderLootEntry(entry)).join("")}
      </div>
    </section>
    ${renderBag()}
    ${renderTools()}
    ${renderLog()}
  `);
}

function renderSettlement() {
  const result = raid.result;
  renderShell(`
    <section class="settlement ${result.success ? "success" : "failed"}">
      <p class="eyebrow">${result.success ? "撤离成功" : "行动失败"}</p>
      <h1>${result.success ? "带出来了" : "没能带出来"}</h1>
      <p>${result.message}</p>
      <div class="settlement-stats">
        <div><span>带出价值</span><strong>${formatMoney(result.totalValue)}</strong></div>
        <div><span>搜索容器</span><strong>${result.searchedCount}</strong></div>
        <div><span>用时</span><strong>${result.timeUsed} 分钟</strong></div>
        <div><span>生命值</span><strong>${result.hp}</strong></div>
      </div>
      <div class="item-cloud">
        ${(result.success ? result.keptItems : result.lostItems).map((entry) => itemPill(entry)).join("") || `<span class="muted">没有物资</span>`}
      </div>
      <div class="actions wide">
        ${button("回到特勤处", { action: "home", class: "primary" })}
        ${button("再来一局", { action: "start" })}
      </div>
    </section>
  `);
}

function renderStatus() {
  const debuffs = raid.debuffs.map((debuff, index) => `<span class="debuff">${debuffLabel(debuff.id)}${button("×", { action: "surgery-one", index, class: "mini", title: "用快拆手术包治疗" })}</span>`).join("");
  return `
    <section class="statusbar">
      <div><span>时间</span><strong>${raid.timeLeft} 分</strong></div>
      <div><span>生命</span><strong>${raid.hp}/${raid.maxHp}</strong></div>
      <div><span>背包</span><strong>${bagUsed(raid)}/${bagCapacity(raid)}</strong></div>
      <div><span>价值</span><strong>${formatMoney(carriedValue(raid))}</strong></div>
      <div class="debuffs">${debuffs || `<span class="muted">状态良好</span>`}${raid.painkillerUntil ? `<span class="tag">止痛 ${raid.painkillerUntil}分</span>` : ""}</div>
    </section>
  `;
}

function renderTools() {
  return `
    <section class="panel">
      <h2>随身道具</h2>
      <div class="tool-row">
        ${button(`注射剂 ${raid.tools.injector.count}`, { action: "tool", id: "injector", disabled: raid.hp >= raid.maxHp || raid.tools.injector.count <= 0 })}
        ${button(`手术包 ${raid.tools.surgery.count}`, { action: "tool", id: "surgery", disabled: raid.debuffs.length === 0 || raid.tools.surgery.count <= 0 })}
        ${button(`止痛药 ${raid.tools.painkiller.count}`, { action: "tool", id: "painkiller", disabled: raid.tools.painkiller.count <= 0 })}
      </div>
    </section>
  `;
}

function renderBag() {
  return `
    <section class="panel">
      <h2>携行空间</h2>
      <div class="bag-meter"><span style="width:${Math.min(100, (bagUsed(raid) / bagCapacity(raid)) * 100)}%"></span></div>
      <div class="carry-layout">
        ${getCarrySpaces(raid).map((space) => renderCarrySpace(space)).join("")}
      </div>
    </section>
  `;
}

function renderCarrySpace(space) {
  if (space.slots) {
    return `
      <article class="carry-space carry-space--pockets">
        <div class="carry-header">
          <strong>${space.label}</strong>
          <span>6个 1x1</span>
        </div>
        <div class="pocket-slots">
          ${space.slots.map((slot, index) => renderPocketSlot(slot, index)).join("")}
        </div>
      </article>
    `;
  }
  return `
    <article class="carry-space">
      <div class="carry-header">
        <strong>${space.label}</strong>
        <span>${space.width}x${space.height}</span>
      </div>
      <div class="carry-grid" data-space="${space.key}" style="--grid-w:${space.width}; --grid-h:${space.height};">
        ${space.items.map((entry) => renderCarryEntry(entry)).join("")}
      </div>
    </article>
  `;
}

function renderPocketSlot(slot, index) {
  return `
    <div class="carry-grid pocket-slot" data-space="pockets" data-slot-index="${index}" style="--grid-w:1; --grid-h:1;">
      ${slot.items.map((entry) => renderCarryEntry(entry)).join("")}
    </div>
  `;
}

function renderCarryEntry(entry) {
  const item = itemMeta(entry.itemId);
  const placement = entry.placement ?? { x: 0, y: 0, w: item.size[0], h: item.size[1] };
  const placementStyle = `grid-column:${placement.x + 1} / span ${placement.w}; grid-row:${placement.y + 1} / span ${placement.h};`;
  const compactClass = placement.w < 2 || placement.h < 2 ? " item-card--compact" : "";
  return `<div class="carry-item item-card quality-${item.quality}${compactClass}" draggable="true" data-action="inspect-carry" data-drag-source="carry" data-id="${entry.instanceId}" title="${entryLabel(entry)}" style="${placementStyle}">
    <div class="loot-icon">${item.iconUrl ? `<img src="${item.iconUrl}" alt="">` : ""}</div>
    <strong>${entryLabel(entry)}</strong>
  </div>`;
}

function renderLootEntry(entry) {
  const item = itemMeta(entry.itemId);
  const placement = entry.placement ?? { x: 0, y: 0, w: item.size[0], h: item.size[1] };
  const placementStyle = `grid-column:${placement.x + 1} / span ${placement.w}; grid-row:${placement.y + 1} / span ${placement.h};`;
  if (!entry.revealed) {
    return `<div class="loot-card hidden-loot" style="${placementStyle}">
      <span class="search-orbit" aria-hidden="true"></span>
    </div>`;
  }
  const takeAttrs = ` data-action="take" data-id="${entry.instanceId}" data-drag-source="loot" draggable="true" role="button" tabindex="0"`;
  const compactClass = placement.w < 2 || placement.h < 2 ? " item-card--compact" : "";
  return `<div class="loot-card item-card quality-${item.quality}${compactClass}" title="${entryLabel(entry)}" style="${placementStyle}"${takeAttrs}>
    <div class="loot-icon">${item.iconUrl ? `<img src="${item.iconUrl}" alt="">` : ""}</div>
    <strong>${entryLabel(entry)}</strong>
  </div>`;
}

function renderLog() {
  return `
    <section class="panel">
      <h2>事件记录</h2>
      <div class="event-log">
        ${raid.eventLog.slice(0, 8).map((event) => `<p><strong>${event.title}</strong>${event.text}</p>`).join("")}
      </div>
    </section>
  `;
}

function entryLabel(entry) {
  const item = itemMeta(entry.itemId);
  return `${item.name}${item.stackSize ? ` x${entry.quantity ?? item.stackSize}` : ""}`;
}

function itemPill(itemOrEntry) {
  const entry = typeof itemOrEntry === "string" ? { itemId: itemOrEntry } : itemOrEntry;
  const item = itemMeta(entry.itemId);
  return `<span class="item-pill quality-${item.quality}">${entryLabel(entry)}<small>${formatMoney(getEntryValue(entry))}</small></span>`;
}

function findCarriedEntry(instanceId) {
  if (!raid) return null;
  for (const space of getCarrySpaces(raid)) {
    if (space.slots) {
      for (let index = 0; index < space.slots.length; index += 1) {
        const entry = space.slots[index].items.find((item) => item.instanceId === instanceId);
        if (entry) return { space: { ...space.slots[index], key: space.key, label: `${space.label} ${index + 1}` }, entry };
      }
      continue;
    }
    const entry = space.items.find((item) => item.instanceId === instanceId);
    if (entry) return { space, entry };
  }
  return null;
}

function renderItemModal() {
  if (!selectedCarryItemId) return "";
  const found = findCarriedEntry(selectedCarryItemId);
  if (!found) return "";
  const item = itemMeta(found.entry.itemId);
  const placement = found.entry.placement ?? { x: 0, y: 0, w: item.size[0], h: item.size[1] };
  const canRotate = placement.w !== placement.h;
  const currentContainer = raid?.screen === "search" ? getCurrentContainer(raid) : null;
  const canReturn = Boolean(currentContainer);
  const returnLabel = currentContainer?.openLoot ? "放回" : "放回容器";
  return `
    <div class="modal-backdrop" data-action="close-item-modal">
      <article class="item-modal" role="dialog" aria-modal="true">
        <div class="modal-header">
          <div>
            <p class="eyebrow">${found.space.label}</p>
            <h2>${entryLabel(found.entry)}</h2>
          </div>
          ${button("×", { action: "close-item-modal", class: "mini" })}
        </div>
        <div class="modal-body">
          <div class="modal-icon quality-${item.quality}">${item.iconUrl ? `<img src="${item.iconUrl}" alt="">` : ""}</div>
          <div class="stat-row"><span>价值</span><strong>${formatMoney(getEntryValue(found.entry))}</strong></div>
          <div class="stat-row"><span>品质</span><strong>${item.qualityLabel}</strong></div>
          <div class="stat-row"><span>尺寸</span><strong>${placement.w}x${placement.h}</strong></div>
          <div class="stat-row"><span>重量</span><strong>${item.weight}kg</strong></div>
        </div>
        <div class="actions wide">
          ${button("丢弃", { action: "drop", id: found.entry.instanceId, class: "bad-action" })}
          ${button("旋转", { action: "rotate", id: found.entry.instanceId, disabled: !canRotate })}
          ${button(returnLabel, { action: "return-to-container", id: found.entry.instanceId, disabled: !canReturn })}
        </div>
      </article>
    </div>
  `;
}

function render() {
  if (!raid) return renderHome();
  if (raid.screen === "settlement") return renderSettlement();
  if (raid.screen === "search") return renderSearch();
  return renderRaid();
}

app.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action]");
  if (!target) return;
  if (target.classList.contains("modal-backdrop") && event.target !== target) return;
  const action = target.dataset.action;
  const id = target.dataset.id;
  const index = Number(target.dataset.index || 0);

  if (action === "start") return startNewRaid();
  if (action === "home") {
    raid = null;
    return render();
  }
  if (action === "reset") return hardReset();
  if (!raid) return;

  if (action === "move") {
    return runActionAnimation("正在移动", () => setRaid(moveTo(raid, id)));
  }
  if (action === "search-area") {
    return runActionAnimation("正在搜索", () => {
      const result = searchLocation(raid);
      setRaid(result.raid);
      if (result.reason) setToast(result.reason);
    });
  }
  if (action === "search") return setRaid(searchContainer(raid, id));
  if (action === "back-raid") return setRaid({ ...raid, screen: "raid", currentSearch: null });
  if (action === "reveal-all") return setRaid(revealAllCurrent(raid));
  if (action === "take") {
    const result = takeItem(raid, id);
    if (!result.ok) setToast(result.reason);
    return setRaid(result.raid);
  }
  if (action === "inspect-carry") {
    selectedCarryItemId = id;
    return render();
  }
  if (action === "close-item-modal") {
    selectedCarryItemId = null;
    return render();
  }
  if (action === "drop") {
    selectedCarryItemId = null;
    return setRaid(dropBagItem(raid, id));
  }
  if (action === "rotate") {
    const result = rotateCarriedItem(raid, id);
    if (!result.ok) setToast(result.reason);
    return setRaid(result.raid);
  }
  if (action === "return-to-container") {
    const result = returnCarriedItemToContainer(raid, id);
    if (!result.ok) setToast(result.reason);
    if (result.ok) selectedCarryItemId = null;
    return setRaid(result.raid);
  }
  if (action === "tool") return setRaid(useTool(raid, id));
  if (action === "surgery-one") return setRaid(useTool(raid, "surgery", index));
  if (action === "extract") return setRaid(extract(raid));
});

app.addEventListener("dragstart", (event) => {
  const target = event.target.closest("[data-drag-source]");
  if (!target || !event.dataTransfer) return;
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("application/json", JSON.stringify({
    source: target.dataset.dragSource,
    instanceId: target.dataset.id,
  }));
});

app.addEventListener("dragover", (event) => {
  if (event.target.closest(".carry-grid, .loot-grid")) {
    event.preventDefault();
  }
});

app.addEventListener("drop", (event) => {
  const grid = event.target.closest(".carry-grid, .loot-grid");
  if (!grid || !event.dataTransfer || !raid) return;
  event.preventDefault();
  let payload = null;
  try {
    payload = JSON.parse(event.dataTransfer.getData("application/json"));
  } catch {
    return;
  }
  const target = getDropTarget(grid, event);
  if (!target || !payload?.instanceId) return;

  let result;
  if (payload.source === "loot" && target.spaceKey === "container") {
    result = moveContainerItem(raid, payload.instanceId, target);
  } else if (payload.source === "loot") {
    result = takeItemToSpace(raid, payload.instanceId, target);
  } else if (target.spaceKey === "container") {
    result = returnCarriedItemToContainer(raid, payload.instanceId, target);
  } else {
    result = moveCarriedItem(raid, payload.instanceId, target);
  }
  if (!result.ok) setToast(result.reason);
  setRaid(result.raid);
});

window.addEventListener("keydown", (event) => {
  if (!raid || !selectedCarryItemId || event.key.toLowerCase() !== "r") return;
  const result = rotateCarriedItem(raid, selectedCarryItemId);
  if (!result.ok) setToast(result.reason);
  setRaid(result.raid);
});

function getDropTarget(grid, event) {
  const rect = grid.getBoundingClientRect();
  const width = Number(grid.style.getPropertyValue("--grid-w"));
  const height = Number(grid.style.getPropertyValue("--grid-h"));
  if (!width || !height) return null;
  const styles = window.getComputedStyle(grid);
  const cell = Number.parseFloat(styles.getPropertyValue("--cell-size")) || 34;
  const padLeft = Number.parseFloat(styles.paddingLeft) || 0;
  const padTop = Number.parseFloat(styles.paddingTop) || 0;
  const x = Math.floor((event.clientX - rect.left - padLeft + grid.scrollLeft) / cell);
  const y = Math.floor((event.clientY - rect.top - padTop + grid.scrollTop) / cell);
  return {
    spaceKey: grid.dataset.space,
    slotIndex: grid.dataset.slotIndex == null ? undefined : Number(grid.dataset.slotIndex),
    x: Math.max(0, Math.min(width - 1, x)),
    y: Math.max(0, Math.min(height - 1, y)),
  };
}

render();

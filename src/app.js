import { act, loadState, SAVE_KEY, MAX_ROOMS, CATALOG, QUALITY_NAMES, bagValue, money, rank, upgradeCost, contractProgress, choiceAvailable } from './domain/expedition.js';
import { REGIONS, CURIOS, CONTRACTS, UPGRADES } from './data/expedition.js';
import { ENCOUNTERS } from './data/encounters.js';
import { CONTAINER_TYPES } from './data/containers.js';
import { CONTAINER_ICON_URLS } from './data/container-icons.js';
import { LOCAL_ICONS } from './data/local-icons.js';

const app = document.querySelector('#app');
let storage;
try { storage = window.localStorage; } catch { storage = { getItem: () => null, setItem: () => { throw new Error('Storage unavailable'); } }; }
let state = loadState(storage);
let page = state.run ? 'explore' : 'camp';
let modal = null;
let confirmation = null;
let revealTimer = null;
let toastTimer = null;
let sound = false;
let audioContext;
let storageFailed = false;
let albumTab = 'curios';
const shortMoney = n => n >= 100000000 ? `${(n / 100000000).toFixed(2)} 亿` : n >= 100000 ? `${(n / 10000).toFixed(1)} 万` : money(n);
const esc = text => String(text ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
const btn = (text, action, attrs = '', cls = '') => `<button class="${cls}" data-action="${action}" ${attrs}>${text}</button>`;
const image = (src, alt, cls = '') => `<img class="${cls}" src="${esc(src)}" alt="${esc(alt)}" loading="lazy" decoding="async">`;
const itemArt = item => LOCAL_ICONS[item.id] ? image(LOCAL_ICONS[item.id], '', 'item-art') : `<span class="item-symbol" aria-hidden="true">${item.symbol || '◇'}</span>`;

function persist() {
  try { storage.setItem(SAVE_KEY, JSON.stringify(state)); storageFailed = false; }
  catch { storageFailed = true; }
}
function notify(text) {
  const el = document.querySelector('#toast');
  if (!el) return;
  el.textContent = text;
  el.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('visible'), 3200);
}
function chime(quality) {
  if (!sound) return;
  try {
    audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
    void audioContext.resume();
    const time = audioContext.currentTime;
    [0, 4, quality >= 4 ? 12 : 7].forEach((semitone, i) => {
      const oscillator = audioContext.createOscillator(), gain = audioContext.createGain();
      oscillator.frequency.value = 330 * 2 ** ((quality * 2 + semitone) / 12);
      gain.gain.setValueAtTime(0, time + i * 0.07);
      gain.gain.linearRampToValueAtTime(0.035, time + i * 0.07 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, time + i * 0.07 + 0.35);
      oscillator.connect(gain).connect(audioContext.destination);
      oscillator.start(time + i * 0.07); oscillator.stop(time + i * 0.07 + 0.4);
    });
  } catch { /* Sound is optional. */ }
}
function dispatch(action) {
  try {
    const next = action.type === 'reveal' ? state.run?.loot?.items.find(e => !e.revealed) : null;
    state = act(state, action);
    if (action.type === 'start') { page = 'explore'; modal = null; window.scrollTo(0, 0); }
    if (action.type === 'extract') { page = 'result'; modal = null; window.scrollTo(0, 0); }
    if (action.type === 'travel') window.scrollTo({ top: 0, behavior: 'instant' });
    if (next) chime(rank(CATALOG[next.itemId]));
    persist(); render(); scheduleReveal();
    if (next) notify(`发现${QUALITY_NAMES[CATALOG[next.itemId].quality]}物品：${CATALOG[next.itemId].name}`);
    return true;
  } catch (error) { notify(error.message); return false; }
}
function scheduleReveal() {
  clearTimeout(revealTimer);
  const next = state.run?.loot?.items.find(e => !e.revealed);
  if (next && page === 'explore' && !modal && !document.hidden) {
    revealTimer = setTimeout(() => dispatch({ type: 'reveal' }), 500 + rank(CATALOG[next.itemId]) * 170);
  }
}
function confirmAction(title, text, action) {
  confirmation = { title, text, action }; modal = 'confirm'; render(); scheduleReveal();
}
function qualityLabel(item) { return `<span class="quality-label">${QUALITY_NAMES[item.quality]}</span>`; }
function itemCard(entry, source) {
  const item = CATALOG[entry.itemId];
  if (!entry.revealed) return `<div class="loot-card unrevealed"><div class="scan-line"></div><span class="unknown">?</span><strong>正在搜索</strong><small>好东西值得等一下</small></div>`;
  return `<article class="loot-card q-${item.quality} ${entry.taken ? 'taken' : ''}">
    <div class="item-top">${qualityLabel(item)}${!state.collection[item.id] ? '<span class="new-tag">未收藏</span>' : ''}</div>
    ${itemArt(item)}<strong>${esc(item.name)}</strong><span class="item-value">${money(item.value)}</span>
    ${source ? entry.taken ? '<span class="packed">✓ 已装包</span>' : btn('＋ 装入背包', 'take', `data-id="${entry.id}" data-source="${source}"`, 'small') : ''}
  </article>`;
}
function header() {
  return `<header class="topbar"><a class="brand" href="#" data-action="home"><span class="brand-mark">▧</span><span>箱外之地<small>MINI DELTA FORCE · 重构版</small></span></a><div class="top-actions">${btn(sound ? '♪' : '♫', 'sound', `aria-label="${sound ? '关闭音效' : '开启音效'}" aria-pressed="${sound}"`, 'icon-button')}${btn('?', 'help', 'aria-label="玩法说明"', 'icon-button')}</div></header>`;
}
function navigation() {
  return `<nav class="nav" aria-label="主要导航">${btn('⌂ <span>营地</span>', 'home', `aria-current="${page === 'camp' ? 'page' : 'false'}"`, page === 'camp' ? 'active' : '')}${btn('⌁ <span>探索</span>', state.run ? 'explore' : 'start', `aria-current="${page === 'explore' ? 'page' : 'false'}"`, page === 'explore' ? 'active' : '')}${btn('▤ <span>收藏手册</span>', 'album')}${btn('⚒ <span>装备升级</span>', 'upgrades')}</nav>`;
}
function contracts(run) {
  return `<div class="contracts">${run.contracts.map(id => {
    const c = CONTRACTS.find(c => c.id === id), progress = Math.min(c.target, contractProgress(run, id));
    return `<div class="contract ${progress === c.target ? 'complete' : ''}"><div><span>${progress === c.target ? '✓' : '◇'} ${c.title}</span><b>${progress}/${c.target}</b></div><progress value="${progress}" max="${c.target}" aria-label="${c.text}"></progress><small>${c.text} · 奖励 ${money(c.reward)}</small></div>`;
  }).join('')}</div>`;
}
function camp() {
  return `<section class="camp-hero"><div class="hero-copy"><span class="eyebrow"><i></i> 轻装上阵，惊喜随行</span><h1>好东西，<br>总在<span>下一个箱子。</span></h1><p>翻开无人问津的角落，撞见意想不到的故事。<br>不赶时间，带点快乐回营。</p><div class="hero-buttons">${btn(state.run ? '继续这趟冒险 <span>↗</span>' : '出发，摸两把 <span>↗</span>', state.run ? 'explore' : 'start', '', 'primary large')}${btn('翻翻收藏手册', 'album', '', 'quiet')}</div><div class="hero-notes"><span>◷ 每局约 5–10 分钟</span><span>◇ 随时满载回营</span></div></div><div class="crate-scene" aria-hidden="true"><div class="orbit orbit-one"></div><div class="orbit orbit-two"></div><span class="scene-label">UNKNOWN CONTENTS</span><div class="rays"></div><div class="hero-crate"><div class="crate-lid"></div><div class="crate-body"><span>?</span><i></i><b>LOOT / 001</b></div></div><span class="floating-tag tag-one">✦ 发现未知藏品</span><span class="floating-tag tag-two">惊喜概率：永远存在</span><div class="scene-floor"></div></div></section>
  <section class="camp-stats" aria-label="营地统计"><div><small>可用资金</small><strong class="mint">${shortMoney(state.money)}<em>币</em></strong></div><div><small>收藏发现</small><strong>${Object.keys(state.collection).length}<em>件</em></strong></div><div><small>奇遇收录</small><strong>${Object.keys(state.eventBook).length}<em>/ ${ENCOUNTERS.length}</em></strong></div><div><small>最赚的一趟</small><strong>${shortMoney(state.stats.best)}<em>币</em></strong></div></section>
  ${state.migrated ? '<div class="notice">老朋友，欢迎回来。旧版资金已保留，仓库物品已按原价兑换并收入图鉴；旧存档仍保留在本机。</div>' : ''}
  <div class="section-heading"><div><span class="eyebrow">FIELD NOTES</span><h2>每一趟，都有新鲜事</h2></div><span class="subtle">搜箱才是正经事</span></div>
  <section class="feature-grid"><article class="feature"><span class="feature-icon">▧</span><small>01 / 开箱的快乐</small><h3>一件一件，翻出惊喜</h3><p>逐件揭晓、稀有闪光。首箱必出紫，连续三箱没紫，下一箱给你惊喜。</p></article><article class="feature"><span class="feature-icon peach">☻</span><small>02 / 这梗我懂</small><h3>废土尽头，也要摸鱼</h3><p>老板画的饼，猫占的箱，熟悉的前奏。16 种奇遇，每一次由你接梗。</p></article><article class="feature"><span class="feature-icon lavender">◇</span><small>03 / 带点故事回来</small><h3>从捡破烂，到收藏家</h3><p>顺手完成委托，扩容你的背包。战利品回营自动变现，收藏永久点亮。</p></article></section>
  ${state.lastResult ? `<div class="last-trip"><div><small>上次的快乐账单</small><strong>带回 ${money(state.lastResult.total)} 币 · 新增 ${state.lastResult.newItems.length} 件收藏</strong></div>${btn('查看手记 ↗', 'result', '', 'quiet')}</div>` : ''}`;
}
function runHud(run) {
  return `<section class="run-hud"><div><small>体力</small><strong class="${run.energy < 6 ? 'peach-text' : 'mint'}">ϟ ${run.energy}<em>/ ${run.maxEnergy}</em></strong><progress value="${run.energy}" max="${run.maxEnergy}" aria-label="剩余体力"></progress></div><div><small>背包估值</small><strong title="${money(bagValue(run))}">${shortMoney(bagValue(run))}</strong><small title="${money(run.coins)}">零钱 ${shortMoney(run.coins)}</small></div>${btn(`<small>背包</small><strong>${run.bag.length}<em>/ ${run.capacity}</em> <span>↗</span></strong><small>查看 / 回收腾位置</small>`, 'bag', '', 'bag-stat')}</section>`;
}
function encounterView(run) {
  const event = ENCOUNTERS.find(e => e.id === run.event.id);
  return `<section class="event-panel" aria-labelledby="event-title"><div class="event-visual" aria-hidden="true">${event.icon}<span>!</span></div><div class="event-copy"><span class="eyebrow peach-text">随机奇遇 / ${event.tag}</span><h2 id="event-title">${event.title}</h2><p>${event.text}</p><div class="event-choices">${event.choices.map((choice, i) => btn(`<strong>${choice.text} <span>↗</span></strong><small>${choice.hint}</small>`, 'choose', `data-index="${i}" ${choiceAvailable(run, choice) ? '' : 'disabled'}`, 'choice')).join('')}</div><small class="subtle">恢复体力不超过上限 · 本局零钱 ${money(run.coins)}</small></div></section>`;
}
function lootView(run) {
  const loot = run.loot, remaining = loot.items.filter(e => !e.revealed).length;
  const left = loot.items.filter(e => e.revealed && !e.taken).length;
  return `<section class="search-panel"><div class="section-heading"><div><span class="eyebrow">${remaining ? 'SEARCHING · 搜索中' : 'SEARCH COMPLETE · 搜索完成'}</span><h2>${loot.name}</h2></div><span class="pill">${loot.items.length - remaining} / ${loot.items.length} 已揭晓</span></div>${loot.guaranteed ? `<div class="guarantee">✦ ${loot.guaranteed === 4 ? '终点宝箱：至少一件金色藏品' : '本箱保底：至少一件紫色藏品'}</div>` : ''}<div class="loot-grid">${loot.items.map(e => itemCard(e, 'loot')).join('')}</div><div class="search-actions">${remaining ? btn('立即揭晓全部', 'revealAll', '', 'quiet') : btn('收好，继续探索 →', 'closeLoot', '', 'quiet')}${btn(run.bag.length >= run.capacity ? '背包已满 · 去整理' : '一键装包 · 高价优先', run.bag.length >= run.capacity ? 'bag' : 'takeAll', `data-source="loot" ${!left && run.bag.length < run.capacity ? 'disabled' : ''}`, 'primary')}</div><small class="subtle">每件物品占 1 格 · 回营按原价变现 · 关闭箱子会放弃未装包物品</small></section>`;
}
function roomView(run) {
  const region = REGIONS.find(r => r.id === run.room.regionId);
  return `<section class="room-panel" style="--region:${region.color}"><div class="room-banner"><span class="region-symbol" aria-hidden="true">${region.icon}</span><div><span class="eyebrow">${region.mood} / 第 ${run.stats.rooms} 站</span><h1>${region.name}</h1><p>${region.subtitle}</p></div><span class="coordinate">${String(run.stats.rooms).padStart(2, '0')}<small>/ 08</small></span></div><div class="container-grid">${run.room.boxes.map((box, i) => btn(`<div class="box-label"><span>容器 0${i + 1}</span><b>${box.opened ? '已搜索 ✓' : box.gilded ? '金色保底' : '未搜索'}</b></div>${image(CONTAINER_ICON_URLS[box.typeId], '', 'container-art')}<strong>${CONTAINER_TYPES[box.typeId].name}</strong><small>${box.opened ? '这里的故事已经揭晓' : box.gilded ? '终点犒赏 · 搜索 −2 体力' : '3–4 件发现 · 搜索 −2 体力'}</small><span class="box-cta">${box.opened ? '已完成' : '搜索容器 ↗'}</span>`, 'open', `data-id="${box.id}" ${box.opened || run.energy < 2 ? 'disabled' : ''}`, `container-card ${box.gilded ? 'gilded' : ''}`)).join('')}</div></section>`;
}
function routeView(run) {
  if (run.stats.rooms >= MAX_ROOMS) return `<div class="notice gold-text">✦ 已抵达本次路线终点。搜完金色保底箱，就带着故事回家吧。</div>`;
  if (run.energy < 2) return `<div class="notice">今天已经摸得很尽兴了。体力不足，点击「带货回营」完整结算。</div>`;
  return `<section class="route-section"><div class="section-heading"><div><span class="eyebrow">${run.room ? 'KEEP WANDERING' : 'YOUR NEXT STORY'}</span><h2>${run.room ? '下一站，去哪儿？' : '先挑一个顺眼的地方'}</h2></div><span class="subtle">${run.room ? '离开后不能返回' : '每趟路线随机生成'}</span></div><div class="route-grid">${run.routes.map(id => {
    const region = REGIONS.find(r => r.id === id);
    return btn(`<div class="route-top"><span style="color:${region.color}">${region.icon}</span><small>路程 −${2 + (region.cost || 0)} 体力</small></div><h3>${region.name}</h3><p>${region.clue}</p><div class="route-bottom"><span>${run.stats.rooms % 2 === 1 ? '必有奇遇' : '未知故事'}</span><b>出发 ↗</b></div>`, 'travel', `data-id="${id}" ${run.energy < 2 + (region.cost || 0) ? 'disabled' : ''}`, 'route-card');
  }).join('')}</div></section>`;
}
function explore() {
  const run = state.run;
  if (!run) return camp();
  return `<div class="expedition-heading"><span class="eyebrow"><i></i> 正在探索 / ADVENTURE ${String(state.stats.runs + 1).padStart(3, '0')}</span>${btn('冒险手记 ↗', 'journal', '', 'quiet small')}</div>${runHud(run)}<div class="trail" aria-label="探索进度">${Array.from({ length: MAX_ROOMS }, (_, i) => `<span class="${i < run.stats.rooms ? 'visited' : ''} ${i === run.stats.rooms - 1 ? 'current' : ''}" title="${run.path[i] ? REGIONS.find(r => r.id === run.path[i]).name : '未知地点'}">${i === MAX_ROOMS - 1 ? '✦' : String(i + 1).padStart(2, '0')}</span>`).join('')}</div>
  ${run.event ? encounterView(run) : `${run.eventResult ? `<div class="event-result" role="status"><span>${run.eventResult.icon}</span><div><strong>${run.eventResult.title}</strong><p>${run.eventResult.text}</p></div></div>` : ''}${run.ground.length ? `<section class="ground-panel"><div class="section-heading"><h2>奇遇留下的礼物</h2>${btn('全部装包', 'takeAll', 'data-source="ground"', 'small')}</div><div class="loot-grid">${run.ground.map(e => itemCard(e, 'ground')).join('')}</div></section>` : ''}${run.loot ? lootView(run) : `${run.room ? roomView(run) : ''}<div class="luck-strip"><span>✦ ${run.pity >= 3 ? '下箱必出紫色以上！' : `保底蓄力 ${run.pity}/3 · 连续三箱无紫，下箱保底`}</span>${run.luck ? `<b>下箱寻宝 +${run.luck}</b>` : ''}</div>${routeView(run)}`}`}
  <div class="section-heading compact"><h2>顺手做个委托</h2><small class="subtle">达成后回营自动领钱</small></div>${contracts(run)}
  <div class="extraction-bar"><div><small>随时回营 · 全部带出</small><strong title="${money(bagValue(run) + run.coins)}">${shortMoney(bagValue(run) + run.coins)} <em>币</em></strong></div>${btn('带货回营 ↗', 'extract', `${run.event || run.loot ? 'disabled' : ''}`, 'primary')}<small>${run.event ? '先完成眼前的奇遇' : run.loot ? '先收好箱子里的发现' : '不扣手续费，不怕白忙活'}</small></div>`;
}
function result() {
  const r = state.lastResult;
  if (!r) return camp();
  const best = [...r.items].sort((a, b) => CATALOG[b.itemId].value - CATALOG[a.itemId].value).slice(0, 4);
  return `<section class="result-hero"><span class="eyebrow">BACK WITH A STORY</span><div class="result-seal">✓</div><h1>${r.total >= 300000 ? '这趟，有点东西。' : r.total ? '快乐，已成功带回。' : '散了个步，也挺好。'}</h1><p>搜了 ${r.stats.boxes} 个箱子，遇到 ${r.stats.events} 个故事。<br>下次再来，箱子和命运都重新洗牌。</p><div class="result-total">+ ${money(r.total)}<small>本次入账</small></div><div class="receipt"><div><span>带出物品</span><b>${money(r.cargo)}</b></div><div><span>奇遇与回收零钱</span><b>${money(r.coins)}</b></div><div><span>委托奖励</span><b>${money(r.bonus)}</b></div></div><div class="hero-buttons">${btn('再去摸两把 ↗', state.run ? 'explore' : 'start', '', 'primary large')}${btn('回营看看', 'home', '', 'quiet')}</div></section>${best.length ? `<div class="section-heading"><h2>这趟最值得晒的</h2><span class="subtle">${r.newItems.length} 件新收藏已点亮</span></div><div class="loot-grid result-loot">${best.map(e => itemCard({ ...e, revealed: true }, null)).join('')}</div>` : ''}`;
}
function album() {
  let content;
  if (albumTab === 'events') content = `<div class="event-book">${ENCOUNTERS.map(event => `<article class="book-entry ${state.eventBook[event.id] ? '' : 'locked'}"><span>${state.eventBook[event.id] ? event.icon : '?'}</span><div><strong>${state.eventBook[event.id] ? event.title : '未遇见的故事'}</strong><p>${state.eventBook[event.id] ? event.text : '去下一个路口看看吧。'}</p><small>${state.eventBook[event.id] ? `相遇 ${state.eventBook[event.id]} 次 · ${event.tag}` : '探索时解锁'}</small></div></article>`).join('')}</div>`;
  else {
    const items = albumTab === 'curios' ? CURIOS : Object.keys(state.collection).map(id => CATALOG[id]).filter(Boolean).sort((a, b) => rank(b) - rank(a));
    content = items.length ? `<div class="album-grid">${items.map(item => `<article class="collection-card q-${item.quality} ${state.collection[item.id] ? '' : 'locked'}">${state.collection[item.id] ? itemArt(item) : '<span class="item-symbol">?</span>'}${qualityLabel(item)}<strong>${state.collection[item.id] ? esc(item.name) : '未知梗藏品'}</strong><p>${state.collection[item.id] ? esc(item.story || item.category || '从无人问津的角落带回的收藏。') : '在奇遇中找到，并装包带回营地。'}</p><small>${state.collection[item.id] ? `累计带回 ${state.collection[item.id]} 件 · ${money(item.value)}` : '等待你的第一次相遇'}</small></article>`).join('')}</div>` : '<div class="empty"><span>◇</span><h3>故事从第一个箱子开始</h3><p>带回营地的物品，会永久收入收藏。</p></div>';
  }
  return `<div class="modal-heading"><span class="eyebrow">THE LITTLE THINGS</span><h2>收藏手册</h2><p>物品回营自动变现，发现的故事永远留下。</p></div><div class="tabs" role="group" aria-label="收藏分类">${[['curios', '梗藏品'], ['items', `全部收藏 ${Object.keys(state.collection).length}`], ['events', `奇遇 ${Object.keys(state.eventBook).length}/${ENCOUNTERS.length}`]].map(([id, text]) => btn(text, 'albumTab', `data-tab="${id}" aria-pressed="${albumTab === id}"`, albumTab === id ? 'active' : '')).join('')}</div>${content}`;
}
function modalContent() {
  const run = state.run;
  if (modal === 'confirm') return `<div class="modal-heading"><span class="eyebrow">ONE MORE THING</span><h2>${esc(confirmation.title)}</h2><p>${esc(confirmation.text)}</p></div><div class="confirm-actions">${btn('再看看', 'dismiss', '', 'quiet')}${btn('确认继续', 'confirm', '', 'primary')}</div>`;
  if (modal === 'album') return album();
  if (modal === 'bag' && run) return `<div class="modal-heading"><span class="eyebrow">POCKET FULL OF STORIES</span><h2>你的背包 <small>${run.bag.length}/${run.capacity}</small></h2><p>满了就取舍一下：回收获得原价 20% 的本局零钱；直接带回营地获得全价并点亮图鉴。</p><strong class="mint">估值 ${money(bagValue(run))}</strong></div>${run.bag.length ? `<div class="bag-list">${[...run.bag].sort((a, b) => CATALOG[a.itemId].value - CATALOG[b.itemId].value).map(e => { const item = CATALOG[e.itemId]; return `<article class="bag-row q-${item.quality}">${itemArt(item)}<div>${qualityLabel(item)}<strong>${esc(item.name)}</strong><small>${money(item.value)}${!state.collection[item.id] ? ' · 尚未收藏' : ''}</small></div>${btn(`回收<br><small>+${money(Math.floor(item.value * 0.2))}</small>`, 'salvage', `data-id="${e.id}"`, 'small')}</article>`; }).join('')}</div>` : '<div class="empty"><span>▧</span><h3>背包空空，期待满满</h3><p>发现好东西后，记得点「装入背包」。</p></div>'}`;
  if (modal === 'upgrades') return `<div class="modal-heading"><span class="eyebrow">A LITTLE BETTER EACH TIME</span><h2>为下次冒险做准备</h2><p>永久升级，下次出发立即生效。可用资金 <b class="mint">${money(state.money)}</b></p></div><div class="upgrade-list">${Object.entries(UPGRADES).map(([key, def]) => `<article class="upgrade-card"><span>${def.icon}</span><div><h3>${def.name} <small>Lv.${state.upgrades[key]} / ${def.max}</small></h3><p>${def.text}</p><div class="upgrade-dots">${Array.from({ length: def.max }, (_, i) => `<i class="${i < state.upgrades[key] ? 'filled' : ''}"></i>`).join('')}</div></div>${btn(state.upgrades[key] >= def.max ? '已满级' : run ? '回营后升级' : `升级 · ${money(upgradeCost(state, key))}`, 'upgrade', `data-key="${key}" ${run || state.upgrades[key] >= def.max || state.money < upgradeCost(state, key) ? 'disabled' : ''}`, 'primary small')}</article>`).join('')}</div>`;
  if (modal === 'journal' && run) return `<div class="modal-heading"><span class="eyebrow">FIELD JOURNAL</span><h2>今天的离谱见闻</h2><p>已搜 ${run.stats.boxes} 箱 · 已完成 ${run.stats.events} 次奇遇</p></div><ol class="journal-list">${run.log.map(text => `<li>${esc(text)}</li>`).join('') || '<li>路线还没选，故事还没开始。</li>'}</ol>`;
  return `<div class="modal-heading"><span class="eyebrow">HOW TO HAVE A GOOD TIME</span><h2>来都来了，摸两把</h2></div><div class="help-copy"><h3>① 选地方，找箱子</h3><p>每趟最多探索 8 站，每站 3 个容器。赶路花 2 点体力，地下收藏室额外花 1 点；搜索花 2 点。没体力也能带货回营，不损失收益。</p><h3>② 等揭晓，装进包</h3><p>每箱 3–4 件物品，自动逐件揭晓，也能立即翻完。首箱保底紫；连续三箱没有紫色及以上，下箱保底紫；第 8 站首箱保底金。每件只占 1 格。</p><h3>③ 遇到梗，自己选</h3><p>第 2、4、6、8 站必遇事件，其余新站也可能遇见。选项会写明花费和随机概率。赠送物品记得装包；同一局不会重复遇到同一个故事。</p><h3>④ 带回营，慢慢收藏</h3><p>回营物品按原价变现并永久点亮图鉴，委托奖励自动到账。局内回收只有原价 20%，不会解锁收藏。换路线、关闭箱子会放弃未拿物品。</p><h3>一点寻宝玄学</h3><p>地点、天线和事件提供寻宝加成：每点使紫色以上的概率提高 2 个百分点，最多加 20 点。事件加成用完下一个箱子即消失；体力恢复不超过上限。</p><p class="notice">进度自动保存在当前浏览器，可关闭后继续。无实时倒计时，无付费抽箱；清除浏览器数据会清除本机记录。</p></div>`;
}
function render() {
  const active = document.activeElement;
  const focusKey = active?.dataset?.action ? { action: active.dataset.action, id: active.dataset.id, key: active.dataset.key, tab: active.dataset.tab } : null;
  const scroll = document.querySelector('#overlay')?.scrollTop || 0;
  app.innerHTML = `${header()}${navigation()}${storageFailed ? '<div class="storage-warning" role="alert">浏览器未能保存进度，请保持页面打开；本次关闭后可能丢失进度。</div>' : ''}<main>${page === 'explore' ? explore() : page === 'result' ? result() : camp()}</main><footer><span>箱外之地</span> 一点搜箱，一点奇遇，一点小确幸。<small>本机自动存档 · v2.0</small></footer><div id="toast" class="toast" role="status" aria-live="polite"></div>${modal ? `<dialog id="overlay" class="${modal === 'confirm' ? 'compact-modal' : ''}" aria-label="${modal === 'confirm' ? '确认操作' : modal === 'bag' ? '背包管理' : modal === 'album' ? '收藏手册' : '冒险面板'}">${btn('×', 'dismiss', 'aria-label="关闭面板"', 'modal-close icon-button')}${modalContent()}</dialog>` : ''}`;
  const dialog = document.querySelector('#overlay');
  if (dialog) { dialog.showModal(); dialog.scrollTop = scroll; dialog.addEventListener('cancel', () => { modal = null; scheduleReveal(); }); }
  if (focusKey) {
    const scope = dialog || app;
    const target = [...scope.querySelectorAll('[data-action]')].find(e => e.dataset.action === focusKey.action && e.dataset.id === focusKey.id && e.dataset.key === focusKey.key && e.dataset.tab === focusKey.tab);
    target?.focus({ preventScroll: true });
  }
}
app.addEventListener('click', event => {
  const target = event.target.closest('[data-action]');
  if (!target || target.disabled) return;
  event.preventDefault();
  const action = target.dataset.action, run = state.run;
  if (['album', 'upgrades', 'bag', 'help', 'journal'].includes(action)) { modal = action; render(); scheduleReveal(); return; }
  switch (action) {
    case 'dismiss': modal = null; render(); scheduleReveal(); break;
    case 'confirm': { const next = confirmation.action; modal = null; confirmation = null; dispatch({ ...next, confirm: true }); break; }
    case 'home': page = 'camp'; window.scrollTo(0, 0); render(); scheduleReveal(); break;
    case 'explore': page = 'explore'; window.scrollTo(0, 0); render(); scheduleReveal(); break;
    case 'result': page = 'result'; render(); scheduleReveal(); break;
    case 'start': dispatch({ type: 'start' }); break;
    case 'sound': sound = !sound; if (sound) chime(2); render(); scheduleReveal(); break;
    case 'albumTab': albumTab = target.dataset.tab; render(); break;
    case 'upgrade': if (dispatch({ type: 'upgrade', key: target.dataset.key })) notify('升级完成，下次出发就能用上。'); break;
    case 'open': dispatch({ type: 'open', id: target.dataset.id }); break;
    case 'choose': dispatch({ type: 'choose', index: Number(target.dataset.index) }); break;
    case 'travel': {
      const next = { type: 'travel', id: target.dataset.id };
      if (run.ground.length) confirmAction('还有礼物没装包', '换地点会放弃地上的奇遇奖励，确定继续？', next);
      else dispatch(next);
      break;
    }
    case 'revealAll':
      clearTimeout(revealTimer);
      while (state.run?.loot?.items.some(e => !e.revealed)) state = act(state, { type: 'reveal' });
      chime(3); persist(); render(); break;
    case 'take': if (dispatch({ type: 'take', id: target.dataset.id, source: target.dataset.source })) notify('装包成功，回营就是你的。'); break;
    case 'takeAll': {
      const before = run.bag.length;
      if (dispatch({ type: 'takeAll', source: target.dataset.source })) notify(state.run.bag.length > before ? `已装入 ${state.run.bag.length - before} 件，高价优先。` : '背包满了，先回收一件旧物腾位置。');
      break;
    }
    case 'salvage': {
      const entry = run.bag.find(e => e.id === target.dataset.id), item = CATALOG[entry.itemId];
      confirmAction('回收这件物品？', `${item.name}：回收只得 ${money(Math.floor(item.value * 0.2))}，直接带回营地可得 ${money(item.value)}。回收不会点亮收藏。`, { type: 'salvage', id: entry.id });
      break;
    }
    case 'closeLoot':
      if (run.loot.items.some(e => !e.taken)) confirmAction('还有发现没带上', `将放弃 ${run.loot.items.filter(e => !e.taken).length} 件物品。确定收好这个箱子？`, { type: 'closeLoot' });
      else dispatch({ type: 'closeLoot' });
      break;
    case 'extract': confirmAction('带着快乐回营？', `物品和零钱共 ${money(bagValue(run) + run.coins)} 币，已完成委托另计。${run.ground.length ? '还有奇遇礼物没装包，会被留在这里。' : '背包物品全价变现，并收入收藏。'}`, { type: 'extract' }); break;
  }
});
document.addEventListener('visibilitychange', () => { if (document.hidden) { clearTimeout(revealTimer); persist(); } else scheduleReveal(); });
window.addEventListener('pagehide', persist);
window.addEventListener('pageshow', scheduleReveal);
persist(); render(); scheduleReveal();

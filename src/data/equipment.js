// Snapshot accessed 2026-09-10. Prices are fixed game prices, NOT live quotes.
// Internal size is [width, height]. User tiers are specified height x width.
export const BACKPACKS = [
  { id: 'small', name: '战术快拆背包', size: [3, 5], price: 9375, quality: 'green', note: '绿色档较高参考价 · 15 格' },
  { id: '3h', name: '3H战术背包', size: [3, 6], price: 14250, quality: 'blue' },
  { id: 'ga', name: 'GA野战背包', size: [5, 4], price: 23250, quality: 'blue' },
  { id: 'gt1', name: 'GT1户外登山包', size: [5, 5], price: 59125, quality: 'purple' },
  { id: 'd3', name: 'D3战术背包', size: [4, 7], price: 114070, quality: 'gold' },
  { id: 'gt5', name: 'GT5野战背包', size: [5, 6], price: 171000, quality: 'gold' },
  { id: 'd7', name: 'D7战术背包', size: [5, 7], price: 470000, quality: 'red', note: '游戏内平衡价 · 无可靠成交价' },
  { id: 'gto', name: 'GTO重型战术包', size: [5, 9], price: 1080000, quality: 'red', note: '游戏内平衡价 · 无可靠成交价' },
];
export const RIGS = [
  { id: 'universal', name: '通用战术胸挂', slots: [[1,2],[1,2],[1,2],[1,2],[1,1]], price: 4510, quality: 'green' },
  { id: 'dsa', name: 'DSA战术胸挂', slots: Array.from({length: 6}, () => [1,2]), price: 6052, quality: 'blue' },
  { id: 'g01', name: 'G01战术弹挂', slots: [[1,2],[1,2],[1,2],[1,2],[1,2],[1,3]], price: 13026, quality: 'blue' },
  { id: 'drc', name: 'DRC先进侦察胸挂', slots: [[2,2],[2,2],[1,3],[1,3],[1,3]], price: 55000, quality: 'purple', note: '参考价 · 非实时行情' },
];
export const EQUIPMENT = Object.fromEntries([...BACKPACKS.map(e => ({...e, kind:'bag'})), ...RIGS.map(e => ({...e, kind:'rig'}))].map(e => [e.id, e]));
export const MEDICINES = {
  'consumable-14020000003': { name: '强效注射器', heal: 60, capacity: 60, seconds: 8, price: 6905, symbol: '💉', text: '共 60 点治疗量；每次 8 秒，溢出余量保留' },
  'medkit': { name: '车载急救包', heal: 80, capacity: 80, seconds: 15, price: 3067, symbol: '✚', text: '共 80 点治疗量；每次 15 秒，余量保留' },
  'field-med': { name: '野战急救包', heal: 100, capacity: 100, seconds: 20, price: 19123, symbol: '✚', text: '共 100 点治疗量；每次 20 秒，余量保留' },
  'consumable-14030000001': { name: '简易手术包', heal: 30, uses: 2, seconds: 20, stopBleed: true, price: 3548, symbol: '✚', text: '共 2 次，每次 20 秒；止血并恢复 30 生命（简化规则）' },
  'bandage': { name: '弹力绷带', heal: 0, seconds: 5, stopBleed: true, price: 1050, symbol: '▰', text: '耗时 5 秒，止血；不恢复生命' },
};

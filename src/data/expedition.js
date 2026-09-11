import { LOCATIONS } from './map.js?v=3.1.3';
export const REGIONS = LOCATIONS.map(location => ({
  ...location, types: location.containers,
  subtitle: ({ 'admin-west': '楼上有脚步，楼下保险箱还没开。', 'admin-east': '先听脚步，再摸电脑。', river: '沿着河滩走，鼠鼠的路总是很安静。', 'cement-plant': '水泥车里不只有水泥。', 'visitor-center': '游客没留下，旅行箱留下了。' })[location.id] || (location.extract ? '确认周围安全，等待撤离接应。' : '熟悉的零号大坝，未知的这一局。'),
  color: location.risk === '高' ? '#e5a78d' : location.risk === '中' ? '#e3c47c' : '#a8dab5',
  icon: location.extract ? '⚑' : location.highValue ? '◇' : '▧',
  mood: location.extract ? '撤离区域' : `${location.risk}风险区域`,
  quality: location.highValue ? 2 : location.risk === '高' ? 1 : 0,
  clue: location.extract ? '接应 10 秒 · 带走背包与胸挂' : `${location.risk}风险 · ${location.highValue ? '贵重容器' : '主题物资'} · 路程 ${location.risk === '高' ? 120 : 90} 秒`,
}));
export const REGION_BY_ID = Object.fromEntries(REGIONS.map(r => [r.id, r]));
export const CURIOS = [
  { id: 'rat-gift', name: '鼠鼠的谢礼', quality: 'purple', value: 28888, size: [1, 2], symbol: '🐭', insure: true, story: '不打不打，给你留了一份。' },
  { id: 'signal-whistle', name: '三声暗号哨', quality: 'blue', value: 12888, size: [1, 1], symbol: '📯', insure: true, story: '响三声是朋友。也可能是背刺的开场白。' },
  { id: 'mandel-note', name: '曼德尔砖提货单', quality: 'gold', value: 88000, size: [2, 2], symbol: '🧱', insure: true, story: '写着「提货人已回特勤处」。' },
  { id: 'ceasefire-tag', name: '停火协议铭牌', quality: 'purple', value: 23333, size: [1, 1], symbol: '🤝', insure: true, story: '协议有效期：直到对面看见你的背包。' },
  { id: 'boss-watch', name: '赛伊德的旧腕表', quality: 'gold', value: 118000, size: [2, 1], symbol: '⌚', insure: true, story: '时间不等人，赛伊德也不等。' },
  { id: 'extract-ticket', name: '最后一班接应凭证', quality: 'red', value: 268000, size: [2, 3], symbol: '🎫', insure: true, story: '一张纸，装着回家的重量。' },
];
export const CONTRACTS = [
  { id: 'boxes', title: '搜刮专家', text: '搜索 6 个容器', target: 6, reward: 24000 },
  { id: 'events', title: '大坝见闻', text: '完成 3 次随机事件', target: 3, reward: 20000 },
  { id: 'rare', title: '有点东西', text: '揭晓 4 件紫色及以上物品', target: 4, reward: 28000 },
  { id: 'rooms', title: '大坝巡回', text: '发现 5 个不同地点', target: 5, reward: 22000 },
];

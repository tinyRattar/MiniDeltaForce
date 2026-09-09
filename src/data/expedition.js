export const REGIONS = [
  { id: 'market', name: '旧日集市', subtitle: '店主跑路了，快递还在。', icon: '◈', mood: '市井奇遇', color: '#eab975', types: ['express-box', 'travel-case', 'briefcase'], clue: '生活杂物 · 偶有贵重私藏', quality: 0 },
  { id: 'office', name: '加班事务所', subtitle: '人走了，工位上的饼还没画完。', icon: '▥', mood: '都市传说', color: '#b6a0ee', types: ['computer-case', 'file-cabinet', 'safe-small'], clue: '电子设备 · 文件与保险箱', quality: 1 },
  { id: 'station', name: '无人中转站', subtitle: '您的包裹正在经历一些事情。', icon: '▧', mood: '拆箱天堂', color: '#88b7e7', types: ['aviation-box', 'express-small', 'travel-bag'], clue: '物流货箱 · 三份未知惊喜', quality: 0 },
  { id: 'garden', name: '摸鱼野营地', subtitle: '风很轻，鸟窝看起来很有实力。', icon: '♧', mood: '慢慢搜刮', color: '#a4c58b', types: ['bird-nest', 'clothes', 'medical-box'], clue: '自然收藏 · 进站恢复 2 点体力', quality: 0, rest: 2 },
  { id: 'lab', name: '神秘机房', subtitle: '服务器还亮着。先别拔电源。', icon: '▦', mood: '高价值信号', color: '#7cd9cf', types: ['server-rack', 'hacker-pc', 'tool-cabinet'], clue: '电子珍品 · 稀有发现概率更高', quality: 2 },
  { id: 'hotel', name: '落日旅馆', subtitle: '房卡失效了，行李箱没有。', icon: '⌂', mood: '遗失的故事', color: '#e59c8f', types: ['travel-case-large', 'briefcase', 'safe-small'], clue: '贵重收藏 · 稀有发现概率更高', quality: 2 },
  { id: 'workshop', name: '万能维修铺', subtitle: '老板说：能修，就是得加钱。', icon: '⚒', mood: '工业宝藏', color: '#d4bd88', types: ['tool-cabinet', 'supply-crate', 'computer-case'], clue: '工业零件 · 朴素外壳下的惊喜', quality: 1 },
  { id: 'vault', name: '地下收藏室', subtitle: '门上的字：来都来了。', icon: '◇', mood: '传说出没', color: '#e3bd66', types: ['safe-large', 'safe-small', 'aviation-box'], clue: '贵重收藏 · 进站额外消耗 1 点体力', quality: 3, cost: 1 },
];
export const CURIOS = [
  { id: 'meme-fish', name: '带薪摸鱼许可证', quality: 'purple', value: 18888, symbol: '🐟', story: '有效期：直到老板回头。' },
  { id: 'meme-cake', name: '老板画的大饼', quality: 'gold', value: 66666, symbol: '🥯', story: '看得见，摸得着，依然不能充饥。' },
  { id: 'meme-duck', name: '嘴硬的鸭子', quality: 'purple', value: 23333, symbol: '🦆', story: '全身上下只有这里是合金。' },
  { id: 'meme-stone', name: '情绪稳定的石头', quality: 'blue', value: 8888, symbol: '🪨', story: '它没有内耗，因为它没有上班。' },
  { id: 'meme-cat', name: '纸箱的真正主人', quality: 'gold', value: 88888, symbol: '🐈', story: '你获得了猫的临时保管权。' },
  { id: 'meme-ticket', name: '下次一定兑换券', quality: 'purple', value: 16888, symbol: '🎟️', story: '本次无法使用，下次也算本次。' },
  { id: 'meme-disc', name: '永不放弃的磁带', quality: 'red', value: 233333, symbol: '📼', story: '刚按下播放键，熟悉的前奏就响了。' },
  { id: 'meme-crown', name: '欧皇体验卡', quality: 'gold', value: 77777, symbol: '👑', story: '这次不是错觉，你真的出了。' },
];
export const CONTRACTS = [
  { id: 'boxes', title: '一个也别落下', text: '搜索 6 个容器', target: 6, reward: 24000 },
  { id: 'events', title: '这集我看过', text: '完成 3 次随机事件', target: 3, reward: 20000 },
  { id: 'rare', title: '有点东西', text: '揭晓 4 件紫色及以上物品', target: 4, reward: 28000 },
  { id: 'rooms', title: '来都来了', text: '探索 5 个地点', target: 5, reward: 22000 },
];
export const UPGRADES = {
  bag: { name: '扩容背包', icon: '▧', text: '每级增加 2 个携带位置', base: 35000, max: 4 },
  energy: { name: '快乐续航', icon: 'ϟ', text: '每级增加 3 点初始体力', base: 45000, max: 4 },
  luck: { name: '寻宝天线', icon: '⌁', text: '每级提高高品质掉落倾向', base: 60000, max: 3 },
};

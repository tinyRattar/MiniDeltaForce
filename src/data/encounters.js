export const ENCOUNTERS = [
  { id: 'rat-signal', title: '拐角传来三声暗号', tag: '不打不打', icon: '🐭', text: '墙后有人切刀示意：「鼠鼠，自己人！」地上已经放下一个包。接受暗号，还是保持距离？', choices: [
    { text: '回应暗号，接受馈赠', hint: '30 秒；75% 获得鼠鼠的谢礼，25% 遭背刺：掉血 45 并流血', seconds: 30, effects: {}, chance: .75, win: { item: 'rat-gift', luck: 1 }, lose: { damage: 45, bleed: true }, result: '你向拐角走了一步。', winText: '对方真的把东西留给你，摇头晃脑地溜走了。', loseText: '「不打」的后半句是「不打别人」。背后响起了枪声。' },
    { text: '摇头示意，保持距离', hint: '20 秒；获得三声暗号哨，不受伤', seconds: 20, effects: { item: 'signal-whistle' }, result: '你们各走各的。地上的哨子，算是一次没有发生的合作。' },
  ] },
  { id: 'haavk-patrol', title: '哈夫克巡逻兵', tag: '人机也会补枪', icon: '◎', text: '巡逻兵看见了你，正抬起枪口。血量不健康的话，先用药再做决定；硬吃一梭子真的会回特勤处。', choices: [
    { text: '就地还击，搜走物资', hint: '55 秒；受到 18–32 点伤害，获得 9,000 零钱与一支强效注射器', seconds: 55, effects: { damageRange: [18,32], coins: 9000, item: 'consumable-14020000003' }, result: '巡逻兵倒下了，但你的护甲并不能替你回血。先看一眼状态栏。' },
    { text: '借掩体绕开巡逻', hint: '90 秒；受到 8 点伤害', seconds: 90, effects: { damage: 8 }, result: '擦伤不重，就是绕了好大一个圈。时间也是成本。' },
  ] },
  { id: 'danger-search', title: '楼上正在清人', tag: '高危搜索', icon: '⚠', text: '密集脚步声从天花板传来。眼前的保险箱还没开。继续搜索会持续暴露位置，直到离开这个地点。', choices: [
    { text: '来都来了，继续硬搜', hint: '15 秒；本地点每次搜索有 65% 概率掉血 30–55；下一箱寻宝 +2', seconds: 15, effects: { threat: true, luck: 2 }, result: '你选择了财富自由的捷径。现在每开一个箱子，都可能被推到脸上。' },
    { text: '藏好，等他们离开', hint: '120 秒；清除本地点高危状态', seconds: 120, effects: { clearThreat: true }, result: '他们终于走了。箱子还在，命也还在。' },
  ] },
  { id: 'saeed', title: '那身影像是赛伊德', tag: '首领活动', icon: '♜', text: '烟尘里传来熟悉的吼声。一只表掉在他的巡逻路线上，你的手开始痒了。', choices: [
    { text: '趁间隙过去摸一下', hint: '60 秒；55% 获得金色旧腕表，45% 掉血 75 并流血', seconds: 60, effects: {}, chance: .55, win: { item: 'boss-watch' }, lose: { damage: 75, bleed: true }, result: '你掐着巡逻间隙冲了出去。', winText: '东西到手。赛伊德没回头，你也没敢回头。', loseText: '他回头了。你现在最需要的藏品是一支针。' },
    { text: '绕路，首领我真打不过', hint: '90 秒；安全离开首领视线', seconds: 90, effects: {}, result: '懂得绕路，也是一种撤离技术。' },
  ] },
  { id: 'mandel', title: '曼德尔砖的信号', tag: '全图都知道', icon: '🧱', text: '信号指向一个废弃货箱。附近安静得可疑，也可能所有人都在等第一个伸手的。', choices: [
    { text: '抢先查验信号源', hint: '90 秒；60% 获得金色提货单，40% 遭伏击掉血 60', seconds: 90, effects: {}, chance: .6, win: { item: 'mandel-note' }, lose: { damage: 60 }, result: '箱子开了，信号突然消失。', winText: '真正的砖已被取走，好在提货单也值钱。', loseText: '不是信号消失，是你被架住了。' },
    { text: '观察进出路线', hint: '45 秒；下一箱寻宝 +2', seconds: 45, effects: { luck: 2 }, result: '你记住了他们没搜过的角落。追热点不如捡漏。' },
  ] },
  { id: 'medic', title: '蜂医留的急救点', tag: '先救一下', icon: '✚', text: '墙上画着一枚医疗标记，急救点还没被搜空。这里终于没有人骗你。', choices: [
    { text: '包扎并恢复状态', hint: '45 秒；回血 50，停止流血', seconds: 45, effects: { heal: 50, stopBleed: true }, result: '伤口处理好了。别让救你的人白忙活。' },
    { text: '带走备用注射器', hint: '20 秒；获得一支强效注射器，需要装包', seconds: 20, effects: { item: 'consumable-14020000003' }, result: '针带走了。记得放在口袋或者胸挂里。' },
  ] },
  { id: 'fake-body', title: '门口有个没搜过的盒', tag: '钓鱼执法', icon: '▣', text: '一个装备包躺在门正中央，姿势像是专门为你摆的。「这么巧？」你心里咯噔一下。', choices: [
    { text: '试着摸走东西', hint: '40 秒；65% 获得 35,000 零钱，35% 掉血 35 并流血', seconds: 40, effects: {}, chance: .65, win: { coins: 35000 }, lose: { damage: 35, bleed: true }, result: '你趴下伸手。', winText: '包是真的，架枪的人已经走了。', loseText: '包是真的，架枪的人也是真的。' },
    { text: '不当那个伸手的人', hint: '15 秒；安全放弃', seconds: 15, effects: {}, result: '没有上头，今天已经赢了一半。' },
  ] },
  { id: 'ceasefire', title: '停火，只想做任务', tag: '大坝社交', icon: '🤝', text: '另一名干员把枪收了起来：「我只差最后一个任务，哥们别打。」你能选择信任，也能选择给彼此留条路。', choices: [
    { text: '帮他架一下路口', hint: '75 秒；80% 获得停火铭牌与 12,000，20% 掉血 40', seconds: 75, effects: {}, chance: .8, win: { item: 'ceasefire-tag', coins: 12000 }, lose: { damage: 40 }, result: '你给他让开了身位。', winText: '任务完成。他把报酬放下，认真说了声谢谢。', loseText: '任务名原来叫「淘汰一名干员」。' },
    { text: '各走一边，互不干扰', hint: '20 秒；安全通过', seconds: 20, effects: {}, result: '谁也没回头。不是每次相遇都要有个盒。' },
  ] },
  { id: 'rat-trade', title: '鼠鼠的地摊', tag: '以物会友', icon: '🐾', text: '楼梯底下摆着三块布，摊主压低声音：「一万二，你拿走，我收摊。」', choices: [
    { text: '零钱成交', hint: '20 秒；花本局零钱 12,000，获得鼠鼠的谢礼', seconds: 20, requires: 12000, effects: { coins: -12000, item: 'rat-gift' }, result: '没有交易行手续费，只有一声心照不宣的蹲起。' },
    { text: '钱没带够，下次一定', hint: '10 秒；下一箱寻宝 +1', seconds: 10, effects: { luck: 1 }, result: '他没生气，顺手指了个还没被搜过的方向。' },
  ] },
  { id: 'locked-door', title: '钥匙带错了', tag: '门禁文学', icon: '⚿', text: '你掏出钥匙，发现门上根本不是这个锁。隔壁有条狭窄通道，能挤过去，代价是有点扎人。', choices: [
    { text: '挤过去，搜房间', hint: '90 秒；掉血 20，获得 45,000 零钱', seconds: 90, effects: { damage: 20, coins: 45000 }, result: '绕过去拿到东西了。下次记得看门牌。' },
    { text: '记下位置，找别的箱子', hint: '15 秒；下一箱寻宝 +1', seconds: 15, effects: { luck: 1 }, result: '不是每扇门都需要打开。鸟窝也可能出红。' },
  ] },
  { id: 'extract-radio', title: '接应频段的杂音', tag: '撤离情报', icon: '📻', text: '无线电里传来一段残缺的接应录音，夹着不知道谁的求救声。继续听需要时间。', choices: [
    { text: '完整抄收录音', hint: '90 秒；20% 获得红色接应凭证，否则获得 15,000', seconds: 90, effects: {}, chance: .2, win: { item: 'extract-ticket' }, lose: { coins: 15000 }, result: '录音终于放完。', winText: '你在电池仓找到一张特殊接应凭证。', loseText: '没有特殊凭证，但设备本身也能卖点钱。' },
    { text: '先看时间，别听了', hint: '10 秒；下一箱寻宝 +1', seconds: 10, effects: { luck: 1 }, result: '最值钱的情报是：你还来得及撤。' },
  ] },
  { id: 'sniper-lane', title: '红点从墙上掠过', tag: '有人架枪', icon: '⊕', text: '一道瞄准光斑扫过保险箱。这里出货可能不错，可对面显然也是这么想的。', choices: [
    { text: '低头硬搜，拼手速', hint: '10 秒；本地点搜索有 65% 概率掉血 30–55；下一箱寻宝 +3', seconds: 10, effects: { threat: true, luck: 3 }, result: '快不快不知道，危险是真的。每搜一箱都可能吃枪。' },
    { text: '等烟雾散开，换个角度', hint: '110 秒；解除本地点高危状态', seconds: 110, effects: { clearThreat: true }, result: '你终于找到死角。多花一点时间，少交一点装备。' },
  ] },
];

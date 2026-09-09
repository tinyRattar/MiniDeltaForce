// Costs and outcome probabilities are also shown before a player commits.
export const ENCOUNTERS = [
  { id: 'fish', title: '这不是摸鱼，是采样', tag: '职场生态', icon: '🐟', text: '一个穿着工牌的钓鱼佬对你比了个嘘。他的桶里没鱼，倒有一份盖了公章的文件。', choices: [
    { text: '加入实地调研', hint: '体力 +3，获得摸鱼许可证', effects: { energy: 3, item: 'meme-fish' }, result: '两个人一起不干活，就叫跨部门协作。' },
    { text: '借他的探鱼器找箱子', hint: '下个容器寻宝加成 +2', effects: { luck: 2 }, result: '探鱼器：前方检测到含金量较高的鱼。' },
  ] },
  { id: 'cat', title: '如果我坐得下', tag: '猫箱叠加态', icon: '🐈', text: '纸箱里传来呼噜声。里面可能是珍宝，也可能是珍宝的主人。', choices: [
    { text: '把整个箱子抱走', hint: '体力 −2，获得「纸箱的真正主人」', effects: { energy: -2, item: 'meme-cat' }, result: '箱子归你，猫归箱子，你归猫。所有权非常清晰。' },
    { text: '挠挠下巴就走', hint: '体力 +3', effects: { energy: 3 }, result: '它没有给你金条，但给了你一点活下去的电量。' },
  ] },
  { id: 'cake', title: '这个项目很有前景', tag: '饼学大师', icon: '🥯', text: '废弃会议室里，投影仪还在自动播放第 108 页：我们的未来。桌上居然有一张实体大饼。', choices: [
    { text: '把愿景装进背包', hint: '体力 −1，获得「老板画的大饼」', effects: { energy: -1, item: 'meme-cake' }, result: '终于有人把这东西变现了。' },
    { text: '准点下班', hint: '体力 +4', effects: { energy: 4 }, result: '不参加最后五分钟的会，你得到了完整的一个下午。' },
  ] },
  { id: 'rick', title: '绝密情报，点击播放', tag: '熟悉的前奏', icon: '📼', text: '一台播放器贴着「百万物资坐标」。封面的发型，让你产生了一种不妙的亲切感。', choices: [
    { text: '赌它真是情报', hint: '体力 −2；25% 获得红色磁带，否则获得下次一定券', effects: { energy: -2 }, chance: 0.25, win: { item: 'meme-disc' }, lose: { item: 'meme-ticket' }, result: '音乐响起。你确实被留在了原地。', winText: '整活归整活，这竟然是限量母带！', loseText: '坐标没听到，前奏倒是会哼了。' },
    { text: '我已经会背了', hint: '下个容器寻宝加成 +1', effects: { luck: 1 }, result: '识破经典套路，直觉 +1。' },
  ] },
  { id: 'duck', title: '全身上下嘴最硬', tag: '材料科学', icon: '🦆', text: '一只金属鸭子旁写着：「我才没有被丢在这里，我只是想静静。」', choices: [
    { text: '好好好，带你走', hint: '获得「嘴硬的鸭子」', effects: { item: 'meme-duck' }, result: '它说不是想跟你走，只是刚好同路。' },
    { text: '请教嘴硬的秘诀', hint: '体力 +2，下个容器寻宝加成 +1', effects: { energy: 2, luck: 1 }, result: '「没出货？那是我不想要。」学会了，精神好多了。' },
  ] },
  { id: 'stone', title: '拒绝精神内耗', tag: '路边哲学', icon: '🪨', text: '路边一块石头，安静得令人羡慕。旁边的牌子写着：遇事不决，先坐五分钟。', choices: [
    { text: '和石头交流一下', hint: '体力 +4', effects: { energy: 4 }, result: '它一句话没说，但每一句都说到了心里。' },
    { text: '聘为情绪顾问', hint: '获得「情绪稳定的石头」', effects: { item: 'meme-stone' }, result: '顾问不收工资，只占一个背包位置。' },
  ] },
  { id: 'delivery', title: '您的快递已签收', tag: '最后一公里', icon: '📦', text: '快递柜已经荒废，但屏幕还亮着：「不是本人也可以取一下。」', choices: [
    { text: '输入万能取件码 6666', hint: '体力 −1；50% 获得 30,000，否则获得 3,000', effects: { energy: -1 }, chance: 0.5, win: { coins: 30000 }, lose: { coins: 3000 }, result: '门开了。确实万能，就是不知道是谁的。', winText: '是一箱硬通货。', loseText: '是一箱包装费比内容贵的填充纸。' },
    { text: '回收门口的纸箱', hint: '本局背包容量 +2', effects: { capacity: 2 }, result: '尽头不是快递，是收废品。' },
  ] },
  { id: 'v50', title: '疯狂星期箱', tag: '江湖暗号', icon: '🍗', text: '无线电传来：「我是这片区域的箱王。给我五千，恢复实力，带你吃香喝辣。」', choices: [
    { text: '资助箱王', hint: '消耗本局零钱 5,000，下个容器寻宝加成 +3', requires: 5000, effects: { coins: -5000, luck: 3 }, result: '他没请你吃饭，但发来了一张颇为靠谱的藏宝便签。' },
    { text: '先吃我自己的', hint: '体力 +2', effects: { energy: 2 }, result: '包里还有半块饼干。今天也是疯狂星期箱。' },
  ] },
  { id: 'npc', title: '你醒啦', tag: '熟悉的开场', icon: '🛒', text: '一辆小推车从坡上滑过来。车上的玩偶认真看着你：「你终于醒啦。」', choices: [
    { text: '把小推车征用', hint: '本局背包容量 +3，体力 −1', effects: { capacity: 3, energy: -1 }, result: '主线任务没接，载具倒是先解锁了。' },
    { text: '跳过片头', hint: '体力 +2，下个容器寻宝加成 +1', effects: { energy: 2, luck: 1 }, result: '熟练玩家，已经在想第一个箱子在哪里了。' },
  ] },
  { id: 'loading', title: '正在加载，99%', tag: '永恒的一秒', icon: '💾', text: '电脑卡在最后百分之一。机箱里似乎有东西在闪，像是宇宙在给你发信号。', choices: [
    { text: '再等最后一下', hint: '体力 −2；40% 获得 45,000，否则获得 5,000', effects: { energy: -2 }, chance: 0.4, win: { coins: 45000 }, lose: { coins: 5000 }, result: '进度条终于走完了。', winText: '一份可变现的收藏密钥已导出。', loseText: '更新内容：修复了进度条不动的问题。' },
    { text: '重启解决一切', hint: '下个容器寻宝加成 +2', effects: { luck: 2 }, result: '玄学维修，偶尔比专业的还管用。' },
  ] },
  { id: 'luck', title: '欧气共享充电站', tag: '玄学服务', icon: '👑', text: '机器上写着：「不出金不要钱。」小字补充：「因为我们根本不收钱。」', choices: [
    { text: '把欧气充满', hint: '体力 −2，下个容器寻宝加成 +4', effects: { energy: -2, luck: 4 }, result: '指示灯由非转欧。仪式感已经拉满。' },
    { text: '只领体验卡', hint: '获得「欧皇体验卡」', effects: { item: 'meme-crown' }, result: '不用抽，直接给。这才是真正的体验。' },
  ] },
  { id: 'fridge', title: '来都来了', tag: '四字真言', icon: '🧊', text: '冰箱门上有三张便签：「来都来了」「大过节的」「还是孩子」。你决定只相信第一张。', choices: [
    { text: '开都开了', hint: '体力 −1，获得 12,000', effects: { energy: -1, coins: 12000 }, result: '冷冻层里藏着一罐私房钱。物理意义上的冷资产。' },
    { text: '吃都吃了', hint: '体力 +3', effects: { energy: 3 }, result: '你找到一瓶没过期的汽水。快乐就是这么具体。' },
  ] },
  { id: 'pigeon', title: '下次一定', tag: '咕咕认证', icon: '🕊️', text: '一只鸽子叼着兑奖券，约你明天来同一个地方。它的眼神特别真诚。', choices: [
    { text: '先把券给我', hint: '获得「下次一定兑换券」', effects: { item: 'meme-ticket' }, result: '它飞走前又咕了一声。至少券是真的。' },
    { text: '今天就要点实际的', hint: '获得 8,000', effects: { coins: 8000 }, result: '鸽子从窝里掏出零钱。原来它有预算。' },
  ] },
  { id: 'boss', title: '你管这叫普通箱子？', tag: '反向虚标', icon: '🧰', text: '铁箱外写着「全是垃圾」。旁边还有一张看起来过于刻意的免责声明。', choices: [
    { text: '相信自己的直觉', hint: '体力 −2；35% 获得 60,000，否则获得 6,000', effects: { energy: -2 }, chance: 0.35, win: { coins: 60000 }, lose: { coins: 6000 }, result: '你把里面的零件就地卖给了回收机器人。', winText: '全是高端零件。它只是比较谦虚。', loseText: '普通零件。不过垃圾也有垃圾的价格。' },
    { text: '把箱子本身拿走', hint: '本局背包容量 +2', effects: { capacity: 2 }, result: '至少这箱子结实，属于所见即所得。' },
  ] },
  { id: 'wifi', title: '密码是八个八', tag: '沟通的艺术', icon: '📡', text: '墙上写着 Wi-Fi 密码：八个八。你输入 88888888，连接失败。', choices: [
    { text: '输入「八个八」', hint: '下个容器寻宝加成 +3', effects: { luck: 3 }, result: '连接成功。收藏室位置已经缓存到脑子里。' },
    { text: '断网休息一会儿', hint: '体力 +4', effects: { energy: 4 }, result: '没有消息的几分钟，意外地安静。' },
  ] },
  { id: 'mirror', title: '问题不大', tag: '乐观主义', icon: '🪞', text: '镜子里的人看起来满载而归。你低头看看自己的包：它似乎用了美颜。', choices: [
    { text: '相信这张饼', hint: '下个容器寻宝加成 +2', effects: { luck: 2 }, result: '包可以是空的，气势不能输。' },
    { text: '整理一下仪容', hint: '体力 +2，获得 3,000', effects: { energy: 2, coins: 3000 }, result: '顺手从外套夹层找到零钱。你果然比想象中富。' },
  ] },
];

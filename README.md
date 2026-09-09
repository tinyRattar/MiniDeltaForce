# 箱外之地 · Mini Delta Force

移动端优先的轻量搜箱冒险。v2 将玩法重新聚焦于「选择路线 → 搜索容器 → 揭晓物品 → 做出奇遇选择 → 带货回营」，不再模拟战斗、骨折、子弹和背包拼图。

在线游玩：[GitHub Pages](https://tinyrattar.github.io/MiniDeltaForce/)

## 玩法

- 每局随机路线，最多 8 站，每站 3 个容器；8 类地点影响物品池和掉落品质。
- 每箱揭晓 3–4 件物品。首箱必有紫色以上，连续 3 箱无紫则下箱保底紫，第 8 站首箱保底金。
- 16 种不重复的局内奇遇，每个都有两个选择，明确展示代价、收益和概率。包括摸鱼、大饼、下次一定、熟悉的前奏等，附带 8 件专属梗藏品。
- 2 个随机委托，3 条永久升级路线，物品收藏和奇遇手册。
- 物品统一占 1 格。一键装包按价格优先；回收只给原价 20%，留到回营则全价变现、点亮收藏。
- 随时回营，无死亡或体力耗尽惩罚。回营自动发放已完成的委托奖励。
- 自动保存本局随机数状态与已生成的物品；关闭或刷新可继续，刷新不重抽。音效默认关闭，可手动开启。

## 运行与验证

纯静态 HTML / CSS / ES modules，无运行时依赖，不需要安装包。Node.js 22 及以上用于验证（CI 使用 Node.js 24）。

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File tools/dev-server.ps1 -Port 4173
```

打开 `http://127.0.0.1:4173/`。也可使用任意静态 HTTP 服务器；不要直接以 `file://` 打开模块页面。

```sh
node --test tests/*.test.mjs
node --check src/app.js
node --check src/domain/expedition.js
node scripts/check-assets.mjs
```

有 npm 的环境也可用 `npm test` 与 `npm run check`。测试包含 500 局确定性模拟以及保底、事件费用、收集、结算、迁移和恢复边界。

## 结构

- `src/domain/expedition.js`：可序列化、确定性的纯状态转换；不依赖 DOM 或浏览器计时器。
- `src/app.js`：移动端 UI、自动揭晓、弹窗、音效与存档适配。
- `src/data/expedition.js`、`encounters.js`：地点、委托、升级、梗藏品和事件。
- `src/data/items.js`、`containers.js`：保留原有物品目录和主题物品池；新掉落采用游戏化品质分布，不声称复刻原作概率。
- `src/data/local-icons.js`：由 `node scripts/build-local-icons.mjs` 生成的本地图片索引；没有本地图片的物品显示符号，不发起外部图片请求。

## 存档与发布

存档仅保存在当前浏览器的 localStorage 中，不跨设备同步。v2 使用独立键 `mini-delta-force-expedition-v2`。首次启动会迁移 v1 资金，并把旧仓库物品按原价兑换、登记收藏；旧存档和旧战局键保留，旧进行中的战局不会转为新规则。浏览器拒绝写入时页面会显示保存失败提示。

PR 自动运行 `Check game`。合并到 `main` 后，`Deploy GitHub Pages` 再次运行验证，随后发布静态资源。发布地址沿用上方 Pages 链接。

`docs/` 中的 v0.1 设计和开发计划是历史记录；当前玩法以本文件及源码为准。

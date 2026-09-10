export const START_LOCATION_ID = "west-extract";

export const MAP_IMAGE_URL = "./assets/maps/zero-dam.webp";
export const MAP_IMAGE_SIZE = 4800;
export const MAP_VIEW = { x: 1100, y: 760, width: 2850, height: 1900 };

export const LOCATIONS = [
  { id: "west-extract", name: "西部撤离点", risk: "低", extract: true, highValue: false, map: { x: 1255, y: 2000 }, containers: [] },
  {
    id: "cement-plant",
    name: "水泥厂",
    risk: "中",
    highValue: true,
    map: { x: 1730, y: 1610 },
    containers: [
      "aviation-box",
      "aviation-box",
      "tool-cabinet",
      "tool-cabinet",
      "tool-cabinet",
      "weapon-box",
      "weapon-box",
      "weapon-box-large",
      "bird-nest",
      "clothes",
      "computer-case",
      "manhole",
      "manhole",
      "cement-truck",
      "cement-truck",
      "cement-truck",
    ],
  },
  { id: "construction", name: "在建工地", risk: "中", highValue: false, map: { x: 1450, y: 1555 }, containers: ["bird-nest", "medical-box"] },
  { id: "barracks", name: "军营", risk: "中", highValue: true, map: { x: 1778, y: 1130 }, containers: ["hacker-pc", "ammo-box", "ammo-box", "express-box", "medical-bag"] },
  { id: "new-pipe-zone", name: "管道区域", risk: "低", highValue: false, map: { x: 1465, y: 990 }, containers: ["tool-cabinet", "supply-crate"] },
  { id: "river", name: "河滩", risk: "低", highValue: false, map: { x: 2185, y: 2075 }, containers: ["bird-nest", "supply-crate", "supply-crate", "tool-cabinet"] },
  {
    id: "admin-west",
    name: "行政楼西楼",
    risk: "高",
    highValue: true,
    map: { x: 2550, y: 1240 },
    containers: ["safe-small", "computer-case", "computer-case", "computer-case", "server-rack", "tool-cabinet", "tool-cabinet", "tool-cabinet", "weapon-box-large", "clothes"],
  },
  {
    id: "admin-east",
    name: "行政楼东楼",
    risk: "高",
    highValue: true,
    map: { x: 2645, y: 1265 },
    containers: ["travel-case-large", "briefcase", "briefcase", "safe-small", "hacker-pc", "weapon-box-large", "travel-case", "computer-case", "computer-case", "clothes", "clothes"],
  },
  { id: "containers", name: "集装箱区", risk: "中", highValue: false, map: { x: 2685, y: 995 }, containers: ["aviation-box", "aviation-box", "bird-nest", "bird-nest", "clothes", "clothes", "clothes", "express-small", "medical-box", "medical-box", "supply-crate"] },
  { id: "dam-inside", name: "坝体内部", risk: "高", highValue: false, map: { x: 2970, y: 946 }, containers: ["tool-cabinet", "express-small", "computer-case"] },
  { id: "parking", name: "停车场", risk: "低", highValue: false, map: { x: 2970, y: 1280 }, containers: ["aviation-box", "express-small", "supply-crate", "tool-cabinet", "weapon-box-large"] },
  { id: "dam-top", name: "坝顶", risk: "高", highValue: false, map: { x: 3290, y: 1120 }, containers: ["bird-nest", "bird-nest", "clothes", "tool-cabinet", "medical-bag"] },
  { id: "maintenance", name: "养护站", risk: "中", highValue: false, map: { x: 3218, y: 1935 }, containers: ["bird-nest", "ammo-box"] },
  { id: "main-substation", name: "主变电站", risk: "高", highValue: true, map: { x: 2739, y: 1910 }, containers: ["tool-cabinet", "server-rack", "clothes", "express-small", "ammo-box", "medical-box"] },
  { id: "backup-substation", name: "备用变电站", risk: "中", highValue: false, map: { x: 2490, y: 2190 }, containers: ["safe-small", "aviation-box", "computer-case", "express-small"] },
  { id: "field-camp", name: "野外营地", risk: "中", highValue: false, map: { x: 2925, y: 2360 }, containers: ["supply-crate", "medical-box", "ammo-box", "clothes"] },
  { id: "visitor-center", name: "游客中心", risk: "中", highValue: true, map: { x: 3450, y: 2480 }, containers: ["briefcase", "briefcase", "travel-case", "travel-case", "manhole", "manhole", "medical-bag", "medical-bag", "ammo-box", "bird-nest"] },
  { id: "east-extract", name: "东部撤离点", risk: "低", extract: true, highValue: false, map: { x: 3700, y: 2277 }, containers: [] },
  { id: "pipe-zone", name: "临时工地", risk: "低", highValue: false, map: { x: 1745, y: 2010 }, containers: ["express-small"] },
];

export const LOCATION_BY_ID = Object.fromEntries(LOCATIONS.map((location) => [location.id, location]));

export const CONNECTIONS = {
  "west-extract": ["construction", "cement-plant", "pipe-zone"],
  construction: ["west-extract", "cement-plant", "barracks", "pipe-zone", "new-pipe-zone"],
  "cement-plant": ["west-extract", "construction", "barracks", "pipe-zone", "admin-west"],
  barracks: ["new-pipe-zone", "construction", "cement-plant", "admin-west", "containers"],
  "new-pipe-zone": ["barracks", "construction"],
  river: ["pipe-zone", "backup-substation", "main-substation"],
  "pipe-zone": ["west-extract", "construction", "cement-plant", "river"],
  "admin-west": ["cement-plant", "barracks", "admin-east", "containers"],
  "admin-east": ["admin-west", "containers", "parking"],
  containers: ["admin-west", "admin-east", "barracks", "dam-inside", "parking"],
  "dam-inside": ["containers"],
  "dam-top": ["parking", "maintenance", "east-extract"],
  parking: ["admin-east", "containers", "dam-top", "main-substation"],
  "main-substation": ["river", "parking", "backup-substation", "field-camp", "maintenance"],
  "backup-substation": ["river", "main-substation", "field-camp"],
  "field-camp": ["backup-substation", "main-substation", "maintenance", "visitor-center"],
  maintenance: ["dam-top", "main-substation", "field-camp", "visitor-center"],
  "visitor-center": ["maintenance", "field-camp", "east-extract"],
  "east-extract": ["dam-top", "visitor-center"],
};

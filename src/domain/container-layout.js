import { firstFit } from './inventory.js?v=3.1.1';

// Include taken and unrevealed entries so revealing/picking never shifts other loot.
export function containerLayout(entries, catalog) {
  const pages=[{width:8,height:8,items:[]}];
  const ordered=entries.map((entry,index)=>({entry,index,size:catalog[entry.itemId].size}))
    .sort((a,b)=>b.size[0]*b.size[1]-a.size[0]*a.size[1]||a.index-b.index);
  for(const {entry,size} of ordered){
    let page=pages.find(p=>firstFit(p,size,null,false));
    if(!page){page={width:8,height:8,items:[]};pages.push(page);}
    const placement=firstFit(page,size,null,false);
    if(!placement)throw Error('物品尺寸超过容器大小。');
    page.items.push({...entry,...placement});
  }
  return pages;
}

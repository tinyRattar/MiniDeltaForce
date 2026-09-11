// Pointer Events support mouse, pen and touch. Click-to-place remains available.
export function gridDrop(grid, x, y) {
  const rect=grid.getBoundingClientRect(), width=Number(grid.dataset.width), height=Number(grid.dataset.height);
  if(x<rect.left||y<rect.top||x>=rect.right||y>=rect.bottom)return null;
  return {target:grid.dataset.space,x:Math.floor((x-rect.left)/rect.width*width),y:Math.floor((y-rect.top)/rect.height*height)};
}
export function installDragging(root,{select,drop,cancel}) {
  let drag=null,ghost=null,highlight=null,suppressClick=false;
  const clear=()=>{ghost?.remove();highlight?.classList.remove('drop-target');ghost=null;highlight=null;drag=null;};
  root.addEventListener('pointerdown',event=>{
    suppressClick=false;
    if(event.button!==0||event.isPrimary===false)return;
    const item=event.target.closest('[data-drag-id]');
    if(!item||event.target.closest('button')&&!item.classList.contains('grid-item'))return;
    drag={pointer:event.pointerId,id:item.dataset.dragId,source:item.dataset.dragSource,x:event.clientX,y:event.clientY,moving:false,item};
  });
  root.addEventListener('pointermove',event=>{
    if(!drag||event.pointerId!==drag.pointer)return;
    if(!drag.moving&&Math.hypot(event.clientX-drag.x,event.clientY-drag.y)<7)return;
    if(!drag.moving){
      drag.moving=true;select(drag.source,drag.id);
      root.setPointerCapture(event.pointerId);
      ghost=document.createElement('div');ghost.className='drag-ghost';ghost.textContent=drag.item.querySelector('strong')?.textContent||'放置物品';(drag.item.closest('dialog')||document.body).append(ghost);
    }
    event.preventDefault();ghost.style.left=event.clientX+12+'px';ghost.style.top=event.clientY+12+'px';
    const hit=document.elementFromPoint(event.clientX,event.clientY),grid=hit?.closest('.inventory-grid');
    highlight?.classList.remove('drop-target');highlight=grid;highlight?.classList.add('drop-target');
    const scroller=hit?.closest('.inventory-scroll');
    if(scroller){const r=scroller.getBoundingClientRect();if(event.clientY<r.top+45)scroller.scrollTop-=14;if(event.clientY>r.bottom-45)scroller.scrollTop+=14;}
    const horizontal=hit?.closest('.grid-scroll');
    if(horizontal){const r=horizontal.getBoundingClientRect();if(event.clientX<r.left+24)horizontal.scrollLeft-=10;if(event.clientX>r.right-24)horizontal.scrollLeft+=10;}
  },{passive:false});
  root.addEventListener('pointerup',event=>{
    if(!drag||event.pointerId!==drag.pointer)return;
    const moving=drag.moving;
    const grid=document.elementFromPoint(event.clientX,event.clientY)?.closest('.inventory-grid');
    const placement=grid&&gridDrop(grid,event.clientX,event.clientY);
    clear();if(root.hasPointerCapture(event.pointerId))root.releasePointerCapture(event.pointerId);
    if(moving){suppressClick=true;if(placement)drop(placement);else cancel();}
  });
  root.addEventListener('pointercancel',()=>{if(drag?.moving)cancel();clear();});
  root.addEventListener('click',event=>{if(suppressClick){suppressClick=false;event.preventDefault();event.stopImmediatePropagation();}},true);
}

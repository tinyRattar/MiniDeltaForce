// Rectangular packing with real compartment boundaries. No DOM dependencies.
export function fits(space, placement, ignoreId = null) {
  const { x, y, w, h } = placement;
  if (![x,y,w,h].every(Number.isInteger) || w <= 0 || h <= 0 || x < 0 || y < 0 || x + w > space.width || y + h > space.height) return false;
  return !space.items.some(e => e.id !== ignoreId && x < e.x + e.w && x + w > e.x && y < e.y + e.h && y + h > e.y);
}
export function firstFit(space, size, ignoreId = null, rotate = true) {
  for (const [w, h] of rotate && size[0] !== size[1] ? [size, [size[1], size[0]]] : [size]) {
    for (let y = 0; y <= space.height - h; y++) for (let x = 0; x <= space.width - w; x++) {
      const p = { x,y,w,h };
      if (fits(space, p, ignoreId)) return p;
    }
  }
  return null;
}
export function usedArea(space) { return space.items.reduce((sum, item) => sum + item.w * item.h, 0); }
export function organize(space) {
  const ordered = [...space.items].sort((a,b) => b.w*b.h - a.w*a.h || Math.max(b.w,b.h) - Math.max(a.w,a.h));
  const result = { ...space, items: [] };
  for (const item of ordered) {
    const placement = firstFit(result, [item.w,item.h]);
    if (!placement) return null; // Atomic: keep the original layout if greedy packing cannot fit everything.
    result.items.push({ ...item, ...placement });
  }
  return result.items;
}

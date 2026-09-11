import { act, newState } from '../src/domain/expedition.js';
import { CONNECTIONS } from '../src/data/map.js';
// Focused inventory tests begin after an east-spawn player reaches the west exit.
// Spawn selection itself is covered with untouched real runs in revision tests.
export function atWestExit(state) {
  Object.assign(state.run,{spawnId:'admin-east',spawnSide:'east',locationId:'west-extract',routes:[...CONNECTIONS['west-extract']],path:['admin-east','admin-west','cement-plant','west-extract'],room:{regionId:'west-extract',boxes:[],threat:false},roomCache:{},event:null,ground:[]});
  state.run.stats.rooms=0;
  return state;
}
export const startAtExit=(seed=42)=>atWestExit(act(newState(),{type:'start',seed}));

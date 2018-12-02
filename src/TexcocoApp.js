import {Area} from "./Area";
import { Game } from "./Game";

export const TEXCOCO = {
  WIDTH: 420,
  HEIGHT: 600,
  OFFER_SIZE: 55,
  OFFER_GAP: 5,
  OFFER_W: 4,
  OFFER_H: 3,
  TOP: 90,
  AREA_W: 4,
  AREA_H: 4
};


export function TexcocoApp(state, action) {
  if (state === undefined) {
    return newTexcocoState();
  }
  switch (action.type) {
    case "RESET":
      return newTexcocoState();
      break;
    case "CLICK":
      return Game.handleClick2(state, action.x, action.y);
    case "A":
      return Object.assign({}, state, { t: state.t + 1 });
      break;
    case "B":
      return Object.assign({}, state, { t: state.t - 1 });
      break;
    default:
      return state;
  }
}

function newTexcocoState() {
  let state = {};
  state.width = TEXCOCO.WIDTH;
  state.height = TEXCOCO.HEIGHT;
  state.offer = [];
  state.area = [];
  for (let l = 0; l < TEXCOCO.OFFER_H; l++) {
    state.offer[l] = [];
    for (let c = 0; c < TEXCOCO.OFFER_W; c++) {
      let newArea = new Area(
        state.width / 2 -
          (TEXCOCO.OFFER_SIZE + TEXCOCO.OFFER_GAP) * 2 +
          c * (TEXCOCO.OFFER_SIZE + TEXCOCO.OFFER_GAP),
        l * (TEXCOCO.OFFER_SIZE + TEXCOCO.OFFER_GAP) + TEXCOCO.TOP,
        TEXCOCO.OFFER_SIZE,
        TEXCOCO.OFFER_SIZE
      );
      state.offer[l][c] = newArea;
    }
  }
  for (let l = 0; l < TEXCOCO.AREA_H; l++) {
    state.area[l] = [];
    for (let c = 0; c < TEXCOCO.AREA_W; c++) {
      let newArea = new Area(
        state.width / 2 -
          (TEXCOCO.OFFER_SIZE + TEXCOCO.OFFER_GAP) * 2 +
          c * (TEXCOCO.OFFER_SIZE + TEXCOCO.OFFER_GAP),
        (TEXCOCO.OFFER_SIZE + TEXCOCO.OFFER_GAP) * (l + 4) + TEXCOCO.TOP,
        TEXCOCO.OFFER_SIZE,
        TEXCOCO.OFFER_SIZE
      );
      state.area[l][c] = newArea;
    }
  }
  return state;
}


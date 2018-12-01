import { Game } from "./Game";
import { createStore } from "redux";

function component() {
  let element = document.createElement("canvas");
  element.width = 320;
  element.height = 600;
  return element;
}

function texcoco(state = { t: 0 }, action) {
  switch (action.type) {
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

let store = createStore(texcoco);
store.subscribe(() => console.log(store.getState()));
store.dispatch({ type: "A" });
store.dispatch({ type: "B" });
store.dispatch({ type: "A" });

const canvas = component();

const game = new Game(canvas);

document.body.appendChild(canvas);
game.setupControls();
game.draw();

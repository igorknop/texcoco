import { Game } from "./Game";
import { createStore } from "redux";
import { TexcocoApp } from "./TexcocoApp.js";

function component() {
  let element = document.createElement("canvas");
  element.width = 420;
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
let canvas = component();
document.body.appendChild(canvas);

let game = new Game(canvas);
let store = createStore(TexcocoApp);
store.subscribe(() => {
  let state = store.getState();
  game.setState(state);
  game.draw();
});

game.setupControls(store);

store.dispatch({ type: "RESET" });

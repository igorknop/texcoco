import { Game } from "./Game";
import { createStore } from "redux";
import { TexcocoApp, TEXCOCO } from "./TexcocoApp.js";

function component() {
  let element = document.createElement("canvas");
  element.width = Math.min(window.innerWidth, TEXCOCO.WIDTH);
  element.height = Math.min(window.innerHeight, TEXCOCO.HEIGHT);
  return element;
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

Game = require("./Game");

function component() {
    let element = document.createElement("canvas");
    element.width = 320;
    element.height = 600;
    return element;
}

const canvas = component();

const game = new Game(canvas);

document.body.appendChild(canvas);
game.draw();
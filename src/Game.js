import { Area } from "./Area";
import { TexcocoApp, TEXCOCO } from "./TexcocoApp.js";

export class Game {
  constructor(canvas) {
    this.state = null;
    this.allAreas = [];
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.setState(TexcocoApp());
  }

  setState(state) {
    this.state = state;
    for (let l = 0; l < state.offer.length; l++) {
      for (let c = 0; c < state.offer[0].length; c++) {
        this.allAreas.push(state.offer[l][c]);
      }
    }
    for (let l = 0; l < state.area.length; l++) {
      for (let c = 0; c < state.area[0].length; c++) {
        this.allAreas.push(state.area[l][c]);
      }
    }
  }

  draw() {
    this.drawBackground();
    this.drawOffer();
    this.drawMap();
  }

  drawBackground() {
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawOffer() {
    for (let l = 0; l < this.state.offer.length; l++) {
      for (let c = 0; c < this.state.offer[0].length; c++) {
        if (this.state.offer[l][c].selected) {
          this.ctx.strokeStyle = "red";
        } else {
          this.ctx.strokeStyle = "white";
        }
        this.ctx.strokeRect(
          this.state.offer[l][c].x,
          this.state.offer[l][c].y,
          this.state.offer[l][c].w,
          this.state.offer[l][c].h
        );
      }
    }
  }

  drawMap() {
    for (let l = 0; l < this.state.area.length; l++) {
      for (let c = 0; c < this.state.area[0].length; c++) {
        if (this.state.area[l][c].selected) {
          this.ctx.strokeStyle = "green";
        } else {
          this.ctx.strokeStyle = "yellow";
        }
        this.ctx.strokeRect(
          this.state.area[l][c].x,
          this.state.area[l][c].y,
          this.state.area[l][c].w,
          this.state.area[l][c].h
        );
      }
    }
  }

  setupControls(store) {
    var that = this;
    window.addEventListener("keydown", function(e) {
      //      console.log(e.keyCode);
    });
    window.addEventListener("keyup", function(e) {
      //      console.log(e.keyCode);
    });
    window.addEventListener(
      "click",
      function(e) {
        var element = that.canvas;
        var offsetX = 0;
        var offsetY = 0;

        if (element.offsetParent) {
          do {
            offsetX += element.offsetLeft;
            offsetY += element.offsetTop;
          } while ((element = element.offsetParent));
        }
        var x = e.pageX - offsetX;
        var y = e.pageY - offsetY;
        //        console.log("click", e.pageX, e.pageY);
        //        console.log("offset", x, y);
        //that.handleClick(x, y);
        store.dispatch({ type: "CLICK", x: x, y: y });
      },
      false
    );
  }
  drawCrossChair(x, y) {
    this.ctx.strokeStyle = "white";
    this.ctx.lineWidth = 1;
    this.ctx.beginPath();
    this.ctx.moveTo(x, y - 5);
    this.ctx.lineTo(x, y + 5);
    this.ctx.moveTo(x - 5, y);
    this.ctx.lineTo(x + 5, y);
    this.ctx.closePath();
    this.ctx.stroke();
  }
  handleClick(x, y) {
    this.allAreas.forEach(area => {
      if (area.isInside(x, y)) {
        area.selected = !area.selected;
      }
    });
    this.draw();
    this.drawCrossChair(x, y);
  }
  static handleClick2(state, x, y) {
    let newState = Object.assign(Object.create(state), state);
    
    state.offer.forEach((line, l) =>
      line.forEach((area, c) => {
        if (area.isInside(x, y)) {
          newState.offer[l][c].selected = !state.offer[l][c].selected;
          return newState;
        }
      })
    );
    state.area.forEach((line, l) =>
      line.forEach((area, c) => {
        if (area.isInside(x, y)) {
          newState.area[l][c].selected = !state.area[l][c].selected;
          return newState;
        }
      })
    );
    return newState;
  }
}

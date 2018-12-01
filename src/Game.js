const Area = require("./Area");

const OFFER_SIZE = 55;
const OFFER_GAP = 5;
const OFFER_W = 4;
const OFFER_H = 3;
const TOP = 90;

const AREA_W = 4;
const AREA_H = 4;

class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.offer = [];
    this.area = [];
    this.ctx = canvas.getContext("2d");
    for (let l = 0; l < OFFER_H; l++) {
      this.offer[l] = [];
      for (let c = 0; c < OFFER_W; c++) {
        this.offer[l][c] = new Area(
          this,
          this.canvas.width / 2 -
            (OFFER_SIZE + OFFER_GAP) * 2 +
            c * (OFFER_SIZE + OFFER_GAP),
          l * (OFFER_SIZE + OFFER_GAP) + TOP,
          OFFER_SIZE,
          OFFER_SIZE
        );
      }
    }
    for (let l = 0; l < AREA_H; l++) {
      this.area[l] = [];
      for (let c = 0; c < AREA_W; c++) {
        this.area[l][c] = new Area(
          this,
          this.canvas.width / 2 -
            (OFFER_SIZE + OFFER_GAP) * 2 +
            c * (OFFER_SIZE + OFFER_GAP),
          (OFFER_SIZE + OFFER_GAP) * (l + 4) + TOP,
          OFFER_SIZE,
          OFFER_SIZE
        );
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
    this.ctx.strokeStyle = "white";
    for (let l = 0; l < this.offer.length; l++) {
      for (let c = 0; c < this.offer[0].length; c++) {
        this.ctx.strokeRect(
          this.offer[l][c].x,
          this.offer[l][c].y,
          this.offer[l][c].w,
          this.offer[l][c].h
        );
      }
    }
  }

  drawMap() {
    this.ctx.strokeStyle = "yellow";
    for (let l = 0; l < this.area.length; l++) {
      for (let c = 0; c < this.area[0].length; c++) {
        this.ctx.strokeRect(
          this.area[l][c].x,
          this.area[l][c].y,
          this.area[l][c].w,
          this.area[l][c].h
        );
      }
    }
  }

  setupControls() {
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
        that.handleClick(x, y);
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
    this.drawCrossChair(x, y);
  }
}

module.exports = Game;

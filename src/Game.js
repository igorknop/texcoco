const OFFER_SIZE = 55;
const OFFER_GAP = 5;
const TOP = 90;

class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.offer = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
      this.map = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
  }

  draw(){
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
        this.ctx.strokeRect(this.canvas.width / 2 - (OFFER_SIZE + OFFER_GAP) * 2 + c * (OFFER_SIZE + OFFER_GAP), l * (OFFER_SIZE + OFFER_GAP) + TOP, OFFER_SIZE, OFFER_SIZE);
      }
    }
  }
  
  drawMap() {
    this.ctx.strokeStyle = "yellow";
    for (let l = 0; l < this.map.length; l++) {
      for (let c = 0; c < this.map[0].length; c++) {
        this.ctx.strokeRect(this.canvas.width / 2 - (OFFER_SIZE + OFFER_GAP) * 2 + c * (OFFER_SIZE + OFFER_GAP),
            (OFFER_SIZE + OFFER_GAP)*(l+4)+TOP, OFFER_SIZE, OFFER_SIZE);
      }
    }
  }

}

module.exports = Game;

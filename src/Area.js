class Area {
  constructor(game, x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.game = game;
    this.selected = false;
  }
  isInside(x, y) {
    if (x < this.x) return false;
    if (x > this.x + this.w) return false;
    if (y < this.y) return false;
    if (y > this.y + this.h) return false;
    return true;
  }
}

module.exports = Area;

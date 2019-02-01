class Ball extends Einstein.GameObject {
  awake(args) {
    this.x = 100;
    this.y = 50;
    this.dx = 1;
    this.dy = 1;
    this.radius = 5;
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;
  }

}
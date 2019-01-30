class Ball extends GameObject {
  awake(args) {
    this.x = args.x;
    this.y = args.y;
    this.dx = 1;
    this.dy = 1;
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;
  }

}
class Paddle extends GameObject {
  awake(args) {
    this.x = args.x;
    this.y = 50
    this.dy = 0
  }

  update() {
    this.y += this.dy;
  }

}
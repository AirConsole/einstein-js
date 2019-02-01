class Paddle extends Einstein.GameObject {
  awake(args) {
    this.x = args.x;
    this.y = this.scene.height / 2;
    this.dy = 0;
    this.size = 20;
  }

  update() {
    this.y += this.dy;
  }

}
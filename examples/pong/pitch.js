class Pitch extends Scene {
  awake(args) {
    this.width = args.width;
    this.height = args.height;
    this.paddle_left = this.createObject("Paddle", {x: 10})
    this.paddle_right = this.createObject("Paddle", {x: 90})

    this.addInputListener("Move", "move")

  }

  update() {

  }

  move(player, data) {
    console.log("Pitch Move", player, data)
    var paddle = null;
    if (player == 0) {
      paddle = this.paddle_left;
    } else if (player == 1) {
      paddle = this.paddle_right;
    }
    if (paddle) {
      paddle.dy = data;
    }
  }
}
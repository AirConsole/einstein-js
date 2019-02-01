class Pitch extends Einstein.Scene {
  awake(args) {
    this.width = 400;
    this.height = 200;
    this.player_to_paddle = args;


    this.paddles = [
        this.createObject("Paddle", {x: 10}),
        this.createObject("Paddle", {x: 390})];
    this.createObject("Pong.Ball", {"id": "ball"});
    this.addInputListener("Move", "move")

  }

  update() {
    var ball = this.getObject("ball")
    if (ball) {
      this.bounceBallOfWalls(ball);
      this.bounceBallOfPaddle(ball, this.paddles[0]);
      this.bounceBallOfPaddle(ball, this.paddles[1]);
      this.checkGoal(ball)
    }
  }

  move(player, data) {
    var paddle_id = this.player_to_paddle[player];
    if (paddle_id !== undefined) {
      var paddle = this.paddles[paddle_id];
      paddle.dy = data;
    }
  }

  bounceBallOfWalls(ball) {
    if (ball.y - ball.radius < 0 || ball.y + ball.radius > this.height) {
      ball.dy *= -1;
    }
  }

  bounceBallOfPaddle(ball, paddle) {
    if (ball.x == paddle.x &&
        ball.y >= paddle.y - paddle.size / 2 &&
        ball.y <= paddle.y + paddle.size / 2) {
      ball.dx *= -1;
      ball.dy = Math.min(4, Math.max(-4, (ball.y - paddle.y)/4));
    }
  }

  checkGoal(ball) {
    if (ball.x  < 0 || ball.x > this.width) {
      this.removeObject(ball);
      this.schedule(1000, "spawnBall")
    }
  }

  spawnBall() {
    this.createObject("Pong.Ball", {"id": "ball"});
  }

  onLeave(player) {
    if (this.player_to_paddle[player] !== undefined) {
      this.game.changeScene("Lobby");
    }
  }
}
class PongRenderer extends Renderer {
  awake() {
    document.getElementById("loading").style.display = "none";
    this.pitch_ctx = document.getElementById("canvas").getContext("2d");
    this.lobby_element = document.getElementById("lobby")
    this.buttons = document.getElementById("buttons")
    this.waiting = document.getElementById("waiting")

  }

  render() {
    if (this.scene.type == "Pitch") {
      this.lobby_element.style.display = "none";
      this.pitch_ctx.fillStyle = "black";
      this.pitch_ctx.fillRect(0,0, this.scene.width, this.scene.height)
      this.renderPaddle(this.scene.paddles[0],
          this.scene.player_to_paddle[this.game.player] == 0);
      this.renderPaddle(this.scene.paddles[1],
          this.scene.player_to_paddle[this.game.player] == 1);
      this.renderBall(this.scene.getObject("ball"));

      if (this.scene.player_to_paddle[this.game.player] !== undefined) {
        this.buttons.style.display = "block"
        this.waiting.style.display = "none"
      } else {
        this.buttons.style.display = "none"
        this.waiting.style.display = "block"
      }

    } else {
      this.lobby_element.style.display = "block";
    }
  }

  renderPaddle(paddle, is_player) {
    if (is_player) {
      this.pitch_ctx.fillStyle = "lime";
    } else {
      this.pitch_ctx.fillStyle = "white";
    }
    this.pitch_ctx.fillRect(paddle.x - 1, paddle.y - paddle.size / 2,
                            3, paddle.size)
  }

  renderBall(ball) {
    if (!ball) {
      return;
    }
    this.pitch_ctx.fillStyle = "white";
    this.pitch_ctx.beginPath();
    this.pitch_ctx.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI, false);
    this.pitch_ctx.fill();
    this.pitch_ctx.closePath();
  }

}
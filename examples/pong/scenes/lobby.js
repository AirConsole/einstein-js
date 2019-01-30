class Lobby extends Scene {
  awake(args) {}

  update() {}

  onJoin(player) {
    if (this.game.players.length >= 2) {
      var player_to_paddle = {};
      player_to_paddle[this.game.players[0]] = 0;
      player_to_paddle[this.game.players[1]] = 1;
      this.game.changeScene("Pitch", player_to_paddle);
    }
  }
}
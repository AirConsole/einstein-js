class Lobby extends Einstein.Scene {
  awake(args) {}

  update() {}

  onJoin(player) {
    var players = this.engine.getPlayers();
    if (players.length >= 2) {
      var player_to_paddle = {};
      player_to_paddle[players[0]] = 0;
      player_to_paddle[players[1]] = 1;
      this.engine.changeScene("Pitch", player_to_paddle);
    }
  }
}
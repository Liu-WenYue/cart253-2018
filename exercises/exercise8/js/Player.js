// Player
//
// A class that defines how a player behaves, including the ability
// to specify the input keys to move it in all directions.

// Player constructor
//
// Sets the properties with the provided arguments for Player.
function Player(x,y,size,rightKey,leftKey,upKey,downKey) {
  this.x = x;
  this.y = y;
  this.displacementX = 0; // X Distance (left and right) moved by the player.
  this.displacementY = 0; // Y Distance (up and down) moved by the player.
  this.size = size;
  this.startX = x; // The X starting position for player.
  this.startY = y; // The Y starting position for player.
  this.rightKey = rightKey; // The controls of the handle input.
  this.leftKey = leftKey;
  this.upKey = upKey;
  this.downKey = downKey;
}

// Player
//
// A class that defines how a player behaves, including the ability
// to specify the input keys to move it in all directions.

// Player constructor
//
// Sets the properties with the provided arguments for Player.
function Player(x,y,vx,vy,size,speed) {
  this.x = x;
  this.y = y;
  this.displacementX = dx; // X Distance (left and right) moved by the player.
  this.displacementY = dy; // Y Distance (up and down) moved by the player.
  this.size = size;
  this.startVX = vx; // The X starting position for player.
  this.startVY = vy; // The Y starting position for player.
}

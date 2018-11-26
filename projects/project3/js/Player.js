// Player
//
// A class that defines how a player behaves, including the ability
// to specify the input keys to move it in all directions.

// Player constructor
//
// Sets the properties with the provided arguments for Player.
function Player(x,y,size,rightKey,leftKey,upKey,downKey,image) {
  this.x = x;
  this.y = y;
  this.nextX = this.x; // The next X position for player.
  this.nextY = this.y; // The next Y position for player.
  this.size = size;
  this.startX = x; // The X starting position for player.
  this.startY = y; // The Y starting position for player.
  this.rightKey = rightKey; // The controls of the handle input.
  this.leftKey = leftKey;
  this.upKey = upKey;
  this.downKey = downKey;
  this.image = image;
}


// keyPressed()
//
// Checks if the arrow keys are pressed.
Player.prototype.keyPressed = function() {
  // Sets the next position of the player to its starting position.
  this.nextX = this.x;
  this.nextY = this.y;

  // If the upkey is pressed, the player will move up by one unit of its
  // Y displacement, which is the player's size.
  if (keyCode === this.upKey) {
    this.nextY -= this.size;
  }
  // If the downkey is pressed, the player will move down by one unit of its
  // Y displacement, which is the player's size.
  if (keyCode === this.downKey) {
    this.nextY += this.size;
  }

  // If the leftkey is pressed, the player will move to the left by one
  // unit of its Y displacement, which is the player's size.
  if (keyCode === this.leftKey) {
    this.nextX -= this.size;
  }
  // If the rightkey is pressed, the player will move to the right by one
  // unit of its Y displacement, which is the player's size.
  if (keyCode === this.rightKey) {
    this.nextX += this.size;
  }
}

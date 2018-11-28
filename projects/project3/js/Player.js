// Player
//
// A class that defines how a player behaves, including the ability
// to specify the input keys to move it in all directions.

// Player constructor
//
// Sets the properties with the provided arguments for Player.
function Player(x,y,size,rightKey,leftKey,upKey,downKey,image,mapImage) {
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
  this.mapImage = mapImage;
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

  // Checks the condition for target to loss health.
  target1.lossHealth();
  target2.lossHealth();
  target3.lossHealth();
  target4.lossHealth();

  // The variable that contains the color of the next position of the player.
  var pixel = color(this.mapImage.get(this.nextX, this.nextY));
  // The variable that used to check the color.
  var path = color(255);

  // Only if the next position of player is white, have the player move.
  if (red(path) === red(pixel) && green(path) === green(pixel) && blue(path) === blue(pixel))  {
    this.x = this.nextX;
    this.y = this.nextY;
  }
}


// display()
//
// Displays the player image on the screen.
Player.prototype.display = function() {
  // Display the player image on screen based on its given propoerties.
  image(this.image,this.x,this.y,this.size,this.size);

}


// reset()
//
// Resets the player's position back to its starting position.
Player.prototype.reset = function() {
  // Reset the displacement values back to the original.
  this.x = this.startX;
  this.y = this.startY;
  this.nextX = this.startX;
  this.nextY = this.startY;
}

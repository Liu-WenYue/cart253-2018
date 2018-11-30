// Target
//
// A class that defines how a target behaves, including losing health
// for every move done by the player.

// Target constructor
//
// Sets the properties with the provided arguments for Target.
function Target(x,y,size,health,rightKey,leftKey,upKey,downKey,image,numOfMoveToWin) {
  this.x = x;
  this.y = y;
  this.nextX = this.x;
  this.nextY = this.y;
  this.size = size;
  this.health = health; // The health value for the target.
  this.startHealth = health; // The starting health for target.
  this.rightKey = rightKey; // The controls of the handle input.
  this.leftKey = leftKey;
  this.upKey = upKey;
  this.downKey = downKey;
  this.image = image;
  this.numOfMoveToWin = numOfMoveToWin;
  this.startX = this.x;
  this.startY = this.y;
}


// keyPressed()
//
// Checks if the arrow keys are pressed.
// The target will move in opposite direction of player.
Target.prototype.keyPressed = function() {
  // Sets the next position of the target to its starting position.
  this.nextX = this.x;
  this.nextY = this.y;

  // If the upkey is pressed, the target will move down by one unit of its
  // Y displacement, which is the target's size.
  if (keyCode === this.upKey) {
    this.nextY += this.size;
  }
  // If the downkey is pressed, the target will move up by one unit of its
  // Y displacement, which is the target's size.
  if (keyCode === this.downKey) {
    this.nextY -= this.size;
  }

  // If the leftkey is pressed, the target will move to the right by one
  // unit of its X displacement, which is the target's size.
  if (keyCode === this.leftKey) {
    this.nextX += this.size;
  }
  // If the rightkey is pressed, the target will move to the left by one
  // unit of its X displacement, which is the target's size.
  if (keyCode === this.rightKey) {
    this.nextX -= this.size;
  }

  // The variable that contains the color of the next position of the target.
  var pixel = color(map5Image.get(this.nextX, this.nextY));
  // The variable that used to check the color.
  var path = color(255);

  // Only if the next position of target is white, have the target move.
  if (red(path) === red(pixel) && green(path) === green(pixel) && blue(path) === blue(pixel))  {
    this.x = this.nextX;
    this.y = this.nextY;
    player5.lossHealth();
  }
}


// display()
//
// Displays the target image on the screen.
Target.prototype.display = function() {
  push();
  tint(255, this.health); // Handle the transparency of the target.
  // Display the target image on screen based on its given propoerties.
  image(this.image,this.x,this.y,this.size,this.size);
  pop();
}


// lossHealth()
//
// Losses target's health for every move done by the player.
Target.prototype.lossHealth  = function() {
  // If any of the arrow keys is pressed, the target losses health.
  if (keyIsPressed && (keyCode === player1.upKey || keyCode === player1.downKey || keyCode === player1.leftKey || keyCode === player1.rightKey)) {
    // target losses all the health if the player move more than numOfMoveToWin.
    this.health -= (255/this.numOfMoveToWin);
  }

  else if (keyIsPressed && (keyCode === player2.upKey || keyCode === player2.downKey || keyCode === player2.leftKey || keyCode === player2.rightKey)) {
    // target losses all the health if the player move more than numOfMoveToWin.
    this.health -= (255/this.numOfMoveToWin);
  }

  else if (keyIsPressed && (keyCode === player3.upKey || keyCode === player3.downKey || keyCode === player3.leftKey || keyCode === player3.rightKey)) {
    // target losses all the health if the player move more than numOfMoveToWin.
    this.health -= (255/this.numOfMoveToWin);
  }

  else if (keyIsPressed && (keyCode === player4.upKey || keyCode === player4.downKey || keyCode === player4.leftKey || keyCode === player4.rightKey)) {
    // target losses all the health if the player move more than numOfMoveToWin.
    this.health -= (255/this.numOfMoveToWin);
  }

  else if (keyIsPressed && (keyCode === player5.upKey || keyCode === player5.downKey || keyCode === player5.leftKey || keyCode === player5.rightKey)) {
    // target losses all the health if the player move more than numOfMoveToWin.
    this.health -= (255/this.numOfMoveToWin);
  }
}


// reset()
//
// Resets the target's health back to its starting number.
Target.prototype.reset = function() {
  // Reset the health of health.
  this.health = this.startHealth;

  // Reset the displacement values back to the original.
  this.x = this.startX;
  this.y = this.startY;
  this.nextX = this.startX;
  this.nextY = this.startY;
}

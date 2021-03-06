// Player
//
// A class that defines how a player behaves, including the ability
// to specify the input keys to move it in all directions.

// Player constructor
//
// Sets the properties with the provided arguments for Player.
function Player(x,y,size,rightKey,leftKey,upKey,downKey,image,mapImage,health,numOfMoveToWin) {
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
  this.health = health; // The health value for the target.
  this.startHealth = health; // The starting health for target.
  this.numOfMoveToWin = numOfMoveToWin;
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

  // The variable that contains the color of the next position of the player.
  var pixel = color(this.mapImage.get(this.nextX, this.nextY));
  // The variable that used to check the color.
  var path = color(255);

  // Only if the next position of player is white, have the player move.
  if (red(path) === red(pixel) && green(path) === green(pixel) && blue(path) === blue(pixel))  {
    this.x = this.nextX;
    this.y = this.nextY;
    target1.lossHealth(); // Loss targets' health if player moved.
    target2.lossHealth();
    target3.lossHealth();
    target4.lossHealth();
    target5.lossHealth();

    // Have cars show and disappear only if player is moved.
    for(var i = 0; i < cars.length; i++) {
      cars[i].keyPressed();
    }

    // Have girls show and disappear only if player is moved.
    for(var i = 0; i < girls.length; i++) {
      girls[i].keyPressed();
    }

    // Have triggers show and disappear only if player is moved.
    for(var i = 0; i < triggers.length; i++) {
      triggers[i].keyPressed();
    }

  }
}


// display()
//
// Displays the player image on the screen.
Player.prototype.display = function() {
  push();
  tint(255, this.health); // Handle the transparency of the player.
  // Display the player image on screen based on its given propoerties.
  image(this.image,this.x,this.y,this.size,this.size);
  pop();
}


// lossHealth()
//
// Losses player's health for every move done by the player.
Player.prototype.lossHealth  = function() {
  // If any of the arrow keys is pressed, the target losses health.
  if (keyIsPressed && (keyCode === player5.upKey || keyCode === player5.downKey || keyCode === player5.leftKey || keyCode === player5.rightKey)) {
    // Player losses all the health if it moved more than the number of moves to win.
    this.health -= (255/this.numOfMoveToWin);
  }
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

  // Reset the health of health.
  this.health = this.startHealth;
}

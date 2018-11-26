// Car
//
// A class that defines how a car behaves, including the ability to prevent
// the player from reaching to their partner.

// Car constructor
//
// Sets the properties with the provided arguments for Car.
function Car(x,y,size,health) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.health = health; // The health value for car.
  this.startHealth = health; // The starting health for car.
  this.harmful = true; // Sets the starting state of the car.
}

// display()
//
// Displays the car image on the screen.
Car.prototype.display = function() {
  push();
  tint(255, this.health); // Handle the transparency of the car.
  // Display the car image on screen based on its given propoerties.
  image(carImage,this.x,this.y,this.size,this.size);
  pop();
}

// keyPressed()
//
// Checks if any of the arrow key is pressed.
// Have the cars show in alternative rounds.
Car.prototype.keyPressed = function() {
  // If any of the arrow key is pressed and car is not harmful...
  if (keyIsPressed && (keyCode === player2.upKey || keyCode === player2.downKey || keyCode === player2.leftKey || keyCode === player2.rightKey) && this.harmful === false) {
    // ...sets the health of the car to full opacity and set it to harmful.
    this.health = 255;
    this.harmful = true;
    // return;
  }
  // If any of the arrow key is pressed again...
  else if (keyIsPressed && (keyCode === player2.upKey || keyCode === player2.downKey || keyCode === player2.leftKey || keyCode === player2.rightKey)) {
    // ...sets the car to disappear (zero opacity) and set it to not harmful again.
    this.health = 0;
    this.harmful = false;
  }
}

// Trigger
//
// A class that defines how a car behaves, including the ability to prevent
// the player from reaching to their partner.

// Trigger constructor
//
// Sets the properties with the provided arguments for Trigger.
function Trigger(x,y,size,health) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.health = health; // The health value for trigger.
  this.startHealth = health; // The starting health for trigger.
  this.harmful = true; // Sets the starting state of the trigger.
}


// display()
//
// Displays the trigger image on the screen.
Trigger.prototype.display = function() {
  push();
  tint(255, this.health); // Handle the transparency of the trigger.
  // Display the trigger image on screen based on its given propoerties.
  image(triggerImage,this.x,this.y,this.size,this.size);
  pop();
}


// keyPressed()
//
// Checks if any of the arrow key is pressed.
// Have the triggers show in alternative rounds.
Trigger.prototype.keyPressed = function() {
  // If any of the arrow key is pressed and trigger is not harmful...
  if (keyIsPressed && (keyCode === player4.upKey || keyCode === player4.downKey || keyCode === player4.leftKey || keyCode === player4.rightKey) && this.harmful === false) {
    // ...sets the health of the trigger to full opacity and set it to harmful.
    this.health = 255;
    this.harmful = true;
  }
  // If any of the arrow key is pressed again...
  else if (keyIsPressed && (keyCode === player4.upKey || keyCode === player4.downKey || keyCode === player4.leftKey || keyCode === player4.rightKey)) {
    // ...sets the triggers to disappear (zero opacity) and set it to not harmful again.
    this.health = 0;
    this.harmful = false;
  }
}

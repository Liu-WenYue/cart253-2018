// Letter
//
// A class that defines how a letter behaves, including the ability
// to stop the health lose of target for three rounds.

// Letter constructor
//
// Sets the properties with the provided arguments for letter.
function Letter(x,y,size,health) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.health = health; // The health value for the letter.
  this.startHealth = health; // The starting health for letter.
  this.useful = true; // To check whether the letter is useful or not.
}


// display()
//
// Displays the letter image on the screen.
Letter.prototype.display = function() {
  push();
  tint(255, this.health); // Handle the transparency of the letter.
  // Display the letter image on screen based on its given propoerties.
  image(letterImage,this.x,this.y,this.size,this.size);
  pop();
}


// handleCollision()
//
// Check if this letter overlaps with the player passed as an argument
// and if so stops health lose of target for three rounds and make letter disappers.
Letter.prototype.handleCollision = function() {
  // If the candy is not useful anymore, have it just return.
  if(this.useful === false) {
    return;
  }

  // Check if the player overlaps with the letter on x axis
  if (this.x - this.size/2 < player4.x + player4.size/2 && this.x + this.size/2 > player4.x - player4.size/2) {
    // Check if the player overlaps the letter on y axis
    if (this.y - this.size/2 < player4.y + player4.size/2 && this.y + this.size/2 > player4.y - player4.size/2) {
      // Sets the letter's health to zero (have the letter disappears).
      this.health = 0;
      // Add three units of health lose for target.
      target4.health += 3*(255/11);

      // Make the letter not useful after reduced the health,
      // so the letter only function once.
      this.useful = false;
    }
  }
}

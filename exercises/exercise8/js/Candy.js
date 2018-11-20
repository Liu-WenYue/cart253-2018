// Candy
//
// A class that defines how a candy behaves, including the ability
// to stop the health lose of target for three rounds.

// Candy constructor
//
// Sets the properties with the provided arguments for candy.
function Candy(x,y,size,health) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.health = health; // The health value for the candy.
  this.startHealth = health; // The starting health for candy.
  this.useful = true; // To check whether the candy is useful or not.
}


// display()
//
// Displays the candy image on the screen.
Candy.prototype.display = function() {
  push();
  tint(255, this.health); // Handle the transparency of the candy.
  // Display the candy image on screen based on its given propoerties.
  image(candyImage,this.x,this.y,this.size,this.size);
  pop();
}


// handleCollision()
//
// Check if this candy overlaps with the player passed as an argument
// and if so stops health lose of target for three rounds and make candy disappers.
Candy.prototype.handleCollision = function() {
  // If the candy is not useful anymore, have it just return.
  if(this.useful === false) {
    return;
  }

  // Check if the player overlaps with the candy on x axis
  if (this.x - this.size/2 < (player.x + player.displacementX) + player.size/2 && this.x + this.size/2 > (player.x + player.displacementX) - player.size/2) {
    // Check if the player overlaps the candy on y axis
    if (this.y - this.size/2 < (player.y + player.displacementY) + player.size/2 && this.y + this.size/2 > (player.y + player.displacementY) - player.size/2) {
      // Sets the candy's health to zero (have the candy disappears).
      this.health = 0;
      // Add three units of health lose for target.
      target.health += 3*(255/11);

      // Make the candy not useful after reduced the health,
      // so the candy only function once.
      this.useful = false;
    }
  }
}

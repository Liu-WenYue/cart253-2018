// Ring
//
// A class that defines how a ring behaves, including the ability
// to teleport the player to the right side of the game map.

// Ring constructor
//
// Sets the properties with the provided arguments for ring.
function Ring(x,y,size,health) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.health = health; // The health value for the ring.
  this.startHealth = health; // The starting health for ring.
  this.useful = true; // To check whether the ring is useful or not.
}


// display()
//
// Displays the ring image on the screen.
Ring.prototype.display = function() {
  push();
  tint(255, this.health); // Handle the transparency of the ring.
  // Display the ring image on screen based on its given propoerties.
  image(ringImage,this.x,this.y,this.size,this.size);
  pop();
}


// handleCollision()
//
// Check if this ring overlaps with the player passed as an argument
// and if so teleport the player to the right side of the screen.
Ring.prototype.handleCollision = function() {
  // If the ring is not useful anymore, have it just return.
  if(this.useful === false) {
    return;
  }

  // Check if the player overlaps with the ring on x axis
  if (this.x - this.size/2 < player3.x + player3.size/2 && this.x + this.size/2 > player3.x - player3.size/2) {
    // Check if the player overlaps the ring on y axis
    if (this.y - this.size/2 < player3.y + player3.size/2 && this.y + this.size/2 > player3.y - player3.size/2) {
      // Sets the ring's health to zero (have the candy disappears).
      this.health = 0;
      // Teleport the player to the right side of the game map.
      player3.x = 810;
      player3.y = 330;

      // Make the ring not useful after reduced the health,
      // so the ring only function once.
      this.useful = false;
    }
  }
}

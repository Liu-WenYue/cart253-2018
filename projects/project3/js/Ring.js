// Ring
//
// A class that defines how a ring behaves, including the ability
// to transport the player to the right side of the game map.

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
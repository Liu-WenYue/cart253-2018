// Girl
//
// A class that defines how a girl behaves, including the ability
// prevent the player from reaching to their partner.

// Girl constructor
//
// Sets the properties with the provided arguments for Girl.
function Girl(x,y,size,health) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.health = health; // The health value for girl.
  this.startHealth = health; // The starting health for girl.
  this.harmful = true; // Sets the starting state of the girl.
}


// display()
//
// Displays the girl image on the screen.
Girl.prototype.display = function() {
  push();
  tint(255, this.health); // Handle the transparency of the girl.
  // Display the girl image on screen based on its given propoerties.
  image(girlImage,this.x,this.y,this.size,this.size);
  pop();
}

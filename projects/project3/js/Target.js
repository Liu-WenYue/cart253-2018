// Target
//
// A class that defines how a target behaves, including losing health
// for every move done by the player.

// Target constructor
//
// Sets the properties with the provided arguments for Target.
function Target(x,y,size,health,image) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.health = health; // The health value for the target.
  this.startHealth = health; // The starting health for target.
  this.image = image;
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

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

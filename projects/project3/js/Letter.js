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

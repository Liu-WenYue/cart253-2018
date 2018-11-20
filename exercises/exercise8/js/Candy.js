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
}

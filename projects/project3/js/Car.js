// Car
//
// A class that defines how a car behaves, including the ability to prevent
// the player from reaching to their partner.

// Car constructor
//
// Sets the properties with the provided arguments for Car.
function Car(x,y,size,health) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.health = health; // The health value for car.
  this.startHealth = health; // The starting health for car.
  this.harmful = true; // Sets the starting state of the car.
}

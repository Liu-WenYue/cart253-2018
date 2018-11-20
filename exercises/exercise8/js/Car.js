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
}


// display()
//
// Displays the car image on the screen.
Car.prototype.display = function() {
  push();
  tint(255, this.health); // Handle the transparency of the car.
  // Display the car image on screen based on its given propoerties.
  image(carImage,this.x,this.y,this.size,this.size);
  pop();
}

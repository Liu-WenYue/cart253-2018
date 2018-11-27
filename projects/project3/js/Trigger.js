// Trigger
//
// A class that defines how a car behaves, including the ability to prevent
// the player from reaching to their partner.

// Trigger constructor
//
// Sets the properties with the provided arguments for Trigger.
function Trigger(x,y,size,health) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.health = health; // The health value for trigger.
  this.startHealth = health; // The starting health for trigger.
  this.harmful = true; // Sets the starting state of the trigger.
}

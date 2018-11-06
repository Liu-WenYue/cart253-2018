// Sword
//
// A class that defines how a sword behaves, including how it reduces the
// paddles ability.

/////////////////////   NEW   /////////////////////

// Sword constructor
//
// Sets the properties with the provided arguments
function Sword(x,y,vx,vy,size,speed) {
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.size = size;
  this.speed = speed;
}

/////////////////////   END NEW  /////////////////////


/////////////////////   NEW   /////////////////////

// update()
//
// Moves according to velocity.
Sword.prototype.update = function () {
  // Update position with velocity
  this.x += this.vx;
  this.y += this.vy;
}

/////////////////////   END NEW   /////////////////////


/////////////////////   NEW   /////////////////////

// display()
//
// Display the sword image on the screen.
Sword.prototype.display = function () {
  // Display the ball image at its x and y positions and in its size.
  image(swordImage,this.x,this.y,this.size,this.size);
}

/////////////////////   END NEW  /////////////////////

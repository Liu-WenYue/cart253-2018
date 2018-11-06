// Sword
//
// A class that defines how a sword behaves, including how it reduces the
// paddles ability.

/////////////////////   NEW   /////////////////////
/////////////////////   NEW   /////////////////////
// Sword constructor
//
// Sets the properties with the provided arguments
function Sword(x,y,vx,vy,w,h,speed) {

/////////////////////   END NEW  /////////////////////

  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;

  /////////////////////   NEW   /////////////////////

  this.w = w;
  this.h = h;

  /////////////////////   END NEW  /////////////////////

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
}

/////////////////////   END NEW   /////////////////////


/////////////////////   NEW   /////////////////////
/////////////////////   NEW   /////////////////////
// display()
//
// Display the sword image on the screen.
Sword.prototype.display = function () {
  // Display the ball image at its x and y positions and in its size.
  image(swordImage,this.x,this.y,this.w,this.h);
}
/////////////////////   END NEW  /////////////////////
/////////////////////   END NEW  /////////////////////


/////////////////////   NEW   /////////////////////

// direction()
//
// Choose the launch direction for the sword.
Sword.prototype.direction = function () {
  /////////////////////   NEW   /////////////////////

  // If the paddle is about to win(gained 6 points),
  // there will be swords launch towards it.
  if(rightPaddleScore === 6) {
    this.x = width/2;
    this.y = random(40,height-40);
    this.vx = this.speed;
  }
  if(leftPaddleScore === 6) {

    rotate(radians(180));
    this.x = width/2;
    this.y = random(40,height-40);
    this.vx = -this.speed;
  }
}
/////////////////////   END NEW   /////////////////////
/////////////////////   END NEW   /////////////////////

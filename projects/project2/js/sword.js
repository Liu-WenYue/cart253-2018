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

  /////////////////////   NEW   /////////////////////

  // Angle is to decide which angle is the sword drew.
  this.angle = 0;

  /////////////////////   END NEW  /////////////////////
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
/////////////////////   NEW   /////////////////////
// display()
//
// Display the sword image on the screen.
Sword.prototype.display = function () {
  push();
  // Translate the origin to the center of the sword.
  translate(this.x,this.y);
  // Rotate the sword based on the angle.
  rotate(radians(this.angle));
  // Display the ball image at the origin and in its size.
  image(swordImage,0,0,this.w,this.h);
  pop();
}
/////////////////////   END NEW  /////////////////////
/////////////////////   END NEW  /////////////////////
/////////////////////   END NEW  /////////////////////


/////////////////////   NEW   /////////////////////

// direction()
//
// Choose the launch direction for the sword.
Sword.prototype.direction = function () {
  /////////////////////   NEW   /////////////////////
  /////////////////////   NEW   /////////////////////
  // If the paddle is about to win(gained 6 points),
  // there will be swords launch towards it.
  if(rightPaddleScore === 6) {
    // The image is still facing the right.
    this.angle = (0);
    this.x = width/2;
    this.y = random(40,height-40);
    this.vx = this.speed;
  }
  if(leftPaddleScore === 6) {
    // Rotate the image by 180 degree, so the sword is launched
    // to the left and facing the left at the same time.
    this.angle = (180);
    this.x = width/2;
    this.y = random(40,height-40);
    this.vx = -this.speed;
  }
}
/////////////////////   END NEW   /////////////////////
/////////////////////   END NEW   /////////////////////
/////////////////////   END NEW   /////////////////////

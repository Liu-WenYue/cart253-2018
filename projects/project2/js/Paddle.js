// Paddle
//
// A class that defines how a paddle behaves, including the ability
// to specify the input keys to move it up and down

/////////////////////   NEW   /////////////////////

// Paddle constructor
//
// Sets the properties with the provided arguments or defaults
function Paddle(x,y,w,h,speed,downKey,upKey,paddleImage) {
  this.x = x;
  this.y = y;
  this.vx = 0;
  this.vy = 0;
  this.w = w;
  this.h = h;
  this.speed = speed;
  this.downKey = downKey;
  this.upKey = upKey;

  // To load different paddle images on each side.
  this.paddleImage = paddleImage;
}

/////////////////////   END NEW  /////////////////////

// handleInput()
//
// Check if the up or down keys are pressed and update velocity
// appropriately
Paddle.prototype.handleInput = function() {
  if (keyIsDown(this.upKey)) {
    this.vy = -this.speed;
  }
  else if (keyIsDown(this.downKey)) {
    this.vy = this.speed;
  }
  else {
    this.vy = 0;
  }
}

/////////////////////   NEW   /////////////////////

// update()
// Update y position based on velocity
// Constrain the resulting position to be within the canvas
Paddle.prototype.update = function() {
this.y += this.vy;

// To constrain the paddles based on its image mode.
// The paddles will not be able to go off screen.
this.y = constrain(this.y,this.h/2,height-this.h/2);
}

/////////////////////   END NEW  /////////////////////

// display()
//
// Draw the paddle as a rectangle on the screen
Paddle.prototype.display = function() {
  /////////////////////   NEW   /////////////////////

  // Display the images for left and right paddles on screen based
  // on its given propoerties.
  image(this.paddleImage,this.x,this.y,this.w,this.h);

  /////////////////////   END NEW  /////////////////////
}

/////////////////////   NEW   /////////////////////

// increaseSize()
//
// Increases the size of the paddles,
// if left paddle gains score, the size of the left paddle incrases,
// if right paddle gains score, the size of the right paddle increases.
Paddle.prototype.increaseSize = function() {
    this.w += 0.5;
    this.h += 3;
}

/////////////////////   END NEW   /////////////////////


/////////////////////   NEW   /////////////////////

// reduceSize()
//
// Reduces the size of the paddles,
// if left paddle overlaps the sword, the size of the left paddle decreases,
// if right paddle overlaps the sword, the size of the right paddle decreases,.
Paddle.prototype.reduceSize = function() {
    this.w -= 2.5;
    this.h -= 15;
}

/////////////////////   END NEW   /////////////////////

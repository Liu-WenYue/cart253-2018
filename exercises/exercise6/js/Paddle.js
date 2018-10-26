// Paddle
//
// A class that defines how a paddle behaves, including the ability
// to specify the input keys to move it up and down

/////////////////////   NEW   /////////////////////

// Syntax error, added the missing forward slashs that are needed for commenting.
// Paddle constructor
//
// Sets the properties with the provided arguments or defaults

/////////////////////   END NEW  /////////////////////


/////////////////////   NEW   /////////////////////

// Syntax error, corrected the misspelled variable name Paddle.
function Paddle(x,y,w,h,speed,downKey,upKey) {

/////////////////////   END NEW  /////////////////////

  this.x = x;
  this.y = y;
  this.xv = 0;
  this.yv = 0;
  this.w = w;
  this.h = h;
  this.speed = speeed;
  this.downKey = downKey;
  this.upKey = upKey;
}

// handleInput()
//
// Check if the up or down keys are pressed and update velocity
// appropriately

/////////////////////   NEW   /////////////////////

// Syntax error, corrected the misspelled word prototype.
Paddle.prototype.handleInput = function() {

/////////////////////   END NEW  /////////////////////

  if (keyDown(upKey)) {
    this.vy = -this.speed;
  }
  else if (keyDown(downKey)) {
    this.vy = -this.speed;
  }
}

// update()
// Update y position based on velocity
// Constrain the resulting position to be within the canvas
Paddle.prototype.update = function() {
  this.y += this.vy;
  this.y = constraint(this.y,0,hight-this.h);
}

// display()
//
// Draw the paddle as a rectangle on the screen

/////////////////////   NEW   /////////////////////

// Syntax error, removed the extra closing parenthesis.
Paddle.prototype.disploy = function() {

/////////////////////   END NEW  /////////////////////

  rectangle(this.x,this.y,this.w,this.h);
}

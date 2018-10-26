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

  /////////////////////   NEW   /////////////////////

  // Syntax error, corrected the misspelled word speed.
  this.speed = speed;

  /////////////////////   END NEW  /////////////////////

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

  /////////////////////   NEW   /////////////////////

  /////////////////////   NEW   /////////////////////

  // Syntax error, corrected the misspelled function name keyIsDown.
  // Syntax error, added the missing this. in front of the variable,
  // this. is required for the properties in an object-oriented program.
  if (keyIsDown(this.upKey)) {

  /////////////////////   END NEW  /////////////////////

  /////////////////////   END NEW  /////////////////////

    this.vy = -this.speed;
  }

  /////////////////////   NEW   /////////////////////

  /////////////////////   NEW   /////////////////////

  // Syntax error, corrected the misspelled function name keyIsDown.
  // Syntax error, added the missing this. in front of the variable,
  // this. is required for the properties in an object-oriented program.
  else if (keyIsDown(this.downKey)) {

  /////////////////////   END NEW   /////////////////////

  /////////////////////   END NEW   /////////////////////

    this.vy = -this.speed;
  }
}

// update()
// Update y position based on velocity
// Constrain the resulting position to be within the canvas
Paddle.prototype.update = function() {
  this.y += this.vy;

  /////////////////////   NEW   /////////////////////

  // Syntax error, corrected the misspelled function name constrain.
  this.y = constrain(this.y,0,hight-this.h);

  /////////////////////   END NEW  /////////////////////
}

// display()
//
// Draw the paddle as a rectangle on the screen

/////////////////////   NEW   /////////////////////

/////////////////////   NEW   /////////////////////

// Syntax error, removed the extra closing parenthesis.
// Syntax error, corrected the misspelled word display.
Paddle.prototype.display = function() {

/////////////////////   END NEW  /////////////////////

/////////////////////   END NEW  /////////////////////


  /////////////////////   NEW   /////////////////////

  // Syntax error, corrected the misspelled function name rect.
  rect(this.x,this.y,this.w,this.h);

  /////////////////////   END NEW  /////////////////////
}

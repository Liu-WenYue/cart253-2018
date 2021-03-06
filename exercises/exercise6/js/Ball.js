// Ball
//
// A class to define how a ball behaves. Including bouncing on the top
// and bottom edges of the canvas, going off the left and right sides,
// and bouncing off paddles.

// Ball constructor
//
// Sets the properties with the provided arguments
function Ball(x,y,vx,vy,size,speed) {
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.size = size;
  this.speed = speed;
}

// update()
//
// Moves according to velocity, constrains y to be on screen,
// checks for bouncing on upper or lower edgs, checks for going
// off left or right side.

/////////////////////   NEW   /////////////////////

/////////////////////   NEW   /////////////////////

// Syntax error, corrected the misspelled word function.
// Syntax error, corrected the misspelled word update.
Ball.prototype.update = function () {

/////////////////////   END NEW  /////////////////////

/////////////////////   END NEW  /////////////////////


  /////////////////////   NEW   /////////////////////

  // Update position with velocity
  // Behavioural error, corrected the misused plus sign,
  // we need to update the x position by adding the x velocity to it,
  // not assign the value of the x velocity.
  this.x += this.vx;

  /////////////////////   END NEW  /////////////////////

  this.y += this.vy;

  // Constrain y position to be on screen
  this.y = constrain(this.y,0,height-this.size);

  /////////////////////   NEW   /////////////////////

  // Check for touching upper or lower edge and reverse velocity if so
  // Syntax error, corrected the misused equal sign, we are not assigning
  // value to the variable, so we should use === instead of =.
  if (this.y === 0 || this.y + this.size === height) {

  /////////////////////   END NEW  /////////////////////

    this.vy = -this.vy;
  }
}

// isOffScreen()
//
// Checks if the ball has moved off the screen and, if so, returns true.
// Otherwise it returns false.
Ball.prototype.isOffScreen = function () {
  // Check for going off screen and reset if so

  /////////////////////   NEW   /////////////////////

  /////////////////////   NEW   /////////////////////

  /////////////////////   NEW   /////////////////////

  // Syntax error, corrected the misspelled word if.
  // Syntax error, removed the extra plus sign.
  // Behavioural error, corrected the misused logical operator,
  // the ball can never goes off screen to the both side at the same time,
  // so we should use the or logical operator instead of and. 
  if (this.x + this.size < 0 || this.x > width) {

  /////////////////////   END NEW   /////////////////////

  /////////////////////   END NEW   /////////////////////

  /////////////////////   END NEW  /////////////////////

    return true;
  }
  else {
    return false;
  }
}

// display()
//
// Draw the ball as a rectangle on the screen
Ball.prototype.display = function () {

  /////////////////////   NEW   /////////////////////

  /////////////////////   NEW   /////////////////////

  // Syntax error, added the missing comma between the two parameters.
  // Behavioural error, added the missing size parameters for the ball.
  rect(this.x,this.y,this.size,this.size);

  /////////////////////   END NEW   /////////////////////

  /////////////////////   END NEW   /////////////////////
}

// handleCollision(paddle)
//
// Check if this ball overlaps the paddle passed as an argument
// and if so reverse x velocity to bounce

/////////////////////   NEW   /////////////////////

/////////////////////   NEW   /////////////////////

// Syntax error, removed the extra opening parenthesis.
// Syntax error, corrected the misspelled word prototype.
Ball.prototype.handleCollision = function(paddle) {

/////////////////////   END NEW  /////////////////////

/////////////////////   END NEW  /////////////////////

  // Check if the ball overlaps the paddle on x axis
  if (this.x + this.size > paddle.x && this.x < paddle.x + paddle.w) {
    // Check if the ball overlaps the paddle on y axis
    if (this.y + this.size > paddle.y && this.y < paddle.y + paddle.h) {
      // If so, move ball back to previous position (by subtracting current velocity)
      this.x -= this.vx;
      this.y -= this.vy;

      /////////////////////   NEW   /////////////////////

      // Reverse x velocity to bounce
      // Behavioural error, added the missing minus sign in front of the this.vx,
      // if we want to reverse the ball to it's opposite direction, we need to
      // have the minus sign in front.
      this.vx = - this.vx;

      /////////////////////   END NEW   /////////////////////
    }
  }
}

 /////////////////////   NEW   /////////////////////

// reset()
//
// Set position back to the middle of the screen
// Syntax error, corrected the misspelled method name reset.
Ball.prototype.reset = function () {

/////////////////////   END NEW   /////////////////////

  this.x = width/2;
  this.y = height/2;
}

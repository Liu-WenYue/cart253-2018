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
Ball.prototype.update = function () {
  // Update position with velocity
  this.x += this.vx;
  this.y += this.vy;

  /////////////////////   NEW   /////////////////////

  // Constrain y position to be on screen
  this.y = constrain(this.y,this.size/2,height-this.size/2);

  // Check for touching upper or lower edge and reverse velocity if so
  if (this.y - this.size/2 === 0 || this.y + this.size/2 === height) {
    this.vy = -this.vy;
  }

  /////////////////////   END NEW /////////////////////

}

// isOffScreen()
//
// Checks if the ball has moved off the screen and, if so, returns true.
// Otherwise it returns false.
Ball.prototype.isOffScreen = function () {

  ///////////////////////   NEW   ////////////////////////

  // Check for going off screen and reset if so

  // If the ball goes off screen at the left hand side,
  // score for right paddle increase by one and the ball resets.
  if (this.x + this.size/2 < 0) {
    rightPaddleScore ++;
    return true;
  }

  // If the ball goes off screen at the right hand side,
  // score for left paddle increase by one and the ball resets.
  if (this.x - this.size/2 > width) {
    leftPaddleScore ++;
    return true;
  }

  // If the ball does not go off the screen, the game continues.
  else {
    return false;
  }
}

  ///////////////////////   END NEW   ///////////////////////

// display()
//
// Draw the ball as a rectangle on the screen
Ball.prototype.display = function () {
  /////////////////////   NEW   /////////////////////

  // Display the ball image at its x and y positions and in its size.
  image(ballImage,this.x,this.y,this.size,this.size);

  /////////////////////   END NEW  /////////////////////
}

// handleCollision(paddle)
//
// Check if this ball overlaps the paddle passed as an argument
// and if so reverse x velocity to bounce
Ball.prototype.handleCollision = function(paddle) {
  // Check if the ball overlaps the paddle on x axis
  if (this.x + this.size > paddle.x && this.x < paddle.x + paddle.w) {
    // Check if the ball overlaps the paddle on y axis
    if (this.y + this.size > paddle.y && this.y < paddle.y + paddle.h) {
      // If so, move ball back to previous position (by subtracting current velocity)
      this.x -= this.vx;
      this.y -= this.vy;
      // Reverse x velocity to bounce
      this.vx = -this.vx;
    }
  }
}

// reset()
//
// Set position back to the middle of the screen
Ball.prototype.reset = function () {
  this.x = width/2;
  this.y = height/2;

  /////////////////////   NEW   /////////////////////

  // Launch the ball to the right side of the screen and
  // have a random y velocity that changes the angle of the ball moves.
  this.vx = -this.vx;
  this.vy = random(-this.speed,this.speed);

  /////////////////////   END NEW /////////////////////

}

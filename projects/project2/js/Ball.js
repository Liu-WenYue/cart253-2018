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

  /////////////////////   NEW   /////////////////////

  // These two variables contains the original values of the paddle's velocity.
  this.startVX = vx;
  this.startVY = vy;

  /////////////////////   END NEW   /////////////////////
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

    /////////////////////   NEW   /////////////////////

    // Play the collision sound effect by rewinding and then playing.
    // Play the collision sound effect when it collides with the top
    // and bottom of the wall.
    collisionAudio.currentTime = 0;
    collisionAudio.play();

    /////////////////////   END NEW   /////////////////////

  }

  /////////////////////   END NEW   /////////////////////
}

/////////////////////   NEW   /////////////////////

// isOffScreen()
//
// Checks if the ball has moved off the screen and, if so, returns true.
// Otherwise it returns false.
Ball.prototype.isOffScreen = function () {
  // Check for going off screen and reset if so

  // If the ball goes off screen at the left hand side,
  // score for right paddle increase by one and the ball resets.
  if (this.x + this.size/2 < 0) {
    rightPaddleScore ++;

    /////////////////////   NEW   /////////////////////

    // Check if the right paddle gains score,
    // if yes, have the mushroom pops up at the right side of the screen.
    mushroom.popUp();

    /////////////////////   END NEW  /////////////////////


    /////////////////////   NEW   /////////////////////

    // For loop that changes the swords' directions to the left paddle
    // if the left paddle score is 6.
    for(var i = 0; i < swords.length; i++) {
      swords[i].direction();
    }

    /////////////////////   END NEW  /////////////////////

    // Increases the right paddle's size if the ball goes
    // off screen at the left hand side of the screen.
    rightPaddle.increaseSize();

    // Tells us the updated width and height of the right paddle.
    console.log("right Paddle w: " + rightPaddle.w,"; right Paddle h: " + rightPaddle.h);

    return true;
  }

  // If the ball goes off screen at the right hand side,
  // score for left paddle increase by one and the ball resets.
  else if (this.x - this.size/2 > width) {
    leftPaddleScore ++;

    /////////////////////   NEW   /////////////////////

    // Check if the left paddle gains score,
    // if yes, have the mushroom pops up at the left side of the screen.
    mushroom.popUp();

    /////////////////////   END NEW  /////////////////////


    /////////////////////   NEW   /////////////////////

    // For loop that changes the swords' directions to the left paddle
    // if the left paddle score is 6.
    for(var i = 0; i < swords.length; i++) {
      swords[i].direction();
    }

    /////////////////////   END NEW  /////////////////////

    // Increases the left paddle's size if the ball goes
    // off screen at the right hand side of the screen.
    leftPaddle.increaseSize();

    // Tells us the updated width and height of the right paddle.
    console.log("left Paddle w: " + leftPaddle.w,"; left Paddle h: " + leftPaddle.h);

    return true;
  }

  // If the ball does not go off the screen, the game continues.
  else {
    return false;
  }
}

/////////////////////   END NEW   /////////////////////

// display()
//
// Draw the ball as a rectangle on the screen
Ball.prototype.display = function () {
  /////////////////////   NEW   /////////////////////

  // Display the ball image at its x and y positions and in its size.
  image(ballImage,this.x,this.y,this.size,this.size);

  /////////////////////   END NEW  /////////////////////
}

/////////////////////   NEW   /////////////////////

// handleCollision(paddle)
//
// Check if this ball overlaps the paddle passed as an argument
// and if so reverse x velocity to bounce
Ball.prototype.handleCollision = function(paddle) {
  // Check if the ball overlaps the paddle on x axis
  // Changed the width and height of ball and paddle based on their image mode.
  if (this.x - this.size/2 < paddle.x + paddle.w/2 && this.x + this.size/2 > paddle.x - paddle.w/2) {
    // Check if the ball overlaps the paddle on y axis
    if (this.y - this.size/2 < paddle.y + paddle.h/2 && this.y + this.size/2 > paddle.y - paddle.h/2) {

    /////////////////////   END NEW  /////////////////////

      // If so, move ball back to previous position (by subtracting current velocity)
      this.x -= this.vx;
      this.y -= this.vy;
      // Reverse x velocity to bounce
      this.vx = -this.vx;

      /////////////////////   NEW   /////////////////////

      // Play the collision sound effect by rewinding and then playing.
      // Play the collision sound effect when it collides with the paddles.
      collisionAudio.currentTime = 0;
      collisionAudio.play();

      /////////////////////   END NEW   /////////////////////

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


/////////////////////   NEW   /////////////////////
/////////////////////   NEW   /////////////////////
// increaseSpeed()
//
// Increases the speed of the ball.
Ball.prototype.increaseSpeed = function () {
  this.vx = this.speed;
  this.vy = this.speed;
  this.speed += 3;
}
/////////////////////   END NEW  /////////////////////
/////////////////////   END NEW  /////////////////////


/////////////////////   NEW   /////////////////////

// restart()
//
// When the game is restart, the ball will go to it's initial velocities.
Ball.prototype.restart = function () {
  this.vx = this.startVX;
  this.vy = this.startVY;
}

/////////////////////   END NEW  /////////////////////

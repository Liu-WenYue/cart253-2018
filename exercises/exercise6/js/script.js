// Broken Basic OO Pong
// by Pippin Barr
//
// A broken primitive implementation of Pong with no scoring system
// just the ability to play the game with the keyboard.
//
// Arrow keys control the right hand paddle, W and S control
// the left hand paddle.
//
// Written with JavaScript OOP.

// Variable to contain the objects representing our ball and paddles

/////////////////////   NEW   /////////////////////

// Syntax error, corrected the misspelled variable name ball.
var ball;

/////////////////////   END NEW  /////////////////////

var leftPaddle;
var rightPaddle;

// setup()
//
// Creates the ball and paddles
function setup() {

  /////////////////////   NEW   /////////////////////

  // Syntax error, corrected the misspelled word createCanvas.
  createCanvas(640,480);

  /////////////////////   END NEW  /////////////////////

  noStroke();

  /////////////////////   NEW   /////////////////////

  // Create a ball
  // Behavioural error, decreased the speed and velocities of the ball to make the game more playable.
  ball = new Ball(width/2,height/2,5,5,10,5);

  /////////////////////   END NEW  /////////////////////

  // Create the right paddle with UP and DOWN as controls
  rightPaddle = new Paddle(width-10,height/2,10,600,10,UP_ARROW,DOWN_ARROW);
  // Create the left paddle with W and S as controls
  // Keycodes 83 and 87 are W and S respectively

  /////////////////////   NEW   /////////////////////

  // Syntax error, added the missing closing parenthesis.
  leftPaddle = new Paddle(0,height/2,10,60,10,83,87);

  /////////////////////   END NEW  /////////////////////


/////////////////////   NEW   /////////////////////

// Syntax error, added the missing closing curly bracket for setUp function.
}

/////////////////////   END NEW  /////////////////////


// draw()
//
// Handles input, updates all the elements, checks for collisions
// and displays everything.
function draw() {
  background(0);

  leftPaddle.handleInput();
  rightPaddle.handleInput();

  /////////////////////   NEW   /////////////////////

  // Syntax error, added the missing parenthesis.
  ball.update();

  /////////////////////   END NEW  /////////////////////

  leftPaddle.update();
  rightPaddle.update();

  /////////////////////   NEW   /////////////////////

  /////////////////////   NEW   /////////////////////

  // Syntax error, added the missing opening curly bracket for the if-statement.
  // Syntax error, corrected the misspelled function name ball.isOffScreen.
  if (ball.isOffScreen()) {

  /////////////////////   END NEW  /////////////////////

  /////////////////////   END NEW  /////////////////////


    /////////////////////   NEW   /////////////////////

    // Behavioural error, corrected the way of calling for object's method.
    ball.reset();

    /////////////////////   END NEW  /////////////////////
  }

  ball.handleCollision(leftPaddle);
  ball.handleCollision(rightPaddle);

  ball.display();
  leftPaddle.display();

  /////////////////////   NEW   /////////////////////

  // Syntax error, added the missing closing parenthesis.
  rightPaddle.display();

  /////////////////////   END NEW  /////////////////////
}

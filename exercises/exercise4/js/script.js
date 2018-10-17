/////////////////////   NEW   /////////////////////

// Pong
// by Liu WenYue, 15th October.2018
//
// A Pong game that illustrates the irresponsible chicken parents
// pushing their child away.

/////////////////////   END NEW   /////////////////////

// BALL

// Basic definition of a ball object with its key properties of
// position, size, velocity, and speed
var ball = {
  x: 0,
  y: 0,

  /////////////////////   NEW   /////////////////////

  size: 65,

  /////////////////////   END NEW   /////////////////////

  vx: 0,
  vy: 0,

  /////////////////////   NEW   /////////////////////

  speed: 6

  /////////////////////   END NEW   /////////////////////
}

// PADDLES

// How far in from the walls the paddles should be drawn on x
var paddleInset = 50;

// LEFT PADDLE

// Basic definition of a left paddle object with its key properties of
// position, size, velocity, and speed
var leftPaddle = {
  x: 0,
  y: 0,

  /////////////////////   NEW   /////////////////////

  w: 35,
  h: 180,

  /////////////////////   END NEW   /////////////////////

  vx: 0,
  vy: 0,
  speed: 5,
  upKeyCode: 87, // The key code for W
  downKeyCode: 83 // The key code for S
}

// RIGHT PADDLE

// Basic definition of a left paddle object with its key properties of
// position, size, velocity, and speed
var rightPaddle = {
  x: 0,
  y: 0,

  /////////////////////   NEW   /////////////////////

  w: 35,
  h: 180,

  /////////////////////   END NEW   /////////////////////

  vx: 0,
  vy: 0,
  speed: 5,
  upKeyCode: 38, // The key code for the UP ARROW
  downKeyCode: 40 // The key code for the DOWN ARROW
}

/////////////////////   NEW   /////////////////////

// Variables for the scores achieved by each paddles.
var leftPaddleScore = 0;
var rightPaddleScore = 0;

/////////////////////   END NEW   /////////////////////


/////////////////////   NEW   /////////////////////

// The varibles that store the images of background, ball,
// left and right paddles.
var backgroundImage;
var ballImage;
var leftPaddleImage;
var rightPaddleImage;

/////////////////////   END NEW   /////////////////////

/////////////////////   NEW   /////////////////////

// A variable to hold the chicken roar sound we will play on bouncing.
var chickenRoarAudio;

// preload()
//
// Loads the chicken roar audio for the sound of bouncing

/////////////////////   NEW   /////////////////////

// Loads the images for the game.

/////////////////////   END NEW   /////////////////////
function preload() {
  chickenRoarAudio = new Audio("assets/sounds/chickenRoar.mp3");

/////////////////////   END NEW   /////////////////////

/////////////////////   NEW   /////////////////////

  backgroundImage = loadImage("assets/images/background.png");
  ballImage = loadImage("assets/images/ball.png");
  leftPaddleImage = loadImage("assets/images/leftPaddle.png");
  rightPaddleImage = loadImage("assets/images/rightPaddle.png");

/////////////////////   END NEW   /////////////////////
}

// setup()
//
// Creates the canvas, sets up the drawing modes,
// Sets initial values for paddle and ball positions
// and velocities.
function setup() {
  // Create canvas and set drawing modes

  /////////////////////   NEW   /////////////////////

  // Enlarged the canvas size.
  createCanvas(880,680);

  /////////////////////   END NEW   /////////////////////

  noStroke();

  setupPaddles();
  setupBall();
}

// setupPaddles()
//
// Sets the positions of the two paddles
function setupPaddles() {
  // Initialise the left paddle
  leftPaddle.x = paddleInset;
  leftPaddle.y = height/2;

  // Initialise the right paddle
  rightPaddle.x = width - paddleInset;
  rightPaddle.y = height/2;
}

// setupBall()
//
// Sets the position and velocity of the ball
function setupBall() {
  ball.x = width/2;
  ball.y = height/2;
  ball.vx = ball.speed;
  ball.vy = ball.speed;
}

// draw()
//
// Calls the appropriate functions to run the game
function draw() {
  /////////////////////   NEW   /////////////////////

  push();
  imageMode(CORNERS);
  // Display the background image.
  image(backgroundImage,0,0,width,height);
  pop();

  /////////////////////   END NEW   /////////////////////

  // Handle input
  // Notice how we're using the SAME FUNCTION to handle the input
  // for the two paddles!
  handleInput(leftPaddle);
  handleInput(rightPaddle);

  // Update positions of all objects
  // Notice how we're using the SAME FUNCTION to handle the input
  // for all three objects!
  updatePosition(leftPaddle);
  updatePosition(rightPaddle);
  updatePosition(ball);

  // Handle collisions
  handleBallWallCollision();
  handleBallPaddleCollision(leftPaddle);
  handleBallPaddleCollision(rightPaddle);

  // Handle the ball going off screen
  handleBallOffScreen();

  /////////////////////   NEW   /////////////////////

  push();
  imageMode(CENTER);
  // Display the paddles and ball
  displayLeftPaddle();
  displayRightPaddle();

  displayBall();
  pop();

  /////////////////////   END NEW   /////////////////////
}


// handleInput(paddle)
//
// Updates the paddle's velocity based on whether one of its movement
// keys are pressed or not.
// Takes one parameter: the paddle to handle.
function handleInput(paddle) {

  // Set the velocity based on whether one or neither of the keys is pressed

  // NOTE how we can change properties in the object, like .vy and they will
  // actually CHANGE THE OBJECT PASSED IN, this allows us to change the velocity
  // of WHICHEVER paddle is passed as a parameter by changing it's .vy.

  // UNLIKE most variables passed into functions, which just pass their VALUE,
  // when we pass JAVASCRIPT OBJECTS into functions it's the object itself that
  // gets passed, so we can change its properties etc.

  // Check whether the upKeyCode is being pressed
  // NOTE how this relies on the paddle passed as a parameter having the
  // property .upKey
  if (keyIsDown(paddle.upKeyCode)) {
    // Move up
    paddle.vy = -paddle.speed;
  }
  // Otherwise if the .downKeyCode is being pressed
  else if (keyIsDown(paddle.downKeyCode)) {
    // Move down
    paddle.vy = paddle.speed;
  }
  else {
    // Otherwise stop moving
    paddle.vy = 0;
  }
}

// updatePosition(object)
//
// Sets the position of the object passed in based on its velocity
// Takes one parameter: the object to update, which will be a paddle or a ball
//
// NOTE how this relies on the object passed in have .x, .y, .vx, and .vy
// properties, which is true of both the two paddles and the ball
function updatePosition(object) {
  object.x += object.vx;
  object.y += object.vy;
}

// handleBallWallCollision()
//
// Checks if the ball has overlapped the upper or lower 'wall' (edge of the screen)
// and is so reverses its vy
function handleBallWallCollision() {

  // Calculate edges of ball for clearer if statement below
  var ballTop = ball.y - ball.size/2;
  var ballBottom = ball.y + ball.size/2;
  var ballLeft = ball.x - ball.size/2;
  var ballRight = ball.x + ball.size/2;

  // Check for ball colliding with top and bottom
  if (ballTop < 0 || ballBottom > height) {
    // If it touched the top or bottom, reverse its vy
    ball.vy = -ball.vy;

    /////////////////////   NEW   /////////////////////

    // Play the chicken roar sound effect by rewinding and then playing
    chickenRoarAudio.currentTime = 0;
    chickenRoarAudio.play();

    /////////////////////   END NEW   /////////////////////
  }
}

// handleBallPaddleCollision(paddle)
//
// Checks if the ball overlaps the specified paddle and if so
// reverses the ball's vx so it bounces
function handleBallPaddleCollision(paddle) {

  // Calculate edges of ball for clearer if statements below
  var ballTop = ball.y - ball.size/2;
  var ballBottom = ball.y + ball.size/2;
  var ballLeft = ball.x - ball.size/2;
  var ballRight = ball.x + ball.size/2;

  // Calculate edges of paddle for clearer if statements below
  var paddleTop = paddle.y - paddle.h/2;
  var paddleBottom = paddle.y + paddle.h/2;
  var paddleLeft = paddle.x - paddle.w/2;
  var paddleRight = paddle.x + paddle.w/2;

  // First check it is in the vertical range of the paddle
  if (ballBottom > paddleTop && ballTop < paddleBottom) {
    // Then check if it is touching the paddle horizontally
    if (ballLeft < paddleRight && ballRight > paddleLeft) {
      // Then the ball is touching the paddle so reverse its vx
      ball.vx = -ball.vx;

      /////////////////////   NEW   /////////////////////

      // Play the chicken roar sound effect by rewinding and then playing
      chickenRoarAudio.currentTime = 0;
      chickenRoarAudio.play();

      /////////////////////   END NEW   /////////////////////
    }
  }
}

///////////////////////   NEW   ///////////////////////

// handleBallOffScreen()
//
// Checks if the ball has gone off screen to the left or right
// and moves it back to the centre if so
function handleBallOffScreen() {
  reset();
}

// reset()
//
// Reset the location of the ball.
function reset() {
  // Calculate edges of ball for clearer if statement below
  var ballLeft = ball.x - ball.size/2;
  var ballRight = ball.x + ball.size/2;

  // Check if the ball is offscreen, when it is offscreen, reset
  // it to the center of the screen and add the score to
  // the correct paddle.
  if (ballRight < 0) {
    // If it went off at the left hand side, reset it to the centre
    ball.x = width/2;
    ball.y = height/2;

    /////////////////////   NEW   /////////////////////

    // Launch the ball to the right side of the screen and
    // have a random y velocity that changes the angle of the ball moves.
    ball.vx = -ball.vx;
    ball.vy = random(-ball.speed,ball.speed);

    /////////////////////   END NEW   /////////////////////

    rightPaddleScore++;

    leftPaddleScore = leftPaddleScore;
    // Check and update the size of the right paddle,
    // the size of the right paddle increases as the score increase.
    changeSize(rightPaddle);
  }

  if (ballLeft > width) {
    // If it went off at the right side, reset it to the centre
    ball.x = width/2;
    ball.y = height/2;

    /////////////////////   NEW   /////////////////////

    // Launch the ball to the right side of the screen and
    // have a random y velocity that changes the angle of the ball moves.
    ball.vx = -ball.vx;
    ball.vy = random(-ball.speed,ball.speed);

    /////////////////////   END NEW   /////////////////////

    // Increase the score for the left paddle if the ball went
    // offscreen at the right hand side of the screen.
    leftPaddleScore++;

    rightPaddleScore = rightPaddleScore;
    // Check and update the size of the left paddle,
    // the size of the left paddle increases as the score increase.
    changeSize(leftPaddle);
  }
}

///////////////////////   END NEW   ///////////////////////


/////////////////////   NEW   /////////////////////

// changeSize(paddle)
//
// Increase the paddle sizes as the paddle's score increase.
function changeSize(paddle) {
  if (leftPaddleScore ++) {
    paddle.w += 0.5;
    paddle.h += 3;
  }

  if (rightPaddleScore ++) {
    paddle.w += 0.5;
    paddle.h += 3;
  }
}

/////////////////////   END NEW   /////////////////////

  /////////////////////   NEW   /////////////////////

// displayBall()
//
// Draws ball on screen based on its properties
function displayBall() {
  image(ballImage,ball.x,ball.y,ball.size,ball.size);
}

// displayLeftPaddle()
//
// Draws the left paddle on screen based on its properties
function displayLeftPaddle() {
  image(leftPaddleImage,leftPaddle.x,leftPaddle.y,leftPaddle.w,leftPaddle.h);
}

// displayRightPaddle()
//
// Draws the right paddle on screen based on its properties
function displayRightPaddle() {
  image(rightPaddleImage,rightPaddle.x,rightPaddle.y,rightPaddle.w,rightPaddle.h);
}

  /////////////////////   END NEW   /////////////////////

/////////////////////   NEW   /////////////////////

// To have all the sound files to work in Safari browser.
function mousePressed() {
  chickenRoarAudio.play();
}

/////////////////////   END NEW   /////////////////////

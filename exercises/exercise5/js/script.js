/////////////////////   NEW   /////////////////////

// Basic OO Pong
// by Liu WenYue, 22nd October.2018
//
// A Pong game that illustrates the irresponsible chicken parents
// pushing their child away.

/////////////////////   END NEW   /////////////////////

//
// Arrow keys control the right hand paddle, W and S control
// the left hand paddle.
//
// Written with JavaScript OOP.

// Variable to contain the objects representing our ball and paddles
var ball;
var leftPaddle;
var rightPaddle;

/////////////////////   NEW   /////////////////////

// The varibles that store the images of background, ball,
// left and right paddles.
var backgroundImage;
var ballImage;
var leftPaddleImage;
var rightPaddleImage;

/////////////////////   END NEW  /////////////////////


/////////////////////   NEW   /////////////////////

// preload()
//
// Preloads all the images and audios needed in the game.
function preload() {
  backgroundImage = loadImage("assets/images/background.png");
  ballImage = loadImage("assets/images/ball.png");
  leftPaddleImage = loadImage("assets/images/leftPaddle.png");
  rightPaddleImage = loadImage("assets/images/rightPaddle.png");
}

/////////////////////   END NEW  /////////////////////

// setup()
//
// Creates the ball and paddles
function setup() {

  /////////////////////   NEW   /////////////////////

  // Enlarged the canvas size.
  createCanvas(880,680);

  /////////////////////   END NEW   /////////////////////

  // Create a ball
  ball = new Ball(width/2,height/2,5,5,10,5);
  // Create the right paddle with UP and DOWN as controls
  rightPaddle = new Paddle(width-10,height/2,10,60,10,DOWN_ARROW,UP_ARROW);
  // Create the left paddle with W and S as controls
  // Keycodes 83 and 87 are W and S respectively
  leftPaddle = new Paddle(0,height/2,10,60,10,83,87);
}

// draw()
//
// Handles input, updates all the elements, checks for collisions
// and displays everything.
function draw() {
  background(0);

  leftPaddle.handleInput();
  rightPaddle.handleInput();

  ball.update();
  leftPaddle.update();
  rightPaddle.update();

  if (ball.isOffScreen()) {
    ball.reset();
  }

  ball.handleCollision(leftPaddle);
  ball.handleCollision(rightPaddle);

  ball.display();
  leftPaddle.display();
  rightPaddle.display();
}

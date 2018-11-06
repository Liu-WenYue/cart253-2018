/////////////////////   NEW   /////////////////////

// Basic OO Pong
// by Liu WenYue
//
// A Pong game with a scoring system, player who first gains
// 7 points won the game.
//
// Arrow keys control the right hand paddle, W and S control
// the left hand paddle.
//
// Written with JavaScript OOP.
//
// Background music is from the anime, Fairy Tail, it's called
// "Happy Theme".

/////////////////////   END NEW   /////////////////////

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

// Variables that store the score for the paddles.
var rightPaddleScore = 0;
var leftPaddleScore = 0;

/////////////////////   END NEW   /////////////////////


/////////////////////   NEW   /////////////////////

// Tracking the current state of the program (title screen to begin)
var state = "TITLE";

/////////////////////   END NEW   /////////////////////


/////////////////////   NEW   /////////////////////

// Variables that store background music.
var happyThemeAudio;

/////////////////////   END NEW   /////////////////////


/////////////////////   NEW   /////////////////////

// preload()
//
// Preloads all the images and audios needed in the game.
function preload() {
  backgroundImage = loadImage("assets/images/background.png");
  ballImage = loadImage("assets/images/ball.png");
  leftPaddleImage = loadImage("assets/images/leftPaddle.png");
  rightPaddleImage = loadImage("assets/images/rightPaddle.png");

  /////////////////////   NEW   /////////////////////

  // Preload the background music.
  happyThemeAudio = new Audio("assets/sounds/happyTheme.mp3");

  /////////////////////   END NEW  /////////////////////
}

/////////////////////   END NEW  /////////////////////

// setup()
//
// Creates the ball and paddles
function setup() {

  /////////////////////   NEW   /////////////////////

  // Enlarged the canvas.
  createCanvas(880,680);

  /////////////////////   END NEW   /////////////////////


  /////////////////////   NEW   /////////////////////

  // This image mode allows images displayed based on their center points.
  imageMode(CENTER);

  /////////////////////   END NEW   /////////////////////


  /////////////////////   NEW   /////////////////////

  // Create a ball
  ball = new Ball(width/2,height/2,5,5,70,5);

  /////////////////////   END NEW  /////////////////////


  /////////////////////   NEW   /////////////////////

  // Create the right paddle with UP and DOWN as controls
  rightPaddle = new Paddle(width-30,height/2,30,180,10,DOWN_ARROW,UP_ARROW,rightPaddleImage);
  // Create the left paddle with W and S as controls
  // Keycodes 83 and 87 are W and S respectively
  leftPaddle = new Paddle(30,height/2,30,180,10,83,87,leftPaddleImage);

  /////////////////////   END NEW  /////////////////////
}

// draw()
//
// Handles input, updates all the elements, checks for collisions
// and displays everything.
function draw() {
  /////////////////////   NEW   /////////////////////

  push(); // saves the current setting.
  imageMode(CORNERS);
  // Display the background image.
  image(backgroundImage,0,0,width,height);
  pop(); // Restore the setting.
  // The image mode goes back to center.

  /////////////////////   END NEW   /////////////////////


  /////////////////////   NEW   /////////////////////

  // Switch statement allows the game to have different states.
  // The first state will be TITLE, where the game title and instruction is
  // displayed. After the player pressed the enter key, it goes to the
  // next state;
  // The second state will be GAME, where the game is displayed. When either
  // one of the player gains 7 points, the game ends and it goes to the
  // next state;
  // The third state will be WINNER, where the game winner is displayed. The
  // player have the option to restart the game again (go back to GAME state).
  switch (state) {
    case "TITLE":
    displayTitle();
    break;

    case "GAME":
    displayGame();

    /////////////////////   NEW   /////////////////////

    // Happy theme audio starts play after the player pressed ENTER.
    happyThemeAudio.play();

    /////////////////////   END NEW   /////////////////////

    break;

    case "WINNER":
    displayWinner();

    /////////////////////   NEW   /////////////////////

    // Happy theme audio starts play after the player pressed ENTER.
    happyThemeAudio.pause();

    /////////////////////   END NEW   /////////////////////

    break
  }

  /////////////////////   END NEW   /////////////////////
}

/////////////////////   NEW   /////////////////////

// displayTitle()
//
// Displays the game title and controls on the screen.
function displayTitle() {
  push();//saves the current style settings.
  textAlign(CENTER,CENTER);
  textSize(38);
  fill(255);
  stroke(255);
  // Display the game name.
  text("PONG GAME",width/2,4*height/9);
  textSize(24);
  // Display the instructions for the controls.
  text("Press Enter to Start\nUse w & s AND up & down arrows for Control",width/2,3*height/5);
  pop();//restores these settings.

  // Check whether the ENTER was pressed to start the game...
  if (keyIsPressed && keyCode === 13) {
    // ... if it was, change the state to "GAME" so the switch statement in draw()
    // will display the game instead
    state = "GAME";
  }
}

/////////////////////   END NEW  /////////////////////


/////////////////////   NEW   /////////////////////

// displayGame()
//
// This function includes handleInput, moves the elements, updates the elements,
// check if the ball is off screen, check for the collosions, display the elements.
function displayGame() {
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

  // If either of the paddle gains 7 points, the game ends.
  // so the state variable will go to WINNER and make the switch statement
  // call displayWinner().
  if (rightPaddleScore ===7 || leftPaddleScore ===7) {
    state = "WINNER";
  }
}

/////////////////////   END NEW  /////////////////////


/////////////////////   NEW   /////////////////////

// displayWinner()
//
// Displays the winner texts and if the player wish to restart the game,
// set the variable state back to GAME.
function displayWinner() {
  // Sets the color, alignment and size of the text.
  textAlign(CENTER,CENTER);
  textSize(38);
  fill(255);
  stroke(255);

  // Conditions of the right paddle win the game.
  if(rightPaddleScore === 7) {
    // When the right paddle win the game, display the following text.
    text("Right.Prince got the Princess!",width/2,4*height/9);
    textSize(24);
    text("Press Space to Restart the Game",width/2,3*height/5);
  }

  // Conditions of the left paddle win the game.
  if(leftPaddleScore === 7) {
    // When the left paddle win the game, display the following text.
    text("Left.Prince got the Princess!",width/2,4*height/9);
    textSize(24);
    text("Press Space to Restart the Game",width/2,3*height/5);
  }

  // Check whether the spacebar was pressed to restart the game...
  if (keyIsPressed && keyCode === 32) {
    // ... if it was, change the state to "GAME" so the switch statement in draw()
    // will display the game again.

    // Reset the scores back to 0.
    leftPaddleScore = 0;
    rightPaddleScore = 0;

    // ... if it was, change the state to "GAME" so the switch statement in draw()
    // will display the game again.
    state = "GAME";
  }
}

/////////////////////   END NEW  /////////////////////

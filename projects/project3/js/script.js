/****************************************************************************

Seek
by Liu WenYue

Professor: Pippin Barr Ph.D


This game is about a character who is looking for his partner throughout his
lifetime.

The player have the ability to move in all four directions using arrow keys.

****************************************************************************/


// Tracking the current state of the program (title screen to begin).
var state = "TITLE";

var chakraPetchFont; // The variable that stores the Chakra petch font.

// Variables that contains the player images for different stages.
var player1Image;
var player2Image;
var player3Image;
var player4Image;
var player5Image;

// Variables that contains the players.
var player1;
var player2;
var player3;
var player4;
var player5;

// Variables that contains the player images for different stages.
var target1Image;
var target2Image;
var target3Image;
var target4Image;
var target5Image;

// Variables that contains the players.
var taregt1;
var taregt2;
var taregt3;
var taregt4;
var taregt5;

// Variables that contain the background images.
var bg1Image;
var bg2Image;
var bg3Image;
var bg4Image;
var bg5Image;

// Variables that contain the game map.
var map1Image;
var map2Image;
var map3Image;
var map4Image;
var map5Image;


// preload()
//
// Preloads all the images and audios that will be used in this game.
function preload() {
  chakraPetchFont = loadFont("assets/font/chakrapetch_bold.ttf");

  player1Image = loadImage("assets/images/player1.png");
  player2Image = loadImage("assets/images/player2.png");
  player3Image = loadImage("assets/images/player3.png");
  player4Image = loadImage("assets/images/player4.png");
  player5Image = loadImage("assets/images/player5.png");

  target1Image = loadImage("assets/images/target1.png");
  target2Image = loadImage("assets/images/target2.png");
  target3Image = loadImage("assets/images/target3.png");
  target4Image = loadImage("assets/images/target4.png");
  target5Image = loadImage("assets/images/target5.png");

  bg1Image = loadImage("assets/images/bg1.png");
  bg2Image = loadImage("assets/images/bg2.png");
  bg3Image = loadImage("assets/images/bg3.png");
  bg4Image = loadImage("assets/images/bg4.png");
  bg5Image = loadImage("assets/images/bg5.png");

  map1Image = loadImage("assets/images/map1.png");
  map2Image = loadImage("assets/images/map2.png");
  map3Image = loadImage("assets/images/map3.png");
  map4Image = loadImage("assets/images/map4.png");
  map5Image = loadImage("assets/images/map5.png");
}


// setup()
//
// Set up the canvas and image mode, creates elements needed.
function setup() {
  // Sets the canvas size for the game.
  createCanvas(1200,720);
  // Sets the image mode to center.
  imageMode(CENTER);

  // Create the player1 at its starting position.
  player1 = new Player(330,330,60,RIGHT_ARROW,LEFT_ARROW,UP_ARROW,DOWN_ARROW,player1Image,map1Image);

  // Create the target1 at its starting position.
  target1 = new Target(870,330,60,255,target1Image);

  // Load the pixels in the map images.
  map1Image.loadPixels();
  map2Image.loadPixels();
  map3Image.loadPixels();
  map4Image.loadPixels();
  map5Image.loadPixels();
}


// draw()
//
// Description of draw()
function draw() {
  // Switch statement that allows the game to have different states.
  switch (state) {
    case "TITLE":
    displayTitle();
    break;

    case "STAGE1":
    displayStage1();
    break;

    case "STAGE2":
    displayStage2();
    break;

    case "STAGE3":
    displayStage3();
    break;

    case "STAGE4":
    displayStage4();
    break;

    case "STAGE5":
    displayStage5();
    break;

    case "WIN":
    displayWinner();
    break;

    case "GAMEOVER":
    displayGameOver();
    break;
  }
}


// displayTitle()
//
// Displays the starting page of the game, that includes game title,
// game instructions and start game instruction.
function displayTitle() {
  push();//saves the current style settings.
  noStroke(); // There will be no outline strokes on the elements.
  fill(255,255,255,220); // Have a transparent white fill color.
  rectMode(CENTER); // Set the rectMode to center.
  rect(width/2,height/2, width, height); // Draws the rectangle that covers the screen.
  pop();//restores these settings.

  textAlign(CENTER,CENTER);
  textSize(62);
  fill(70);
  stroke(70);
  textFont(chakraPetchFont);
  text("SEEK",width/2,4*height/9); // Display the game name.
  textSize(34);
  // Display the instructions for the controls and start game.
  text("Click anywhere to Start\nUse arrow keys for Control",width/2,3*height/5);

  // Check whether the mouse was pressed to start the game.
  if (mouseIsPressed) {
    // if mouse is pressed, change the state to "STAGE1" so the switch
    // statement in draw() will display the stage 1 instead.
    state = "STAGE1";
  }
}


// displayStage1()
//
// Displays the Stage1.
// This function includes the elements displaying, handle input and update,
// and it also checks when player found his partner for stage 1.
function displayStage1() {
  push(); // saves the current setting.
  imageMode(CORNERS);
  // Display the background image.
  image(bg1Image,0,0,width,height);
  pop(); // Restore the setting.
  // The image mode goes back to center.

  player1.display();
  target1.display();

  displayInstruction();
}


// displayInstruction()
//
// Displays the game instruction on screen.
function displayInstruction() {
  push();//saves the current style settings.
  textAlign(CENTER,CENTER);
  textSize(36);
  fill(255);
  textFont(chakraPetchFont);
  text("Reach to your partner before she disappears!",width/2,7*height/9);
  pop();//restores these settings.
}


// keyPressed()
//
// This function is to call the player's keyPressed function and car's
// keyPressed function.
function keyPressed() {
  player1.keyPressed();
}

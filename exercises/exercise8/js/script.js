/*****************

Final Project Prototype
Liu WenYue

This game is a Push the Box kind of game, where the player not pushing any
items but he has to reach at his partner before his partner disappears.
For every step the player moved, there will be health lost (reduce opacity)
for the partner. Player have to reach to his partner before the partner is
totally disappeared.

There will be 5 stages in this game. Each stage will be in different seasons
(winter, spring, summer, autumn and winter) and the characters will change
age for every stage. The first stage is a tutorial stage for the player to
understand how to play the game. For the second, third and fourth, there will
be obstacles on the way, for instance, “toys” for the second stage, “other
female characters” for the third stage and “diseases triggers” for the fourth
stage. If the player touched any of the obstacles, game overs and an option
for restart the stage will appear. There will also be items on the way to
stop the health lost of the partner for three moves, the items will be “candy”,
“ring” and “flowers”. For the final stage, there will not be any obstacles,
but the player and the partner will both loss health as the player moves.

Moreover, for all the stages, I will be adding more props to make the scene
more lively.

In this second prototype, I will doing the second stage of the game. The main
purpose of this second prototype is to make the additional items works in the
game,  refine the style of the assets used in the game.  The second stage of
the game will have the characters in their teenage time and the background is
in spring. The map for this stage is definitely harder than the first stage.
There will be “toys” on the way to prevent the player from reaching to his
partner, if the player moved onto the “toy”, gameover will be triggered; there
are also “candys”, if the player moved onto the “candy”, they can move three
moved without losing their partner’s health.

The player will be able to move with the arrow keys.

******************/

// Tracking the current state of the program (title screen to begin).
var state = "TITLE";

// The variable that stores the Chakra petch font.
var chakraPetchFont;

// The variable that stores the background image.
var backgroundImage;


// preload()
//
// Preloads all the fonts, images and audios that will be used in this game.
function preload() {
  chakraPetchFont = loadFont("assets/fonts/chakrapetch_bold.ttf");
  backgroundImage = loadImage("assets/images/bg.png");
}


// setup()
//
// Set up the canvas and image mode, creates elements needed.
function setup() {
  // Sets the canvas size for the game.
  createCanvas(1200,720);
  // Sets the image mode to center.
  imageMode(CENTER);
}


// draw()
//
// Display background, creates switch statement, Handles player input, updates all the elements, checks for collisions
// and displays elements.
function draw() {
  push(); // saves the current setting.
  imageMode(CORNERS);
  // Display the background image.
  image(backgroundImage,0,0,width,height);
  pop(); // Restore the setting.
  // The image mode goes back to center.

  // Switch statement that allows the game to have different states.
  // For this second prototype, there will be a starting page that includes
  // title of the game, game instructions and start game instruction will
  // be displayed. Once the player pressed the enter key, it goes to the
  // next state;
  // The second state will be GAME, where the game will be displayed. When
  // the player found his partner, the game ends and go to the NEXTSTAGE state.
  // If the partner disappeared or the player touched the toy car, the GAMEOVER
  // state will be displayed and there will be an option to restart the stage
  // again (go back to GAME state).
  // As there are no next stage for now, I add a state called WINNER that
  // displays screen when the player cleared the stage.
  switch (state) {
    case "TITLE":
    displayTitle();
    break;

    case "GAME":
    displayGame();
    break;

    case "WINNER":
    displayWinner();
    break;

    case "GAMEOVER":
    displayGameOver();
    break;

    // These state will show when the rest of the stages are ready.
    // case "NEXTSTAGE":
    // displayNextStage();
    // break;
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
    // if mouse is pressed, change the state to "GAME" so the switch
    // statement in draw() will display the game instead.
    state = "GAME";
  }
}


// keyPressed()
//
// This function is to call the player's keyPressed function.
function keyPressed() {
  player.keyPressed();
}

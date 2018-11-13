/****************************************************************************

Final Project Prototype
Liu WenYue

This game is a Push the Box kind of game, where the player not pushing any
items but he has to reach at his partner before his partner disappears.
For every step the player moved, there will be health lost (reduce opacity)
for the partner. Player have to reach to his partner before the partner is
totally disappeared.

There will be 5 stages in this game. Each stage will be in different seasons
(winter, spring, summer, autumn and winter) and the characters will change age
for every stage. The first stage is a tutorial stage for the player to
understand how to play the game. For the second, third and fourth, there will
be obstacles on the way, for instance, “toys” for the second stage, “other
female characters” for the third stage and “diseases triggers” for the fourth
stage. If the player touched any of the obstacles, game overs and an option
for restart the stage will appear. There will also be items on the way to stop
the health lost of the partner for three moves, the items will be “candy”,
“ring” and “flowers”.

For the final stage, there will not be any obstacles, but the player and the
partner will both loss health as the player moves.


In this first prototype, I will be doing the first stage of the game. The
main purpose of this first prototype is to get the art style, basic functions
and background music of the game ready. As this is the first stage of the game,
it’s more like a tutorial stage for the player to understand how to play the
game, the player just have to go straight to reach his partner and there will
not be any obstacles yet. During the game, there will be some text instructions,
and there will also be starting page and game over page.

The player will be able to move with the arrow keys.

****************************************************************************/


// Tracking the current state of the program (title screen to begin).
var state = "TITLE";

// The variable that stores the backgound image.
var backgroundImage;

// The variable that stores the Chakra petch font.
var chakraPetchFont;


// preload()
//
// Preloads all the images and audios that will be used in this game.
function preload() {
  backgroundImage = loadImage("assets/images/background.png");
  chakraPetchFont = loadFont("assets/font/chakrapetch_bold.ttf")
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
// Handles player input, updates all the elements, checks for collisions
// and displays elements.
function draw() {
  push(); // saves the current setting.
  imageMode(CORNERS);
  // Display the background image.
  image(backgroundImage,0,0,width,height);
  pop(); // Restore the setting.
  // The image mode goes back to center.

  // Switch statement that allows the game to have different states.
  // For the first state, the title, game instructions and start game
  // instruction will be displayed. Once the player pressed the enter key,
  // it goes to the next state;
  // The second state will be GAME, where the game is displayed. When the
  // player found his partner, the game ends and go to the NEXTSTAGE state.
  // If the partner disappeared, the GAMEOVER state is displayed and there
  // will an option to restart the stage again (go back to GAME state).
  switch (state) {
    case "TITLE":
    displayTitle();
    break;

    case "GAME":
    displayGame();
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
  text("Press Enter to Start\nUse arrow keys for Control",width/2,3*height/5);

  // Check whether the ENTER was pressed to start the game.
  if (keyIsPressed && keyCode === 13) {
    // if ENTER is pressed, change the state to "GAME" so the switch
    // statement in draw() will display the game instead.
    state = "GAME";
  }
}

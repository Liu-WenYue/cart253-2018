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


// preload()
//
// Description of preload
function preload() {

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

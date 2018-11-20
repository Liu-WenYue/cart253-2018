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

var playerImage; // The variable that stores the player image.
var player; // The variable that stores the player.

var targetImage; // The variable that stores the target image.
var target; // The variable that stores the target.

var candyImage; // The variable that stores the candy image.
var candys = []; // Creates an array for candys.

var carImage; // The variable that stores the car image.
var cars = []; // Creates an array for cars.

var backgroundMusic; // The variable that stores the background music.
var levelupAudio; // The variable that stores the levelup sound effect.
var gameoverAudio; // The variable that stores the gameover sound effect.


// preload()
//
// Preloads all the fonts, images and audios that will be used in this game.
function preload() {
  chakraPetchFont = loadFont("assets/fonts/chakrapetch_bold.ttf");
  backgroundImage = loadImage("assets/images/bg.png");
  playerImage = loadImage("assets/images/player.png");
  targetImage = loadImage("assets/images/target.png");
  candyImage = loadImage("assets/images/candy.png");
  carImage = loadImage("assets/images/car.png");
  backgroundMusic = new Audio("assets/sounds/backgroundmusic.m4a");
  levelupAudio = new Audio("assets/sounds/level_up.mp3");
  gameoverAudio = new Audio("assets/sounds/gameover.mp3");
}


// setup()
//
// Set up the canvas and image mode, creates elements needed.
function setup() {
  // Sets the canvas size for the game.
  createCanvas(1200,720);
  // Sets the image mode to center.
  imageMode(CENTER);

  // Create the player at its starting position.
  player = new Player(270,510,60,RIGHT_ARROW,LEFT_ARROW,UP_ARROW,DOWN_ARROW);

  // Create the target at its starting position.
  target = new Target(930,390,60,255);

  // Create the candys at their required starting positions.
  candys.push(new Candy(270,390,60,255));
  candys.push(new Candy(570,210,60,255));
  candys.push(new Candy(870,210,60,255));
  candys.push(new Candy(630,570,60,255));

  // Create the cars at their required starting positions.
  cars.push(new Car(450,150,60,255));
  cars.push(new Car(570,150,60,255));
  cars.push(new Car(510,210,60,255));
  cars.push(new Car(450,270,60,255));
  cars.push(new Car(570,270,60,255));
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
    backgroundMusic.play(); // Have the background music play when game starts.
    break;

    case "WINNER":
    displayWinner();
    backgroundMusic.pause(); // Pause the background music if they win.
    backgroundMusic.currentTime = 0; // Restart the music from the start.
    break;

    case "GAMEOVER":
    displayGameOver();
    backgroundMusic.pause(); // Pause the background music if they lose.
    backgroundMusic.currentTime = 0; // Restart the music from the start.
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


// displayGame()
//
// Displays the game.
// This function includes the elements displaying, handle input and update,
// and it also checks when player found his partner.
function displayGame() {
  player.displayAndUpdate();
  target.display();

  // Display candys, check handle collisions for the candy.
  for(var i = 0; i < candys.length; i++) {
    candys[i].display();
    candys[i].handleCollision();
  }

  // Display cars.
  for(var i = 0; i < cars.length; i++) {
    cars[i].display();
  }

  // If the target health is 0, the player loses the game and the state
  // of the game will become GAMEOVER and the switch statement will
  // call displayGameOver function.
  if (target.health < 1) {
    // gameover sound effect starts play when the player lose the game,
    // and it only plays once.
    gameoverAudio.play();
    state = "GAMEOVER";
  }

  // If player reached at the target (overlap with the target),
  // the state variable will go to WINNER and the switch statement will
  // call displayWinner function.
  if ((player.x + player.displacementX) + player.size/2 > target.x - target.size/2 && (player.x + player.displacementX) - player.size/2 < target.x + target.size/2) {
    if ((player.y + player.displacementY) - player.size/2 < target.y + player.size/2 && (player.y + player.displacementY) + player.size/2 > target.y - target.size/2) {
      // levelup sound effect starts play when the player win the game,
      // and it only plays once.
      levelupAudio.play();
      gameoverAudio.pause(); // To stop the sound effect for game over.
      state = "WINNER";
    }
  }
}


// displayGameOver()
//
// Displays the game over on screen, there will also be a restart instructions
// on the screen.
function displayGameOver() {
  push();//saves the current style settings.
  noStroke(); // There will be no outline strokes on the elements.
  fill(0,0,0,220); // Have a transparent white fill color.
  rectMode(CENTER); // Set the rectMode to center.
  rect(width/2,height/2, width, height); // Draws the rectangle that covers the screen.
  pop();//restores these settings.

  textAlign(CENTER,CENTER);
  textSize(62);
  fill(255);
  textFont(chakraPetchFont);
  text("You lost your partner!",width/2,4*height/9); // Display game over.
  textSize(34);
  // Display the instructions for restarting the game.
  text("Press Space to Restart the Stage",width/2,3*height/5);

  // Check whether the spacebar was pressed to restart the game.
  if (keyIsPressed && keyCode === 32) {
    // if it was, change the state to "GAME" so the switch statement in
    // draw() will display the game again.
    // Reset player, target and candys.
    player.reset();
    target.reset();

    for(var i = 0; i < candys.length; i++) {
      candys[i].reset();
    }

    state = "GAME";
  }
}


// displayWinner()
//
// Displays the winner page.
function displayWinner() {
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
  text("Stage Cleared",width/2,height/2);
}


// keyPressed()
//
// This function is to call the player's keyPressed function.
function keyPressed() {
  player.keyPressed();
}


// mousePressed()
//
// To have all the sound files to work in Safari browser.
function mousePressed() {
  backgroundMusic.play();
}

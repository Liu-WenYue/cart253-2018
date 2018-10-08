/***********************************************************

Game - Chaser
Liu WenYue   7th October 2018

A game of a vampire evolving from a bat to a human character
as it catches blood.

Physics-based movement, keyboard controls, health/stamina,
sprinting, random movement, screen wrap.

***********************************************************/

// Track whether the game is over.
var gameOver = false;

// Player position, velocity, speed, speed increase
var player = {
  x : 0,
  y : 0,
  vx : 0,
  vy : 0,
  speed : 2,
  maxSpeed : 2,
  speedIncrease : 0.5,
}

// The width and height of the player used to checking overlapping with the blood.
var playerWidth;
var playerHeight;

var playerHealth;
var playerMaxHealth = 255;

// Prey position, time, time increase
var blood = {
  x : 0,
  y : 0,
  tx : 0,
  ty : 10000,
  timeIncrease : 0.005
}

// The width and height of the blood used to checking overlapping with the player.
var bloodWidth;
var bloodHeight;

var bloodHealth;
var bloodMaxHealth = 255;

// Amount of health obtained per frame of "eating" the prey
var eatHealth = 15;
// Number of prey eaten during the game
var preyEaten = 0;

// The night background image.
var backgroundImage;

// The blood image.
var bloodImage;

// The three stages of the player's characters.
var playerImage;
var playerEvo1Image;
var playerEvo2Image;

// preload()
//
// Preload images of the background, blood, player characters and onion.
function preload() {
  backgroundImage = loadImage("assets/images/nightBackground.png");
  bloodImage = loadImage("assets/images/blood.png");
  playerImage = loadImage("assets/images/player.png");
  playerEvo1Image = loadImage("assets/images/playerEvo1.png");
  playerEvo2Image = loadImage("assets/images/playerEvo2.png");
}

// setup()
//
// Sets up the basic elements of the game
function setup() {
  createCanvas(640,640);
  imageMode(CENTER)

  noStroke();

  setupBlood();
  setupPlayer();
}

// setupBlood()
//
// Initialises prey's position, velocity, and health
function setupBlood() {
  blood.x = width/5;
  blood.y = height/2;
  bloodHealth = bloodMaxHealth;
}

// setupPlayer()
//
// Initialises player position and health
function setupPlayer() {
  player.x = 4*width/5;
  player.y = height/2;
  playerHealth = playerMaxHealth;
}

// draw()
//
// Draws the background image every frame to cancel out the player's trace.
// While the game is active, checks input
// updates positions of prey and player,
// checks health (dying), checks eating (overlaps)
// displays the two agents.
// When the game is over, shows the game over screen.
function draw() {
  image(backgroundImage,width/2,height/2,backgroundImage.width*0.5,backgroundImage.height*0.5);

  if (!gameOver) {
    handleInput();

    movePlayer();
    moveBlood();

    updateHealth();
    checkEating();
    varyPlayerSpeed();
    varyBloodSpeedSize();

    loadBlood();
    loadPlayer();
  }
  else {
    showGameOver();
  }
}

// handleInput()
//
// Checks arrow keys and adjusts player velocity accordingly
function handleInput() {
  // Check for horizontal movement
  if (keyIsDown(LEFT_ARROW)) {
    player.vx = -player.maxSpeed;
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    player.vx = player.maxSpeed;
  }
  else {
    player.vx = 0;
  }

  // Check for vertical movement
  if (keyIsDown(UP_ARROW)) {
    player.vy = -player.maxSpeed;
  }
  else if (keyIsDown(DOWN_ARROW)) {
    player.vy = player.maxSpeed;
  }
  else {
    player.vy = 0;
  }

  // When the player holds down SHIFT key, the sprinting is triggered,
  // when the SHIFT key is released, it will go back to the original speed.
  if (keyIsDown(SHIFT)) {
    player.maxSpeed += player.speedIncrease;
  }
  else {
    player.maxSpeed = player.speed;
  }
}

// movePlayer()
//
// Updates player position based on velocity,
// wraps around the edges.
function movePlayer() {
  // Update position
  player.x += player.vx;
  player.y += player.vy;

  // Wrap when player goes off the canvas
  if (player.x < 0) {
    player.x += width;
  }
  else if (player.x > width) {
    player.x -= width;
  }

  if (player.y < 0) {
    player.y += height;
  }
  else if (player.y > height) {
    player.y -= height;
  }
}

// updateHealth()
//
// Reduce the player's health at a faster rate when sprinting is triggered.
// Reduce the player's health (every frame).
// Check if the player is dead.
function updateHealth() {
  // When the player holds down the SHIFT key, the player health Reduces
  // at a faster rate, when the SHIFT key is released, the player health
  // reduces at a relatively slower rate.
  // Player health is constrained to a reasonable range.
  if (keyIsDown(SHIFT)) {
    playerHealth = constrain(playerHealth - 2, 0, playerMaxHealth);
  }
  else {
    playerHealth = constrain(playerHealth - 0.5, 0, playerMaxHealth);
  }

  // Check if the player is dead
  if (playerHealth === 0) {
    // If so, the game is over
    gameOver = true;
  }
}

// checkEating()
//
// Check if the player overlaps the prey and updates health of both
function checkEating() {
  // Get distance of player to prey
  var d = dist(player.x,player.y,blood.x,blood.y);
  // Check if it's an overlap
  if (d < playerWidth/2 + bloodWidth/2 || d < playerWidth/2 + bloodHeight/2 || d < playerHeight/2 + bloodWidth/2 || d < playerHeight/2 + bloodHeight/2) {
    // Increase the player health
    playerHealth = constrain(playerHealth + eatHealth,0,playerMaxHealth);
    // Reduce the prey health
    bloodHealth = constrain(bloodHealth - eatHealth,0,bloodMaxHealth);

    // Check if the prey died
    if (bloodHealth === 0) {
      // Move the "new" prey to a random position by giving it a
      // new time value.
      blood.tx = random(0,width);
      blood.ty = random(0,height);
      // Give it full health
      bloodHealth = bloodMaxHealth;
      // Track how many prey were eaten
      preyEaten++;
    }
  }
}

// varyPlayerSpeed()
//
// To vary the initial speed of the player in different stage by checking
// how many blood the player caught.
// The player evolved 1 will be faster than the original player by 2 units,
// The player evolved 2 will be faster than the original player by 5 units.
function varyPlayerSpeed() {
  if (preyEaten < 10) {
    player.maxSpeed = player.maxSpeed;
  }
  else if (preyEaten < 50) {
    player.maxSpeed += 2;
  }
  else {
    player.maxSpeed += 5;
  }
}

// varyBloodSpeedSize()
//
// To vary the speed and size of the blood in player's different stages by
// checking how many blood the player caught.
function varyBloodSpeedSize() {
  if (preyEaten < 10) {
    blood.timeIncrease = blood.timeIncrease;
    bloodWidth = bloodImage.width*0.3;
    bloodHeight = bloodImage.height*0.3;
  }
  else if (preyEaten < 50) {
    blood.timeIncrease = 0.01;
    bloodWidth = bloodImage.width*0.25;
    bloodHeight = bloodImage.height*0.25;
  }
  else {
    blood.timeIncrease = 0.02;
    bloodWidth = bloodImage.width*0.2;
    bloodHeight = bloodImage.height*0.2;
  }
}

// moveBlood()
//
// Moves the blood based on the noise function.
function moveBlood() {
  // Changes blood's x and y location based on the time value.
  blood.x = width * noise(blood.tx);
  blood.y = height * noise(blood.ty);

  // The time value increases every frame.
  blood.tx += blood.timeIncrease;
  blood.ty += blood.timeIncrease;

  // Screen wrapping for the blood.
  if (blood.x < 0) {
    blood.x += width;
  }
  else if (blood.x > width) {
    blood.x -= width;
  }

  if (blood.y < 0) {
    blood.y += height;
  }
  else if (blood.y > height) {
    blood.y -= height;
  }
}

// loadBlood()
//
// Load the blood image.
function loadBlood() {
  image(bloodImage,blood.x,blood.y,bloodWidth,bloodHeight,0,0);
  // tint(255, bloodHealth);
}

// loadPlayer()
//
// Load player images at different stages.(changing player sizes)
// Load the player image when the blood eaten is less than 10,
// Load the player's first evolved image when the blood eaten is greater
// than 10 and less than 50,
// Load the player's second evolved images when the blood eaten is greater
// than 50.
function loadPlayer() {
  if (preyEaten < 10) {
    image(playerImage,player.x,player.y,playerImage.width*0.3,playerImage.height*0.3,0,0);
    // tint(255, playerHealth);
    playerWidth = playerImage.width*0.3;
    playerHeight = playerImage.height*0.3;
  }
  else if (preyEaten < 50) {
    image(playerEvo1Image,player.x,player.y,playerEvo1Image.width*0.3,playerEvo1Image.height*0.3,0,0);
    playerWidth = playerEvo1Image.width*0.3;
    playerHeight = playerEvo1Image.height*0.3;
  }
  else {
    image(playerEvo2Image,player.x,player.y,playerEvo2Image.width*0.3,playerEvo2Image.height*0.3,0,0);
    playerWidth = playerEvo2Image.width*0.3;
    playerHeight = playerEvo2Image.height*0.3;
  }
}

// showGameOver()
//
// Display text about the game being over!
function showGameOver() {
  textSize(32);
  textAlign(CENTER,CENTER);
  fill(0);
  var gameOverText = "GAME OVER\n";
  gameOverText += "You ate " + preyEaten + " prey\n";
  gameOverText += "before you died."
  text(gameOverText,width/2,height/2);
}

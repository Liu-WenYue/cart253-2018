/*********************************************************

Exercise 2 - The Artful Dodger
Liu WenYue

//This exercise is a dodger game where an octopus hiding
//from the water bubbles.

*********************************************************/

// The image of the avatar, octopus.
var avatarImage;

// The position and size of our avatar, octopus.
var avatarX;
var avatarY;
var avatarSize = 85;

// The speed and velocity of our avatar, octopus.
var avatarSpeed = 10;
var avatarVX = 0;
var avatarVY = 0;

// The image of the enemy, water bubble.
var enemyImage;

// The position and size of the enemy, water bubble
var enemyX;
var enemyY;
var enemySize = 50;
// How much bigger the enemy circle gets with each successful dodge.
var enemySizeIncrease = 5;

// The speed and velocity of our enemy circle.
var enemySpeed = 5;
var enemyVX = 5;
// How much bigger the enemy circle gets with each successful dodge.
var enemySpeedIncrease = 0.5;

// How many dodges the player has made.
var dodges = 0;

// My GearedSlab-Light Font file.
var myFont;

// The image of the undersea background.
var backgroundImage;


// preload()
//
// Preload the font and images.
function preload() {
  myFont = loadFont("assets/fonts/GearedSlab-Light.ttf")
  avatarImage = loadImage("assets/images/avatar.png")
  enemyImage = loadImage("assets/images/enemy.png")
  backgroundImage = loadImage("assets/images/background.png")
}

// setup()
//
// Make the canvas, position the avatar and enemy and set the image mode.
function setup() {
  // Create our playing area.
  createCanvas(500,500);

  // Put the avatar in the centre.
  avatarX = width/2;
  avatarY = height/2;

  // Put the enemy to the left at a random y coordinate within the canvas.
  enemyX = 0;
  enemyY = random(0,height);

  // We'll use imageMode CENTER for this script.
  imageMode(CENTER);
}

// draw()
//
// Handle moving the avatar and enemy and Display the number of
// successful dodges in the game and checking for dodges and
// game over situations.
function draw() {
  // Display the undersea background image.
  image(backgroundImage, width/2, height/2, width, height);

  // Display the number of successful dodges in the game itself.
  fill(0);
  textSize(40);
  textFont(myFont);
  textAlign(LEFT, TOP);
  text( dodges + " dodges!", 12, 12);

  // Default the avatar's velocity to 0 in case no key is pressed this frame.
  avatarVX = 0;
  avatarVY = 0;

  // Check which keys are down and set the avatar's velocity based on its
  // speed appropriately.

  // Left and right
  if (keyIsDown(LEFT_ARROW)) {
    avatarVX = -avatarSpeed;
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    avatarVX = avatarSpeed;
  }

  // Up and down (separate if-statements so you can move vertically and
  // horizontally at the same time).
  if (keyIsDown(UP_ARROW)) {
    avatarVY = -avatarSpeed;
  }
  else if (keyIsDown(DOWN_ARROW)) {
    avatarVY = avatarSpeed;
  }

  // Move the avatar according to its calculated velocity.
  avatarX = avatarX + avatarVX;
  avatarY = avatarY + avatarVY;

  // The enemy always moves at enemySpeed (which increases).
  enemyVX = enemySpeed;
  // Update the enemy's position based on its velocity.
  enemyX = enemyX + enemyVX;

  // Check if the enemy and avatar overlap - if they do the player loses.
  // We do this by checking if the distance between the centre of the enemy
  // and the centre of the avatar is less that their combined radii.
  if (dist(enemyX,enemyY,avatarX,avatarY) < enemySize/2 + avatarSize/2) {
    // Tell the player they lost.
    console.log("YOU LOSE!");
    // Reset the enemy's position.
    enemyX = 0;
    enemyY = random(0,height);
    // Reset the enemy's size and speed.
    enemySize = 50;
    enemySpeed = 5;
    // Reset the avatar's position.
    avatarX = width/2;
    avatarY = height/2;
    // Reset the dodge counter.
    dodges = 0;
  }

  // Check if the avatar has gone off the screen (cheating!).
  if (avatarX < 0 || avatarX > width || avatarY < 0 || avatarY > height) {
    // If they went off the screen they lose in the same way as above.
    console.log("YOU LOSE!");
    enemyX = 0;
    enemyY = random(0,height);
    enemySize = 50;
    enemySpeed = 5;
    avatarX = width/2;
    avatarY = height/2;
    dodges = 0;
  }

  // Check if the enemy has moved all the way across the screen.
  if (enemyX > width) {
    // This means the player dodged so update its dodge statistic.
    dodges = dodges + 1;
    // Tell them how many dodges they have made.
    console.log(dodges + " DODGES!");
    // Reset the enemy's position to the left at a random height.
    enemyX = 0;
    enemyY = random(0,height);
    // Increase the enemy's speed and size to make the game harder.
    enemySpeed = enemySpeed + enemySpeedIncrease;
    enemySize = enemySize + enemySizeIncrease;
  }

  // Display the current number of successful in the console.
  console.log(dodges);

  // Display the avatar image.
  image(avatarImage, avatarX, avatarY, avatarSize, avatarSize);

  // Display the enemy image.
  image(enemyImage, enemyX, enemyY, enemySize, enemySize);

}

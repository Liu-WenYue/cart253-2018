/******************************************************************************
Where's Sausage Dog?
Liu WenYue

An algorithmic version of a Where's Wally searching game where you
need to click on the sausage dog you're searching for in amongst all
the visual noise of other animals.

Animal images from:
https://creativenerds.co.uk/freebies/80-free-wildlife-icons-the-best-ever-animal-icon-set/
******************************************************************************/

// Position, size, minimum and maximum sizes and image of the sausage dog we're
// searching for.
var targetX;
var targetY;
var targetImage;
var targetSize = 120;
var targetSizeMin = 60;
var targetSizeMax = 220;

// The velocity and speed of the target image.
var targetVX;
var targetVY;
var targetSpeed = 10;

// The ten decoy images.
var decoyImage1;
var decoyImage2;
var decoyImage3;
var decoyImage4;
var decoyImage5;
var decoyImage6;
var decoyImage7;
var decoyImage8;
var decoyImage9;
var decoyImage10;

// The number of decoys to show on the screen, randomly chosen from the decoy images.
// The minimum and maximum number of decoys to show on the screen.
var numDecoys;
var numDecoysMin = 10;
var numDecoysMax = 280;

// Keep track of whether they've won.
var gameOver = false;

// The size of the box at the top right corner.
var boxSize = 240;

// The size that the box increased.
var boxYIncrease = 10;

// preload()
//
// Loads the target and decoy images before the program starts.
function preload() {
  targetImage = loadImage("assets/images/animals-target.png");

  decoyImage1 = loadImage("assets/images/animals-01.png");
  decoyImage2 = loadImage("assets/images/animals-02.png");
  decoyImage3 = loadImage("assets/images/animals-03.png");
  decoyImage4 = loadImage("assets/images/animals-04.png");
  decoyImage5 = loadImage("assets/images/animals-05.png");
  decoyImage6 = loadImage("assets/images/animals-06.png");
  decoyImage7 = loadImage("assets/images/animals-07.png");
  decoyImage8 = loadImage("assets/images/animals-08.png");
  decoyImage9 = loadImage("assets/images/animals-09.png");
  decoyImage10 = loadImage("assets/images/animals-10.png");
}

// setup()
//
// Creates the canvas, sets basic modes, draws correct number of decoys in
// random positions, then the target image.
function setup() {
  createCanvas(windowWidth,windowHeight);
  background("#ffff00");
  imageMode(CENTER);

  // Randomize the number of decoy images.
  numDecoys = random(numDecoysMin,numDecoysMax);
  // Use a for loop to draw as many decoys as we need.
  for (var i = 0; i < numDecoys; i++) {
    // Choose a random location for this decoy.
    var x = random(0,width);
    var y = random(0,height);
    // Generate a random number we can use for probability.
    var r = random();
    // Use the random number to display one of the ten decoy
    // images, each with a 10% chance of being shown.
    if (r < 0.1) {
      image(decoyImage1,x,y);
    }
    else if (r < 0.2) {
      image(decoyImage2,x,y);
    }
    else if (r < 0.3) {
      image(decoyImage3,x,y);
    }
    else if (r < 0.4) {
      image(decoyImage4,x,y);
    }
    else if (r < 0.5) {
      image(decoyImage5,x,y);
    }
    else if (r < 0.6) {
      image(decoyImage6,x,y);
    }
    else if (r < 0.7) {
      image(decoyImage7,x,y);
    }
    else if (r < 0.8) {
      image(decoyImage8,x,y);
    }
    else if (r < 0.9) {
      image(decoyImage9,x,y);
    }
    else if (r < 1.0) {
      image(decoyImage10,x,y);
    }
  }

  // Once we've displayed all decoys, we choose a location for the target
  targetX = random(0,width);
  targetY = random(0,height);

  // This helps us to check if the target image is underneath the box we just
  // created for the instructions, if targetX and targetY is inside the box,
  // it will re-locate the target image until it's not inside the box.
  while(targetX > (windowWidth - boxSize) && targetY < (boxSize + boxYIncrease)) {
    targetX = random(0,width);
    targetY = random(0,height);
  }

  // To have the target image in random sizes so it changes the difficulty of the game.
  targetSize = random(targetSizeMin,targetSizeMax);

  // And draw it (this means it will always be on top)
  image(targetImage,targetX,targetY,targetSize,targetSize);

  instruction();
}

function draw() {
  if (gameOver) {
    // Prepare our typography
    textFont("Helvetica");
    textSize(128);
    textAlign(CENTER,CENTER);
    noStroke();
    fill(random(255));
    // Tell them they won!
    text("YOU WINNED!",width/2,height/2);

    noFill();
    stroke(random(255));
    strokeWeight(10);

    // Place the target image at the place where it is found.
    // Reset the imagemode back to center.
    imageMode(CENTER);
    image(targetImage,targetX,targetY,targetSize,targetSize);

    // Have the target image moves around the screen.
    targetVX = random(targetSpeed);
    targetVY = random(targetSpeed);
    targetX += targetVX;
    targetY += targetVY;

    // Have the target image changes its size while moving around.
    targetSize = random(targetSizeMin,targetSizeMax);

    wrapping();
  }
}

// mousePressed()
//
// Checks if the player clicked on the target and if so tells them they won
function mousePressed() {
  // Check if the mouse is in the x range of the target
  if (mouseX > targetX - targetImage.width/2 && mouseX < targetX + targetImage.width/2) {
    // Check if the mouse is also in the y range of the target
    if (mouseY > targetY - targetImage.height/2 && mouseY < targetY + targetImage.height/2) {
      gameOver = true;
    }
  }
}

// instructions()
//
// To have the target image and instruction texts placed at the top right
// corner of the window.
function instruction() {
  // There will be no stroke for the elements in this program.
  noStroke();

  // The box at the top right corner will be in orange color.
  fill("#fea61b");
  rectMode(CORNERS);
  rect(windowWidth-boxSize, 0, windowWidth, boxSize + boxYIncrease);

  // The image shown at the top right corner.
  imageMode(CORNERS);
  image(targetImage, windowWidth - boxSize, 0, windowWidth, boxSize);

  // The instruction text.
  textFont("monospace");
  textAlign(RIGHT,TOP);
  textStyle(BOLD)
  textSize(28);
  fill(60);
  text("FIND me! ", windowWidth, 10);
  text("CLICK on me! ", windowWidth, boxSize - 40);
}

// wrapping()
//
// This makes sure the target iamge is always inside the window.
function wrapping() {
  if (targetX + targetImage.width/2 < 0) {
    targetX += windowWidth - targetImage.width;
  }
  else if (targetX - targetImage.width/2 > windowWidth) {
    targetX -= windowWidth + targetImage.width;
  }

  if (targetY + targetImage.height/2 < 0) {
    targetY += windowHeight - targetImage.width;
  }
  else if (targetY - targetImage.height/2 > windowHeight) {
    targetY -= windowHeight + targetImage.width;
  }
}

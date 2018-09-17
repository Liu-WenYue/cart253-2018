// Exercise 1 - Moving pictures
// Liu WenYue
//
// It moves three pictures around on the canvas.
// One moves from the left to the right of the screen.
// One follows the mouse's movement.
// One moves toward the mouse cursor at a different speed.


// The image of ghost that moves from the left to the right of the screen.
var ghostImage;
// The current position of the ghost image.
var ghostImageX;
var ghostImageY;


// The image of a spider.
var spiderImage;
// The current position of the spider.
var spiderImageX;
var spiderImageY;


// The image of a pumpkin with hat.
var pumpkinImage;
// The current position of the pumpkin with a hat.
var pumpkinImageX;
var pumpkinImageY;



// preload()
//
// Load the three images we're using before the program starts.

function preload() {
  ghostImage = loadImage("assets/images/ghost.png");
  spiderImage = loadImage("assets/images/spider.png");
  pumpkinImage = loadImage("assets/images/pumpkin.png");
}


// setup()
//
// Set up the canvas, position the images, set the image mode.

function setup() {
  // Create our canvas.
  createCanvas(640,640);

  // Start the ghost image off screen at the left side of the canvas.
  ghostImageX = 0 - ghostImage.width/4;
  ghostImageY = height/2;

  // Start the pumpkinImage in the centre of the canvas.
  pumpkinImageX = width/2;
  pumpkinImageY = height/2;

  // We'll use imageMode CENTER for this script.
  imageMode(CENTER);
}


// draw()
//
// Moves the ghost image from the left to the right of the screen.
// Have the spider image follows the mouse's movement.
// Have the pumpkin image follows the mouse cursor at a different speed.

function draw() {
  // Move the ghost image from left to the right by increasing its x position.
  ghostImageX += 1;

  // Display the ghost image.
  image(ghostImage,ghostImageX,ghostImageY,ghostImage.width * 0.65,ghostImage.height * 0.65);


  // Start the spider image at the position of the mouse and follows its movement.
  spiderImageX = mouseX;
  spiderImageY = mouseY;

  // Display the spider image.
  image(spiderImage,spiderImageX,spiderImageY,spiderImage.width * 0.45,spiderImage.height * 0.45);


  // Updates the location of pumpkin image using linear interpolation based on
  // the distance between the pumpkin image and the mouse.

  // Calculate the distance between the pumpkinImage and the mouse.
  var d = dist(pumpkinImageX,pumpkinImageY,mouseX,mouseY);

  // Use linear interpolation to update the location of the pumpkinImage based
  // on the distance.

  // When the distance is big, 1/d will be very small, so the pumpkinImage will
  // move a small fraction of the remaining distance.
  // When the distance is small, 1/d will approach 1 and the pumpkinImage will
  // move a large fraction of the remaining distance.
  pumpkinImageX = lerp(pumpkinImageX,mouseX,1/d);
  pumpkinImageY = lerp(pumpkinImageY,mouseY,1/d);

  // Display the pumpkin image.
  image(pumpkinImage,pumpkinImageX,pumpkinImageY,pumpkinImage.width * 0.5,pumpkinImage.height * 0.5);
}

// Exercise 1 - Moving pictures
// Liu WenYue
//
// It moves three pictures around on the canvas.
// One moves from the left to the right of the screen.
// One moves linearly down the screen.
// One moves toward the mouse cursor.


// The image of ghost that moves from the left to the right of the screen
var ghostImage;
// The current position of the ghost image
var ghostImageX;
var ghostImageY;



// preload()
//
// Load the three images we're using before the program starts

function preload() {
  ghostImage = loadImage("assets/images/ghost.png");

}


// setup()
//
// Set up the canvas, position the images, set the image mode.

function setup() {
  // Create our canvas
  createCanvas(640,640);

  // Start the ghost image at the left side of the canvas
  ghostImageX = 0;
  ghostImageY = height/2;

  // Start the clown image at the centre of the canvas
  // clownImageX = width/2;
  // clownImageY = height/2;

  // Start the felt image perfectly off screen above the canvas
  // feltTextureImageX = width/2;
  // feltTextureImageY = 0 - feltTextureImage.height/2;

  // We'll use imageMode CENTER for this script
  imageMode(CENTER);
}


// draw()
//
// Moves the ghost image from the left to the right of the screen
// Moves the felt image linearly
// Moves the clown face toward the current mouse location

function draw() {
  // Move the ghost image from left to the right by increasing its x position
  ghostImageX += 1;

  // Display the ghost image in 1.5 times
  image(ghostImage,ghostImageX,ghostImageY,135 * 1.5,180 * 1.5);


  // Move the felt image down by increasing its y position
  // feltTextureImageY += 1;

  // Display the felt image
  // image(feltTextureImage,feltTextureImageX,feltTextureImageY);

  // Move the clown by moving it 1/10th of its current distance from the mouse

  // Calculate the distance in X and in Y
  // var xDistance = mouseX - clownImageX;
  // var yDistance = mouseY - clownImageY;
  // Add 1/10th of the x and y distance to the clown's current (x,y) location
  // clownImageX = clownImageX + xDistance/10;
  // clownImageY = clownImageY + yDistance/10;

  // Display the clown image
  // image(clownImage,clownImageX,clownImageY);
}

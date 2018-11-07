// Mushroom
//
// A class that defines how a mushroom behaves, including how it reduces the
// ball ability.

/////////////////////   NEW   /////////////////////

// Mushroom constructor
//
// Sets the properties with the provided arguments
function Mushroom(x,y,vx,vy,size,speed) {
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.size = size;
  this.speed = speed;

  /////////////////////   NEW   /////////////////////

  // These varaibles allow us to reset mushroom x and y values back to the
  // original ones.
  this.startX = x;
  this.startY = y;

  /////////////////////   END NEW  /////////////////////
}

/////////////////////   END NEW  /////////////////////


/////////////////////   NEW   /////////////////////

// display()
//
// Display the mushroom image on the screen.
Mushroom.prototype.display = function () {
  image(mushroomImage,this.x,this.y,this.size,this.size);
}

/////////////////////   END NEW  /////////////////////


/////////////////////   NEW   /////////////////////

// popUp()
//
// Have the mushroom pops up.
Mushroom.prototype.popUp = function () {
  // If the right paddle gains point,
  // a mushroom will appear at the right side of the screen.
  if(rightPaddleScore ++) {
    this.x = random(2*width/3, 8*width/9);
    this.y = random(40,height-40);
  }
  // If the left paddle gains point,
  // a mushroom will appear at the left side of the screen.
  else if(leftPaddleScore ++) {
    this.x = random(width/9, width/3);
    this.y = random(40,height-40);
  }
  // If no paddle is gaining point,
  // there will not be any mushroom on the screen.
  else {
    this.x = this.startX;
    this.y = this.startY;
  }
}

/////////////////////   END NEW  /////////////////////

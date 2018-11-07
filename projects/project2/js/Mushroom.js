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

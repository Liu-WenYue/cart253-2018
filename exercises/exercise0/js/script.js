/*****************

//Exercise 0 - Spiritual Self-Portrait
//Liu WenYue
//6th September 2018

//Uses of the different functions in p5 to draw a self-portrait of
//WenYue in cartoon style.

******************/

// setup()
//
// Draws a head on canvas.

function setup() {

//Set up the canvas and set it to blue colour.

  createCanvas(600,600);
  background("#69C4D1");

//Draws the bun.
  stroke("#332D29");
  strokeWeight(110);
  line(310,110,310,190);

//Draws the back of the hair.
  noStroke();
  fill("#38312E");
  ellipseMode(CENTER);
  ellipse(310,360,450,450);
  fill("#69C4D1");
  rectMode(CENTER);
  rect(310,535,440,130);

//Draws the neck and give it a skin colour.
  fill("#DAC1B3");
  rectMode(CENTER);
  rect(310,550,20,50);

//Draws the part of upper body in light brown.
  fill("#635852");
  quad(260,570,245,600,375,600,360,570);

//Draws the face and the ears.
  stroke("#F7DFD2");
  strokeWeight(340);
  line(275,380,345,380);
  noStroke();
  fill("#F7DFD2");
  ellipse(105,435,70,70);
  ellipse(520,435,70,70);

//Draws the front part of the hair.
  fill("#38312E");
  rectMode(CENTER);
  rect(310,220,290,35);
  triangle(165,235,305,260,445,235);

//Draws the eyes.
//Pupils.
  fill("#252626");
  ellipse(200,405,58,58);
  ellipse(420,405,58,58);
//Highlights for eyes.
  fill("#FFFFFF");
  ellipse(195,390,24,24);
  ellipse(415,390,24,24);
  ellipse(215,410,10,10);
  ellipse(435,410,10,10);

//Draws the month in dark red colour.
  noFill();
  stroke("#770B49");
  strokeWeight(6);
  line(285,455,335,455);

//Draws the glasses.
//The glasses' frame.
  noFill();
  stroke("#42342D");
  strokeWeight(10);
  strokeJoin(ROUND);
  beginShape();
  rectMode(CORNERS);
  rect(355,340,480,440);
  rect(140,340,265,440);
  endShape();
//The connector.
  line(265,380,355,380);
//Legs of the glasses.
  line(140,390,100,395);
  line(480,390,520,395);
//Decoration on the top of the frame.
  strokeWeight(4);
  line(185,336,195,328);
  line(195,328,435,328);
  line(435,328,445,336);

//Hair at the side.
  noStroke();
  fill("#38312E");
  triangle(205,225,115,465,115,260);
  triangle(430,225,510,455,505,260);
}


// draw()
//
// Does nothing now.

function draw() {
  //Nothing for now/
}

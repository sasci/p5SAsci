function setup() {
	// create canvas
createCanvas(800,600);
// set background color

}

// create a variable to control the direction of the ellipse
let control = false;
// make ellipse starting from the left end of the canvas
let i=30;

var x=300;
var y=200;
var r=25;
var speedX=4;
var speedY=-3
function draw() {
	background('green');
// 	strokeWeight(4);
// 	stroke(255);
// 	fill (255, 0, 0);
// 	x+=speedX;
// 	y+=speedY;

// 	if (x>(width-r/2) || x- r/2< 0 ) {
// 		speedX = -speedX;
// 	}
// 	if (y> (height-r/2)  || y -r/2 < 0) {
// 		speedY = -speedY;
// }
// 	ellipse(x,y,r);	
// noFill();
// when ellipse is in the left edge, control would be/become false
if (i==30) {
    control = false;
  }
  // if ellipse is inside the canvas width (we substract 30 which is the radius
  // of our ellipse) and control is false
  if (i<(width-30) && control==false){
    i++
    // increase its x position (ellipse moves in the right direction)
    ellipse(i,height/2,60);
  }
  else {
    // else control will change to true
    control = true;
    // decrease its x position (ellipse moves in the left direction)
    i--;
    ellipse(i,height/2,60);
  }
}
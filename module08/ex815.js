function setup() {
	// create canvas
createCanvas(800,500);
// set background color
background('#31bc33');
}

let xPos;
function draw() {
for (let xPos = 0; xPos < width; xPos+=10) {
	point (xPos,xPos*5/8);
}	
}
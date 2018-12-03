function setup() {
	// create canvas
createCanvas(800,500);
// set background color
background('orange');
}

function draw() {
	
	triangle (width/2,height/2,300,400,500,400);
	triangle (width/2,height/2,200,250,300,400);
	triangle (width/2,height/2,200,250,300,100);
	triangle (width/2,height/2,600,250,500,100);
}
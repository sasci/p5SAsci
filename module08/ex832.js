function setup() {
	// create canvas
createCanvas(800,500);
// set background color
background('pink');
}

function draw() {
	ellipse(width/2,height/2,250,400);
	stroke ('grey')
	ellipse(340,200,60,30);
	stroke('black')
	ellipse(340,200,25,27);
	fill ('blue');
	ellipse(340,200,15);
	noFill();
	stroke('grey');
	ellipse(460,200,60,30);
	stroke('black');
	ellipse(460,200,25,27);
	fill('blue');
	ellipse(460,200,15);
	noFill();
}
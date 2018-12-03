function setup() {
	// create canvas
createCanvas(800,600);
// set background color
background('orange');
}

function draw() {
	// for (let dim = 400; dim > 10; dim -=10) {
	// 	rectMode(CENTER);
	// 	rect(width/2,height/2,dim,dim);
	// }
	noFill();
	stroke('black');
	rect (450,350,200,200);
	rect (350,250,200,200);
	line (450,350,350,250);
	line (650,350,550,250);
	line (350,450,450,550);
	line (550,450,650,550);
}
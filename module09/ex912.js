function setup() {
	createCanvas(windowWidth, windowHeight);
	// set background color in the setup so sketches will leave traces
	background('#D66761');
  }
  function draw() {
	// noStroke();
	// fill(255, 255, 152);
	// // ellipse will change according to the mouseX and mouseY position
	// ellipse(mouseX, mouseY, 30, 30);

	fill (mouseX/4,mouseY/3,10);

	if(mouseIsPressed){
	ellipse(mouseX,mouseY,30)
} 
}
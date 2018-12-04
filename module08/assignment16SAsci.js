function setup() {
	// create canvas
createCanvas(800,500);
// set background color
background('#D66761');
}


function draw() {
	for (let x=20; x<innerWidth-10;x+=40){
		for(let y=20;y<innerHeight-30;y+=100){
			fill (x/4,y/2,10,y/2);
			ellipse (x,y,20);
		}
	}

	for(let x2=20;x2<innerWidth-10;x2+=40){
		ellipse (x2,220,10);
	}
}
let camVideo;
let myButton;
var snapshots = [];
function setup() {
  createCanvas(600, 400);
  background(51);
  // make the connection to the webcam
  camVideo = createCapture(VIDEO);
  camVideo.size(300, 200);
  myButton = createButton('take pics');
  myButton.mousePressed(shots);

}

function shots() {
  snapshots.push(camVideo.get());
}

function draw() {

  //display video on the canvas
  var x = 0;
  var y = 0;
  var w = 100;
  var h = 80;
  for (i = 0; i < snapshots.length; i++) {
    image(snapshots[i], x, y, w, h);
    x = x + w;
    if (x > width) {
      x = 0;
      y = y + h;
    }
  }

  //image(camVideo,0,0);
}
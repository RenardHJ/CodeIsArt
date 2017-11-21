var canvas;
var canvasHeight;
var canvasWidth;

function setup() {
  var w = document.getElementById('canvas_container').offsetWidth / 2;
  var h = w;

  canvas = createCanvas(w, h);
  noFill();
  stroke("lightgray");
  rect(0, 0, w - 1, w - 1);
  stroke("black");

  // Move the canvas so it's inside our <div id="sketch-holder">.
  canvas.parent('canvas_container');
  canvasHeight= height;
  canvasWidth = width;
}

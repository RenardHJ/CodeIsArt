var canvas;
var canvasHeight;
var canvasWidth;

function setup() {
  var w = document.getElementById('canvas_container').offsetWidth;
  var h = w / 2;

  canvas = createCanvas(w, h);
  noFill();
  stroke("lightgray");
  rect(0, 0, w - 1, h - 1);
  stroke("black");

  // Move the canvas so it's inside our <div id="sketch-holder">.
  canvas.parent('canvas_container');
  canvasHeight= height;
  canvasWidth = width;
}

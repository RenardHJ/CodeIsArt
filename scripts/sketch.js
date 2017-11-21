var canvas;
var canvasHeight;
var canvasWidth;

function setup() {
  canvas = createCanvas(600, 600);

  // Move the canvas so it's inside our <div id="sketch-holder">.
  canvas.parent('canvas_container');
  canvasHeight= height;
  canvasWidth = width;
}

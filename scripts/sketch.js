var canvas;
var canvasHeight;
var canvasWidth;

function setup() {
  var w = document.getElementById('canvas_container').offsetWidth;
  var h = w / 2;

  canvas = createCanvas(w, h);
  stroke("black");

  // Move the canvas so it's inside our <div id="sketch-holder">.
  canvas.parent('canvas_container');
  canvasHeight= height;
  canvasWidth = width;
}

$(".clearCanvas").on("click", function()
{
    clear();

    noFill();
    stroke("black");
    imageDownloadable = false;
});

window.onresize = function()
{
  var w = document.getElementById('canvas_container').offsetWidth;
  var h = w / 2;

  canvas.size(w, h);

  canvasHeight= w;
  canvasWidth = h;
}

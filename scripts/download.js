// Download Canvas on button click
document.getElementById('downloadPic').addEventListener('click', function() {
  if(!imageDownloadable) alert("No image to download!");
  else downloadCanvas(this, 'drawingCanvas', fileName + '.png');
}, false);

//Download Canvas
function downloadCanvas(link, canvasId, filename) {
    link.href = document.getElementById(canvasId).toDataURL();
    link.download = filename;
}

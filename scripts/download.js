// Download Canvas on button click
document.getElementById('downloadPic').addEventListener('click', function() {
  if(!imageDownloadable) alert("No image to download!");
  else downloadCanvas();
}, false);

function downloadCanvas()
{
  canvasName = fileName + ".png"
  save(canvas, canvasName);
}

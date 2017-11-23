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

$("#downloadPic").contextmenu(function()
{
  if(isValid)
    if (confirm("Download .PPC version of file?") == true)
    {
      downloadPPC();
      return false;
    }

});

function downloadPPC()
{
  var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(json, 0, 4));
  var a = document.createElement('a');
  a.href = 'data:' + data;
  a.download = fileName + '.PPC';
  a.innerHTML = 'download JSON';

  var container = document.getElementById('body');
  container.appendChild(a);
  a.click();

  a.remove();
  }

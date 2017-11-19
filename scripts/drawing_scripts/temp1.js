function temp1() {

  var stage = new createjs.Stage("drawingCanvas");

  var items = [0];
  var li = 0;
  function loopJSON(obj)
  {
    var count = 0;
    jQuery.each(obj.body, function(i, val)
    {
      if (val.hasOwnProperty('body'))
      {
              items[li]++;
        li++;
        items.push(0);
        console.log(val.type);
        loopJSON(val);
        li--;
      }
      else
      {
        items[li]++;
        console.log(items);
      }

    });
    for(var i=0; i<items.length;i++ )
     {
        if(items[i]==0)
            items.splice(i,1);
      }
    console.log(items);
  }

  loopJSON(json);
  var canvas = document.getElementById('drawingCanvas');
  var context = canvas.getContext('2d');
  context.lineJoin = context.lineCap = 'round';
  var centerX = canvas.width / 2;
  var centerY = canvas.height / 2;
  var radius = 50;
  rec(context, centerX, centerY, radius;

  items = [0];
  li = 0;
}

/* Draw recursive circles
   * Draw circle in center for program
   * draw # of body circles off of the parent circles's edge
   * repeat for all bodies
*/
function rec(context, x, y, r)
{
  context.beginPath();
  context.rect(x - r/2, y - r/2, r, r);
    context.lineWidth = 1;
    context.strokeStyle = '#000000';
    context.stroke();
    context.closePath();
}

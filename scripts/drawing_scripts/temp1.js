function temp1()
{
  var stage = new createjs.Stage("drawingCanvas");

  var circle = new createjs.Shape();
  circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
  circle.x = 10;
  circle.y = 10;
  stage.addChild(circle);

  stage.update();

  loop2JSON(json);
}

function loop2JSON(obj)
{

  jQuery.each( obj.body, function(i, val ) {
        if(val.hasOwnProperty('body'))
        {
          console.log(val.type);
          loopJSON(val);
        }
        else
        {
          console.log(val);
        }

  });
}

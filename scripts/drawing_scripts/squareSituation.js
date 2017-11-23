function squareSituation()
{
  depthFirst(json);
}

function depthFirst(obj)
{
  jQuery.each(obj.body, function (i, val)
  {
    var w;
    var h;
    var color;
    if (val.hasOwnProperty('body'))
    {
      switch(val.type)
      {
        case "class":
          w = 100;
          h = 100;
          color = "black"
          break;
        case "function":
          w = 75;
          h = 75;
          color = "gray";
          break;
        case "for":
          w = 50;
          h = 75;
          color = "pink";
          break;
        case "while":
          w = 75;
          h = 50;
          color = "red";
          break;
        case "if":
          w = 25;
          h = 40;
          color = "purple";
          break;
        case "else if":
          w = 40;
          h = 40;
          color = "blue";
          break;
        case "else":
          w = 40,
          h = 25;
          color = "cyan";
          break;
        case "with":
          w = 40,
          h = 25;
          color = "orange";
          break;
        case "finally":
          w = 40,
          h = 25;
          color = "lime";
          break;
        case "try":
          w = 40,
          h = 25;
          color = "magenta";
          break;
        case "except":
          w = 40,
          h = 25;
          color = "gold";
          break;
      }
      depthFirst(val);
    }
    else
    {
      switch(val)
      {
        case "comment":
          w = 10;
          h = 10;
          color = "green";
          break;
        default:
          w = 10;
          h = 10;
          color = "gainsboro";
          break;
      }
    }
    //Have to -2 or the shapes can be drawn outside of the border
    var x = Math.random() * ((canvasWidth - 1) - w);
    var y = Math.random() * ((canvasHeight - 1) - h);

    fill(color);
    rect(x, y, w, h);
  });
}

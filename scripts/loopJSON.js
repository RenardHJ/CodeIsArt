function depthFirst(obj) {
  let canvas = document.getElementById("drawingCanvas");
  let ctx = canvas.getContext("2d");
  jQuery.each(obj.body, function (i, val) {
    if (val.hasOwnProperty('body')) {
      // console.log(val.type);
      var x = Math.random() * (canvas.width - 100);
      var y = Math.random() * (canvas.height - 100);
      switch (val.type) {
        case "class":
          var width = 100, height = 100;
          ctx.beginPath();
          ctx.rect(x, y, width, height);
          ctx.fillStyle = 'black';
          ctx.fill();
          ctx.lineWidth = 1;
          ctx.strokeStyle = 'black';
          ctx.stroke();
          break;
        case "function":
          var width = 75, height = 75;
          ctx.beginPath();
          ctx.rect(x, y, width, height);
          ctx.fillStyle = 'gray';
          ctx.fill();
          ctx.lineWidth = 1;
          ctx.strokeStyle = 'black';
          ctx.stroke();
          break;
        case "for":
          console.log("We in for");
          var width = 50, height = 75;
          ctx.beginPath();
          ctx.rect(x, y, width, height);
          ctx.fillStyle = 'pink';
          ctx.fill();
          ctx.lineWidth = 1;
          ctx.strokeStyle = 'black';
          ctx.stroke();
          break;
        case "while":
          var width = 75, height = 50;
          ctx.beginPath();
          ctx.rect(x, y, width, height);
          ctx.fillStyle = 'red';
          ctx.fill();
          ctx.lineWidth = 1;
          ctx.strokeStyle = 'black';
          ctx.stroke();
          break;
        case "if":
          var width = 25, height = 40;
          ctx.beginPath();
          ctx.rect(x, y, width, height);
          ctx.fillStyle = 'purple';
          ctx.fill();
          ctx.lineWidth = 1;
          ctx.strokeStyle = 'black';
          ctx.stroke();
          break;
        case "else if":
          var width = 40, height = 40;
          ctx.beginPath();
          ctx.rect(x, y, width, height);
          ctx.fillStyle = 'blue';
          ctx.fill();
          ctx.lineWidth = 1;
          ctx.strokeStyle = 'black';
          ctx.stroke();
          break;
        case "else":
          var width = 40, height = 25;
          ctx.beginPath();
          ctx.rect(x, y, width, height);
          ctx.fillStyle = 'cyan';
          ctx.fill();
          ctx.lineWidth = 1;
          ctx.strokeStyle = 'black';
          ctx.stroke();
          break;
      }
      depthFirst(val);
    }
    else {
      console.log(val);
      var x = Math.random() * (canvas.width - 10);
      var y = Math.random() * (canvas.height - 10);
      switch(val){
        case "comment":
        var width = 10, height = 10;
        ctx.beginPath();
        ctx.rect(x, y, width, height);
        ctx.fillStyle = 'green';
        ctx.fill();
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'black';
        ctx.stroke();
        break;
      default:
        var width = 10, height = 10;
        ctx.beginPath();
        ctx.rect(x, y, width, height);
        ctx.fillStyle = 'gainsboro';
        ctx.fill();
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'black';
        ctx.stroke();
        break;
      }
    }
    // ctx.save();
  });
}

function breadthFirst(obj) {

  jQuery.each(obj.body, function (i, val) {
    console.log(i + " " + val);
  });
}

function depthCheckter(obj) {
  var depth = 0;
  var depthStack = [0];

  if (obj["body"] != undefined) {
    //body exists
    depthStack[depth] = obj.body.length;
    for (var i = 0; i < obj.body.length; i++) {

    }
  }
}
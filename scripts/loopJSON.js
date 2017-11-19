function depthFirst(obj)
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

function breadthFirst(obj)
{

  jQuery.each( obj.body, function(i, val ) {
        console.log(i + " " + val);
      });
}

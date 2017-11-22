function clean(lines)
{
  // deal with multi line lines
  var multi_line_regex = {
    "slash" :  /\/\s*$/,
    "plus" :   /\+\s*$/,
    "comma" :  /\,\s*$/,
    "list" :  /\[\s*$/, //TODO
    "dict" :  /\{\s*$/, //TODO
    "equal" :  /\=\s*$/ //TODO
  };

  var multiLine = false;
  var startMultiIndex;

  for(line in lines)
  {
    var l = lines[line];
    class ClassName {
      constructor() {

      }
    }

    if(multiLine == true)
    {
      //stay multi line
      if(l.match(multi_line_regex["slash"]) || l.match(multi_line_regex["plus"]) || l.match(multi_line_regex["comma"]) || l.match(multi_line_regex["list"]) || l.match(multi_line_regex["dict"]) || l.match(multi_line_regex["equal"]))
      {
        //add to start lines
        lines[startMultiIndex] = lines[startMultiIndex].concat(" " + l.trim());
        lines[line] = "";
        multiLine = true;
      }
      // last line in multi line
      else
      {
        //add to previous lines
        lines[startMultiIndex] = lines[startMultiIndex].concat(" " + l.trim());
        lines[line] = "";
        multiLine = false;
      }
    }
    else
    {
      //start multi line
      if(l.match(multi_line_regex["slash"]) || l.match(multi_line_regex["plus"]) || l.match(multi_line_regex["comma"])|| l.match(multi_line_regex["list"]) || l.match(multi_line_regex["dict"]) || l.match(multi_line_regex["equal"]))
      {
        startMultiIndex = line;
        multiLine = true;
      }
      // last line in multi line
      else
      {
        multiLine = false;
        lines[line] = l;
      }
    }
  }
  return(lines);
}

function parenthesesAreBalanced(string) {
  var parentheses = "[]{}()",
    stack = [],
    i, character, bracePosition;

  for(i = 0; character = string[i]; i++) {
    bracePosition = parentheses.indexOf(character);

    if(bracePosition === -1) {
      continue;
    }

    if(bracePosition % 2 === 0) {
      stack.push(bracePosition + 1); // push next expected brace position
    } else {
      if(stack.pop() !== bracePosition) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

function clean(lines)
{
  // deal with multi line lines
  // var multi_line_regex = {
  //   "slash" :  /\/\s*$/,
  //   "plus" :   /\+\s*$/,
  //   "comma" :  /\,\s*$/,
  //   "list" :  /\[\s*$/, //TODO
  //   "dict" :  /\{\s*$/, //TODO
  //   "equal" :  /\=\s*$/ //TODO
  // };

  var multiLine = false;
  var startMultiIndex;

  for(line in lines)
  {
    var l = lines[line];

    console.log(l);

    if(multiLine == true)
    {
      //stay multi line
      // if(l.match(multi_line_regex["slash"]) || l.match(multi_line_regex["plus"]) || l.match(multi_line_regex["comma"]) || l.match(multi_line_regex["list"]) || l.match(multi_line_regex["dict"]) || l.match(multi_line_regex["equal"]))
      if(l.match("/\/\s*$") || !parenthesesAreBalanced(lines[startMultiIndex]))
      {
        console.log("Still in multiline");
        //add to start lines
        lines[startMultiIndex] = lines[startMultiIndex].concat(" " + l.trim());
        lines[line] = "";
        multiLine = true;
      }
      // No longer in multiline
      else
      {
        console.log("No longer in multiline");
        //add to previous lines
        // lines[startMultiIndex] = lines[startMultiIndex].concat(" " + l.trim());
        // lines[line] = "";
        lines[line] = l;
        multiLine = false;
      }
    }
    else
    {
      //start multi line
      // if(l.match(multi_line_regex["slash"]) || l.match(multi_line_regex["plus"]) || l.match(multi_line_regex["comma"])|| l.match(multi_line_regex["list"]) || l.match(multi_line_regex["dict"]) || l.match(multi_line_regex["equal"]))
      if(l.match("/\/\s*$") || !parenthesesAreBalanced(l))
      {
        console.log("starting mulitline");
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

function parenthesesAreBalanced(string)
{
  var parentheses = "[]{}()",
    stack = [],
    i, character, bracePosition;

  for(i = 0; character = string[i]; i++)
  {
    bracePosition = parentheses.indexOf(character);

    if(bracePosition === -1) {
      continue;
    }

    if(bracePosition % 2 === 0)
    {
      // push next expected brace position
      stack.push(bracePosition + 1);
    } else {
      if(stack.pop() !== bracePosition)
      {
        return false;
      }
    }
  }

  return stack.length === 0;
}

function clean(lines)
{
  var multiLine = false;
  var startMultiIndex;

  for(line in lines)
  {
    var l = lines[line];

    console.log(line);
    // console.log(lines[startMultiIndex]);
    console.log(l);
    console.log(l.match(/\\\s*$/g));
    // console.log(!parenthesesAreBalanced(lines[startMultiIndex].concat(" " + l.trim())));

    if(multiLine == true)
    {
      // lines[startMultiIndex] = lines[startMultiIndex].concat(" " + l.trim());
      //stay multi line
      if(l.match(/\\\s*$/g)  || !parenthesesAreBalanced(lines[startMultiIndex].concat(" " + l.trim())))
      {
        //add to start lines
        lines[startMultiIndex] = lines[startMultiIndex].concat(" " + l.trim());
        lines[line] = "";
        multiLine = true;
      }
      // No longer in multiline
      else
      {
        if(parenthesesAreBalanced(lines[startMultiIndex].concat(" " + l.trim())))
        {
          console.log("Ending with concatination");
          lines[startMultiIndex] = lines[startMultiIndex].concat(" " + l.trim());
          lines[line] = "";
          multiLine = false;
        }
        // testing if current line is multiline
        // if(l.match(/\\\s*$/g) || !parenthesesAreBalanced(l))
        // {
        //   console.log("starting a new multiline");
        //   startMultiIndex = line;
        //   multiLine = true;
        // }
        else
        {

          // lines[startMultiIndex] = lines[startMultiIndex].concat(" " + l.trim());
          // lines[line] = "";
        //add to previous lines
        lines[line] = l;
        multiLine = false;
        }
      }
    }
    else
    {
      //start multi line
      if(l.match(/\\\s*$/g) || !parenthesesAreBalanced(l))
      {
        console.log("starting multi line");
        startMultiIndex = line;
        multiLine = true;
      }
      // not a multi line
      else
      {
        multiLine = false;
        lines[line] = l;
      }
    }
  }
  return(lines);
}

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

// this function concatinates multiline lines made using \s or unfinished parentheses 
function clean(lines)
{
  var multiLine = false;
  var startMultiIndex;

  for(line in lines)
  {
    var l = lines[line];

    if(multiLine == true)
    {
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
          lines[startMultiIndex] = lines[startMultiIndex].concat(" " + l.trim());
          lines[line] = "";
          multiLine = false;
        }
        else
        {
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

function multilineCommentsConcat(lines)
{
  var multiLine = false;
  var startMultiIndex;

  for(line in lines)
  {
    var l = lines[line];
    if(multiLine)
    {
      if(l.match("/'/'/'$"))
      {
        // end of multiline
      }
      else
      {
        // stay in multiline
      }
    }
    else
    {
      if(l.match("^/s*/'/'/'.*"))
      {
        // starting a multiline
        if(l.match("/'/'/'$"))
        {
          // starts and ends multiline on same line
        }
        else
        {
          // just starts multiline
        }
      }
      else
      {
        // not a multiline at all
      }
    }
  }
}
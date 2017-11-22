function parenthesesAreBalanced(string)
{
  var parentheses = "[]{}()",
    stack = [],
    i, character, bracePosition;

  for(i = 0; character = string[i]; i++)
  {
    bracePosition = parentheses.indexOf(character);

    if(bracePosition === -1)
    {
      continue;
    }

    if(bracePosition % 2 === 0)
    {
      stack.push(bracePosition + 1);
    }
    else
    {
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

    if(multiLine == true)
    {
      if(l.match("/\/\s*$") || !parenthesesAreBalanced(lines[startMultiIndex]))
      {
        lines[startMultiIndex] = lines[startMultiIndex].concat(" " + l.trim());
        lines[line] = "";
        multiLine = true;
      }
      else
      {
        if(l.match("/\/\s*$") || !parenthesesAreBalanced(l))
        {
          startMultiIndex = line;
          multiLine = true;
        }
        else
        {
        lines[line] = l;
        multiLine = false;
        }
      }
    }
    else
    {
      if(l.match("/\/\s*$") || !parenthesesAreBalanced(l))
      {
        startMultiIndex = line;
        multiLine = true;
      }
      else
      {
        multiLine = false;
        lines[line] = l;
      }
    }
  }
  return(lines);
}

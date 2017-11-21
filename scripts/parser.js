function depthStringGenerator(depthStack)
{
    var depthString = "outputJson";

    for(var itemDepth in depthStack)
        depthString = depthString.concat(".body[" + depthStack[itemDepth] + "]");

    return(depthString);
}

function parserFunction(lines)
{
    var pythonRegexDict = {
        "class":        "class .+:",
        "function":     "def .+:",
        "function2":     "def .+,",
        "for":          "for .+:",
        "while":        "while .+:",
        "if":           "if .+:",
        "else if":      "elif .+:",
        "else":         "else:",
        "try" :         "try:",
        "except" :      "except .*:",
        "comment":      "#"
      };

    var outputJson = {
        "type": "program",
        "name": fileName,
        "body": []
    };

    var depthStack = [0],
        previousDepth = -1,
        depthString,
        conditional,
        lastNF = false;

    for (line in lines)
    {
        // Skip line if it is blank or only has white spaces
        if(lines[line] == "" || /^\s*$/.test(lines[line])) continue;

        var currentDepth = (lines[line].search(/\S|$/)/4) >> 0;

        if(currentDepth < previousDepth)
        {
          var diff = previousDepth - currentDepth;
          for(var i = 0; i < diff; i++) depthStack.pop();
          depthStack[depthStack.length-1]++;
        }
        else if(currentDepth > previousDepth && previousDepth != -1)
        {
          depthStack.push(0);
        }
        else if(currentDepth == previousDepth)
        {
          depthStack[depthStack.length-1]++;
        }
        depthString = depthStringGenerator(depthStack);
        previousDepth = currentDepth;

        if(lines[line].match(pythonRegexDict["class"]))
        {
            // define a class
            try
            {
                eval(depthString+"  = {'type': 'class', 'body':[]}");
            }
            catch(e)
            {
                console.log(line);
                console.log(lines[line]);
                throw(e);

            }
        }
        else if(lines[line].match(pythonRegexDict["function"]) || lines[line].match(pythonRegexDict["function2"]))
        {
            // define a function
            try
            {
                eval(depthString+"  = {'type': 'function', 'body':[]}");
            }
            catch(e)
            {
                console.log(line);
                console.log(lines[line]);
                throw(e);
            }
        }
        else if(lines[line].match(pythonRegexDict["for"]))
        {
            // for loop
            conditional = lines[line].substring(lines[line].lastIndexOf("for ")+4,lines[line].lastIndexOf(":"));
            try
            {
                eval(depthString+"  = {'type': 'for', 'iteration': conditional, 'body':[]}");
            }
            catch(e)
            {
                console.log(line);
                console.log(lines[line]);
                throw(e);
            }
        }
        else if (lines[line].match(pythonRegexDict["while"]))
        {
            // while loop
            conditional = lines[line].substring(lines[line].lastIndexOf("while ")+6,lines[line].lastIndexOf(":"));
            try
            {
                eval(depthString+"  = {'type': 'while', 'condition': conditional, 'body':[]}");
            }
            catch(e)
            {
                console.log(line);
                console.log(lines[line]);
                throw(e);
            }
        }
        else if (lines[line].match(pythonRegexDict["else"]))
        {
            // else statement
            try
            {
                eval(depthString+"  = {'type': 'else', 'body':[]}");
            }
            catch(e)
            {
                console.log(line);
                console.log(lines[line]);
                throw(e);
            }
        }
        else if (lines[line].match(pythonRegexDict["else if"]))
        {
            // else if statement
            conditional = lines[line].substring(lines[line].lastIndexOf("elif ")+5,lines[line].lastIndexOf(":"));
            try
            {
                eval(depthString+"  = {'type': 'else if', 'condition': conditional, 'body':[]}");
            }
            catch(e)
            {
                throw(e)
                console.log(line);
                console.log(lines[line]);
            }
        }
        else if (lines[line].match(pythonRegexDict["if"]))
        {
            // if statement
            conditional = lines[line].substring(lines[line].lastIndexOf("if ")+3,lines[line].lastIndexOf(":"));
            try
            {
                eval(depthString+"  = {'type': 'if', 'condition': conditional, 'body':[]}");
            }
            catch(e)
            {
                console.log(line);
                console.log(lines[line]);
                throw(e);
            }
        }
        else if (lines[line].match(pythonRegexDict["try"]))
        {
            // try statement
            conditional = lines[line].substring(lines[line].lastIndexOf("try ")+5,lines[line].lastIndexOf(":"));
            try
            {
                eval(depthString+"  = {'type': 'try', 'body':[]}");
            }
            catch(e)
            {
                console.log(line);
                console.log(lines[line]);
                throw(e);
            }
        }
        else if (lines[line].match(pythonRegexDict["except"]))
        {
            // except statement
            conditional = lines[line].substring(lines[line].lastIndexOf("except ")+7,lines[line].lastIndexOf(":"));
            try
            {
                eval(depthString+"  = {'type': 'except', 'condition': conditional, 'body':[]}");
            }
            catch(e)
            {
                console.log(line);
                console.log(lines[line]);
                throw(e);
            }
        }
        else if (lines[line].match(pythonRegexDict["comment"]))
        {
            // comment
            lines[line] = lines[line].trim();
            try
            {
                eval(depthString+"  = lines[line]");
            }
            catch(e)
            {
                console.log(line);
                console.log(lines[line]);
                throw(e);
            }
        }
        else
        {
            // non foldable line
            lines[line] = lines[line].trim();
            try
            {
                eval(depthString+"  = lines[line]");
            }
            catch(e)
            {
                console.log(line);
                console.log(lines[line]);
                throw(e);
            }
        }
        // previousDepth = currentDepth;
    }
    return outputJson;
}

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
        if(lines[line] == "" || /^\s*$/.test(lines[line])) continue;
        
        var currentDepth = (lines[line].search(/\S|$/)/4) >> 0;

       if(currentDepth < previousDepth)
       {
            depthStack.pop();
            depthStack[depthStack.length-1]++;
       }
        
        console.log(depthStack);

        depthString = depthStringGenerator(depthStack);
        depthStack.push(0);

        if(lines[line].match(pythonRegexDict["class"]))
        {
            // define a class
            
            if(lastNF == true)
            {
            depthStack.pop();
            depthStack[depthStack.length-1]++;
            }
            lastNF = false;

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
        else if(lines[line].match(pythonRegexDict["function"]))
        {
            // define a function
            
            if(lastNF == true)
            {
            depthStack.pop();
            depthStack[depthStack.length-1]++;
            }
            lastNF = false;

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
            
            if(lastNF == true)
            {
            depthStack.pop();
            depthStack[depthStack.length-1]++;
            }
            lastNF = false;

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
            
            if(lastNF == true)
            {
            depthStack.pop();
            depthStack[depthStack.length-1]++;
            }
            lastNF = false;

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
            
            if(lastNF == true)
            {
            depthStack.pop();
            depthStack[depthStack.length-1]++;
            }
            lastNF = false;

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
            
            if(lastNF == true)
            {
            depthStack.pop();
            depthStack[depthStack.length-1]++;
            }
            lastNF = false;

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
            
            if(lastNF == true)
            {
            depthStack.pop();
            depthStack[depthStack.length-1]++;
            }
            lastNF = false;

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
            // if statement
            
            if(lastNF == true)
            {
            depthStack.pop();
            depthStack[depthStack.length-1]++;
            }
            lastNF = false;

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
            // if statement
            
            if(lastNF == true)
            {
            depthStack.pop();
            depthStack[depthStack.length-1]++;
            }
            lastNF = false;

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
            lastNF = true;
            depthStack.pop();
            depthStack[depthStack.length-1]++;
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
            lastNF = true;
            depthStack.pop();
            depthStack[depthStack.length-1]++;
            lines[line] = lines[line].trim();
            try
            {
                eval(depthString+"  = lines[line]");
            }
            catch(e)
            {
                console.log(depthString+" = " + lines[line]);
                console.log(line);
                console.log(lines[line]);
                throw(e);
            }
        }
        previousDepth = currentDepth;
    }
    console.log(outputJson);
    return outputJson;
}

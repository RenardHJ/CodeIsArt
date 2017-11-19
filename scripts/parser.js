function depthStringGenerator(depthStack){
    var depthString = "outputJson";
    for(var itemDepth in depthStack){
        depthString = depthString.concat(".body[" + depthStack[itemDepth] + "]");
    }
    return(depthString)
}

function parserFunction(lines){
    var pythonRegexDict = {
        "class": "class .+:",
        "function": "def .+:",
        "for": "for .+:",
        "while": "while .+:",
        "if": "if .+:",
        "else if": "elif .+:",
        "else": "else:",
        "comment": "#"
      };

    var outputJson = {
        "type": "program",
        "name": fileName,
        "body": []
    };

    var depthStack = [0];
    var previousDepth = -1;
    var depthString;
    for (var line = 0; line < lines.length; line++) {
        // TODO: parse line
        var currentDepth = (lines[line].search(/\S|$/)/4) >> 0;

        // if(currentDepth < previousDepth){
        //     depthStack.pop();
        // }

        // if(currentDepth == depthStack.length-1){
        //     depthStack.push(0);
        // }
        if(currentDepth < previousDepth){
            depthStack.pop();
            depthStack[depthStack.length-1]++;
        }

        depthString = depthStringGenerator(depthStack);

        depthStack.push(0);

        if (lines[line].match(pythonRegexDict["class"])) {
            // define a class
            eval(depthString+"  = {'type': 'class', 'body':[]}");
        }
        else if (lines[line].match(pythonRegexDict["function"])) {
            // define a function
            eval(depthString+"  = {'type': 'function', 'body':[]}");
        }
        else if (lines[line].match(pythonRegexDict["for"])) {
            // for loop
            eval(depthString+"  = {'type': 'for', 'iteration': '???', 'body':[]}");
        }
        else if (lines[line].match(pythonRegexDict["while"])) {
            // while loop
            eval(depthString+"  = {'type': 'while', 'condtion': '???', 'body':[]}");
        }
        else if (lines[line].match(pythonRegexDict["else"])) {
            // else statement
            eval(depthString+"  = {'type': 'else', 'body':[]}");
        }
        else if (lines[line].match(pythonRegexDict["else if"])) {
            // else if statement
            eval(depthString+"  = {'type': 'else if', 'condition': '???', 'body':[]}");
        }
        else if (lines[line].match(pythonRegexDict["if"])) {
            // if statement
            eval(depthString+"  = {'type': 'if', 'condition': '???', 'body':[]}");
        }
        else if (lines[line].match(pythonRegexDict["comment"])) {
            // comment
            depthStack.pop();
            depthStack[depthStack.length-1]++;
            eval(depthString+"  = lines[line]");
        }
        else {
            // non foldable line
            depthStack.pop();
            depthStack[depthStack.length-1]++;
            eval(depthString+"  = lines[line]");
        }
        previousDepth = currentDepth;
    }
}

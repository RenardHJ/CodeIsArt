function depthStringGenerator(depthStack){
    var depthString = "outputJson";
    for(var itemDepth in depthStack){
        depthString = depthString.concat(".body[" + depthStack[itemDepth] + "]");
    }
    return(depthString)
}

function parserFunction(lines){
    var pythonRegexDict = {
        "class": "^\s*class .+:",
        "function": "^\s*def .+:",
        "for": "^\s*for .+:",
        "while": "^\s*while .+:",
        "if": "^\s*if .+:",
        "else if": "^\s*elif .+:",
        "else": "^\s*else:",
        "try" : "^\s*try:",
        "except" : "^\s*except .*:",
        "comment": "^\s*#"
      };

    var outputJson = {
        "type": "program",
        "name": fileName,
        "body": []
    };

    var depthStack = [0];
    var previousDepth = -1;
    var depthString;
    var conditional;
    for (var line = 0; line < lines.length; line++) {
        // TODO: parse line
        var currentDepth = (lines[line].search(/\S|$/)/4) >> 0;

        if(currentDepth < previousDepth){
            depthStack.pop();
            depthStack[depthStack.length-1]++;
        }

        depthString = depthStringGenerator(depthStack);

        depthStack.push(0);

        if (lines[line].match(pythonRegexDict["class"])) {
            // define a class
            try
            {
            eval(depthString+"  = {'type': 'class', 'body':[]}");
            }
            catch(e){
                console.log(line);
                console.log(lines[line]);
                throw(e);

            }
        }
        else if (lines[line].match(pythonRegexDict["function"])) {
            // define a function
            try
            {
            eval(depthString+"  = {'type': 'function', 'body':[]}");
            }
            catch(e){
                console.log(line);
                console.log(lines[line]);
                throw(e);           
            }
        }
        else if (lines[line].match(pythonRegexDict["for"])) {
            // for loop
            conditional = lines[line].substring(lines[line].lastIndexOf("for ")+4,lines[line].lastIndexOf(":"));
            try
            {
            eval(depthString+"  = {'type': 'for', 'iteration': conditional, 'body':[]}");
            }
            catch(e){
                console.log(line);
                console.log(lines[line]);
                throw(e);
            }
        }
        else if (lines[line].match(pythonRegexDict["while"])) {
            // while loop
            conditional = lines[line].substring(lines[line].lastIndexOf("while ")+6,lines[line].lastIndexOf(":"));
            try
            {
            eval(depthString+"  = {'type': 'while', 'condition': conditional, 'body':[]}");
            }
            catch(e){
                console.log(line);
                console.log(lines[line]);
                throw(e);
            }
        }
        else if (lines[line].match(pythonRegexDict["else"])) {
            // else statement
            try
            {
            eval(depthString+"  = {'type': 'else', 'body':[]}");
            }
            catch(e){
                console.log(line);
                console.log(lines[line]);
                throw(e);
            }
        }
        else if (lines[line].match(pythonRegexDict["else if"])) {
            // else if statement
            conditional = lines[line].substring(lines[line].lastIndexOf("elif ")+5,lines[line].lastIndexOf(":"));
            try
            {
            eval(depthString+"  = {'type': 'else if', 'condition': conditional, 'body':[]}");
            }
            catch(e){
                throw(e)
                console.log(line);
                console.log(lines[line]);
            }
        }
        else if (lines[line].match(pythonRegexDict["if"])) {
            // if statement
            conditional = lines[line].substring(lines[line].lastIndexOf("if ")+3,lines[line].lastIndexOf(":"));
            try
            {
            eval(depthString+"  = {'type': 'if', 'condition': conditional, 'body':[]}");
            }
            catch(e){
                console.log(line);
                console.log(lines[line]);
                throw(e);
            }
        }
        else if (lines[line].match(pythonRegexDict["try"])) {
            // if statement
            conditional = lines[line].substring(lines[line].lastIndexOf("try ")+5,lines[line].lastIndexOf(":"));
            try
            {
                eval(depthString+"  = {'type': 'try', 'body':[]}");
            }
            catch(e){
                console.log(line);
                console.log(lines[line]);
                throw(e);
            }
        }
        else if (lines[line].match(pythonRegexDict["except"])) {
            // if statement
            conditional = lines[line].substring(lines[line].lastIndexOf("except ")+7,lines[line].lastIndexOf(":")); 
            try
            {
                eval(depthString+"  = {'type': 'except', 'condition': conditional, 'body':[]}");
            }
            catch(e){
                console.log(line);
                console.log(lines[line]);
                throw(e);
            }
        }
        else if (lines[line].match(pythonRegexDict["comment"])) {
            // comment
            depthStack.pop();
            depthStack[depthStack.length-1]++;
            lines[line] = lines[line].trim();
            try
            {
            eval(depthString+"  = lines[line]");
            }
            catch(e){
                console.log(line);
                console.log(lines[line]);
                throw(e);
            }
        }
        else {
            // non foldable line
            depthStack.pop();
            depthStack[depthStack.length-1]++;
            lines[line] = lines[line].trim();
            try
            {
            eval(depthString+"  = lines[line]");
            }
            catch(e){
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

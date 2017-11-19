var reader = new FileReader();
reader.onload = function (progressEvent) {
    // Entire file
    console.log(this.result);

    var outputJson = {
        "type": "program",
        "name": fileName,
        "body": []
    };

    // By lines
    var lines = this.result.split('\n');
    for (var line = 0; line < lines.length; line++) {
        // TODO: parse line
        var depth = lines[line].search(/\S|$/) % 4;
        console.log(depth);
        console.log(lines[line]);
        if (lines[line].match(pythonRegexDict["class"])) {
            // define a class
            console.log("class");
        }
        else if (lines[line].match(pythonRegexDict["function"])) {
            // define a function
            console.log("function");
        }
        else if (lines[line].match(pythonRegexDict["for"])) {
            // for loop
            console.log("for");
        }
        else if (lines[line].match(pythonRegexDict["while"])) {
            // while loop
            console.log("while");
        }
        else if (lines[line].match(pythonRegexDict["else"])) {
            // else statement
            console.log("else");
        }
        else if (lines[line].match(pythonRegexDict["else if"])) {
            // else if statement
            console.log("else if");
        }
        else if (lines[line].match(pythonRegexDict["if"])) {
            // if statement
            console.log("if");
        }
        else {
            // non foldable line
            console.log("Non-foldable");
        }

    }
}

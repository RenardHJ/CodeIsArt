let isValid = false;
let imageDownloadable = false;
let file;
let drawMethod = "drawMethod1";

var pythonRegexDict = {
  "class": "class .+:",
  "function": "def .+:",
  "for": "for .+:",
  "while": "while .+:",
  "if": "if .+:",
  "else if": "elif .+:",
  "else": "else:"
};

$(document).ready(function() {
  console.log("Document Loaded.");
});

// check if a correct file type is selected
$("#fileinput").change(function() {
  if (this.value.substr(this.value.length - 3) != ".py" && this.value.substr(this.value.length - 3) != ".json") {
    isValid = false;
    alert("Not a .py file!");
  } else {
    isValid = true;

    file = this.value;
    fileName = file.split('.')[0];
    fileName = fileName.split("C:\\fakepath\\")[1];
    console.log(fileName);

    file = this.files[0];

    if (this.value.substr(this.value.length - 3) == ".py"){
      var reader = new FileReader();
      reader.onload = function(progressEvent) {
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
          if(lines[line].match(pythonRegexDict["class"])) {
            // define a class
            console.log("class");
          }
          else if (lines[line].match(pythonRegexDict["function"])){
            // define a function
            console.log("fucntion");
          }
          else if (lines[line].match(pythonRegexDict["for"])) {
            // for loop
            console.log("for");
          }
          else if (lines[line].match(pythonRegexDict["while"])){
            // while loop
            console.log("while");
          }
          else if (lines[line].match(pythonRegexDict["else"])) {
            // else statement
            console.log("else");
          }
          else if (lines[line].match(pythonRegexDict["else if"])){
            // else if statement
            console.log("else if");
          }
          else if (lines[line].match(pythonRegexDict["if"])){
            // if statement
            console.log("if");
          }
          else{
            // non foldable line
            console.log("Non-foldable");
          }

        }
      }
    }
  };
  reader.readAsText(file);
});

// navigate the tab
$(".nav a").on("click", function() {
  $(".nav .active").removeClass("active");
  $(this).parent().addClass("active");

  drawMethod = $(this).parent().attr('id');
  console.log(drawMethod);

  return false;
});

// If create image button is clicked
$(".createPic").on("click", function() {
  if (!isValid) alert("No .py or .json file!");
  else {
    switch (drawMethod) {
      case "drawMethod1":
        imageDownloadable = false;
        temp1();
        console.log("temp1");
        imageDownloadable = true;
        break;
      case "drawMethod2":
        imageDownloadable = false;
        temp2();
        console.log("temp2");
        imageDownloadable = true;
        break;
    }
  }

  return false;
});

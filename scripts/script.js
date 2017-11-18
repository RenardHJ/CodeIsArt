let isValid = false;
let imageDownloadable = false;
let file;
let drawMethod;

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

    var reader = new FileReader();
    reader.onload = function(progressEvent) {
      // Entire file
      console.log(this.result);

      // By lines
      var lines = this.result.split('\n');
      for (var line = 0; line < lines.length; line++) {
        // TODO: parse line
        console.log(lines[line]);
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
        // TODO: draw function 1
        console.log("temp1");
        imageDownloadable = true;
        break;
      case "drawMethod2":
        // TODO: draw function 2
        console.log("temp2");
        imageDownloadable = true;
        break;
    }
  }

  return false;
});

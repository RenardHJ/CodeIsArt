let isValid = false;
let imageDownloadable = false;
let file;
let drawMethod = "drawMethod1";
let json;

$(document).ready(function()
{
  console.log("Document Loaded.");
});

// check if a correct file type is selected
$("#fileinput").change(function()
{
  if (this.value.substr(this.value.length - 3) != ".py" && this.value.substr(this.value.length - 5) != ".json") {
    isValid = false;
    alert("Not a .py file!");
  } else {
    isValid = true;

    file = this.value;
    fileName = file.split('.')[0];
    fileName = fileName.split("C:\\fakepath\\")[1];
    file = this.files[0];

    if (this.value.substr(this.value.length - 3) == ".py")
    {
      // parser.js
      //json = parse();
      var reader = new FileReader();
      reader.onload = function (progressEvent) {
      var lines = this.result.split('\n');
      json = parserFunction(lines);
      }
    }
    else
    {
      var reader = new FileReader();
      reader.onload = function (progressEvent) {
        // Entire file
        console.log(this.result);
        json = JSON.parse(this.result);
        console.log(json);
      }
    }
  };
  reader.readAsText(file);
});

// navigate the tab
$(".nav a").on("click", function()
{
  $(".nav .active").removeClass("active");
  $(this).parent().addClass("active");

  drawMethod = $(this).parent().attr('id');
  console.log(drawMethod);

  return false;
});

// If create image button is clicked
$(".createPic").on("click", function()
{
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

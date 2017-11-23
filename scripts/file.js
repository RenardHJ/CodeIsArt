// check if a correct file type is selected
$("#fileinput").change(function()
{
  if (this.value.substr(this.value.length - 3) != ".py" && this.value.substr(this.value.length - 4) != ".ppc") {
    isValid = false;
    alert("Not a .py file!");
  } else {
    //isValid = true;
    file = this.value;
    fileName = file.split('.')[0];
    fileName = fileName.split("C:\\fakepath\\")[1];
    file = this.files[0];

    if (this.value.substr(this.value.length - 3) == ".py")
    {
      var reader = new FileReader();
      reader.onload = function (progressEvent) {
        if(this.result == "")
        {
            alert("File Empty!");
            isValid = false;
        }
        else
        {
            var lines = this.result.split("\n");
            lines = clean(lines);
            json = parserFunction(lines);
            isValid = parser_success;
        }
      }
    }
    else
    {
      var reader = new FileReader();
      reader.onload = function (progressEvent) {
        if(this.result == "")
        {
            alert("File Empty!");
            isValid = false;
        }
        else
        {
            json = JSON.parse(this.result);
            isValid = true;
        }
      }
    }
  };
  reader.readAsText(file);
});

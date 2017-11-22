// If create image button is clicked
$(".createPic").on("click", function()
{
  if (!isValid) alert("Can not draw file! Make sure that a valid .py file is selected.");
  else
    switch (drawMethod) {
      case "drawMethod1":
        imageDownloadable = false;
        squareSituation();
        imageDownloadable = true;
        break;
    }
  return false;
});

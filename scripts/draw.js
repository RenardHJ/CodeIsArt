// If create image button is clicked
$(".createPic").on("click", function()
{
  if (!isValid) alert("No .py or .ppc file!");
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

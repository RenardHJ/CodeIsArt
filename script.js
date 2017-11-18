let isValid = false;
let imageDownloadable = false;
let file;

// check if a correct file type is selected
$("#fileinput").change(function()
{
    if(this.value.substr(this.value.length - 3) != ".py" && this.value.substr(this.value.length - 3) != ".json")
    {
        isValid = false;
        alert("Not a .py file!");
    }
    else isValid = true;

    file = this.value;
});

// navigate the tab
$(".nav a").on("click", function()
{
    $(".nav .active").removeClass("active");
    $(this).parent().addClass("active");

    return false;
});

// if download button is clicked
$(".downloadPic").on("click", function()
{
    if(!imageDownloadable) alert("No image to download!");

    return false;
});

// If create image button is clicked
$(".createPic").on("click", function()
{
    if(!isValid) alert("No .py or .json file!");

    return false;
});

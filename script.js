let isValid = false;
let imageDownloadable = false;
let file;

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

$(".nav a").on("click", function()
{
    $(".nav .active").removeClass("active");
    $(this).parent().addClass("active");

    return false;
});

$(".downloadPic").on("click", function()
{
    if(!imageDownloadable) alert("No image to download!");

    return false;
});

$(".createPic").on("click", function()
{
    if(!isValid) alert("No .py or .json file!");

    return false;
});

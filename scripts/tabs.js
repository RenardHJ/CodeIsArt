// navigate the tab
$(".nav a").on("click", function()
{

    if(!$(this).parent().hasClass("disabled"))
    {
        $(".nav .active").removeClass("active");
        $(this).parent().addClass("active");

        drawMethod = $(this).parent().attr('id');
    }

  return false;
});

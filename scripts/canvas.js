$(".clearCanvas").on("click", function()
{
    clear();

    noFill();
    stroke("lightgray");
    rect(0, 0, canvasWidth - 1, canvasHeight - 1);
    stroke("black");
});

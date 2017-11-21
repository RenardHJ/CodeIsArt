$(".clearCanvas").on("click", function()
{
    var canvas = document.getElementById("drawingCanvas");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
});

var dx = 5;
var dy = 5;
var x = 150;
var y = 100;

function myCanvas() {
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  context.clearRect(0, 0, 300, 200); //무효화
  context.beginPath();
  context.fillStyle = "red";
  context.arc(x, y, 20, 0, Math.PI * 2, true);
  context.closePath();
  context.fill();

  if (x < (0 + 20) || x > (300 - 20)) {
    dx = -dx;
  }
  if (y < (0 + 20) || y > (200 - 20)) {
    dy = -dy;
  }
  x += dx;
  y += dy;

}
setInterval(myCanvas, 0.1);

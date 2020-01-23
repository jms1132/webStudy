var numX;
var numY;
var numDx;
var numDy;

var value_x;
var value_y;
var value_dx;
var value_dy;
var id;



function check() {
  var x = document.getElementById('x');
  numX = parseInt(x.value);
  var y = document.getElementById('y');
  numY = parseInt(y.value);
  var dx = document.getElementById('dx');
  numDx = parseInt(dx.value);
  var dy = document.getElementById('dy');
  numDy = parseInt(dy.value);

  var exp_x = /^\d+$/;
  var exp_y = /^\d+$/;
  var exp_dx = /^\d+$/;
  var exp_dy = /^\d+$/;

  if (x.value.match(exp_x)) {
    if (numX >= 300 && numX <= 500) {
      value_x = true;
    } else {
      x.value = "";
      value_x = false;
    }
  } else {
    x.value = "";
    value_x = false;
  }

  if (y.value.match(exp_y)) {
    if (numY >= 200 && numY <= 400) {
      value_y = true;
    } else {
      x.value = "";
      value_y = false;
    }
  } else {
    y.value = "";
    value_y = false;
  }

  if (dx.value.match(exp_dx)) {
    if (numDx >= 5 && numDx <= 10) {
      value_dx = true;
    } else {
      dx.value = "";
      value_dx = false;
    }
  } else {
    dx.value = "";
    value_dx = false;
  }

  if (dy.value.match(exp_dy)) {
    if (numDy >= 5 && numDy <= 10) {
      value_dy = true;
    } else {
      dy.value = "";
      value_dy = false;
    }
  } else {
    dy.value = "";
    value_dy = false;
  }

  if (value_x == false || value_y == false || value_dx == false || value_dy == false) {
    alert("조건에 맞는 값을 입력해주세요.");
  } else {
    alert("조건에 맞는 값입니다.");
  }
}

function draw() {
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");

  if (value_x == true && value_y == true && value_dx == true && value_dy == true) {

    context.clearRect(0, 0, 800, 400); //무효화
    context.beginPath();
    context.fillStyle = "red";
    context.arc(numX, numY, 20, 0, Math.PI * 2, true);
    context.closePath();
    context.fill();
    if (numX < (0 + 20) || numX > (800 - 20)) {
      numDx = -numDx;
    }
    if (numY < (0 + 20) || numY > (400 - 20)) {
      numDy = -numDy;
    }
    numX += numDx;
    numY += numDy;
  } else {
    alert("조건값이 맞지 않아 실행할 수 없습니다.");
  }

}

function start() {
  id=setInterval(draw, 0.1);

}
function stop(){
  clearInterval(id);
}

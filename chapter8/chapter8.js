function example01() {
  var now = new Date();
  document.write(now);
}

function example02() {
  document.write("Hello World!");
}

function example03() {
  document.write("Hello World!");

}

function example04() {
  alert('반갑습니다.')
}

function example05() {
  var x;
  x = "Hello Wordld!";
  alert(x);
}

function example06() {
  var s;
  s = 100;
  document.write(s + "<br>");
  s = "정민지";
  document.write(s + "<br>");
}

function example07() {
  var s = "Hello World";
  var t = "How are You" + "today?";
  document.write(s + "<br>");
  document.write(t + "<br>");
  document.write(s.toUpperCase() + "<br>");
}

function example08() {
  var age = prompt("나이를 입력하세요", "만나이로 입력합니다.");
}

function example09() {
  var x, y;
  var input;

  input = prompt("정수를 입력하시오", "정수로");
  x = parseInt(input);

  input = prompt("정수를 입력하시오", "정수로");
  y = parseInt(input);

  document.write(x + y + "<br>");
}


function calc() {
  var x = document.getElementById("x").value;
  var y = document.getElementById("y").value;

  var sum = parseInt(x) + parseInt(y);
  console.log(sum, x, y);
  document.getElementById("sum").value = sum;

}

function example11() {
  e = document.getElementById("test");
  e.style.color = "red";
}

function example12() {
  var msg = "";
  var time = new Date().getHours();
  if (time < 12) {
    msg = "Good Morning";
  } else if (time < 18) {
    msg = "Good Afternoon";
  } else {
    msg = "Good evening";
  }
  alert(msg);

}

function example13() {
  var grade = prompt("성적을 입력하시오:", "A-F사이의 문자로");
  switch (grade) {
    case 'A':
      alert("잘했어요!");
      break;
    case 'B':
      alert("좋은 점수군요");
      break;
    case 'C':
      alert("괜찮은 점수군요");
      break;
    case 'D':
      alert("좀더 노력하세요");
      break;
    case 'F':
      alert("다음학기 수강하세요");
      break;
    default:
      alert("알수없는 학점입니다.")
  }
}

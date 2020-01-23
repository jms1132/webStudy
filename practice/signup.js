function checkName() {
  var elemName = document.getElementById('name');
  var expName = /^[A-Za-z가-힣]{2,8}$/;
  var str= document.getElementById('name_msg');
  if (elemName.value.match(expName)) {
    return true;
  } else {
    str.innerHTML="이름을 제대로 입력해주세요.";
    elemName.value="";
  }
}

function checkNumber1() {
  var elemNumber = document.getElementById('number1');
  var expNumber = /^[0-9]{6}$/;
  if (elemNumber.value.match(expNumber)) {
    return true;
  } else {
    alert("주민번호를 제대로 입력해주세요.");
    elemNumber.value="";

  }
}
function checkNumber2() {
  var elemNumber2 = document.getElementById('number2');
  var expNumber2 = /^[0-9]{7}$/;
  if (elemNumber2.value.match(expNumber2)) {
    return true;
  } else {
    alert("주민번호를 제대로 입력해주세요.");
    elemNumber2.value="";

  }
}

function checkId(){
  var elemId = document.getElementById('id');
  var expNumber2 = /^[0-9]+$/;

}

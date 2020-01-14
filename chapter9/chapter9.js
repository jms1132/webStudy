function example10() {
  var x;
  var input;

  input = prompt("1~100 사이의 정수를 입력해주세요.");
  x = parseInt(input);

  if (x > 100) {
    alert("정수" + x + ", 은(는) 100보다 작지 않습니다.")
  }
}

function example11() {
  var i = 0;
  var x = 0;

  for (i = 1; i <= 100; i++) {
    x += i;
  }
  alert(x);
}

function example12() {
  var x = ["수성", "금성", "지구", "화성", "목성", "토성", "천왕성", "해왕성"];
  var i = 0;
  while(true){
    alert(x[i]);
    i++;
    if(i>7){
      i=0;
    }
  }
}

function example13(){
  var game= confirm("게임 한판 하실래요?");
  var x=game;

  function process(x){
    if(x==true){
      alert("좋습니다. 게임을 시작하죠.");
    }else{
      alert("그럼 나중에 합시다.");
    }
  }
  if(x==true){
    alert("좋습니다. 게임을 시작하죠.");
  }else{
    alert("그럼 나중에 합시다.");
  }
}

function example14(){
  var i;
  var music = new Array("가수", "")
}

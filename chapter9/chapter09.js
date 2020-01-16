function example6() {
  var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var today = new Date();
  document.write("It is " + month[today.getMonth()]);
}

function example7() {
  var movie = new Array("터미네이터", "트랜스포머");
  movie.push("맨오브스틸");
  movie[movie.length - 2] = "스파이더맨";
  alert(movie[movie.length - 1]);
}

function example8() {

  var arr = ["사과", "오렌지", "귤", "당근", "케일"];
  var fruit = Math.floor(Math.random() * 5 + 0);
  alert(arr[fruit]);
}

function example9() {
  vjar arr = ["hello", 10, 32.6, true];

  function find(arr, value) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == value) {
        return i;
      }
    }
  }
  alert(arr.indexOf("hello"));
  // document.write(arr.indexOf("hello"));
}

function example10() {
  var str;

  function check(str) {
    for (var i = 0; i < str.length; i++) {
      if (str[i] == 'X') {
        return true;
      } else if (str[i + 1] == 'X') {
        return true;
      } else if (str[i + 2] == 'X') {
        return true;
      }
    }
    return false;
  }
  document.write(check('buy XXX now'));
}

function example11() {
  function setCal() {
    var today = new Date();
    var month = today.getMonth() + 1;
    var day = today.getDate();
    document.write(month + "월 " + day + "일");
  }
  setTimeout(setCal(), 86400);
}

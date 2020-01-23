$(document).ready(function() {
  // 484페이지
  $button1 = $("#button1"),
    $button2 = $("#button2"),
    $result = $("#result"),
    $div1 = $("#div1");

  $button1.click(function() {
    var color = $div1.css("background-color");
    $result.text("background-color:" + color);
  });
  $button2.click(function() {
    $div1.css("background-color", "red");
  });



  // 486페이지
  $buttonAdd = $("#buttonAdd"),
    $div2 = $("#div2");

  $buttonAdd.click(function() {
    $div2.addClass("warning");
  });

  //506페이지
  var s = '['+'{"name":"Hong", "age":"21"},'+
  '{"name":"Kim", "age":"22"},'+
  '{"name":"Park", "age":"23"}]';

  var students = JSON.parse(s);

  students[1].name="Lee";
  document.getElementById("name").innerHTML= students[1].name;
  document.getElementById("age").innerHTML = students[1].age;
});

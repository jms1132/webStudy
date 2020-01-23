$(document).ready(function() {
  //문제1
  $str = $("#str"),
    $hide = $("#hide"),
    $show = $("#show");

  $hide.click(function(event) {
    $str.hide();
  });
  $show.click(function(event) {

    $str.show();
  });

  //문제2
  var $input = $("#inputText");

  $input.keyup(function(event) {
    document.getElementById("copy").innerHTML = $input.val();
  });

  //문제3

  var $pre = $("#pre"),
    $next = $("#next"),
    $div = $("#div"),
    move = 0;


  $next.click(function() {

    move += 50;
    $div.animate({
      left: move + 'px',
      opacity: '0.5'
    });


  });

  $pre.click(function() {
    move -= 50;
    $div.animate({
      left: move + 'px',
      opacity: '0.5'
    });
  });

  //문제4
  $hello = $("#hello"),
    $run = $("#run");

  $hello.css({
    "border": "2px solid green",
    "background-color": "lightgreen",
    "width": "200px",
    "position" :"relative"
  });
  $run.click(function() {
    move +=500;
    $hello.animate({
      left: move + 'px',
      top: move + 'px'
    });
    $hello.css({
      "transform": "scale(5.0)"
    });

  });
});

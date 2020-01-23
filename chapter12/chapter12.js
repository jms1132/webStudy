$(document).ready(function() {
  var i = 0;
  var pObject = null,
    container = null;

  $("div.out").mouseover(function() {
    $("p:first").text("mouse over");
    $("p:last").text(++i);
  });

  $("button").click(function() {
    $("#dog").show().fadeOut("slow").slideDown("slow");
  });

  $("#text").click(function() {
    alert($("#target").text());
  });

  $("#html").click(function() {
    alert($("#target").html());
  });


  // remove.html
  var $p = $("p"),
    $container = $(".container"),
    $button1 = $("#button1"),
    $button2 = $("#button2"),
    $button3 = $("#button3"),
    $button3 = $("#button4");

  $p.css({
    "background-color": "yellow"
  });
  $container.css({
    "height": "80px",
    "width": "200px",
    "border": "1px dotted red"
  });
  $container.mouseover(function(event) {
    $container.css({
      "border": "2px dotted blue"
    });
  });
  $container.mouseout(function(event) {
    $container.css({
      "border": "1px dotted red"
    });
  });
  $button1.click(
    function(event1) {
      $container.remove();
    });
  $button2.click(
    function(event2) {
      $container.empty();
    });

  // change_div.html
  var $modWidth = 50,
    $div = $("div");


  $div.click(function() {
    $(this).width($modWidth);

    if(!$(this).hasClass("next")) {
      $(this).hasClass("next");
      console.log("next class create");
    } else {
      $(this).removeClass("next");
      console.log("next class show");
    }
    $modWidth -= 8;
  });


});

$(document).ready(function() {
  $("input").focus(function() {
    $(this).css("background-color", "yellow");
  });
  $("input").blur(function() {
    $(this).css("background-color", "white");
  });
  $("button.show").click(function() {
    $("#dog").show("slow");
  });
  $("button.hide").click(function() {
    $("#dog").hide("slow");
  });
  $("button.slideup").click(function() {
    $("#dog").slideUp(3000);
  });
  $("button.slideup").click(function() {
    $("#dog").slideDown(3000);
  });
  $("button.animate").click(function() {
    $("#dog").animate({left:'100px', top: '50px'});
  });
});

$(document).mousemove(function(e) {
  $("#log").text("e.pageX" + e.pageX + "e.pageY" + e.pageY);
  console.dir(e);
});

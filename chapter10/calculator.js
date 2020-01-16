var expression = "";

function add(character) {
  expression = expression + character;

  document.getElementById("display").value = expression;
}

function compute() {
  document.getElementById("display").value = eval(expression);
}

function clearDisplay() {
  expression = "";
  document.getElementById("display").value = "0";
}

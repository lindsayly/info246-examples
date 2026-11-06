var $ = function(id) {
  return document.getElementById(id);
}

function processInfo() {
  var num1 = $("firstnum");
  var num2 = $("secondnum");
  $("total").innerHTML = "Total: " + addNumbers(num1, num2);
}

function addNumbers(num1, num2) {
  return num1 + num2;
}

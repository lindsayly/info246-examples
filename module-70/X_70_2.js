var $ = function(id) {
  return document.getElementById(id);
}

function processInfo() {
  var num1 = $("firstnum").value;
  var num2 = $("secondnum").value;
  var total = addNumbers(num1, num2);
  $("total").innerHTML = "Total: " + total;
}

function addNumbers(num1, num2) {
  var num1Float = parseFloat(num1);
  var num2Float = parseFloat(num2);
  return num1Float + num2Float;
}

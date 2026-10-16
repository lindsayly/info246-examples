var $ = function(id) {
  return document.getElementById(id);
}

var displayMessage = function() {
  var fname = $("fname").value;
  var age = $("age").value;
  age = parseInt(age);
  if(age >= 40) {
    var out = fname + " you are over 40! It's time for that over-the-hill party";
  }
  if(age < 40) {
    var out = "Keep working " + fname + "! It's too early to reture.";
  }
  $("msg").innerHTML = out;
}

window.onload = function() {
  $("displayButton").onclick = displayMessage;
}

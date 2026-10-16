var $ = function(id) {
  return document.getElementById(id);
}

var displayMessage = function() {
  var fname = $("fname").value;
  var age = $("age").value;
  age = parseInt(age);

  if (fname == "Steve" || fname == "Stephen") {
    var out = fname + ", you are in your prime working years.\nYou have the same first name as the instructor.";
  } else {
    if (age < 18) {
      var out = fname + ", you are still a minor.";
    }
    if (age == 18) {
      var out = fname + ", you are now voting age!";
    }
    if (age > 18 && age < 65) {
      var out = fname + ", you are in your prime working years.";
    }
    if (age <= 65) {
      var out = fname + ", it is time to retire.";
    }
  }
  $("output").innerHTML = out;
}

window.onload = function() {
  $("output").onclick = displayMessage;
}

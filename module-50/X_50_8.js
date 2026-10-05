var $ = function(id) {
  return document.getElementById(id);
}

var displayName = function() {
  var fname = $("firstname").value;
  var lname = $("lastname").value;
  var out = "Hi " + fname + " " + lname;
  $("mymsg").innerHTML = out;
}

window.onload = function() {
  $("mybutton").onclick = displayName;
}

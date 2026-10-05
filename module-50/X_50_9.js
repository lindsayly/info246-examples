var $ = function(id) {
  return document.getElementById(id);
}

var displayArea = function() {
  var w = $("width").value;
  var l = $("length").value;
  var area = "The area of the rectangle is " + (w * l) + " square feet";
  $("mymsg").innerHTML = area;
}

window.onload = function() {
  $("mybutton").onclick = displayArea;
}

var $ = function (id) {
  return document.getElementById(id);
}

var appendText = function() {
  var myAddress = $("address").value;
  var myTown = $("town").value;
  var myState = $("state").value;
  var myCountry = $("country").value;

  var myLocation = "My Location is " + myAddress + ", " + myTown + ", " + myState + " " + myCountry;

  $("mymsg").innerHTML = myLocation;
}

window.onload = function () {
  $("mybutton").onclick = appendText;
}

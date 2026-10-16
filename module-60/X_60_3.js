var $ = function(id) {
  return document.getElementById(id);
}

var currentDate = function() {
  var today = new Date();
  var year = today.getFullYear();
  var month = today.getMonth();
  var day = today.getDate();
  var date = year + "-" + month + "-" + day;
  var out = "Today's date is " + date;
  $("output").innerHTML = out;
}

window.onload = function() {
  $("dateButton").onclick = currentDate;
}

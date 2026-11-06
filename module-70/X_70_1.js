var $ = function(id) {
  return document.getElementById(id);
}

var input = "";

var findCity = function() {
  input = $("city").value;
  var inputLower = input.toLowerCase();
  var list = $("cityList").value.toLowerCase();
  if(listLower.includes(inputLower)){
    $(msg).innerHTML = input + "was found in the city list!";
  } else {
    $(msg).innerHTML = input + "was NOT found in the city list!";
  }
}

window.onload = function() {
  $("searchButton").onclick = findCity;
}

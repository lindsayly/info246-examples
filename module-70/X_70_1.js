var $ = function(id) {
  return document.getElementById(id);
}

var input = "";

var findCity = function() {
  input = $(city);
  var cityList = $(cityList);
  if(cityList.includes(input)){
    $(msg).innerHTML = input + "was found in the city list!";
  } else {
    $(msg).innerHTML = input + "was NOT found in the city list!";
  }
}

window.onload = function() {
  $(searchButton).onclick = findCity;
}

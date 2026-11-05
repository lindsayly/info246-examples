var $ = function(id) {
  return document.getElementById(id);
}

var input = "";

var findCity = function() {
  console.log("begin function");
  input = $(city).value;
  var inputLower = input.toLowerCase();
  console.log(input);
  var cityList = $(cityList).value;
  var cityListLower = cityList.toLowerCase();
  console.log(cityList);
  if(cityListLower.includes(inputLower)){
    $(msg).innerHTML = input + "was found in the city list!";
  } else {
    $(msg).innerHTML = input + "was NOT found in the city list!";
  }
}

window.onload = function() {
  $("searchButton").onclick = findCity;
}

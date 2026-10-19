var $ = function(id) {
  return document.getElementById(id);
}

function processInfo() {
  var fname = $("firstname");
  var lname = $("lastname");
  var numPets = $("numpets");

  var fnameError = $("firstname_error");
  var lnameError = $("lastname_error");
  var numPetsError = $("numpets_error");

  if(fname == "") {
    fnameError.innerHTML = "Please enter your first name";
  }
  if(lname == "") {
    lnameError.innerHTML = "Please enter your last name";
  }
  if(numPets < 0 || numPets > 3 || numPets.length == 0) {
    numPetsError.innerHTML = "Please enter a number 0-3";
  }

  var name = lname + ", " + fname;

  var today = new Date();
  var month = today.getMonth();
  var day = today.getDate();
  var year = today.getYear();

  var out = "Your name is listed as " + name + " and today's date is " + month + "-" + day + "-" + year + ". ";

  for(var i = 1; i < 4; i++){
    var petNumber = "pet" + i;
    var petName = $(petNumber).value;
    if(petName == ""){
      i = 4;
    } else {
      out += "Your Pet #" + i + " is named " + petName + ". ";
    }
  }
  $("message").innerHTML = out;
}

window.onload = function() {
  $("mybutton").onclick = processInfo;
}
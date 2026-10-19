var $ = function(id) {
  return document.getElementById(id);
}

function processInfo() {
  var fname = $("firstname").value;
  var lname = $("lastname").value;
  var numPets = $("numpets").value;

  var out = "";

  if(fname == "") {
    $("firstname_error").innerHTML = "Please enter your first name";
    $("message").innerHTML = "";
  } else {
    $("firstname_error").innerHTML = "";
  }
  if(lname == "") {
    $("lastname_error").innerHTML = "Please enter your last name";
    $("message").innerHTML = "";
  } else {
    $("lastname_error").innerHTML = "";
  }
  if(numPets < 0 || numPets > 3 || numPets.length == 0) {
    $("numpets_error").innerHTML = "Please enter a number 0-3";
    $("message").innerHTML = "";
  } else {
    $("numpets_error").innerHTML = "";
  }
  if(fname != "" && lname != "" && numPets >= 0 && numPets <=3 && numPets.length != 0){
    var name = lname + ", " + fname;

    var today = new Date();
    var month = today.getMonth();
    var day = today.getDate();
    var year = today.getYear();

    out = "Your name is listed as " + name + " and today's date is " + month + "-" + day + "-" + year + ". ";

    for(var i = 1; i <= numPets; i++){
      var petNumber = "pet" + i;
      var petName = $(petNumber).value;
      if(petName == ""){
        break;
      } else {
        out += "Your Pet #" + i + " is named " + petName + ". ";
      }
    }
    $("message").innerHTML = out;
  }
}

window.onload = function() {
  $("mybutton").onclick = processInfo;
}
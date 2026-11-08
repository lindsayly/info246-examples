var $ = function(id) {
  return document.getElementById(id);
}

function validateItems() {
  var fname = $("firstname").value;
  var lname = $("lastname").value;
  var email = $("email").value;
  var city = $("city").value;
  var donation = $("donation").value;
  
  var fnameError = $("firstnameerror").innerHTML;
  var lnameError = $("lastnameerror").innerHTML;
  var emailError = $("emailerror").innerHTML;
  var cityError = $("cityerror").innerHTML;
  var donoError = $("donationerror").innerHTML;
  var endmsg = $("endmessage").innerHTML;

  //defaults error message to empty
  fnameError = "";
  lnameError = "";
  emailError = "";
  cityError = "";
  donoError = "";
  endmsg = "";

  //adds in error messages if fields are empty
  if(fname == "") {
    fnameError = "Enter First Name";
  }
  if(lname == "") {
    lnameError = "Enter Last Name";
  }
  if(email == "") {
    emailError = "Enter Email";
  }
  if(city == "-") {
    cityError = "Select a City from the list";
  }
  if(donation == "") {
    donoError = "Enter Donation Amount";
  }
  if(isNaN(donation)) {
    donoError = "Amount must be numeric";
  }
  
  if(fnameError != "" && lnameError != "" && emailError != "" && cityError != "" && donoError != "") {
    return true;
  } else {
    return false;
  }
}

function addPatrons() {
  var isValid = validateItems();
}

window.onload = function() {
  $("clearfields").onclick = $("myform").reset();
  $("firstname").focus();
}

var $ = function(id) {
  return document.getElementById(id);
}

function clear() {
  //sets values to empty string to clear
  $("firstname").value = "";
  $("lastname").value = "";
  $("email").value = "";
  $("city").value = "-";
  $("donation").value = "";

  //resets error message to empty
  $("firstnameerror").innerHTML = "";
  $("lastnameerror").innerHTML = "";
  $("emailerror").innerHTML = "";
  $("cityerror").innerHTML = "";
  $("donationerror").innerHTML = "";
  $("endmessage").innerHTML = "";
} 

function validateItems() {
  //getting field values
  var fname = $("firstname").value;
  var lname = $("lastname").value;
  var email = $("email").value;
  var city = $("city").value;
  var donation = $("donation").value;
    
  //booleans for field validity
  var fnameValid = true;
  var lnameValid = true;
  var emailValid = true;
  var cityValid = true;
  var donoValid = true;

  //defaults error message to empty
  $("firstnameerror").innerHTML = "";
  $("lastnameerror").innerHTML = "";
  $("emailerror").innerHTML = "";
  $("cityerror").innerHTML = "";
  $("donationerror").innerHTML = "";
  $("endmessage").innerHTML = "";

  //adds in error messages if fields are empty
  //sets booleans to false
  if(fname == "") {
    $("firstnameerror").innerHTML = "Enter First Name";
    fnameValid = false;
  }
  if(lname == "") {
    $("lastnameerror").innerHTML = "Enter Last Name";
    lnameValid = false;
  }
  if(email == "") {
    $("emailerror").innerHTML = "Enter Email";
    emailValid = false;
  }
  if(city == "-") {
    $("cityerror").innerHTML = "Select a City from the list";
    cityValid = false;
  }
  if(donation == "") {
    $("donationerror").innerHTML = "Enter Donation Amount";
    donoValid = false;
  }
  if(isNaN(donation)) {
    $("donationerror").innerHTML = "Amount must be numeric";
    donoValid = false;
  }

  //checking booleans
  if(fnameValid && lnameValid && emailValid && cityValid && donoValid) {
    return true;
  } else {
    return false;
  }
}

function addPatron() {
  var isValid = validateItems();
  if(isValid) {
    $("myform").submit();
  } else {
    $("endmessage").innerHTML = "Patron Not Added!";
  }
}

window.onload = function() {
  $("clearfields").onclick = clear;
  $("addpatron").onclick = addPatron;
  $("firstname").focus();
}

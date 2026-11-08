var $ = function(id) {
  return document.getElementById(id);
}

// NEW: trims leading/trailing whitespace and collapses inner runs to one space
function cleanWhitespace(str) {
  return str.trim().replace(/\s+/g, " ");
}

// NEW: capitalizes the first letter, leaves the rest as typed
function capitalizeFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// NEW: cleans up the first and last name fields and puts the results back
function formatNames() {
  $("firstname").value = capitalizeFirst(cleanWhitespace($("firstname").value));
  $("lastname").value = capitalizeFirst(cleanWhitespace($("lastname").value));
}

// NEW: yellow background on the focused field, white on all the others
function setupFocusColors() {
  var ids = ["firstname", "lastname", "email", "city", "donation"];

  for (var i = 0; i < ids.length; i++) {
    var field = $(ids[i]);
    field.style.backgroundColor = "white";

    field.onfocus = function() {
      this.style.backgroundColor = "yellow";
    };
    field.onblur = function() {
      this.style.backgroundColor = "white";
    };
  }
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
  formatNames();   // NEW: runs first, so validation sees the cleaned values
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
  setupFocusColors();   // NEW: set up before the focus() call below
  $("firstname").focus();
}

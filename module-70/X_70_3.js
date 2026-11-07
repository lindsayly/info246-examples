var $ = function(id) {
  return document.getElementById(id);
}

var displayImg = function() {
  var gender = $("gender").value;
  if(gender == "none"){
    $("myimg").style = "display: none;";
  }
  if(gender == "male"){
    $("myimg").style = "display: block;";
    $("myimg").src = "http://profperry.com/testimages/male.jpg";
  }
  if(gender == "female"){
    $("myimg").style = "display: block;";
    $("myimg").src = "http://profperry.com/testimages/female.jpg";
  }
  if(gender == "droid"){
    $("myimg").style = "display: block;";
    $("myimg").src = "http://profperry.com/testimages/droid.jpg";
  }
}

window.onload = function() {
  $("gender").onchange = displayImg;
}

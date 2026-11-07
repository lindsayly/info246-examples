var $ = function(id) {
  return document.getElementById(id);
}

var displayImg = function() {
  var gender = $("gender").value;
  if(gender == "None"){
    $("myimg").style = "display: none;";
  }
  if(gender == "Male"){
    $("myimg").style = "display: block;";
    $("myimg").src = "http://profperry.com/testimages/male.jpg";
  }
  if(gender == "Female"){
    $("myimg").style = "display: block;";
    $("myimg").src = "http://profperry.com/testimages/female.jpg";
  }
  if(gender == "Droid"){
    $("myimg").style = "display: block;";
    $("myimg").src = "http://profperry.com/testimages/droid.jpg";
  }
}

window.onload = function() {
  $("gender").onchange = displayImg;
}

var $ = function(id) {
  return document.getElementById(id);
}

var numberGuess = function() {
  for(var i = 1; i < 4; i++) {
    var guessStr = "guess" + i;
    var guess = $(guessStr).value;
    guess = parseInt(guess);
    if(guess == 7) {
      var out = "Correct! 7 is the number I was looking for!";
      i = 4;
    } else {
      var out = "None of those numbers were correct";
      i++;
    }
  }
  $("output").innerHTML = out;
}

window.onload = function() {
  $("submit").onclick = numberGuess;
}

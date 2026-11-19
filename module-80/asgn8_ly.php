<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Assignment 8</title>
    <script>
      var $ = function(id) {
        return document.getElementById(id);
      }
      function validateForm() {
        var code = $("code").value;
        var fname = $("fname").value;

        //checks for empty fields
        if(code == "") {
          $("codeError").innerHTML = "Please enter the secret code";
          return false;
        } else {
          $("codeError").innerHTML = "";
        }
        if(fname == "") {
          $("fnameError").innerHTML = "Please enter your first name";
          return false;
        } else {
          $("fnameError").innerHTML = "":
        }

        //submits form if fields not empty
        $("joinForm").submit();
      }
      window.onload = function() {
        $("joinButton").onclick = validateForm;
      }
    </script>
  </head>
  <body>
    <h2>Join the Club!</h2>
    <?php
      $code = $_POST['code'] ?? '';
      $fname = $_POST['fname'] ?? '';
    ?>
    <form method="post" name="joinForm" id="joinForm" action="<?php echo $_SERVER['PHP_SELF']; ?>">
      <p>Secret Code:<br>
      <input type="text" name="code" id="code" size="20" value="<?php echo $code ?>">
      <span id="codeError"></span>
      <?php
        if($code == "") {
          print("");
        }
        if($code != "" && $code != "747") {
          print("The secret code is incorrect! Try again.");
        }
      ?>
      </p>
      <p>First Name:<br>
      <input type="text" name="fname" id="fname" size="20" value="<?php echo $fname ?>">
      <span id="fnameError"></span></p>
      <br>
      <input type="button" id="joinButton" value="Join Now">
      
      <?php
        if($code == "747") {
          print("You are now a member of the club!");
        }
      ?>
    </form>
  </body>
</html>

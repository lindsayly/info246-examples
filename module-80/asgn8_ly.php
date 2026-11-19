<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Assignment 8</title>
    <script>
      var $ = function(id) {
        return document.getElementById(id);
      }
    </script>
  </head>
  <body>
    <h2>Join the Club!</h2>
    <form method="post" name="joinForm" id="joinForm" action="<?php exho>
      <p>Secret Code:<br>
      <input type="text" id="code" size="20">
      <span style="color:red;" id="codeError">placeholder</span></p>
      <p>First Name:<br>
      <input type="text" id="name" size="20">
      <span style="color:red;" id="nameError">placeholder</span></p>
      <br>
      <input type="button" id="joinButton" value="Join Now">
    </form>
  </body>
</html>

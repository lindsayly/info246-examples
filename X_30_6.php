<!DOCTYPE html>
<html>
  <head>
    <title>Nested IF</title>
  </head>
  <body>
    <h3>Who are you?</h3>
    <?php
      $fName = $_POST['firstName'];
      $color = $_POST['eyeColor'];
      if($fName == 'Steve'){
        print("<p>You are the teacher</p>");
        if($color == 'blue'){
          print("<p>. \nHi, blue eyes!</p>");
        } else {
          print("<p>, \nbut I thought you had blue eyes.</p>");
        }
      } else {
        print("<p>You are $fName</p>");
        if($color == 'blue'){
          print("<p>. \nHi, blue eyes!</p>");
        } else {
          print("<p>and your eye color is $color</p>");
        }
      }
    ?>
  </body>
</html>

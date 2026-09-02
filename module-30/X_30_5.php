<!DOCTYPE html>
<html>
  <head>
    <title>ELSE Clause</title>
  </head>
  <body>
    <h3>What is your favorite color?</h3>
    <?php
      $color = $_POST['color'];
      if($color == 'blue'){
        print("<p>Hey that's my favorite color too!</p>");
      } else {
        print("<p>That's nice, my favorite color is blue</p>");
      }
    ?>
  </body>
</html>

<!DOCTYPE html>
<html>
  <head>
    <title>Using AND</title>
  </head>
  <body>
    <h3>Apples and Pears</h3>
    <?php
      $numApples = $_POST['numApples'];
      $numPears = $_POST['numPears'];
      if ($numApples > 2 && $numPears > 3) {
        print("You have enough apples and pears.");
      } else {
        print("You do not have enough apples and pears.");
      }
    ?>
  </body>
</html>

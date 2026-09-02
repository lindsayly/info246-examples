<!DOCTYPE html>
<html>
  <head>
    <title>Using OR</title>
  </head>
  <body>
    <h3>Apples or Pears</h3>
    <?php
      $numApples = $_POST['numApples'];
      $numPears = $_POST['numPears'];
      if ($numApples > 2 || $numPears > 3) {
        print("You have enough apples or pears.");
      } else {
        print("You do not have enough apples or pears.");
      }
    ?>
  </body>
</html>

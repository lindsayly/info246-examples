<!DOCTYPE html>
<html>
  <head>
    <title>Comparison Operators</title>
  </head>
  <body>
    <h3>Apples vs. Pears</h3>
    <?php
      $numApples = $_POST['numApples'];
      $numPears = $_POST['numPears'];
      if ($numApples > $numPears) {
        print("You have more apples than pears.");
      } elseif ($numPears > $numApples) {
        print("You have more pears than apples.");
      } else {
        print("You have the same number of apples and pears.");
      }
  </body>
</html>

<!DOCTYPE html>
<html>
  <head>
    <title>Using OR</title>
  </head>
  <body>
    <h3>Apples or Pears</h3>
    <?php
      $num = $_POST['num'];
      if ($num != 7) {
        print("You guessed incorrectly.");
      } else {
        print("You guessed correctly.");
      }
    ?>
  </body>
</html>

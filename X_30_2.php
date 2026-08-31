<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Simple Math</title>
  </head>
  <body>
    <h3>How much sleep have you gotten in your life?</h3>
    <?php
      $yearBorn = $_POST['yearBorn'];
      $numHours = $_POST['numHours'];
      $currentYear = date("Y");
      $yearsSlept = ($currentYear - $yearBorn) * $numHours/24;
      print("You've been asleep for $yearsSlept in your life!");
    ?>
  </body>
</html>

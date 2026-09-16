<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Returning Data from a Function</title>
  </head>
  <body>
    <?php
      $msg = sum();
      print("<h3>$msg</h3>");
      function sum(){
        $num1 = $_POST['num1'];
        $num2 = $_POST['num2'];
        $sum = $num1 + $num2;
        $output = "When you add $num1 to $num2, you get $sum";
        return $output;
      }
    ?>
  </body>
</html>

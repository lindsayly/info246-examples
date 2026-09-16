<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Simple Function</title>
  </head>
  <body>
    <?php
      sum();
      function sum(){
        $num1 = $_POST['num1'];
        $num2 = $_POST['num2'];
        $sum = $num1 + $num2;
        print("<h3>The sum of the numbers $num1 and $num2 is $sum.</h3>");
      }
    ?>
  </body>
</html>

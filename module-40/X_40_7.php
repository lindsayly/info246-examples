<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Passing Data to a Function</title>
  </head>
  <body>
    <?php
      $num = $_POST['num'];
      addFive($num);
      function addFive($numIn){
        $total = $numIn + 5;
        print("<h3>When you add $numIn to 5, you get $total.</h3>");
      }
    ?>
  </body>
</html>

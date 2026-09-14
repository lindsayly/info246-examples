<!DOCTYPE html>
<html lang="en">
  <head>
    <title>WHILE LOOP</title>
  </head>
  <body>
    <h3>Cities List</h3>
    <ul>
    <?php
      $counter = 1;
      $city = "temp";
      while(!empty($city)){
        $cityHtmlName = "city$counter";
        $city = $_POST[$cityHtmlName];
        print("<li>$city</li>");
        $counter++;
      }
    ?>
    </ul>
  </body>
</html>

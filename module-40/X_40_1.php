<!DOCTYPE html>
<html lang="en">
  <head>
    <title>FOR Loop</title>
  </head>
  <body>
    <h3>Grocery List</h3>
    <ul>
    <?php
      for($i = 1; $i <= 7; $i++){
        $itemHtmlName = "item$i";
        $listItem = $_POST[$itemHtmlName];
        if($listItem == ""){
          $i++;
        }
        print("<li>$listItem</li>");
      }
    ?>
    </ul>
  </body>
</html>

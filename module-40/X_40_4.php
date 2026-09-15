<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Writing to a File</title>
  </head>
  <body>
    <h3>Thanks for submitting your information!</h3>
    <?php
      $filename = "information.txt";
      $fp = fopen($filename, 'a');
      $counter = 1;
      while($counter < 4) {
        $nameHtml = "name$counter";
        $name = $_POST[$nameHtml];
        if(empty($name)){
          fwrite($fp, "\n");
          break;
        }
        $output = "$name ";
        if($counter == 3) {
          $output = "$output\n";
        }
        fwrite($fp, $output);
        $counter++;
      }
      fclose($fp);
    ?>
  </body>
</html>

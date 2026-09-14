<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Reading from a File</title>
  </head>
  <body>
    <h3>Team Members</h3>
    <ol>
      <?php
        $DOCUMENT_ROOT = $_SERVER['DOCUMENT_ROOT'];
        $filename = $DOCUMENT_ROOT.'X_40_3.txt';
        $numLines = count(file($filename));
        $fp = fopen($filename, 'r');
        for ($i = 1; $i <= $numLines; $i++)
    		{
    			$line = fgets($fp);  //Reads one line from the file
    			$playerName = trim($line);
          print("$playerName");
    		}
        fclose($fp);
      ?>
    </ol>
  </body>
</html>

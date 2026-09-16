<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Displaying Data in a Table</title>
  </head>
  <body>
    <?php
      $file = "nameList.txt";
      $fname = $_POST['fname'];
      $lname = $_POST['lname'];
      $output = $fname.'|'.$lname.'|';
      $counter = 1;
      while($counter < 4) {
        $petHtml = "pet$counter";
        $pet = $_POST[$petHtml];
	      //set to empty string if no pet entered
        if(empty($pet)){
          $pet = "";
        }
        //appending pet to output
        $output .= $pet.'|';
	      $counter++;
      }
      //appending newline
      $output .= "\n";
      $fp = fopen($file, 'a');
      fwrite($fp, $output);
      fclose($fp);
      print("<h3>$fname $lname has been added to the file</h3>");
    ?>
    <table border = '1'>
      <!-- setting up table headers -->
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Pet 1</th>
        <th>Pet 2</th>
        <th>Pet 3</th>
      </tr>
      <?php
        $display = "";
        $lineCount = 0;
        $fp = fopen($file, 'r');
        while(true){
          $currLine = fgets($fp);
          //breaking out of while loop if end of file
          if(feof($fp)){
            break;
          }
          $lineColorCount = $lineCount % 2;
          if ($lineColorCount == 0) {
        		$style = "style='background-color: #FFFFCC;'";
        	} else {
        		$style = "style='background-color: white;'";
        	}
          list($fname, $lname, $pet1, $pet2, $pet3) = explode('|', $currLine);
          $display .= "<tr $style>";
      	  $display .= "<td>".$fname."</td>";
      	  $display .= "<td>".$lname."</td>";
          $display .= "<td>".$pet1."</td>";
          $display .= "<td>".$pet2."</td>";
          $display .= "<td>".$pet3."</td>";
          $display .= "</tr>\n";
          $lineCount++;
        }
        fclose($fp);
        //print table rows
        print($display);
      ?>
    </table>
  </body>
</html>

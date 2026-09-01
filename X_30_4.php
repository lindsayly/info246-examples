<!DOCTYPE html>
<html>
  <head>
    <title>IF Statement</title>
  </head>
  <body>
    <h3>What is your highest level of education?</h3>
    <?php
      $degree = $_POST['degree'];
      if($degree == 'BS'){
        print("<p>You have a Bachelor's degree</p>");
      }
      if($degree == 'MS'){
        print("<p>You have a Master's degree</p>");
      }
      if($degree == 'PhD'){
        print("<p>Hi there, Doctor</p>");
      }
    ?>
  </body>
</html>

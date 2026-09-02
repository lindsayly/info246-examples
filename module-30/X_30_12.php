<!DOCTYPE html>
<html>
    <head>
        <title>Field Validations</title>
    </head>
    <body>
        <h3>Guess the number</h3>
        <?php
            $num = $_POST['$num'];
            if(empty($num)) {
                print("Field is blank: Enter an integer between 1-100.")
            } else {
                if(!is_numeric($num)) {
                    print("Not numeric: Enter an integer between 1-100.")
                }
                if($num < 1 || $num > 100) {
                    print("Out of range: Enter an integer between 1-100.");
                }
                if($num == 17) {
                    print("That's the number I was thinking of!");
                } else {
                    print("Nope. That's not it.");
                }
            }
        ?>
    </body>
</html>
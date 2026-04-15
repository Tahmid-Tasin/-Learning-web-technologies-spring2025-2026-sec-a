<?php
    if(isset($_REQUEST['username']))
        {
            $username=$_REQUEST['username'];

        }
?>



<!DOCTYPE html>
<html lang="en">
<head>

    <title>Document</title>
</head>
<body>
    <fieldset>
        <legend>NAME</legend>
    <form method="post">
        <input type="text" name="username" value=""><br>
        <input type="submit" name="submit" value="submit">
        <ol>
            <li>"<?php if(isset($username)) echo $username;?>"</li>
        </ol>

        
    </form>
    </fieldset>
</body>
</html>


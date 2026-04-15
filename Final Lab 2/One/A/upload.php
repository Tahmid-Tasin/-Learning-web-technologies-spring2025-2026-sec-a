<?php

$username=$_POST['username'];

if($username=="")
    {
        echo "Enter Your Username";
    }

else{
    echo $username;
}
?>
<?php
session_start();

if(isset($_POST['submit']))
    {
        $username = $_REQUEST['username'];
        $password = $_REQUEST['password'];
        $email = $_REQUEST['email'];

        if($username=="" || $email=="" || $password=="")
        {
                echo "null username/email/password";
        }

        else{
            $user = ['username' => $username, 'password'=>$password, 'email'=>$email];

            $_SESSION['user'] = $user;
            header('location: login.php');
        }

    }

else{
    header('location: index.php');
}

?>
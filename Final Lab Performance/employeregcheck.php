<?php
session_start();

if(isset($_POST['Submit']))
{
        $employername=$_REQUEST['employername'];
        $companyname=$_REQUEST['companyname'];
        $contactnumber=$_REQUEST['contactnumber'];
        $username=$_REQUEST['username'];
        $password=$_REQUEST['password'];
    

if($username=="" || $employername=="" || $password==""||$companyname==""||$contactnumber=="")
    {
        echo "null username/employername/password/contact number/companyname";
    }

else{
    $employee=['employername'=>$employername,'companyname'=>$companyname, 'contactnumber'=>$contactnumber,'username'=>$username,'password'=>$password];

    $_SESSION['employees']=$employee;
    header('location:employers.php');
}


}

else{
    header('location:home.php');
}

?>
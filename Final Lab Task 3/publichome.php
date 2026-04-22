
<html>
<head>
<title>Public Home</title>
<style>
    *{
        margin:0;
        padding:0;
        overflow-x:hidden;
        overflow-y: hidden;
    }

    #header{
        border: 2px solid black;
        height: 70px;
        width: 100%;
        position: relative;
    }

    #companyName{
        margin-top: 15px;
        margin-left: 60px;
        position: absolute;
    }

    #pack{
        margin-top: 20px;
        margin-left: 1300px;
        position: absolute;
    }

    #welcome{
        margin-top: 100px;
        margin-left: 600px;
    }

    footer{
        border: 2px solid black;
        height: 30px;
        width: 100%;
        margin-top: 530px;
        text-align: center;
    }
</style>
</head>
<body>
    <nav id="header">
        <h2 id="companyName">X-Company</h2>
        <span id="pack">
        <a href="index.php">Home</a>
        <a href="">Login</a>
        <a href="registration.php">Registration</a>
        </span>
    </nav>

    <h1 id="welcome">Welcome to X-Company</h1>

    <footer>Copyright: 2017</footer>
</body>
</html>
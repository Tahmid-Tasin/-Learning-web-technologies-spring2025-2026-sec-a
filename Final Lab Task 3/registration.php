<html>
<head>
    <title>Login form</title>
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
        margin-top: 480px;
        text-align: center;
    }

    fieldset{
        width: 800px;
        height: 500px;
        margin: auto;
    }

    tr,td{
        width: 500px;
        height: 40px;
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
        <form method="" action="" enctype="" >
            <fieldset id="form">
                <legend>Registration</legend>
                <table>
                    <tr>
                        <td>Name</td>
                        <td><input type="text" name="" value="" placeholder=""/></td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td><input type="email" name="" value=""/></td>
                    </tr>
                    <tr>
                        <td>User Name</td>
                        <td><input type="text" name="" value="" placeholder=""/></td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td><input type="password" name="" value=""/></td>
                    </tr>
                    <tr>
                        <td>Confirm Password</td>
                        <td><input type="password" name="" value=""/></td>
                    </tr>

                    <tr>
                        <td>DOB</td>
                        <td><input type="date" name="" value=""/></td>
                    </tr>

                    <tr>
                        <td>Gender</td>
                        <td>
                            <input type="radio" name="gender" value=""/> Male
                            <input type="radio" name="gender" value=""/> Female
                            <input type="radio" name="gender" value=""/> Other
                        </td>
                    </tr>
  
                    <tr>
                        <td></td>
                        <td>
                           <input type="reset" name="reset" value="Reset"/>
                           <input type="submit" name="submit" value="Submit"/>
                        </td>
                    </tr>
                </table>
                
            </fieldset>
        </form>

    <footer>Copyright: 2017</footer>
</body>
</html>
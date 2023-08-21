<?php

// session_start();
include('db_connect.php');
// $msg = false;
if(isset($_POST['login'])){
  $userName = $_POST['userName'];
  $userPassword = $_POST['userPassword'];

  $query = "insert into login (username,password) values ('$userName','$userPassword')" ;
  $result = mysqli_query($con,$query);

  // header("Location : index.php");
?>
  <script>
    alert("You are logged in successfully");
  window.location.assign("/songvilla");
</script>
<?php

}

?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SongVilla - Login</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <header>
      <div class="leftBox">
        <div class="content">
          <form action="login.php" method="post">
            <h3 style="color: black;">Login</h3>
            <div class="details">
              <label for="name">Name</label>
              <input
                type="text"
                name="userName"
                placeholder="Enter Your Username" style="color:black; "
              />
            </div>
            <div class="details">
              <label for="password">Password</label>
              <input
                type="password"
                name="userPassword"
                placeholder="Enter Your Password" style="color:black;"
              />
            </div>
           <input type="submit" name="login" value="Login" class="submit">
           <div class="check">
            <input type="checkbox" name="" id=""> <span>Remember Me</span>
           </div>
           <p>Don't have an account ? <a href="signup.php">Signup</a></p>
          </form>
        </div>
      </div>
      <div class="rightBox">
        <img src="img/login_png.jpg" alt="">
       
      </div>
    </header>
  </body>
</html>

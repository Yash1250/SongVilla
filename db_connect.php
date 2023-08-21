<?php


$servername = "localhost";
$username = "root";
$password = "";
$dbname = "songvilla";

$con =  mysqli_connect($servername, $username, $password, $dbname);
if ($con->connect_error) {
    die("Connection failed... ");


}
// else{
//     echo('Database Succsesfully connected...');
// }
?> 
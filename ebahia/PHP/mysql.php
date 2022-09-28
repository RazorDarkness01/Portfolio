<?php

$link = mysqli_connect("localhost", "root", "", "tauro");

if($link === false){
die("ERROR: " . mysqli_connect_error());
}

mysqli_close($link);
?>
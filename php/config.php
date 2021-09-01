<?php
$conn = mysqli_connect("localhost", "root", "", "chatapp");
if(!$conn){
	echo "Database connection established" .mysqli_connect_error();
}

?>
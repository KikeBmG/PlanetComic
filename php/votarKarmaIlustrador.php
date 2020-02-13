<?php
	
	include('functions.php');
	
	$id_Ilustrador = $_REQUEST['idIlustrador'];
	$karma = $_REQUEST['karma'];
	
	$sql = "UPDATE ilustrador ";
	$sql .= "SET karmaIlustrador = karmaIlustrador +".$karma." ";
	$sql .= "WHERE idIlustrador = '$id_Ilustrador'";
	
	$vector = conexion($sql);
	
?>

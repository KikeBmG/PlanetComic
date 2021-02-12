<?php
	
	include('functions.php');
	
	$id_Guionista = $_REQUEST['idGuionista'];
	$karma = $_REQUEST['karma'];
	
	$sql = "UPDATE guionista ";
	$sql .= "SET karmaGuionista = karmaGuionista +".$karma." ";
	$sql .= "WHERE idGuionista = '$id_Guionista'";
	
	$vector = conexion($sql);
	
?>

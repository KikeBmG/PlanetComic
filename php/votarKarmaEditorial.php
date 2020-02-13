<?php
	
	include('functions.php');
	
	$id_Editorial = $_REQUEST['idEditorial'];
	$karma = $_REQUEST['karma'];
	
	$sql = "UPDATE editorial ";
	$sql .= "SET karmaEditorial = karmaEditorial +".$karma." ";
	$sql .= "WHERE idEditorial = '$id_Editorial'";
	
	$vector = conexion($sql);
	
?>

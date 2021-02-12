<?php
	
	include('functions.php');
	
	$id_Comic = $_REQUEST['idComic'];
	$karma = $_REQUEST['karma'];
	
	$sql = "UPDATE comic ";
	$sql .= "SET karmaComic = karmaComic +".$karma." ";
	$sql .= "WHERE idComic = '$id_Comic'";
	
	$vector = conexion($sql);
	
?>

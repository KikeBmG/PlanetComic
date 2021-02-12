<?php
	
	session_start();
	if( !isset($_SESSION['nombreUsuario']) or !isset($_SERVER['HTTP_REFERER']) ) {
		header("Location: index.php");
		exit();
	}
	
	include('functions.php');
	
	$id_usuario = $_SESSION['idUsuario'];
	$id_comic = $_REQUEST['idComic'];
	$estado = $_REQUEST['estado'];
	
	$sql = "INSERT INTO biblioteca (idUsuario,idComic,estado) ";
	$sql .= "VALUES('".$id_usuario."','".$id_comic."','".$estado."') ";
	$sql .= "ON DUPLICATE KEY UPDATE estado = '".$estado."';";

	$vector = conexion($sql);
	
?>
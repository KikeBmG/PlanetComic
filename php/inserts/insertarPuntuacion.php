<?php
	
	session_start();
	if( !isset($_SESSION['nombreUsuario']) or !isset($_SERVER['HTTP_REFERER']) ) {
		header("Location: ../index.html");
		exit();
	}
	
	include('../connection.php');
	
	$id_usuario = $_SESSION['idUsuario'];
	$id_comic = $_REQUEST['idComic'];
	$puntuacion = $_REQUEST['puntuacion'];
	
	$sql = "INSERT INTO biblioteca (idUsuario,idComic,puntuacion) ";
	$sql .= "VALUES('".$id_usuario."','".$id_comic."','".$puntuacion."') ";
	$sql .= "ON DUPLICATE KEY UPDATE puntuacion = '".$puntuacion."';";

	$vector = conexion($sql);
	
?>
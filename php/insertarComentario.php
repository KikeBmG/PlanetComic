<?php
	
	session_start();
	if( !isset($_SESSION['nombreUsuario']) or !isset($_SERVER['HTTP_REFERER']) ) {
		header("Location: index.php");
		exit();
	}
	
	include('functions.php');
	
	$id_usuario = $_SESSION['idUsuario'];
	$id_comic = $_REQUEST['idComic'];
	$texto = $_REQUEST['texto'];
	
	$sql = "INSERT INTO comentario (texto,fechaComentario,votos,spoiler,idUsuario,idComic) ";
	$sql .= "VALUES('".$texto."',CURRENT_DATE,0,0,'".$id_usuario."','".$id_comic."'); ";
	
	$vector = conexion($sql);
	
	header('Location: main.php');
	
?>

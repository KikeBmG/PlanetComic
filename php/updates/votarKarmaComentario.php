<?php
	
	include('../connection.php');
	
	$id_Comentario = $_REQUEST['idComentario'];
	$spoiler = $_REQUEST['spoiler'];
	
	$sql = "UPDATE comentario ";
	$sql .= "SET votos = votos + 1, spoiler = spoiler + ".$spoiler." ";
	$sql .= "WHERE idComentario = '$id_Comentario'";
	
	$vector = conexion($sql);
	
?>

<?php
	
	include('functions.php');
	
	$id_comic = $_GET['idComic'];
	
	$sql = "SELECT idComentario, texto, fechaComentario, votos, spoiler, comentario.idUsuario, nombreUsuario, idComic ";
	$sql .= "FROM comentario ";
	$sql .= "JOIN usuario ON comentario.idUsuario = usuario.idUsuario ";
	$sql .= "WHERE idComic = '$id_comic' ";
	
	$vector = conexion($sql);
	
	$arrayComentarios = array();
	
	if( mysqli_num_rows($vector[1])!=0 ) {
		while( $row = mysqli_fetch_array($vector[1]) ) {
			
			$idComentario = $row['idComentario'];
			$texto = $row['texto'];
			$fechaComentario = $row['fechaComentario'];
			$votos = $row['votos'];
			$spoiler = $row['spoiler'];
			$idUsuario = $row['idUsuario'];
			$nombreUsuario = $row['nombreUsuario'];
			$idComic = $row['idComic'];
			
			$arrayComentarios[] = array('idComentario'=> $idComentario,'texto'=> $texto,'fechaComentario'=> $fechaComentario,'votos' => $votos,'spoiler' => $spoiler,'idUsuario' => $idUsuario, 'nombreUsuario' => $nombreUsuario, 'idComic' => $idComic);
		}
	}
	
	$json_string = json_encode($arrayComentarios);
	echo $json_string;
	
?>

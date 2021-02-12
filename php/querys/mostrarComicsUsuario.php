<?php
	
	include('../connection.php');
	
	$id_usuario = $_COOKIE['idUsuario'];
	$estado = $_GET['estado'];
	
	$sql = "SELECT portada, nombreComic, comic.idComic FROM comic join biblioteca on comic.idComic=biblioteca.idComic WHERE idUsuario='$id_usuario' and estado='$estado'";
	$vector = conexion($sql);
	
	$arrayImg = array();
	
	if( mysqli_num_rows($vector[1])!=0 ) {
		while( $row = mysqli_fetch_array($vector[1]) ) {
			$portada = $row['portada'];
			$nombreComic = $row['nombreComic'];
			$idComic = $row['idComic'];
			
			$arrayImg[] = array('portada' => $portada,'nombreComic'=> $nombreComic,'idComic'=> $idComic);
		}
	}
	
	$json_string = json_encode($arrayImg);
	echo $json_string;
	
?>

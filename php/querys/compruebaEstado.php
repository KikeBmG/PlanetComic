<?php
	
	include('../connection.php');
	
	$id_Comic = $_GET['idComic'];
	$id_usuario = $_COOKIE['idUsuario'];
	
	$sql = "SELECT idComic, idUsuario, estado, puntuacion FROM biblioteca WHERE idComic='$id_Comic' and  idUsuario='$id_usuario' ";
	$vector = conexion($sql);
	
	$arrayImg = array();
	
	if( mysqli_num_rows($vector[1])!=0 ) {
		while( $row = mysqli_fetch_array($vector[1]) ) {
			$idComic = $row['idComic'];
			$idUsuario = $row['idUsuario'];
			$estado = $row['estado'];
			$puntuacion = $row['puntuacion'];
			
			if ($puntuacion == null){
				$puntuacion = 0;
			}
			
			$arrayImg[] = array('idComic' => $idComic,'idUsuario'=> $idUsuario,'estado'=> $estado, 'puntuacion'=> $puntuacion);
		}
	}
	
	$json_string = json_encode($arrayImg);
	echo $json_string;
	
?>

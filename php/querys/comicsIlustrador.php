<?php
	
	include('../connection.php');
	
	$id_Ilustrador = $_GET['idIlustrador'];
	
	$sql = "SELECT DISTINCT portada, nombreComic, idComic FROM comic WHERE idIlustrador='$id_Ilustrador' ";
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

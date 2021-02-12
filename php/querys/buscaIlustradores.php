<?php
	
	include('functions.php');
	
	$sql = "SELECT idIlustrador, nombreIlustrador FROM ilustrador ";
	$vector = conexion($sql);
	
	$arrayIlustradores = array();
	
	if( mysqli_num_rows($vector[1])!=0 ) {
		while( $row = mysqli_fetch_array($vector[1]) ) {
			$idIlustrador = $row['idIlustrador'];
			$nombreIlustrador = $row['nombreIlustrador'];
			
			$arrayIlustradores[] = array('idIlustrador' => $idIlustrador,'nombreIlustrador'=> $nombreIlustrador);
		}
	}
	
	$json_string = json_encode($arrayIlustradores);
	echo $json_string;
	
?>

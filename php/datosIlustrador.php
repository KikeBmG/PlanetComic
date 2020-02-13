<?php
	
	include('functions.php');
	
	$id_Ilustrador = $_GET['idIlustrador'];
	
	$sql = "SELECT idIlustrador, nombreIlustrador, nacionalidadIlustrador, fotoIlustrador, fechaNacIlustrador ";
	$sql .= "FROM ilustrador ";
	$sql .= "WHERE idIlustrador = '$id_Ilustrador'";
	
	$vector = conexion($sql);
	
	$arrayDatosIlustrador = array();
	
	if( mysqli_num_rows($vector[1])!=0 ) {
		while( $row = mysqli_fetch_array($vector[1]) ) {
			
			$idIlustrador = $row['idIlustrador'];
			$nombreIlustrador = $row['nombreIlustrador'];
			$nacionalidadIlustrador = $row['nacionalidadIlustrador'];
			$fotoIlustrador = $row['fotoIlustrador'];
			$fechaNacIlustrador = date("d-m-Y", strtotime($row['fechaNacIlustrador']));
			
			$arrayDatosIlustrador[] = array('idIlustrador'=> $idIlustrador,'nombreIlustrador'=> $nombreIlustrador,'nacionalidadIlustrador'=> $nacionalidadIlustrador,'fotoIlustrador' => $fotoIlustrador,'fechaNacIlustrador' => $fechaNacIlustrador);
		}
	}
	
	$json_string = json_encode($arrayDatosIlustrador);
	echo $json_string;
	
?>

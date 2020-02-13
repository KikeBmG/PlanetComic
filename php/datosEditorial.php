<?php
	
	include('functions.php');
	
	$id_Editorial = $_GET['idEditorial'];
	
	$sql = "SELECT idEditorial, nombreEditorial, logo ";
	$sql .= "FROM editorial ";
	$sql .= "WHERE idEditorial = '$id_Editorial'";
	
	$vector = conexion($sql);
	
	$arrayDatosEditorial = array();
	
	if( mysqli_num_rows($vector[1])!=0 ) {
		while( $row = mysqli_fetch_array($vector[1]) ) {
			
			$idEditorial = $row['idEditorial'];
			$nombreEditorial = $row['nombreEditorial'];
			$logo = $row['logo'];
			
			$arrayDatosEditorial[] = array('idEditorial'=> $idEditorial,'nombreEditorial'=> $nombreEditorial,'logo'=> $logo);
		}
	}
	
	$json_string = json_encode($arrayDatosEditorial);
	echo $json_string;
	
?>

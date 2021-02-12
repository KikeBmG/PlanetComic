<?php
	
	include('../connection.php');
	
	$id_Guionista = $_GET['idGuionista'];
	
	$sql = "SELECT idGuionista, nombreGuionista, nacionalidadGuionista, fotoGuionista, fechaNacGuionista ";
	$sql .= "FROM guionista ";
	$sql .= "WHERE idGuionista = '$id_Guionista'";
	
	$vector = conexion($sql);
	
	$arrayDatosGuionista = array();
	
	if( mysqli_num_rows($vector[1])!=0 ) {
		while( $row = mysqli_fetch_array($vector[1]) ) {
			
			$idGuionista = $row['idGuionista'];
			$nombreGuionista = $row['nombreGuionista'];
			$nacionalidadGuionista = $row['nacionalidadGuionista'];
			$fotoGuionista = $row['fotoGuionista'];
			$fechaNacGuionista = date("d-m-Y", strtotime($row['fechaNacGuionista']));
			
			$arrayDatosGuionista[] = array('idGuionista'=> $idGuionista,'nombreGuionista'=> $nombreGuionista,'nacionalidadGuionista'=> $nacionalidadGuionista,'fotoGuionista' => $fotoGuionista,'fechaNacGuionista' => $fechaNacGuionista);
		}
	}
	
	$json_string = json_encode($arrayDatosGuionista);
	echo $json_string;
	
?>

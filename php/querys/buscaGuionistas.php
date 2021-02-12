<?php
	
	include('../connection.php');
	
	$sql = "SELECT idGuionista, nombreGuionista FROM guionista ";
	$vector = conexion($sql);
	
	$arrayGuionistas = array();
	
	if( mysqli_num_rows($vector[1])!=0 ) {
		while( $row = mysqli_fetch_array($vector[1]) ) {
			$idGuionista = $row['idGuionista'];
			$nombreGuionista = $row['nombreGuionista'];
			
			$arrayGuionistas[] = array('idGuionista' => $idGuionista,'nombreGuionista'=> $nombreGuionista);
		}
	}
	
	$json_string = json_encode($arrayGuionistas);
	echo $json_string;
	
?>

<?php
	include('../connection.php');
	
	$sql = "SELECT idEditorial, nombreEditorial FROM editorial ";
	$vector = conexion($sql);
	
	$arrayEditoriales = array();
	
	if( mysqli_num_rows($vector[1])!=0 ) {
		while( $row = mysqli_fetch_array($vector[1]) ) {
			$idEditorial = $row['idEditorial'];
			$nombreEditorial = $row['nombreEditorial'];
			
			$arrayEditoriales[] = array('idEditorial' => $idEditorial,'nombreEditorial'=> $nombreEditorial);
		}
	}
	
	$json_string = json_encode($arrayEditoriales);
	echo $json_string;
?>

<?php
	
	include('../connection.php');
	
	$nombre = $_GET['nombre'];
	
	if (empty($nombre)) {
		$nombre = 'eqwrtrthgzfsd'; //si la cadena está vacía, se cambia por otra que con la que no vaya a devolver nada la búsqueda
	}
	
	$sql = "SELECT id, nombre, foto, tipo ";
	$sql .= "FROM busqueda ";
	$sql .= "WHERE nombre like '%$nombre%'";
	
	$vector = conexion($sql);
	
	$arrayDatosBusqueda = array();
	
	if( mysqli_num_rows($vector[1])!=0 ) {
		while( $row = mysqli_fetch_array($vector[1])) {
			
			$id = $row['id'];
			$nombre = $row['nombre'];
			$foto = $row['foto'];
			$tipo = $row['tipo'];
			
			$arrayDatosBusqueda[] = array('id'=> $id,'nombre'=> $nombre,'foto' => $foto,'tipo' => $tipo);
		}
	}
	
	$json_string = json_encode($arrayDatosBusqueda);
	echo $json_string;
	
?>

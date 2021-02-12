<?php
	
	include('../connection.php');
	
	$nombreGuionista = $_POST['nombreGuionista'];
	$nacionalidadGuionista = $_POST['nacionalidadGuionista'];
	$fotoGuionista = $_FILES['fotoGuionista']['name'];
	$fechaNacGuionista = $_POST['fechaNacGuionista'];
	
	$nombreFotoGuionista = strtolower($fotoGuionista);
	$ruta = "../../resources/img/guionistas/" . $_FILES['fotoGuionista']['name'];
	$destino = "../../resources/img/guionistas/".$nombreFotoGuionista;
	
	$resultado = @move_uploaded_file($_FILES["fotoGuionista"]["tmp_name"], $ruta);
	
	
	$sql = "INSERT INTO guionista (nombreGuionista, nacionalidadGuionista, fotoGuionista, fechaNacGuionista, karmaGuionista) ";
	$sql .= "VALUES ('".$nombreGuionista."','".$nacionalidadGuionista."','".$nombreFotoGuionista."','".$fechaNacGuionista."',0);";
	
	if (!empty($resultado)){
		$vector = conexion($sql);
	}
	
	if($vector){
		header('Location: exito.php');
	}
	else{
		header('Location: error.php');
	}
	
?>

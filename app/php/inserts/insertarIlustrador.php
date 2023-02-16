<?php
	
	include('../connection.php');
	
	$nombreIlustrador = $_POST['nombreIlustrador'];
	$nacionalidadIlustrador = $_POST['nacionalidadIlustrador'];
	$fotoIlustrador = $_FILES['fotoIlustrador']['name'];
	$fechaNacIlustrador = $_POST['fechaNacIlustrador'];
	
	$nombreFotoIlustrador = strtolower($fotoIlustrador);
	$ruta = "../../resources/img/ilustradores/" . $_FILES['fotoIlustrador']['name'];
	$destino = "../../resources/img/ilustradores/".$nombreFotoIlustrador;
	
	$resultado = @move_uploaded_file($_FILES["fotoIlustrador"]["tmp_name"], $ruta);
	
	
	$sql = "INSERT INTO ilustrador (nombreIlustrador, nacionalidadIlustrador, fotoIlustrador, fechaNacIlustrador, karmaIlustrador) ";
	$sql .= "VALUES ('".$nombreIlustrador."','".$nacionalidadIlustrador."','".$nombreFotoIlustrador."','".$fechaNacIlustrador."',0);";
	
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

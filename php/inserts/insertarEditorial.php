<?php
	
	include('functions.php');
	
	$nombreEditorial = $_POST['nombreEditorial'];
	$logo = $_FILES['logo']['name'];
	
	$nombreLogo = strtolower($logo);
	$ruta = "../img/logos/" . $_FILES['logo']['name'];
	$destino = "../img/logos/".$nombreLogo;
	
	$resultado = @move_uploaded_file($_FILES["logo"]["tmp_name"], $ruta);
	
	
	$sql = "INSERT INTO editorial (nombreEditorial, logo, karmaEditorial) VALUES ('".$nombreEditorial."','".$nombreLogo."',0);";
	
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

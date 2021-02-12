<?php
	
	include('functions.php');
	
	$nombreComic = $_POST['nombreComic'];
	$sinopsis = $_POST['sinopsis'];
	$anioPublicacion = $_POST['anioPublicacion'];
	$portada = $_FILES['portada']['name'];
	$compra = $_POST['compra'];
	$idGuionista = $_POST['idGuionista'];
	$idIlustrador = $_POST['idIlustrador'];
	$idEditorial = $_POST['idEditorial'];
	
	
	$nombrePortada = strtolower($portada);
	$ruta = "../img/portadas/" . $_FILES['portada']['name'];
	$destino = "../img/portadas/".$nombrePortada;
	
	$resultado = @move_uploaded_file($_FILES["portada"]["tmp_name"], $ruta);
	
	
	$sql = "INSERT INTO comic (nombreComic, sinopsis, anioPublicacion, portada, compra, karmaComic, idGuionista, idIlustrador, idEditorial) ";
	$sql .= "VALUES ('".$nombreComic."','".$sinopsis."','".$anioPublicacion."','".$nombrePortada."','".$compra."',0,'".$idGuionista."','".$idIlustrador."','".$idEditorial."');";
	
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

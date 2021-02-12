<?php
	
	session_start();
	if( !isset($_SESSION['nombreUsuario']) or !isset($_SERVER['HTTP_REFERER']) ) {
		header("Location: ../index.html");
		exit();
	}
	
	include('../connection.php');
	
	$id_comic = $_GET['idComic'];
	$id_usuario = $_COOKIE['idUsuario'];
	
	$sql = "SELECT nombreComic, sinopsis, anioPublicacion, portada, compra, guionista.idGuionista, nombreGuionista, ilustrador.idIlustrador, nombreIlustrador, editorial.idEditorial, nombreEditorial, ";
	$sql .= "(Select ROUND(AVG(puntuacion),2) from biblioteca where idComic = '$id_comic') as mediaglobal ";
	$sql .= "FROM comic ";
	$sql .= "JOIN guionista on comic.idGuionista = guionista.idGuionista ";
	$sql .= "JOIN ilustrador on comic.idIlustrador = ilustrador.idIlustrador ";
	$sql .= "JOIN editorial on comic.idEditorial = editorial.idEditorial ";
	$sql .= "WHERE comic.idComic = '$id_comic' ";
	
	$vector = conexion($sql);
	
	$arrayImg = array();
	
	if( mysqli_num_rows($vector[1])!=0 ) {
		while( $row = mysqli_fetch_array($vector[1]) ) {
			
			$nombreComic = $row['nombreComic'];
			$sinopsis = $row['sinopsis'];
			$anioPublicacion = $row['anioPublicacion'];
			$portada = $row['portada'];
			$compra = $row['compra'];			
			$idGuionista = $row['idGuionista'];
			$nombreGuionista = $row['nombreGuionista'];
			$idIlustrador = $row['idIlustrador'];
			$nombreIlustrador = $row['nombreIlustrador'];
			$idEditorial = $row['idEditorial'];
			$nombreEditorial = $row['nombreEditorial'];
			$mediaglobal = $row['mediaglobal'];
			
			if ($mediaglobal == null){
				$mediaglobal = 0;
			}
			
			$arrayImg[] = array('nombreComic'=> $nombreComic,'sinopsis'=> $sinopsis,'anioPublicacion'=> $anioPublicacion,'portada' => $portada,'compra' => $compra, 'idGuionista' => $idGuionista, 'nombreGuionista' => $nombreGuionista, 'idIlustrador' => $idIlustrador, 'nombreIlustrador' => $nombreIlustrador, 'idEditorial' => $idEditorial, 'nombreEditorial' => $nombreEditorial, 'mediaglobal' => $mediaglobal);
		}
	}
	
	$json_string = json_encode($arrayImg);
	echo $json_string;
	
?>

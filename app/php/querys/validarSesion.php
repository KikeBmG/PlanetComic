<?php
	
	include('../connection.php');
	session_start();
	
	$usuarioI = $_REQUEST['usuarioI'];
	$contraseniaI = $_REQUEST['contraseniaI'];
	
	$sql= "SELECT * FROM usuario WHERE nombreUsuario='$usuarioI' AND contrasenia='$contraseniaI'";
	$vector = conexion($sql);
	
	$fila = mysqli_fetch_array($vector[1]);
	
	if(!$fila['idUsuario']) {
		header("location: ../index.html");
	}
	else {
		$_SESSION['idUsuario'] = $fila['idUsuario'];
		$_SESSION['nombreUsuario'] = $fila['nombreUsuario'];
		
		header("location: main.php");
	}
?>
<?php
	
	include('functions.php');
	session_start();
	
	$usuarioR = $_POST['usuarioR'];
	$contraseniaR = $_POST['contraseniaR'];
	$emailR = $_POST['emailR'];
	
	$sql= "INSERT INTO usuario (nombreUsuario,contrasenia,email) VALUES ('$usuarioR','$contraseniaR','$emailR')";
	$vector = conexion($sql);
	
	if(!$vector) { //el error, vuelve al inicio
		header("location: ../index.html");
	}
	else { // si tiene exito, va a la pagina principal
		
		$sql2= "SELECT * FROM usuario WHERE nombreUsuario='$usuario'";
		$vector2 = conexion($sql2);
		
		$fila = mysqli_fetch_array($vector2[1]);
		
		$_SESSION['id_usuario'] = $fila['idUsuario'];
		$_SESSION['nombreUsuario'] = $fila['nombreUsuario'];
		
		header("location: main.php");
	}
?>
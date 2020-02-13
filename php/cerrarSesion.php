<?php
	session_start();
	
	if (isset($_COOKIE['idUsuario'])) {
		unset($_COOKIE['idUsuario']);
	}
	
	if($_SESSION['idUsuario']) {
		session_destroy();
		header("location: ../index.html");
	}
	
?>
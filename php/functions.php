<?php
	
	function conexion($sql){
		$server = "localhost";
		$BD = "pdaw2t07egomez";
		$user = "root";
		$password = "";
		
		$con = mysqli_connect($server,$user,$password,$BD) or die("Error en la conexión");
		mysqli_set_charset($con,"utf8");
		
		$sentencia = mysqli_query($con,$sql) or die("Error en la consulta: $sql");
		
		$arrayCon = array($con,$sentencia);
		
		return $arrayCon;
	}
	
?>

<?php
	
	include('functions.php');
	
	if (isset($_REQUEST['nombre'])){
		$nombre = $_REQUEST['nombre'];
	}
	else {
		$nombre = "";
	}
?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	
	<title>¡Éxito!</title>
	<!--	CSS		-->
	<link rel="stylesheet" href="../css/bootstrap.css" type="text/css">
	<link rel="stylesheet" href="../css/main.css" type="text/css">
	<link href="../css/star-rating.min.css" media="all" rel="stylesheet" type="text/css"/>
	<!--	JavaScripts Bootstrap y jQuery		-->
	<script src="../js/jquery-3.3.1.min.js" type="text/javascript"></script>
	<script src="../js/popper.min.js" type="text/javascript"></script>
	<script src="../js/bootstrap.min.js" type="text/javascript"></script>
	<!--	JavaScripts propios y Plugin estrella		-->
	<script src="../js/star-rating.js" type="text/javascript"></script>
	<script src="../js/mostrarComic.js" type="text/javascript"></script>
	<!--	Textos y traducciones de las estrellas		-->
	<script src="../js/locales/es.js" type="text/javascript"></script>
</head>
<body>
	<!--  Barra de Navegación	-->
	<nav class="navbar navbar-toggleable-md bg-dark navbar-dark sticky-top">
		<button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="navbar-brand">
			<form class="form-inline my-2 my-lg-0" action="buscador.php" method="post">
				<input class="form-control mr-sm-2 buscador" type="text" placeholder="Buscar" id="nombre" name="nombre">
				<button class="btn btn-primary my-2 my-sm-0" type="submit"><img src="../img/iconos/glyphicons-28-search.png" height="16px" alt="Buscar"></button>
			</form>
		</div>
		<h5><a class="navbar-brand" href="main.php">Planet Comic</a></h5>
		<div class="collapse navbar-collapse" id="navbarTogglerDemo02">
			<ul class="navbar-nav mr-auto mt-2 mt-md-0">
				<li class="nav-item">
					<a class="nav-link" href="main.php?estado=Leido" id="Leido" onclick="marcaActivo(this)">Leídos<span id="contLeido"></span></a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="main.php?estado=Leyendo" id="Leyendo" onclick="marcaActivo(this)">Leyendo<span id="contLeyendo"></span></a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="main.php?estado=Pendiente" id="Pendiente" onclick="marcaActivo(this)">Pendiente<span id="contPendiente"></span></a>
				</li>
			</ul>
			<ul class="navbar-nav mr-auto mt-2 mt-md-0">
				<li class="nav-item">
					<a class="nav-link" href="../php/cerrarSesion.php" id="Cerrar" onclick="marcaActivo(this)">Cerrar Sesión</a>
				</li>
			</ul>
		</div>
	</nav>
	<!--  Contenido  -->
	<div class="container" id="container">
		<h3 id="contador" class="col-lg-11"></h3>
		<div class="row menos-margen-inf">
			<div class="col-sm-12">
				<h3 class="texto-blanco center">No se ha podido añadir, <a href="formularioInsertar.php">inténtelo de nuevo.</a></h3>
				<div class="error">
					<img src='../img/iconos/abajo.png' height='128px' alt='positivo'>
				</div>
			</div>
		</div>
	</div>
</body>
</html>
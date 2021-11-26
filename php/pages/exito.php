<?php
	include('../connection.php');

	$nombre = isset($_REQUEST['nombre']) ?  $_REQUEST['nombre'] : '';
?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	
	<title>¡Éxito!</title>
	<!--	CSS		-->
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
	<link href="../../css/main.css" rel="stylesheet" type="text/css">
	<link href="../../resources/plugins/star-rating/css/main.css" media="all" rel="stylesheet" type="text/css"/>
	<!--	JavaScripts Bootstrap y jQuery		-->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" type="text/javascript"></script>
	<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.6.0/dist/umd/popper.min.js" integrity="sha384-KsvD1yqQ1/1+IA7gi3P0tyJcT3vR+NdBTt13hSJ2lnve8agRGXTTyNaBYmCR/Nwi" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.min.js" integrity="sha384-nsg8ua9HAw1y0W1btsyWgBklPnCUAFLuTMS2G72MMONqmOymq585AcH49TLBQObG" crossorigin="anonymous"></script>
	<!--	JavaScripts propios y Plugin estrella		-->
	<script src="../../js/star-rating.js" type="text/javascript"></script>
	<script src="../../js/mostrarComic.js" type="text/javascript"></script>
	<!--	Textos y traducciones de las estrellas		-->
	<script src="../../resources/plugins/star-rating/locales/es.js" type="text/javascript"></script>
</head>
<body class="bg-secondary-blue-400">
	<!--  Barra de Navegación	-->
	<nav class="navbar navbar-toggleable-md bg-secondary-blue-100 sticky-top">
		<button class="navbar-toggler navbar-toggler-right border-primary-blue-100" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="navbar-brand">
			<form class="form-inline my-2 my-lg-0" action="buscador.php" method="post">
				<input class="form-control mr-sm-2 buscador texto-blanco bg-secondary-blue-200 border-primary-blue-100" type="text" placeholder="Buscar" id="nombre" name="nombre">
				<button class="btn btn-primary my-2 my-sm-0" type="submit"><img src="../../resources/img/iconos/glyphicons-28-search.png" height="16px" alt="Buscar"></button>
			</form>
		</div>
		<h5 class="title-small block"><a class="navbar-brand" href="main.php">Planet Comic</a></h5>
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
		<h3 id="contador" class="col-lg-11 contador texto-blanco"></h3>
		<div class="row menos-margen-inf">
			<div class="col-sm-12">
				<h3 class="texto-blanco center">Se ha añadido correctamente.</h3>
				<div class="exito">
					<img src='../resources/img/iconos/arriba.png' height='128px' alt='positivo'>
				</div>
			</div>
		</div>
	</div>
</body>
</html>

<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	
	<title>Nuevo</title>
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
	<script src="../../js/formularioInsertar.js" type="text/javascript"></script>
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
			<div class="col-sm-12 btn-group btn-group-toggle btn-insert" data-toggle="buttons">
				<label class="btn btn-primary" id="lblEditorial">
					<input type="radio" name="options" id="editorial" >Editorial
				</label>
				<label class="btn btn-primary" id="lblGuionista">
					<input type="radio" name="options" id="guionista" autocomplete="off">Guionista
				</label>
				<label class="btn btn-primary" id="lblIlustrador">
					<input type="radio" name="options" id="ilustrador" autocomplete="off">Ilustrador
				</label>
				<label class="btn btn-primary" id="lblComic">
					<input type="radio" name="options" id="comic" autocomplete="off">Comic
				</label>
			</div>
		</div>
		<div class="row btn-insert">
			<div class="col-sm-12">
				<div class="row formulario none" id="formeditorial">
					<form action="insertarEditorial.php" method="post" enctype="multipart/form-data">
						<div class="form-group">
							<label for="nombreEditorial" class="texto-blanco">Nombre de la Editorial</label>
							<input type="text" class="form-control input-formulario bg-secondary-blue-200 texto-blanco border-primary-blue-100" id="nombreEditorial" name="nombreEditorial" placeholder="Editorial" required>
							<small class="form-text text-muted">El nombre de la editorial es un campo obligatorio.</small>
						</div>
						<div class="form-group">
							<label for="exampleInputFile" class="texto-blanco">Logo de la Editorial</label>
							<div class="custom-file">
							   <input id="logo" type="file" class="custom-file-input" name="logo" required accept="image/*">
							   <label for="logo" class="custom-file-label input-formulario bg-secondary-blue-200 border-primary-blue-100">Subir logo...</label>
							</div>
							
							<small id="fileHelp" class="form-text text-muted">El logo de la editorial es un campo obligatorio.</small>
						</div>
						<button type="submit" class="btn btn-primary">Enviar</button>
					</form>
				</div>
				<div class="row formulario none" id="formguionista">
					<form action="insertarGuionista.php" method="post" enctype="multipart/form-data">
						<div class="form-group">
							<label for="nombreGuionista" class="texto-blanco">Nombre del Guionista</label>
							<input type="text" class="form-control input-formulario bg-secondary-blue-200 texto-blanco border-primary-blue-100" id="nombreGuionista" name="nombreGuionista" placeholder="Nombre" required>
							<small class="form-text text-muted">El nombre del guionista es un campo obligatorio.</small>
						</div>
						<div class="form-group">
							<label for="nacionalidadGuionista" class="texto-blanco">Nacionalidad del Guionista</label>
							<input type="text" class="form-control input-formulario bg-secondary-blue-200 texto-blanco border-primary-blue-100" id="nacionalidadGuionista" name="nacionalidadGuionista" placeholder="Nacionalidad" required>
							<small class="form-text text-muted">La nacionalidad del guionista es un campo obligatorio.</small>
						</div>
						<div class="form-group">
							<label for="fechaNacGuionista" class="texto-blanco">Fecha de nacimiento del Guionista</label>
							<input type="text" class="form-control input-formulario bg-secondary-blue-200 texto-blanco border-primary-blue-100" id="fechaNacGuionista" name="fechaNacGuionista" placeholder="Fecha de nacimiento" required pattern="[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])">
							<small class="form-text text-muted">La fecha de nacimiento del guionista es un campo obligatorio y debe seguir el patrón YYYY-MM-DD.</small>
						</div>
						<div class="form-group">
							<label for="exampleInputFile" class="texto-blanco">Foto del Guionista</label>
							<div class="custom-file">
								<input id="fotoGuionista" type="file" class="custom-file-input" name="fotoGuionista" required accept="image/*">
								<label for="fotoGuionista" class="custom-file-label input-formulario bg-secondary-blue-200 border-primary-blue-100">Subir foto...</label>
							</div>
							<small id="fileHelp" class="form-text text-muted">La foto del guionista es un campo obligatorio.</small>
						</div>
						<button type="submit" class="btn btn-primary">Enviar</button>
					</form>
				</div>
				<div class="row formulario none" id="formilustrador">
					<form action="insertarIlustrador.php" method="post" enctype="multipart/form-data">
						<div class="form-group">
							<label for="nombreIlustrador" class="texto-blanco">Nombre del Ilustrador</label>
							<input type="text" class="form-control input-formulario bg-secondary-blue-200 texto-blanco border-primary-blue-100" id="nombreIlustrador" name="nombreIlustrador" placeholder="Nombre" required>
							<small class="form-text text-muted">El nombre del ilustrador es un campo obligatorio.</small>
						</div>
						<div class="form-group">
							<label for="nacionalidadIlustrador" class="texto-blanco">Nacionalidad del Ilustrador</label>
							<input type="text" class="form-control input-formulario bg-secondary-blue-200 texto-blanco border-primary-blue-100" id="nacionalidadIlustrador" name="nacionalidadIlustrador" placeholder="Nacionalidad" required>
							<small class="form-text text-muted">La nacionalidad del ilustrador es un campo obligatorio.</small>
						</div>
						<div class="form-group">
							<label for="fechaNacIlustrador" class="texto-blanco">Fecha de nacimiento del Ilustrador</label>
							<input type="text" class="form-control input-formulario bg-secondary-blue-200 texto-blanco border-primary-blue-100" id="fechaNacIlustrador" name="fechaNacIlustrador" placeholder="Fecha de nacimiento" required pattern="[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])">
							<small class="form-text text-muted">La fecha de nacimiento del ilustrador es un campo obligatorio y debe seguir el patrón YYYY-MM-DD.</small>
						</div>
						<div class="form-group">
							<label for="exampleInputFile" class="texto-blanco">Foto del Ilustrador</label>
							<div class="custom-file">
								<input id="fotoGIlustrador" type="file" class="custom-file-input" name="fotoIlustrador" required accept="image/*">
								<label for="fotoIlustrador" class="custom-file-label input-formulario bg-secondary-blue-200 border-primary-blue-100">Subir foto...</label>
							</div>
							<small id="fileHelp" class="form-text text-muted">La foto del ilustrador es un campo obligatorio.</small>
						</div>
						<button type="submit" class="btn btn-primary">Enviar</button>
					</form>
				</div>
				<div class="row formulario none" id="formcomic">
					<form action="insertarComic.php" method="post" enctype="multipart/form-data">
						<div class="form-group">
							<label for="nombreComic" class="texto-blanco">Nombre del Comic</label>
							<input type="text" class="form-control input-formulario bg-secondary-blue-200 texto-blanco border-primary-blue-100" id="nombreComic" name="nombreComic" placeholder="Nombre" required>
							<small class="form-text text-muted">El nombre del comic es un campo obligatorio.</small>
						</div>
						<div class="form-group">
							<label for="sinopsis" class="texto-blanco">Sinopsis del Comic</label>
							<textarea class="form-control input-formulario bg-secondary-blue-200 texto-blanco border-primary-blue-100" id="sinopsis" name="sinopsis" placeholder="Sinopsis" required></textarea>
							<small class="form-text text-muted">La sinopsis del comic es un campo obligatorio.</small>
						</div>
						<div class="form-group">
							<label for="anioPublicacion" class="texto-blanco">Año de publicación del Comic</label>
							<input type="text" class="form-control input-formulario bg-secondary-blue-200 texto-blanco border-primary-blue-100" id="anioPublicacion" name="anioPublicacion" placeholder="Publicación" required pattern="^(19|20)\d{2}$">
							<small class="form-text text-muted">El año de publicación del comic es un campo obligatorio y debe ser un número de 4 digitos a partir de 1900.</small>
						</div>
						<div class="form-group">
							<label for="exampleInputFile" class="texto-blanco">Portada del Comic</label>
							<div class="custom-file">
								<input id="portada" type="file" class="custom-file-input" name="portada" required accept="image/*">
								<label for="portada" class="custom-file-label input-formulario bg-secondary-blue-200 border-primary-blue-100">Subir foto...</label>
							</div>
							<small id="fileHelp" class="form-text text-muted">La portada del comic es un campo obligatorio.</small>
						</div>
						<div class="form-group">
							<label for="compra" class="texto-blanco">Enlace de compra</label>
							<input type="text" class="form-control input-formulario bg-secondary-blue-200 texto-blanco border-primary-blue-100" id="compra" name="compra" placeholder="Enlace" required pattern="(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})">
							<small class="form-text text-muted">El enlace de compra del comic es un campo obligatorio.</small>
						</div>
						<div class="form-group">
							<label for="idEditorial" class="texto-blanco">Editorial del Comic</label>
							<select class="form-control input-formulario bg-secondary-blue-200 texto-blanco border-primary-blue-100" id="selectEditorial" name="idEditorial" required>
							</select>
							<small class="form-text text-muted">La editorial del comic es un campo obligatorio.</small>
						</div>
						<div class="form-group">
							<label for="idGuionista" class="texto-blanco">Guionista del Comic</label>
							<select class="form-control input-formulario bg-secondary-blue-200 texto-blanco border-primary-blue-100" id="selectGuionista" name="idGuionista" required>
							</select>
							<small class="form-text text-muted">El guionista del comic es un campo obligatorio.</small>
						</div>
						<div class="form-group">
							<label for="idIlustrador" class="texto-blanco">Ilustrador del Comic</label>
							<select class="form-control input-formulario bg-secondary-blue-200 texto-blanco border-primary-blue-100" id="selectIlustrador" name="idIlustrador" required>
							</select>
							<small class="form-text text-muted">El ilustrador del comic es un campo obligatorio.</small>
						</div>
						<button type="submit" class="btn btn-primary">Enviar</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</body>
</html>
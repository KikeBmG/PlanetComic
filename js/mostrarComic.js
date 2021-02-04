let modalDatosComic = idComic => {
	$.getJSON('mostrarComic.php?idComic=' + idComic, data => {

		let aux = "";

		aux += "<div class='modal fade bd-example-modal-lg' id='myModal' tabindex='-1' role='dialog' aria-labelledby='myLargeModalLabel'>";//inicio modal
		aux += "<div class='modal-dialog modal-lg' role='document'>"; //abre modal dialog
		aux += "<div class='modal-content'>"; //abre modal content

		aux += "<div class='modal-header'>"; //abre modal header
		aux += "<h4 class='modal-title'>" + data[0].nombreComic + "</h4>";
		aux += "<button type='button' class='close' data-dismiss='modal' aria-label='Close'>";
		aux += "<span aria-hidden='true'>&times;</span>";
		aux += "</button>";
		aux += "</div>"; //cierra el modal header

		aux += "<div class='modal-body'>"; //abre modal body

		aux += "<div role='tabpanel'>"; //abre tabpanel

		aux += "<ul class='nav nav-tabs' role='tablist'>"; //abre Nav tabs
		aux += "<li role='presentation' class='nav-item active'><a href='#datosTab' aria-controls='datosTab' role='tab' data-toggle='tab' class='nav-link botonesTab active'>Datos</a></li>";
		aux += "<li role='presentation' class='nav-item'><a href='#comentariosTab' aria-controls='comentariosTab' role='tab' data-toggle='tab' class='nav-link botonesTab' onclick='muestraComentarios(" + idComic + ")'>Comentarios</a></li>";
		aux += "</ul>"; //cierra Nav tabs

		aux += "<div class='tab-content'>"; //abre tab-content

		aux += "<div role='tabpanel' class='tab-pane active' id='datosTab'>"; //abre tab datos
		aux += "<div class='container-fluid'>"; //abre container-fluid

		aux += "<div class='row'>"; //abre fila 1
		aux += "<div class='col-md-3'>"; //abre columna 1

		aux += "<img src='../img/portadas/" + data[0].portada + "' height='300px' width='200px'>"; //imagen dentro del div item

		aux += "<div class='botones-modal'>" //abre div botones

		aux += "<span class='btn botonEstadoComic disabled menos-margen-inf' id='mediaGlobal'>Valoración Global: " + data[0].mediaglobal + "</span>"
		aux += "<span class='btn botonEstadoComic disabled' id='media'></span>"

		aux += "<form>" //abre formulario estrellas
		aux += "<input id='estrellas' name='puntuacion' type='text' class='rating' data-min=0 data-max=5 data-step=0.5 data-size='xs' required>";
		aux += "<button type='submit' class='btn btn-sample botonEstadoComic menos-margen-inf' id='botonEnviarVotacion' onclick='enviarVotacion(" + idComic + ")'>Votar</button>";
		aux += "</form>" //cierra formulario estrellas

		aux += "<p><button type='button' id='botonLeido' class='btn btn-primary botonEstadoComic' onclick='cambiaEstado(1," + idComic + ")' value='Leido'>Leido</button></p>"; // boton Leido
		aux += "<p><button type='button' id='botonLeyendo' class='btn btn-primary botonEstadoComic' onclick='cambiaEstado(2," + idComic + ")' value='Leyendo'>Leyendo</button></p>"; // boton Leyendo
		aux += "<p><button type='button' id='botonPendiente' class='btn btn-primary botonEstadoComic' onclick='cambiaEstado(3," + idComic + ")' value='Leyendo'>Pendiente</button></p>"; // boton Pendiente

		aux += "<p class='margen-izquierdo-3'><button class='btn btn-success my-2 my-sm-0 margen-derecho-1 votakarma' onclick='votaKarmaComic(" + idComic + "," + (+1) + ")'><img src='../img/iconos/glyphicons-344-thumbs-up.png' height='16px' alt='positivo'></button>"; // boton karma positivo

		aux += "<button class='btn btn-danger my-2 my-sm-0 votakarma' onclick='votaKarmaComic(" + idComic + "," + (-1) + ")'><img src='../img/iconos/glyphicons-345-thumbs-down.png' height='16px' alt='negativo'></button></p>"; // boton karma negativo

		aux += "<small class='none' id='feedbackKarmaComic'>¡Gracias por votar!</small>";

		aux += "</div>"; //cierra div botones
		aux += "</div>"; //cierra columna 1

		aux += "<div class='col-md-8'>"; //abre columna 2

		aux += "<div class='row'>"; //abre fila sinopsis
		aux += "<div class='row'><div class='col-md-12'><h4>Sinopsis</h4></div>";
		aux += "<div class='col-md-12'><p>" + data[0].sinopsis + "</p></div></div>";
		aux += "</div>"; //cierra fila sinopsis

		aux += "<div class='row'>"; //abre fila creadores 1
		aux += "<div class='col-md-6'><b>Publicación: " + data[0].anioPublicacion + "</b></div>";
		aux += "<div class='col-md-6'><b>Editorial: <a class='link' id='" + data[0].idEditorial + "'  href='../php/editorial.php?idEditorial=" + data[0].idEditorial + "'>" + data[0].nombreEditorial + "</a></b></div>";
		aux += "</div>"; //cierra fila creadores 1

		aux += "<div class='row'>"; //abre fila creadores 2
		aux += "<div class='col-md-6'><b>Guionista: <a class='link' id='" + data[0].idGuionista + "' href='../php/guionista.php?idGuionista=" + data[0].idGuionista + "'>" + data[0].nombreGuionista + "</a></b></div>";
		aux += "<div class='col-md-6'><b>Ilustrador: <a class='link' id='" + data[0].idIlustrador + "' href='../php/ilustrador.php?idIlustrador=" + data[0].idIlustrador + "'>" + data[0].nombreIlustrador + "</a></b></div>";
		aux += "</div>"; //cierra fila creadores 2

		aux += "<div class='row'>"; //abre fila compra
		aux += "<div class='col-md-10 center'><h4><a class='btn btn-primary nav-link' target='_blank' href=" + data[0].compra + ">Compra</a></h4></div>";
		aux += "</div>"; //cierra compra

		aux += "</div>"; //cierra columna 2
		aux += "</div>"; //cierra fila 1

		aux += "</div>"; //cierra container-fluid

		aux += "</div>"; //cierra tab datos

		aux += "<div role='tabpanel' class='tab-pane' id='comentariosTab'></div>";

		aux += "</div>"; //cierra tab-content
		aux += "</div>"; //cierra tabpanel

		aux += "</div>"; //cierra modal body

		aux += "</div>"; //cierra modal content
		aux += "</div>"; //cierra modal dialog
		aux += "</div>"; //cierra modal


		$('#modal').html(aux);
		$('#myModal').modal();

		$('#myModal').on('hidden.bs.modal', e => {
			$(this).remove();
		});

		$('#estrellas').rating('create');

		let auxMediaGlobal = parseInt(data[0].mediaglobal);

		if (auxMediaGlobal >= 9) {
			$('#mediaGlobal').addClass('btn-success');
		}
		else if (auxMediaGlobal >= 7) {
			$('#mediaGlobal').addClass('btn-primary');
		}
		else if (auxMediaGlobal >= 5) {
			$('#mediaGlobal').addClass('btn-info');
		}
		else if (auxMediaGlobal >= 3) {
			$('#mediaGlobal').addClass('btn-warning');
		}
		if (auxMediaGlobal < 3) {
			$('#mediaGlobal').addClass('btn-danger');
		}

		$.getJSON('compruebaEstado.php?idComic=' + idComic, dato => {
			if (dato.length > 0) {
				switch (dato[0].estado) {
					case 'Leido':
						$('#botonLeido').removeClass('btn-primary');
						$('#botonLeido').addClass('btn-success');
						break;
					case 'Leyendo':
						$('#botonLeyendo').removeClass('btn-primary');
						$('#botonLeyendo').addClass('btn-warning');
						break;
					case 'Pendiente':
						$('#botonPendiente').removeClass('btn-primary');
						$('#botonPendiente').addClass('btn-danger');
						break;
				}
				let auxMedia = parseInt(dato[0].puntuacion);
				console.log(dato[0].puntuacion);
				if (auxMedia >= 9) {
					$('#media').addClass('btn-success');
				}
				else if (auxMedia >= 7) {
					$('#media').addClass('btn-primary');
				}
				else if (auxMedia >= 5) {
					$('#media').addClass('btn-info');
				}
				else if (auxMedia >= 3) {
					$('#media').addClass('btn-warning');
				}
				if (auxMedia < 3) {
					$('#media').addClass('btn-danger');
				}
				$('#media').html("Mi Valoración: " + dato[0].puntuacion);
			}
		});
	});
}

let votaKarmaComic = (idComic, karma) => {
	$.ajax({
		type: 'POST',
		url: '../php/votarKarmaComic.php',
		data: {
			idComic: idComic,
			karma: karma
		},
		success: data => {
			$('.votakarma').prop('disabled', true);
			$('#feedbackKarmaComic').removeClass('none');
			$('#feedbackKarmaComic').addClass('block');
		}
	});
}

let cambiaEstado = (vEstado, idComic) => {
	switch (vEstado) {
		case 1:
			vEstado = 'Leido';
			break;
		case 2:
			vEstado = 'Leyendo';
			break;
		case 3:
			vEstado = 'Pendiente';
			break;
	}

	$.ajax({
		type: 'POST',
		url: '../php/insertarBiblioteca.php',
		data: {
			idComic: idComic,
			estado: vEstado
		},
		success: data => {
			switch (vEstado) {
				case 'Leido':
					$('#botonLeyendo').removeClass('btn-warning');
					$('#botonPendiente').removeClass('btn-danger');
					$('.botonEstadoComic').addClass('btn-primary');
					$('#botonLeido').removeClass('btn-primary');
					$('#botonLeido').addClass('btn-success');
					break;
				case 'Leyendo':
					$('#botonLeido').removeClass('btn-success');
					$('#botonPendiente').removeClass('btn-danger');
					$('.botonEstadoComic').addClass('btn-primary');
					$('#botonLeyendo').removeClass('btn-primary');
					$('#botonLeyendo').addClass('btn-warning');
					break;
				case 'Pendiente':
					$('#botonLeido').removeClass('btn-success');
					$('#botonLeyendo').removeClass('btn-warning');
					$('.botonEstadoComic').addClass('btn-primary');
					$('#botonPendiente').removeClass('btn-primary');
					$('#botonPendiente').addClass('btn-danger');
					break;
			}
		}
	});
}

let muestraComentarios = idComic => {
	$.getJSON('mostrarComentariosComic.php?idComic=' + idComic, data => {
		let auxComentarios = "";

		if (data.length == 0) {
			auxComentarios += "<div class'row'>"; //abre row

			auxComentarios += "<div class='col-md-10'>"; //abre columna 1

			auxComentarios += "<h2>No hay comentarios</h2>";

			auxComentarios += "</div>"; //cierra columna 1

			auxComentarios += "</div>"; //cierra row
		}
		else {
			for (i = 0; i < data.length; i++) {

				auxComentarios += "<div class'row'>"; //abre row

				auxComentarios += "<div class='col-md-12 botones-modal'>"; //abre columna 1

				auxComentarios += "<div class='card card-comentarios'>"; //abre card
				auxComentarios += "<div class='card-body card-body-comentarios'>"; //abre card-body

				auxComentarios += "<h4>" + data[i].nombreUsuario + "</h4>";

				if (data[i].spoiler < 0) {
					auxComentarios += "<p class='card-text none' id='comentario" + data[i].idComentario + "'>" + data[i].texto + "</p>";
				}
				else {
					auxComentarios += "<p class='card-text block' id='comentario" + data[i].idComentario + "'>" + data[i].texto + "</p>";
				}

				auxComentarios += "<div class='card-footer text-muted'>"; //abre card-footer
				auxComentarios += "<ul class'list-inline margin-bottom-0'>"; //abre row footer

				auxComentarios += "<button class='btn btn-success my-2 my-sm-0 margen-derecho-1 votakarmaComentario" + data[i].idComentario + "' onclick='votaKarmaComentario(" + data[i].idComentario + "," + (+1) + ")'><img src='../img/iconos/glyphicons-344-thumbs-up.png' height='8px' alt='positivo'></button>"; // boton karma positivo

				auxComentarios += "<button class='btn btn-danger my-2 my-sm-0 margen-derecho-1 votakarmaComentario" + data[i].idComentario + "' onclick='votaKarmaComentario(" + data[i].idComentario + "," + (-1) + ")'><img src='../img/iconos/glyphicons-345-thumbs-down.png' height='8px' alt='negativo'></button>"; // boton karma negativo

				auxComentarios += "<li class='list-inline-item'>" + data[i].votos + " votos</li>";
				auxComentarios += "<li class='list-inline-item'>" + data[i].fechaComentario + "</li>";

				if (data[i].spoiler < 0) {
					auxComentarios += "<li class='list-inline-item'><button class=' btn btn-warning' onclick='verSpoiler(" + data[i].idComentario + ")'>Ver spoiler</button></li>";
				}

				auxComentarios += "</ul>"; //cierra row footer
				auxComentarios += "<small class='none' id='feedbackKarmaComentario" + data[i].idComentario + "'>¡Gracias por votar!</small>";
				auxComentarios += "</div>"; //cierra card-footer


				auxComentarios += "</div>"; //cierra card-body
				auxComentarios += "</div>"; //cierra card

				auxComentarios += "</div>"; //cierra columna 1

				auxComentarios += "</div>"; //cierra row
			}
		}

		auxComentarios += "<form action='insertarComentario.php' method='post' enctype='multipart/form-data' id='formularioComentar'>"; //abre formulario

		auxComentarios += "<div class='form-group col-md-12'>";  //abre form-group 1
		auxComentarios += "<label for='texto'>Escribe tu comentario:</label>";
		auxComentarios += "<textarea class='form-control inputFormulario texto-blanco' rows='4' id='texto' name='texto' placeholder='Escribe aqui tu comentario...' required></textarea>";
		auxComentarios += "</div>"; //cierra form-group 1

		auxComentarios += "<input type='hidden' name='idComic' value=" + idComic + ">";

		auxComentarios += "<div class='form-group col-md-12'>";  //abre form-group 2
		auxComentarios += "<button type='submit' class='btn btn-primary'>Enviar</button>";
		auxComentarios += "</div>"; //cierra form-group 2

		auxComentarios += "</form>"; //cierra formulario

		$('#comentariosTab').html(auxComentarios);
	});

}

let verSpoiler = idComentario => {
	if ($('#comentario' + idComentario).hasClass('none') == true) {
		$('#comentario' + idComentario).removeClass('none');
		$('#comentario' + idComentario).addClass('block');
	}
	else if ($('#comentario' + idComentario).hasClass('block') == true) {
		$('#comentario' + idComentario).removeClass('block');
		$('#comentario' + idComentario).addClass('none');
	}
}

let votaKarmaComentario = (idComentario, spoiler) => {
	$.ajax({
		type: 'POST',
		url: '../php/votarKarmaComentario.php',
		data: {
			idComentario: idComentario,
			spoiler: spoiler
		},
		success: data => {
			$('.votakarmaComentario' + idComentario).prop('disabled', true);
			$('#feedbackKarmaComentario' + idComentario).removeClass('none');
			$('#feedbackKarmaComentario' + idComentario).addClass('block');
		}
	});
}

let enviarVotacion = idComic => {
	let voto = ($('#estrellas').val()) * 2;

	if (voto !== null) {
		$.ajax({
			type: 'POST',
			url: '../php/insertarPuntuacion.php',
			data: {
				idComic: idComic,
				puntuacion: voto
			},
			success: data => {
				$('#botonEnviarVotacion').addClass('disabled');
			}
		});
	}
}
let calculate_age = dob => {
	//param dob =  date of birthday
	let fechaNac = dob.split('-');
	let formattedFecha = new Date(fechaNac[2], fechaNac[1], fechaNac[0]);

	let diff_ms = Date.now() - formattedFecha.getTime();
	let age_dt = new Date(diff_ms);

	return Math.abs(age_dt.getUTCFullYear() - 1970);
}

$(document).ready(() => {
	let idIlustrador = $('span.invisible').attr('id');

	$.getJSON("datosIlustrador.php?idIlustrador=" + idIlustrador, data => {

		let aux = "";

		aux += "<div class='row'>" //abre fila total

		aux += "<div class='col-sm-3'>"; //abre columna foto

		aux += "<img src='../img/ilustradores/" + data[0].fotoIlustrador + "' width='240px' height='285px'>";

		aux += "</div>"; //cierra columna foto

		aux += "<div class='col-sm-6'>"; //abre columna datos

		aux += "<div class='row'>" //abre fila nombre

		aux += "<h4 class='text-white'>" + data[0].nombreIlustrador + "</h4>";

		aux += "</div>"; //cierra fila nombre

		aux += "<div class='row'>" //abre fila edad y fecha nacimiento

		let age = calculate_age(data[0].fechaNacIlustrador)

		aux += "<h4 class='text-white'>" + data[0].fechaNacIlustrador + " (" + age + " años)</h4>";

		aux += "</div>"; //cierra fila edad y fecha nacimiento

		aux += "<div class='row'>" //abre fila nacionalidad

		aux += "<h4 class='text-white'>" + data[0].nacionalidadIlustrador + "</h4>";

		aux += "</div>"; //cierra fila nacionalidad

		aux += "<div class='row'>" //abre fila karma

		aux += "<button class='btn btn-success my-2 my-sm-0 margen-derecho-1 votakarma' onclick='votaKarmaIlustrador(" + idIlustrador + "," + (+1) + ")'><img src='../img/iconos/glyphicons-344-thumbs-up.png' height='16px' alt='positivo'></button>";

		aux += "<button class='btn btn-danger my-2 my-sm-0 votakarma' onclick='votaKarmaIlustrador(" + idIlustrador + "," + (-1) + ")'><img src='../img/iconos/glyphicons-345-thumbs-down.png' height='16px' alt='negativo'></button>";

		aux += "<span class='none texto-blanco margen-izquierdo-3' id='feedbackKarmaIlustrador'>¡Gracias por votar!</span>";

		aux += "</div>"; //cierra fila karma

		aux += "</div>"; //cierra columna datos

		aux += "</div>"; //cierra fila total

		aux += "<div class='row'><h1 class='col-lg-11 text-white center versalitas'>Comics</h1></div>"

		$('#datos').html(aux);
	});

	$.getJSON("comicsIlustrador.php?idIlustrador=" + idIlustrador, data => {
		let cont = 0;
		let aux = "";

		aux += "<div class='row'>";//inicio div fila

		for (i = 0; i < data.length; i++) {
			if (cont == 3) {
				aux += "</div>"; // cierra div row
				aux += "<div class='row'>";//inicio de nuevo div fila
				cont = 0; //resetea el contador
			}
			//aux += "<div class='col-sm-4'>"; //dentro del div contenedor del item inicio un div columna
			aux += "<div class='card bg-dark text-white' style='width: 20rem;'>"; //dentro del div columna inicio un div card

			aux += "<img src='../img/portadas/" + data[i].portada + "' class='card-img-top' width='320px' height='500px'>"; //imagen dentro del div item
			aux += "<div class='card-block'>"; // abre card-block
			aux += "<h4 class='card-title'>" + data[i].nombreComic + "</h4>";
			aux += "<a class='btn btn-primary align-items-end' href='#myModal' onClick='modalDatosComic(" + data[i].idComic + ")' data-toggle='modal' data-target='.bd-example-modal-lg'>Ver detalles</a>";

			aux += "</div>"; //cierra div card-block
			aux += "</div>"; //cierra div card
			//aux += "</div>"; //cierra div columna
			cont++;
		}
		aux += "</div>"; //cierra div fila

		$('#comics').html(aux);
	});
});

let votaKarmaIlustrador = (idIlustrador, karma) => {
	$.ajax({
		type: "POST",
		url: "../php/votarKarmaIlustrador.php",
		data: {
			idIlustrador: idIlustrador,
			karma: karma
		},
		success: data => {
			$(".votakarma").prop("disabled", true);
			$("#feedbackKarmaIlustrador").removeClass("none");
			$("#feedbackKarmaIlustrador").addClass("block");
		}
	});
}
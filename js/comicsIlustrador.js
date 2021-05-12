import { launchQuery } from '../php/connection';

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

	let getDatosIlustrador = `SELECT idIlustrador, nombreIlustrador, nacionalidadIlustrador, fotoIlustrador, fechaNacIlustrador FROM ilustrador WHERE idIlustrador = '${idIlustrador}'`;
	let datosIlustrador = launchQuery(getDatosIlustrador);

	let aux = '';

	aux += `<div class="row">`; //abre fila total

	aux += `<div class="col-sm-3">`; //abre columna foto

	aux += `<img src="../resources/img/ilustradores/${datosIlustrador[0].fotoIlustrador}" width="240px" height="285px">`;

	aux += `</div>`; //cierra columna foto

	aux += `<div class="col-sm-6">`; //abre columna datos

	aux += `<div class="row">`; //abre fila nombre

	aux += `<h4 class="text-white">${datosIlustrador[0].nombreIlustrador}</h4>`;

	aux += `</div>`; //cierra fila nombre

	aux += `<div class="row">`; //abre fila edad y fecha nacimiento

	let age = calculate_age(datosIlustrador[0].fechaNacIlustrador);

	aux += `<h4 class="text-white">${datosIlustrador[0].fechaNacIlustrador} (${age} años)</h4>`;

	aux += `</div>`; //cierra fila edad y fecha nacimiento

	aux += `<div class="row">`; //abre fila nacionalidad

	aux += `<h4 class="text-white">${datosIlustrador[0].nacionalidadIlustrador}</h4>`;

	aux += `</div>`; //cierra fila nacionalidad

	aux += `<div class="row">`; //abre fila karma

	aux += `<button class="btn btn-success my-2 my-sm-0 margen-derecho-1 votakarma" onClick="${votaKarmaIlustrador(idIlustrador, (+1))}"><img src="../resources/img/iconos/glyphicons-344-thumbs-up.png" height="16px" alt="positivo"></button>`;

	aux += `<button class="btn btn-danger my-2 my-sm-0 votakarma" onClick="${votaKarmaIlustrador(idIlustrador, (-1))}"><img src="../resources/img/iconos/glyphicons-345-thumbs-down.png" height="16px" alt="negativo"></button>`;

	aux += `<span class="none texto-blanco margen-izquierdo-3" id="feedbackKarmaIlustrador">¡Gracias por votar!</span>`;

	aux += `</div>`; //cierra fila karma

	aux += `</div>`; //cierra columna datos

	aux += `</div>`; //cierra fila total

	aux += `<div class="row"><h1 class="col-lg-11 text-white center versalitas">Comics</h1></div>`;

	$('#datos').html(aux);

	let getComicsIlustrador = `SELECT DISTINCT portada, nombreComic, idComic FROM comic WHERE idIlustrador = '${idIlustrador}'`;
	let comicsIlustrador = launchQuery(getComicsIlustrador);
	let cont = 0;
	let aux2 = '';

	aux2 += `<div class="row">`;//inicio div fila

	for (let i = 0; i < comicsIlustrador.length; i++) {
		if (cont == 3) {
			aux2 += `</div>`; // cierra div row
			aux2 += `<div class="row">`;//inicio de nuevo div fila
			cont = 0; //resetea el contador
		}

		aux2 += `<div class="card bg-dark text-white" style="width: 20rem;">`; //dentro del div columna inicio un div card

		aux2 += `<img src="../resources/img/portadas/${comicsIlustrador[i].portada}" class="card-img-top" width="320px" height="500px">`; //imagen dentro del div item
		aux2 += `<div class="card-block">`; // abre card-block
		aux2 += `<h4 class="card-title">${comicsIlustrador[i].nombreComic}</h4>`;
		aux2 += `<a class="btn btn-primary align-items-end" href="#myModal" onClick="${modalDatosComic(comicsIlustrador[i].idComic)}" data-toggle="modal" data-target=".bd-example-modal-lg">Ver detalles</a>`;

		aux2 += `</div>`; //cierra div card-block
		aux2 += `</div>`; //cierra div card

		cont++;
	}
	aux2 += `</div>`; //cierra div fila

	$('#comics').html(aux2);
});

let votaKarmaIlustrador = (idIlustrador, karma) => {
	let updateKarmaIlustrador = `UPDATE ilustrador SET karmaIlustrador = karmaIlustrador + ${karma} WHERE idIlustrador = '${idIlustrador}'`;
	launchQuery(updateKarmaIlustrador);

	$('.votakarma').prop('disabled', true);
	$('#feedbackKarmaIlustrador').removeClass('none');
	$('#feedbackKarmaIlustrador').addClass('block');
}
$(document).ready(() => {
	let idEditorial = $('span.invisible').attr('id');

	$.getJSON('datosEditorial.php?idEditorial=' + idEditorial, data => {
		let aux = '';

		aux += `<div class="row">`;

		aux += `<div class="col-sm-3">`;

		aux += `<img src="../resources/img/logos/${data[0].logo}" width="240px" height="285px">`;

		aux += `</div>`;

		aux += `<div class="col-sm-6">`;

		aux += `<div class="row">`;

		aux += `<h4 class="text-white">${data[0].nombreEditorial}</h4>`;

		aux += `</div>`;

		aux += `<div class="row">`;

		aux += `<button class="btn btn-success my-2 my-sm-0 margen-derecho-1 votakarma" onClick="${votaKarmaEditorial(idEditorial, (+1))}"><img src="../resources/img/iconos/glyphicons-344-thumbs-up.png" height="16px" alt="positivo"></button>`;

		aux += `<button class="btn btn-danger my-2 my-sm-0 votakarma" onClick="${votaKarmaEditorial(idEditorial, (-1))}"><img src="../resources/img/iconos/glyphicons-345-thumbs-down.png" height="16px" alt="negativo"></button>`;

		aux += `</div>`;

		aux += `<p class="none texto-blanco" id="feedbackKarmaEditorial">¡Gracias por votar!</p>`;

		aux += `</div>`;

		aux += `</div>`;

		aux += `<div class="row"><h1 class="col-lg-11 text-white center versalitas">Comics</h1></div>`;

		$('#datos').html(aux);
	});

	$.getJSON('comicsEditorial.php?idEditorial=' + idEditorial, data => {
		let cont = 0;
		let aux2 = '';

		aux2 += `<div class="row">`;//inicio div fila

		for (let i = 0; i < data.length; i++) {
			if (cont == 3) {
				aux2 += `</div>`; // cierra div row
				aux2 += `<div class="row">`;//inicio de nuevo div fila
				cont = 0; //resetea el contador
			}

			aux2 += `<div class="card bg-dark text-white" style="width: 20rem;">`; //dentro del div columna inicio un div card

			aux2 += `<img src="../resources/img/portadas/${data[i].portada}' class="card-img-top" width="320px" height="500px">`; //imagen dentro del div item
			aux2 += `<div class="card-block">`; // abre card-block
			aux2 += `<h4 class="card-title">${data[i].nombreComic}</h4>`;
			aux2 += `<a class="btn btn-primary align-items-end" href="#myModal" onClick="${modalDatosComic(data[i].idComic)}" data-toggle="modal" data-target=".bd-example-modal-lg">Ver detalles</a>`;

			aux2 += `</div>`; //cierra div card-block
			aux2 += `</div>`; //cierra div card

			cont++;
		}
		aux2 += `</div>`; //cierra div fila

		$('#comics').html(aux2);
	});
});

let votaKarmaEditorial = (idEditorial, karma) => {
	$.ajax({
		type: 'POST',
		url: '../php/votarKarmaEditorial.php',
		data: {
			idEditorial: idEditorial,
			karma: karma
		},
		success: data => {
			$('.votakarma').prop('disabled', true);
			$('#feedbackKarmaEditorial').removeClass('none');
			$('#feedbackKarmaEditorial').addClass('block');
		}
	});
}
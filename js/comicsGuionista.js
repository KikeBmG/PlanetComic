import { launchQuery } from '../php/connection';

let calculate_age = dob => {
  //param dob =>  date of birthday
  let fechaNac = dob.split('-');
  let formattedFecha = new Date(fechaNac[2], fechaNac[1], fechaNac[0]);

  let diff_ms = Date.now() - formattedFecha.getTime();
  let age_dt = new Date(diff_ms);

  return Math.abs(age_dt.getUTCFullYear() - 1970);
}

$(document).ready(() => {
  let idGuionista = $('span.none').attr('id');

  let getDatosGuionista = `SELECT idGuionista, nombreGuionista, nacionalidadGuionista, fotoGuionista, fechaNacGuionista FROM guionista WHERE idGuionista = '${idGuionista}'`;
  let datosGuionista = launchQuery(getDatosGuionista);

  let age = calculate_age(datosGuionista[0].fechaNacGuionista);
  let aux = '';

  aux += `
    <div class="row">
      <div class="col-sm-3">
        <img src="../resources/img/guionistas/${datosGuionista[0].fotoGuionista}" width="240px" height="285px">
      </div>
      <div class="col-sm-6">
        <div class="row">
          <h4 class="text-white">${datosGuionista[0].nombreGuionista}</h4>
        </div>
        <div class="row">
          <h4 class="text-white">${datosGuionista[0].fechaNacGuionista} (${age} años)</h4>
        </div>
        <div class="row">
          <h4 class="text-white">${datosGuionista[0].nacionalidadGuionista}</h4>
        </div>
        <div class="row">
          <button class="btn btn-success my-2 my-sm-0 margen-derecho-1 votakarma" onClick="${votaKarmaGuionista(idGuionista, (+1))}"><img src="../resources/img/iconos/glyphicons-344-thumbs-up.png" height="16px" alt="positivo"></button>
          <button class="btn btn-danger my-2 my-sm-0 votakarma" onClick="${votaKarmaGuionista(idGuionista, (-1))}"><img src="../resources/img/iconos/glyphicons-345-thumbs-down.png" height="16px" alt="negativo"></button>
          <span class="none texto-blanco margen-izquierdo-3" id="feedbackKarmaGuionista">¡Gracias por votar!</span>
        </div>
      </div>
    </div>
    <div class="row"><h1 class="col-lg-11 text-white center versalitas">Comics</h1></div>
  `;

  $('#datos').html(aux);

  let getComicsGuionista = `SELECT DISTINCT portada, nombreComic, idComic FROM comic WHERE idGuionista = '${idGuionista}'`;
  let comicsGuionista = launchQuery(getComicsGuionista);
  let cont = 0;
  let aux2 = '';

  aux2 += `<div class="row">`;//inicio div fila

  for (let i = 0; i < comicsGuionista.length; i++) {
    if (cont === 3) {
      aux2 += `</div>`; // cierra div row
      aux2 += `<div class="row">`;//inicio de nuevo div fila
      cont = 0; //resetea el contador
    }

    aux2 += `
      <div class="card bg-secondary-blue-100 text-white" style="width: 20rem;">
        <img src="../resources/img/portadas/${comicsGuionista[i].portada}" class="card-img-top" width="320px" height="500px">
        <div class="card-block">
          <h4 class="card-title">${comicsGuionista[i].nombreComic}</h4>
          <a class="btn btn-primary align-items-end" href="#myModal" onClick="${modalDatosComic(comicsGuionista[i].idComic)}" data-toggle="modal" data-target=".bd-example-modal-lg">Ver detalles</a>
        </div>
      </div>
    `;

    cont++;
  }
  aux2 += `</div>`; //cierra div fila

  $('#comics').html(aux2);
});

let votaKarmaGuionista = (idGuionista, karma) => {
  let updateKarmaGuionista = `UPDATE guionista SET karmaGuionista = karmaGuionista + ${karma} WHERE idGuionista = '${idGuionista}'`;
  launchQuery(updateKarmaGuionista);

  $('.votakarma').prop('disabled', true);
  $('#feedbackKarmaGuionista').removeClass('none');
  $('#feedbackKarmaGuionista').addClass('block');
}
import { launchQuery } from '../php/connection';

$(document).ready(() => {
  let idEditorial = $('span.none').attr('id');

  let getDatosEditorial = `SELECT idEditorial, nombreEditorial, logo FROM editorial WHERE idEditorial = '${idEditorial}'`;
  let datosEditorial = launchQuery(getDatosEditorial);
  let aux = '';

  aux += `
    <div class="row">
      <div class="col-sm-3">
        <img src="../resources/img/logos/${datosEditorial[0].logo}" width="240px" height="285px">
      </div>
      <div class="col-sm-6">
        <div class="row">
          <h4 class="text-white">${datosEditorial[0].nombreEditorial}</h4>
        </div>
        <div class="row">
          <button class="btn btn-success my-2 my-sm-0 margen-derecho-1 votakarma" onClick="${votaKarmaEditorial(idEditorial, (+1))}"><img src="../resources/img/iconos/glyphicons-344-thumbs-up.png" height="16px" alt="positivo"></button>
          <button class="btn btn-danger my-2 my-sm-0 votakarma" onClick="${votaKarmaEditorial(idEditorial, (-1))}"><img src="../resources/img/iconos/glyphicons-345-thumbs-down.png" height="16px" alt="negativo"></button>
        </div>
        <p class="none texto-blanco" id="feedbackKarmaEditorial">¡Gracias por votar!</p>
      </div>
    </div>
    <div class="row"><h1 class="col-lg-11 text-white center versalitas">Comics</h1></div>
  `;

  $('#datos').html(aux);

  let getComicsEditorial = `SELECT DISTINCT portada, nombreComic, idComic FROM comic WHERE idEditorial='${idEditorial}'`;
  let comicsEditorial = launchQuery(getComicsEditorial);
  let cont = 0;
  let aux2 = '';

  aux2 += `<div class="row">`; //inicio div fila

  for (let i = 0; i < comicsEditorial.length; i++) {
    if (cont === 3) {
      aux2 += `</div>`; // cierra div row
      aux2 += `<div class="row">`; //inicio de nuevo div fila
      cont = 0; //resetea el contador
    }

    aux2 += `
      <div class="card bg-secondary-blue-100 text-white" style="width: 20rem;">
        <img src="../resources/img/portadas/${comicsEditorial[i].portada}' class="card-img-top" width="320px" height="500px">
        <div class="card-block">
          <h4 class="card-title">${comicsEditorial[i].nombreComic}</h4>
          <a class="btn btn-primary align-items-end" href="#myModal" onClick="${modalDatosComic(comicsEditorial[i].idComic)}" data-toggle="modal" data-target=".bd-example-modal-lg">Ver detalles</a>
        </div>
      </div>
    `;

    cont++;
  }
  aux2 += `</div>`; //cierra div fila

  $('#comics').html(aux2);
});

let votaKarmaEditorial = (idEditorial, karma) => {
  let updateKarmaEditorial = `UPDATE editorial SET karmaEditorial = karmaEditorial + ${karma} WHERE idEditorial = '${idEditorial}'`;
  launchQuery(updateKarmaEditorial);

  $('.votakarma').prop('disabled', true);
  $('#feedbackKarmaEditorial').removeClass('none');
  $('#feedbackKarmaEditorial').addClass('block');
}
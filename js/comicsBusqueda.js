import { launchQuery } from '../php/connection';

$(document).ready(() => {
  let nombre = $('span.none').attr('id');

  let getDatosBusqueda = `SELECT id, nombre, foto, tipo FROM busqueda WHERE nombre like '%${nombre}%'`;
  let datosBusqueda = launchQuery(getDatosBusqueda);

  let cont = 0;
  let aux = '';
  let contTotal = 0;

  aux += `<div class='row'>`;//inicio div fila

  for (let i = 0; i < datosBusqueda.length; i++) {
    if (cont === 3) {
      aux += `</div>`; // cierra div row
      aux += `<div class="row">`;//inicio de nuevo div fila
      cont = 0; //resetea el contador
    }

    aux += `<div class="card bg-secondary-blue-100 text-white" style="width: 20rem;">`; //dentro del div columna inicio un div card

    switch (datosBusqueda[i].tipo) {
      case 'guionista':
        aux += `<img src="../resources/img/guionistas/${datosBusqueda[i].foto}" class="card-img-top" width="320px" height="500px">`; //imagen dentro del div item
        break;
      case 'ilustrador':
        aux += `<img src="../resources/img/ilustradores/${datosBusqueda[i].foto}" class="card-img-top" width="320px" height="500px">`; //imagen dentro del div item
        break;
      case 'editorial':
        aux += `<img src="../resources/img/logos/${datosBusqueda[i].foto}" class="card-img-top" width="320px" height="500px">`; //imagen dentro del div item
        break;
      case 'comic':
        aux += `<img src="../resources/img/portadas/${datosBusqueda[i].foto}" class="card-img-top" width="320px" height="500px">`; //imagen dentro del div item
        break;
    }

    aux += `<div class="card-block">`; // abre card-block
    aux += `<h4 class="card-title">${datosBusqueda[i].nombre}</h4>`;

    switch (datosBusqueda[i].tipo) {
      case 'guionista':
        aux += `<a class="btn btn-primary align-items-end" href="../php/guionista.php?idGuionista="${datosBusqueda[i].id}" id="${datosBusqueda[i].id}">Ver detalles</a>`;
        break;
      case 'ilustrador':
        aux += `<a class="btn btn-primary align-items-end" href="../php/ilustrador.php?idIlustrador="${datosBusqueda[i].id}" id="${datosBusqueda[i].id}">Ver detalles</a>`;
        break;
      case "editorial":
        aux += `<a class="btn btn-primary align-items-end" href="../php/editorial.php?idEditorial=${datosBusqueda[i].id}" id="${datosBusqueda[i].id}">Ver detalles</a>`;
        break;
      case 'editorial':
        aux += `<a class="btn btn-primary align-items-end" href="#myModal" onClick="${modalDatosComic(datosBusqueda[i].id)}" data-toggle="modal" data-target=".bd-example-modal-lg">Ver detalles</a>`;
        break;
    }

    aux += `</div>`; //cierra div card-block
    aux += `</div>`; //cierra div card

    cont++;
    contTotal++;
  }
  aux += `</div>`; //cierra div fila

  $('#contador').html(contTotal + ' resultados');

  if (contTotal === 0) {
    let aux2 = '';

    $('#comics').addClass('btn-insert');

    aux2 = `<a class="btn btn-primary align-items-end" href="../php/formularioInsertar.php">Crear nuevo</a>`;

    $('#comics').html(aux2);
  }
  else {
    $('#comics').html(aux);
  }
});
import { launchQuery } from '../php/connection';

const ID_USER = sessionStorage.getItem('idUsuario');

$(document).ready(() => {
  // Carga por defecto los Leyendo
  mostrarComicsEstado();

  // Marca por defecto Leyendo como activa (visualmente)
  $('#Leyendo').classList.add('active');
  $('#Leyendo').classList.add('h5');

  // añade los eventos de click
  $('#Leido').addEventListener('click', mostrarComicsEstado, false);
  $('#Leyendo').addEventListener('click', mostrarComicsEstado, false);
  $('#Pendiente').addEventListener('click', mostrarComicsEstado, false);
});

let marcaActivo = elem => {
  let links = $('.nav-link');

  for (let i = 0; i < links.length; i++) {
    links[i].classList.remove('active')
    links[i].classList.remove('h5')
  }

  elem.classList.add('active');
  elem.classList.add('h5');

  $('span.none').attr('id', elem.id);
}

let mostrarComicsEstado = () => {
  let estado = $('span.none').attr('id') !== '' ? $('span.none').attr('id') : 'Leyendo';

  let getComicsUsuario = `
    SELECT portada, nombreComic, comic.idComic  
		FROM comic 
		JOIN biblioteca ON comic.idComic=biblioteca.idComic  
		WHERE idUsuario = '${ID_USER}' AND estado = '${estado}'
	`;
  let comicsUsuario = launchQuery(getComicsUsuario);

  let cont = 0;
  let aux = '';
  let contTotal = 0;

  aux += `<div class="row">`;//inicio div fila

  for (let i = 0; i < comicsUsuario.length; i++) {
    if (cont === 3) {
      aux += `</div>`; // cierra div row
      aux += "<div class='row'>";//inicio de nuevo div fila
      cont = 0; //resetea el contador
    }

    aux += `
      <div class="card bg-secondary-blue-100 text-white" style="width: 20rem;">
        <img src="../resources/img/portadas/${comicsUsuario[i].portada}" class="card-img-top" width="320px" height="500px">
        <div class="card-block">
          <h4 class="card-title">${comicsUsuario[i].nombreComic}</h4>
          <a class="btn btn-primary align-items-end" href="#myModal" onClick="${modalDatosComic(comicsUsuario[i].idComic)}" data-toggle="modal" data-target=".bd-example-modal-lg">Ver detalles</a>
        </div>
      </div>
    `;

    cont++;
    contTotal++;
  }
  aux += `</div>`; //cierra div fila

  $('#contador').html(`${estado} (${contTotal})`);

  $('#comics').html(aux);
}
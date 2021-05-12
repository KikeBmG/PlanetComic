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
    // Remove the class 'active' if it exists
    links[i].classList.remove('active')
    links[i].classList.remove('h5')
  }
  // add 'active' classs to the element that was clicked
  elem.classList.add('active');
  elem.classList.add('h5');

  $('span.invisible').attr('id', elem.id);
}

let mostrarComicsEstado = () => {
  //let estado = this.id;
  let estado = $('span.invisible').attr('id');

  if (estado == '') { // Carga por defecto los Leyendo
    estado = 'Leyendo';
  }

  $.getJSON('mostrarComicsUsuario.php?estado=' + estado, data => {
    let cont = 0;
    let aux = '';
    let contTotal = 0;

    aux += `<div class="row">`;//inicio div fila

    for (let i = 0; i < data.length; i++) {
      if (cont == 3) {
        aux += `</div>`; // cierra div row
        aux += "<div class='row'>";//inicio de nuevo div fila
        cont = 0; //resetea el contador
      }

      aux += `<div class="card bg-dark text-white" style="width: 20rem;">`; //dentro del div columna inicio un div card

      aux += `<img src="../resources/img/portadas/${data[i].portada}" class="card-img-top" width="320px" height="500px">`; //imagen dentro del div item
      aux += `<div class="card-block">`; // abre card-block
      aux += `<h4 class="card-title">${data[i].nombreComic}</h4>`;
      aux += `<a class="btn btn-primary align-items-end" href="#myModal" onClick="${modalDatosComic(data[i].idComic)}" data-toggle="modal" data-target=".bd-example-modal-lg">Ver detalles</a>`;

      aux += `</div>`; //cierra div card-block
      aux += `</div>`; //cierra div card

      cont++;
      contTotal++;
    }
    aux += `</div>`; //cierra div fila

    $('#contador').html(`${estado} (${contTotal})`);

    $('#comics').html(aux);
  });
}
import { launchQuery } from '../php/connection';

const ID_USER = sessionStorage.getItem('idUsuario');

let modalDatosComic = idComic => {
  let getComicData = `
		SELECT nombreComic, sinopsis, anioPublicacion, portada, compra, guionista.idGuionista, 
		nombreGuionista, ilustrador.idIlustrador, nombreIlustrador, editorial.idEditorial, nombreEditorial, 
		(Select ROUND(AVG(puntuacion),2) from biblioteca where idComic = '${idComic}') as mediaglobal 
		FROM comic 
		JOIN guionista on comic.idGuionista = guionista.idGuionista 
		JOIN ilustrador on comic.idIlustrador = ilustrador.idIlustrador 
		JOIN editorial on comic.idEditorial = editorial.idEditorial 
		WHERE comic.idComic = '${idComic}'
	`;
  let comicData = launchQuery(getComicData);

  let aux = '';

  aux += `
    <div class="modal fade bd-example-modal-lg" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content bg-secondary-blue-100 texto-blanco">
          <div class="modal-header">
            <h4 class="modal-title">${comicData[0].nombreComic}</h4>
            <button type="button" class="close texto-blanco" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div role="tabpanel">
              <ul class="nav nav-tabs" role="tablist">
                <li role="presentation" class="nav-item active">
                  <a href="#datosTab" aria-controls="datosTab" role="tab" data-toggle="tab" class="nav-link botones-tab bg-secondary-blue-400 active">Datos</a>
                </li>
                <li role="presentation" class="nav-item">
                  <a href="#comentariosTab" aria-controls="comentariosTab" role="tab" data-toggle="tab" class="nav-link botones-tab bg-secondary-blue-400" onClick="${muestraComentarios(idComic)}">Comentarios</a>
                </li>
              </ul>
              <div class="tab-content">
                <div role="tabpanel" class="tab-pane active" id="datosTab">
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-md-3">
                        <img src="../resources/img/portadas/${comicData[0].portada}" height="300px" width="200px">
                        <div class="botones-modal">
                          <span class="btn boton-estado-comic disabled menos-margen-inf" id="mediaGlobal">Valoración Global: ${comicData[0].mediaglobal}</span>
                          <span class="btn boton-estado-comic disabled" id="media"></span>
                          <form>
                            <input id="estrellas" name="puntuacion" type="text" class="rating" data-min=0 data-max=5 data-step=0.5 data-size="xs" required>
                            <button type="submit" class="btn btn-sample boton-estado-comic menos-margen-inf texto-blanco" id="botonEnviarVotacion" onClick="${enviarVotacion(idComic)}">Votar</button>
                          </form>
                          <p><button type="button" id="botonLeido" class="btn btn-primary boton-estado-comic" onClick="${cambiaEstado('Leido', idComic)}" value="Leido">Leido</button></p>
                          <p><button type="button" id="botonLeyendo" class="btn btn-primary boton-estado-comic" onClick="${cambiaEstado('Leyendo', idComic)}" value="Leyendo">Leyendo</button></p>
                          <p><button type="button" id="botonPendiente" class="btn btn-primary boton-estado-comic" onClick="${cambiaEstado('Pendiente', idComic)}" value="Leyendo">Pendiente</button></p>
                          <p class="margen-izquierdo-3">
                            <button class="btn btn-success my-2 my-sm-0 margen-derecho-1 votakarma" onClick="${votaKarmaComic(idComic, (+1))}">
                              <img src="../resources/img/iconos/glyphicons-344-thumbs-up.png" height="16px" alt="positivo">
                            </button>
                            <button class="btn btn-danger my-2 my-sm-0 votakarma" onClick="${votaKarmaComic(idComic, (-1))}">
                              <img src="../resources/img/iconos/glyphicons-345-thumbs-down.png" height="16px" alt="negativo">
                            </button>
                          </p>
                          <small class="none feedback-karma-comic" id="feedbackKarmaComic">¡Gracias por votar!</small>
                        </div>
                      </div>
                      <div class="col-md-8">
                        <div class="row">
                          <div class="row"><div class="col-md-12"><h4>Sinopsis</h4></div>
                          <div class="col-md-12"><p>${comicData[0].sinopsis}</p></div></div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <b>Publicación: ${comicData[0].anioPublicacion}</b>
                          </div>
                          <div class="col-md-6">
                            <b>Editorial: <a class="link" id="${comicData[0].idEditorial}" href="../php/editorial.php?idEditorial=${comicData[0].idEditorial}">${comicData[0].nombreEditorial}</a></b>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <b>Guionista: <a class="link" id="${comicData[0].idGuionista}" href="../php/guionista.php?idGuionista=${comicData[0].idGuionista}">${comicData[0].nombreGuionista}</a></b>
                          </div>
                          <div class="col-md-6">
                            <b>Ilustrador: <a class="link" id="${comicData[0].idIlustrador}" href="../php/ilustrador.php?idIlustrador=${comicData[0].idIlustrador}">${comicData[0].nombreIlustrador}</a></b>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-10 center">
                            <h4><a class="btn btn-primary nav-link" target="_blank" href="${comicData[0].compra}">Compra</a></h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div role="tabpanel" class="tab-pane" id="comentariosTab"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  $('#modal').html(aux);
  $('#myModal').modal();

  $('#myModal').on('hidden.bs.modal', e => {
    $(this).remove();
  });

  $('#estrellas').rating('create');

  let auxMediaGlobal = parseInt(comicData[0].mediaglobal);

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

  let getEstadoComic = `SELECT idComic, idUsuario, estado, puntuacion FROM biblioteca WHERE idComic = '${idGuionista}' and idUsuario = ${ID_USER}`;
  let estadoComic = launchQuery(getEstadoComic);

  if (estadoComic.length > 0) {
    switch (estadoComic[0].estado) {
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
    let auxMedia = parseInt(estadoComic[0].puntuacion);
    console.log(estadoComic[0].puntuacion);
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
    $('#media').html(`Mi Valoración: ${estadoComic[0].puntuacion}`);
  }
}

let votaKarmaComic = (idComic, karma) => {
  let updateKarmaComic = `UPDATE comic SET karmaComic = karmaComic + ${karma} WHERE idComic = '${idComic}'`;
  launchQuery(updateKarmaComic);

  $('.votakarma').prop('disabled', true);
  $('#feedbackKarmaComic').removeClass('none');
  $('#feedbackKarmaComic').addClass('block');
}

let cambiaEstado = (vEstado, idComic) => {

  let insertCambioEstado = `INSERT INTO biblioteca (idUsuario,idComic,estado) VALUES('${ID_USER}','${idComic}','${vEstado}') ON DUPLICATE KEY UPDATE estado = '${vEstado}';`;
  launchQuery(insertCambioEstado);

  switch (vEstado) {
    case 'Leido':
      $('#botonLeyendo').removeClass('btn-warning');
      $('#botonPendiente').removeClass('btn-danger');
      $('.boton-estado-comic').addClass('btn-primary');
      $('#botonLeido').removeClass('btn-primary');
      $('#botonLeido').addClass('btn-success');
      break;
    case 'Leyendo':
      $('#botonLeido').removeClass('btn-success');
      $('#botonPendiente').removeClass('btn-danger');
      $('.boton-estado-comic').addClass('btn-primary');
      $('#botonLeyendo').removeClass('btn-primary');
      $('#botonLeyendo').addClass('btn-warning');
      break;
    case 'Pendiente':
      $('#botonLeido').removeClass('btn-success');
      $('#botonLeyendo').removeClass('btn-warning');
      $('.boton-estado-comic').addClass('btn-primary');
      $('#botonPendiente').removeClass('btn-primary');
      $('#botonPendiente').addClass('btn-danger');
      break;
  }
}

let muestraComentarios = idComic => {
  let getComentarios = `
		SELECT idComentario, texto, fechaComentario, votos, spoiler, comentario.idUsuario, nombreUsuario, idComic 
		FROM comentario 
		JOIN usuario ON comentario.idUsuario = usuario.idUsuario  
		WHERE idComic = '${idComic}'
	`;
  let comentarios = launchQuery(getComentarios);

  let auxComentarios = '';

  if (comentarios.length === 0) {
    auxComentarios += `
      <div class'row">
        <div class="col-md-10">
          <h2>No hay comentarios</h2>
        </div>
      </div>
    `;
  }
  else {
    for (let i = 0; i < comentarios.length; i++) {

      auxComentarios += `
        <div class'row">
          <div class="col-md-12 botones-modal">
            <div class="card bg-secondary-blue-100 card-comentarios">
              <div class="card-body card-body-comentarios bg-secondary-blue-400">
                <h4>${comentarios[i].nombreUsuario}</h4>
                <p class="card-text ${comentarios[i].spoiler < 0 ? 'none' : 'block'}" id="comentario${comentarios[i].idComentario}">${comentarios[i].texto}</p>
                <div class="card-footer text-muted">
                  <ul class="list-inline margin-bottom-0">
                    <button class="btn btn-success my-2 my-sm-0 margen-derecho-1 votakarmaComentario${comentarios[i].idComentario}" onClick="${votaKarmaComentario(comentarios[i].idComentario, (+1))}">
                      <img src="../resources/img/iconos/glyphicons-344-thumbs-up.png" height="8px" alt="positivo">
                    </button>
                    <button class="btn btn-danger my-2 my-sm-0 margen-derecho-1 votakarmaComentario${comentarios[i].idComentario}" onClick="${votaKarmaComentario(comentarios[i].idComentario, (-1))}">
                      <img src="../resources/img/iconos/glyphicons-345-thumbs-down.png" height="8px" alt="negativo">
                    </button>
                    <li class="list-inline-item">${comentarios[i].votos} votos</li>
                    <li class="list-inline-item">${comentarios[i].fechaComentario}</li>
                    ${comentarios[i].spoiler < 0 ? `<li class="list-inline-item"><button class=" btn btn-warning" onClick="${verSpoiler(comentarios[i].idComentario)}">Ver spoiler</button></li>`: ''}
                  </ul>
                  <small class="none" id="feedbackKarmaComentario${comentarios[i].idComentario}">¡Gracias por votar!</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }
  }

  auxComentarios += `
    <form id="formularioComentar" class="form-comentar" onSubmit="${insertarComentario(idComic)}" method="post" enctype="multipart/form-data">
      <div class="form-group col-md-12">
        <label for="texto">Escribe tu comentario:</label>
        <textarea class="form-control input-formulario bg-secondary-blue-200 texto-blanco border-primary-blue-100" rows="4" id="texto" name="texto" placeholder="Escribe aqui tu comentario..." required></textarea>
      </div>
      <input type="hidden" name="idComic" value="${idComic}">
      <div class="form-group col-md-12">
        <button type="submit" class="btn btn-primary">Enviar</button>
      </div>
    </form>
  `;

  $('#comentariosTab').html(auxComentarios);
}

let insertarComentario = idComic => {
  let texto = document.querySelector("#texto");

  let insertComentario = `
    INSERT INTO comentario (texto,fechaComentario,votos,spoiler,idUsuario,idComic)
    VALUES('${texto}',CURRENT_DATE,0,0,'${ID_USER}','${idComic}');
  `;
  launchQuery(insertComentario);
}

let verSpoiler = idComentario => {
  $('#comentario' + idComentario).toggleClass('none');
  $('#comentario' + idComentario).toggleClass('block');
}

let votaKarmaComentario = (idComentario, spoiler) => {
  let updateKarmaComentario = `UPDATE comentario SET votos = votos + 1, spoiler = spoiler + ${spoiler} WHERE idComentario = '${idComentario}'`;
  launchQuery(updateKarmaComentario);

  $('.votakarmaComentario' + idComentario).prop('disabled', true);
  $('#feedbackKarmaComentario' + idComentario).removeClass('none');
  $('#feedbackKarmaComentario' + idComentario).addClass('block');
}

let enviarVotacion = idComic => {
  let voto = ($('#estrellas').val()) * 2;

  if (voto !== null) {
    let insertVotacionComic = `INSERT INTO biblioteca (idUsuario,idComic,puntuacion) VALUES('${ID_USER}','${idComic}','${voto}') ON DUPLICATE KEY UPDATE puntuacion = '${voto}';`;
    launchQuery(insertVotacionComic);

    $('#botonEnviarVotacion').addClass('disabled');
  }
}
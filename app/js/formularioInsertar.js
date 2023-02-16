import { launchQuery } from '../php/connection';

$(document).ready(() => {
  $('.custom-file-input').on('change', () => {
    let fileName = $(this).val().split('\\').pop();
    $(this).next('.custom-file-label').addClass('selected').html(fileName);
    $(this).next('.custom-file-label').addClass('texto-blanco').html(fileName);
  });

  $(document).on('change', 'input[type=radio]', () => {
    switch ($(this).attr('id')) {
      case 'editorial':
        cambiaFormulario('editorial');
        break;
      case 'guionista':
        cambiaFormulario('guionista');
        break;
      case 'ilustrador':
        cambiaFormulario('ilustrador');
        break;
      case 'comic':
        cambiaFormulario('comic');
        break;
    }
  });

  let cambiaFormulario = form => {
    let formSelector = $(`#form${form}`);
    let formAll = $('.formulario');

    for (let i = 0; i < formAll.length; i++) {
      formAll[i].classList.remove('block')
      formAll[i].classList.add('none')
    }

    formSelector.classList.remove('none');
    formSelector.classList.add('block');
  }

  let getEditoriales = 'SELECT idEditorial, nombreEditorial FROM editorial';
  $('#selectEditorial').html(generateOptions(launchQuery(getEditoriales), 'editorial'));

  let getGuionistas = 'SELECT idGuionista, nombreGuionista FROM guionista';
  $('#selectGuionista').html(generateOptions(launchQuery(getGuionistas), 'guionista'));

  let getIlustradores = 'SELECT idIlustrador, nombreIlustrador FROM ilustrador';
  $('#selectIlustrador').html(generateOptions(launchQuery(getIlustradores), 'ilustrador'));
});

let generateOptions = (data, type) => {
  let response = '';

  response += `<option disabled selected> -- Elige Guionista -- </option>`;

  for (let i = 0; i < data.length; i++) {
    switch (type) {
      case 'editorial':
        auxEditoriales += `<option value="${data[i].idEditorial}">${data[i].nombreEditorial}</option>`;
        break;
      case 'guionista':
        response += `<option value="${data[i].idGuionista}">${data[i].nombreGuionista}</option>`;
        break;
      case 'ilustrador':
        auxIlustradores += `<option value="${data[i].idIlustrador}">${data[i].nombreIlustrador}</option>`;
        break;
    }
  }
  return response;
}
$(document).ready(function () {
	$('.custom-file-input').on('change', function () {
		let fileName = $(this).val().split('\\').pop();
		$(this).next('.custom-file-label').addClass("selected").html(fileName);
		$(this).next('.custom-file-label').addClass("texto-blanco").html(fileName);
	});

	$(document).on("change", "input[type=radio]", function () {
		switch ($(this).attr("id")) {
			case "editorial":
				cambiaFormulario("editorial");
				break;
			case "guionista":
				cambiaFormulario("guionista");
				break;
			case "ilustrador":
				cambiaFormulario("ilustrador");
				break;
			case "comic":
				cambiaFormulario("comic");
				break;
		}
	});

	function cambiaFormulario(form) {
		let aux = "form" + form;
		let a = document.getElementsByClassName('formulario');

		for (i = 0; i < a.length; i++) {
			a[i].classList.remove('block')
			a[i].classList.add('none')
		}

		document.getElementById(aux).classList.remove('none');
		document.getElementById(aux).classList.add('block');
	}

	$.getJSON("buscaEditoriales.php", function (data) {
		let auxEditoriales = "";

		auxEditoriales += "<option disabled selected> -- Elige Editorial -- </option>";

		for (i = 0; i < data.length; i++) {
			auxEditoriales += "<option value='" + data[i].idEditorial + "'>" + data[i].nombreEditorial + "</option>";
		}

		$('#selectEditorial').html(auxEditoriales);
	});

	$.getJSON("buscaGuionistas.php", function (data) {
		let auxGuionistas = "";

		auxGuionistas += "<option disabled selected> -- Elige Guionista -- </option>";

		for (i = 0; i < data.length; i++) {
			auxGuionistas += "<option value='" + data[i].idGuionista + "'>" + data[i].nombreGuionista + "</option>";
		}

		$('#selectGuionista').html(auxGuionistas);
	});

	$.getJSON("buscaIlustradores.php", function (data) {
		let auxIlustradores = "";

		auxIlustradores += "<option disabled selected> -- Elige Ilustrador -- </option>";

		for (i = 0; i < data.length; i++) {
			auxIlustradores += "<option value='" + data[i].idIlustrador + "'>" + data[i].nombreIlustrador + "</option>";
		}

		$('#selectIlustrador').html(auxIlustradores);
	});
});

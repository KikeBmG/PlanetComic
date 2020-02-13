$(document).ready(function() {
	
	$('.custom-file-input').on('change', function() { 
		var fileName = $(this).val().split('\\').pop(); 
		$(this).next('.custom-file-label').addClass("selected").html(fileName);
		$(this).next('.custom-file-label').addClass("texto-blanco").html(fileName);
	});
	
	$(document).on("change","input[type=radio]",function(){
		
		switch ( $(this).attr("id") ) {
			
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
	
	function cambiaFormulario(form){
		var aux = "form" + form;
		
		var a = document.getElementsByClassName('formulario');
		
		for (i = 0; i < a.length; i++) {
			a[i].classList.remove('block')
			a[i].classList.add('none')
		}
		
		document.getElementById(aux).classList.remove('none');
		document.getElementById(aux).classList.add('block');
	}
	
	$.getJSON("buscaEditoriales.php",function(data) {
		
		auxEditoriales = "";
		
		auxEditoriales += "<option disabled selected> -- Elige Editorial -- </option>";
		
		for(i = 0; i<data.length; i++) {
			
			auxEditoriales += "<option value='" + data[i].idEditorial + "'>" + data[i].nombreEditorial + "</option>";
			
		}
		
		$('#selectEditorial').html(auxEditoriales);
		
	});
	
	$.getJSON("buscaGuionistas.php",function(data) {
		
		auxGuionistas = "";
		
		auxGuionistas += "<option disabled selected> -- Elige Guionista -- </option>";
		
		for(i = 0; i<data.length; i++) {
			
			auxGuionistas += "<option value='" + data[i].idGuionista + "'>" + data[i].nombreGuionista + "</option>";
			
		}
		
		$('#selectGuionista').html(auxGuionistas);
		
	});
	
	$.getJSON("buscaIlustradores.php",function(data) {
		
		auxIlustradores = "";
		
		auxIlustradores += "<option disabled selected> -- Elige Ilustrador -- </option>";
		
		for(i = 0; i<data.length; i++) {
			
			auxIlustradores += "<option value='" + data[i].idIlustrador + "'>" + data[i].nombreIlustrador + "</option>";
			
		}
		
		$('#selectIlustrador').html(auxIlustradores);
		
	});
	
	/*function abreModal(auxCadena) {
		
		var auxModal = "";
		
		//Abre Modal
		auxModal += "<div class='modal fade' id='myModal'>";
		
		auxModal += "<div class='modal-dialog'>";
    	auxModal += "<div class='modal-content'>";
		
		//Modal Header
		auxModal += "<div class='modal-header'>";
        auxModal += "<h4 class='modal-title'>¡Éxito!</h4>";
        auxModal += "<button type='button' class='close' data-dismiss='modal'>&times;</button>";
        auxModal += "</div>";
		
		//Modal Body
		auxModal += "<div class='modal-body'>";
		if (auxCadena == "editorial") {
			auxModal += "<h3>La " + auxCadena + " se ha añadido correctamente.</h3>";
		}
		else {
        	auxModal += "<h3>El " + auxCadena + " se ha añadido correctamente.</h3>";
		}
		
		auxModal += "<img src='../img/iconos/glyphicons-344-thumbs-up.png' height='128px' alt='positivo'>";
		
        auxModal += "</div>";
		
		//Modal Footer
		auxModal += "<div class='modal-footer'>";
        auxModal += "<button type='button' class='btn btn-primary' data-dismiss='modal'>Cerrar</button>";
        auxModal += "</div>";
		
		auxModal += "</div>";
    	auxModal += "</div>";
		
		//Cierra Modal
		auxModal += "</div>";
		
		$('#modalInsert').html(auxModal);
		$("#myModal").modal()
		
		$('#myModal').on('hidden.bs.modal', function (e) {
        	$(this).remove();
		});
	}*/
	
});

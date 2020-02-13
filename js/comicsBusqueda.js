$(document).ready(function() {
	
	var nombre = $('span.invisible').attr('id');
	
	$.getJSON("datosBuscador.php?nombre=" + nombre,function(data) {
		
		var cont = 0;
		var aux = "";
		var contTotal = 0;
		
		aux += "<div class='row'>";//inicio div fila
		
		for(i = 0; i<data.length; i++) {
			if(cont == 3) {
				aux += "</div>"; // cierra div row
				aux += "<div class='row'>";//inicio de nuevo div fila
				cont = 0; //resetea el contador
			}
			
			aux += "<div class='card bg-dark text-white' style='width: 20rem;'>"; //dentro del div columna inicio un div card
			
			switch(data[i].tipo){
				case "guionista":
					aux += "<img src='../img/guionistas/" + data[i].foto + "' class='card-img-top' width='320px' height='500px'>"; //imagen dentro del div item
				break;
				case "ilustrador":
					aux += "<img src='../img/ilustradores/" + data[i].foto + "' class='card-img-top' width='320px' height='500px'>"; //imagen dentro del div item
				break;
				case "editorial":
					aux += "<img src='../img/logos/" + data[i].foto + "' class='card-img-top' width='320px' height='500px'>"; //imagen dentro del div item
				break;
				case "comic":
					aux += "<img src='../img/portadas/" + data[i].foto + "' class='card-img-top' width='320px' height='500px'>"; //imagen dentro del div item
				break;
			}
			
			aux += "<div class='card-block'>"; // abre card-block
			aux += "<h4 class='card-title'>" + data[i].nombre + "</h4>";
			
			switch(data[i].tipo){
				case "guionista":
					aux += "<a class='btn btn-primary align-items-end' href='../php/guionista.php?idGuionista=" + data[i].id + "' id='" + data[i].id + "'>Ver detalles</a>";
				break;
				case "ilustrador":
					aux += "<a class='btn btn-primary align-items-end' href='../php/ilustrador.php?idIlustrador=" + data[i].id + "'id='" + data[i].id + "'>Ver detalles</a>";
				break;
				case "editorial":
					aux += "<a class='btn btn-primary align-items-end' href='../php/editorial.php?idEditorial=" + data[i].id + "' id='" + data[i].id + "'>Ver detalles</a>";
				break;
				case "comic":
					aux += "<a class='btn btn-primary align-items-end' href='#myModal' onClick='modalDatosComic(" + data[i].id + ")' data-toggle='modal' data-target='.bd-example-modal-lg'>Ver detalles</a>";
				break;
			}
			
			aux += "</div>"; //cierra div card-block
			aux += "</div>"; //cierra div card
			
			cont++;
			contTotal++;
		}
		aux += "</div>"; //cierra div fila
		
		$('#contador').html(contTotal + " resultados");
		
		if (contTotal == 0) {
			
			var aux2 = "";
			
			$('#comics').addClass('btn-insert');
			
			aux2 = "<a class='btn btn-primary align-items-end' href='../php/formularioInsertar.php'>Crear nuevo</a>";
			
			$('#comics').html(aux2);
		}
		else {			
			$('#comics').html(aux);
			
		}
		
	});
	
});
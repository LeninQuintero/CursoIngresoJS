
function mostrar() {

	let tipoProducto;
	let precioProducto;
	let cantidadUnidades;
	let marcaProducto;
	let fabricanteProducto;

	let precioAlcoholBarato;
	let unidadesAlcoholBarato;
	let fabricanteAlcoholBarato;
	let marcaAlcoholBarato;
	let tipoMasUnidades;
	let promedioMasUnidades;

	let cantidadJabon;
	let cantidadBarbijo;
	let cantidadAlcohol;

	let unidadesJabon;
	let unidadesAlcohol;
	let unidadesBarbijo;

	let contadorDatos;

	contadorDatos = 0;
	cantidadJabon = 0;
	cantidadBarbijo = 0;
	cantidadAlcohol = 0;
	unidadesAlcoholBarato = 0;
	unidadesJabon = 0;
	unidadesAlcohol = 0;
	unidadesBarbijo = 0;

	while (contadorDatos < 5) {

		tipoProducto = prompt('Ingrese un tipo de producto, las opciones son: \n\n-barbijo \n-jabon \n-alcohol');

		while (tipoProducto != 'barbijo' && tipoProducto != 'jabon' && tipoProducto != 'alcohol') {
			tipoProducto = prompt('Opcion NO valida, ingrese de nuevo un tipo de producto, las opciones son: \n\n-barbijo \n-jabon \n-alcohol');
		}

		precioProducto = prompt('Ingrese el precio');
		precioProducto = parseInt(precioProducto);

		while (precioProducto < 100 || precioProducto > 300) {
			precioProducto = prompt('El precio debe estar entre 100 y 300, Ingrese de nuevo el precio:');
			precioProducto = parseInt(precioProducto);
		}

		cantidadUnidades = prompt('Ingrese la cantidad:');
		cantidadUnidades = parseInt(cantidadUnidades);

		while (cantidadUnidades < 1 || cantidadUnidades > 1000) {
			cantidadUnidades = prompt('La cantidad debe estar entre 1 y 1000 unidades, Ingrese de nuevo la cantidad:');
			cantidadUnidades = parseInt(cantidadUnidades);
		}

		marcaProducto = prompt('Ingrese la marca:');
		fabricanteProducto = prompt('Ingrese el fabricante');


		switch (tipoProducto) {
			case 'barbijo':
				cantidadBarbijo++;
				unidadesBarbijo = unidadesBarbijo + cantidadUnidades;
				break;

			case 'jabon':
				cantidadJabon++;
				unidadesJabon = unidadesJabon + cantidadUnidades;
				break;

			case 'alcohol':
				cantidadAlcohol++;
				unidadesAlcohol = unidadesAlcohol + cantidadUnidades;

				if (precioProducto < precioAlcoholBarato || cantidadAlcohol == 1) {
					precioAlcoholBarato = precioProducto;
					unidadesAlcoholBarato = cantidadUnidades;
					fabricanteAlcoholBarato = fabricanteProducto;
					marcaAlcoholBarato = marcaProducto;
				}
		}
		contadorDatos++;
	}

	if (unidadesAlcohol > unidadesBarbijo && unidadesAlcohol > unidadesJabon) {
		tipoMasUnidades = 'alcohol';
		promedioMasUnidades = unidadesAlcohol / cantidadAlcohol;
	} else {
		if (unidadesBarbijo > unidadesAlcohol && unidadesBarbijo > unidadesJabon) {
			tipoMasUnidades = 'barbijo';
			promedioMasUnidades = unidadesBarbijo / cantidadBarbijo;
		} else {
			tipoMasUnidades = 'jabon';
			promedioMasUnidades = unidadesJabon / cantidadJabon;
		}
	}

	if (cantidadAlcohol > 0) {
		document.write('El mas barato de los acohol es de la marca ' + marcaAlcoholBarato + ' fabricado por: ' + fabricanteAlcoholBarato + ' y se ingrasaron ' + unidadesAlcoholBarato + ' unidades.' + '');
	} else {
		document.write('No se pueden mostrar los datos del alcohol porque no se cargo ninguno.' + '');
	}

	document.write('El ' + tipoMasUnidades + ' es el tipo de producto con mas unidades y el promedio por compra es ' + promedioMasUnidades + '');
	document.write('En total hay ' + unidadesJabon + ' unidad(es) de jabon(es).');
}
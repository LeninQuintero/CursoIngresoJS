function mostrar() {
	let tipoProducto;
	let precioProducto;
	let contadorTotal;
	let descuento;
	let importeBruto;
	let tipoMasUnidades;
	let tipoMasCaro;
	let precioMasCaro;
	let unidadesArena;
	let unidadesCal;
	let unidadesCemento;
	let totalUnidades;
	let respuesta;

	contadorTotal = 0;
	importeBruto = 0;
	unidadesArena = 0;
	unidadesCal = 0;
	unidadesCemento = 0;
	totalUnidades = 0;
	importeBruto = 0;
	respuesta = true;

	while (respuesta) {
		tipoProducto = prompt('Ingrese un tipo de producto, las opciones son: \n\n-arena \n-cal \n-cemento');

		while (tipoProducto != 'arena' && tipoProducto != 'cal' && tipoProducto != 'cemento') {
			tipoProducto = prompt('Opcion NO valida, ingrese de nuevo un tipo de producto, las opciones son: \n\n-arena \n-cal \n-cemento');
		}

		precioProducto = prompt('Ingrese el precio');
		precioProducto = parseFloat(precioProducto);

		while (precioProducto <= 0) {
			precioProducto = prompt('El precio debe ser mayor a 0, Ingrese de nuevo el precio:');
			precioProducto = parseFloat(precioProducto);
		}

		cantidadUnidades = prompt('Ingrese la cantidad:');
		cantidadUnidades = parseInt(cantidadUnidades);

		while (cantidadUnidades < 1) {
			cantidadUnidades = prompt('La cantidad no debe ser menor a 1, Ingrese de nuevo la cantidad:');
			cantidadUnidades = parseInt(cantidadUnidades);
		}

		contadorTotal++;

		switch (tipoProducto) {
			case 'arena':
				unidadesArena = unidadesArena + cantidadUnidades;
				importeBruto = importeBruto + (precioProducto * cantidadUnidades);
				
				if (precioProducto > precioMasCaro || contadorTotal == 1) {
					precioMasCaro = precioProducto;
					tipoMasCaro = 'arena';
				}
				break;

			case 'cal':
				unidadesCal = unidadesCal + cantidadUnidades;
				importeBruto = importeBruto + (precioProducto * cantidadUnidades);

				if (precioProducto > precioMasCaro || contadorTotal == 1) {
					precioMasCaro = precioProducto;
					tipoMasCaro = 'cal';
				}
				break;

			case 'cemento':
				unidadesCemento = unidadesCemento + cantidadUnidades;
				importeBruto = importeBruto + (precioProducto * cantidadUnidades);

				if (precioProducto > precioMasCaro || contadorTotal == 1) {
					precioMasCaro = precioProducto;
					tipoMasCaro = 'cemento';
				}
		}

		respuesta = confirm('¿Desea continuar?');
	}

	totalUnidades = unidadesArena + unidadesCal + unidadesCemento;
	alert(totalUnidades);

	//Definir los descuentos
	if (totalUnidades > 10 && totalUnidades < 31) {
		descuento = 15;
	} else {
		if (totalUnidades > 30) {
			descuento = 25;
		} else {
			descuento = 0;
		}
	}

	//Establecer el tipo con mas unidades 
	if (unidadesArena > unidadesCal && unidadesArena > unidadesCemento) {
		tipoMasUnidades = 'arena';
	} else {
		if (unidadesCal > unidadesArena && unidadesCal > unidadesCemento) {
			tipoMasUnidades = 'cal';
		} else {
			tipoMasUnidades = 'cemento';
		}
	}

	document.write('A-> El importe bruto a pagar es: $' + importeBruto.toFixed(2) + '');

	if (descuento != 0) {
		let valorDescuento;
		let importeConDescuento;

		valorDescuento = (importeBruto / 100) * descuento;
		importeConDescuento = importeBruto - valorDescuento;

		document.write('B-> El importe a pagar con descuento es: $' + importeConDescuento.toFixed(2) + '');
	} else {
		document.write('B-> No hay ningun descuento en esta compra.' + '');
	}

	document.write('C-> El tipo con mas cantidad de bolsas vendidas es: ' + tipoMasUnidades + '');
	document.write('D-> El tipo mas caro es: ' + tipoMasCaro);
}
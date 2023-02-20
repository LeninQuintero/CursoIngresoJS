/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar() {
	let respuesta;
	let numeroIngresado;
	let sumaPositivos;
	let multiplicacionNegativos;

	contador = 0;
	sumaPositivos = 0;
	multiplicacionNegativos = 1;

	do {
		numeroIngresado = prompt('Ingrese un numero: ');
		numeroIngresado = parseInt(numeroIngresado);

		if (numeroIngresado < 0) {
			multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;

		} else {
			sumaPositivos = sumaPositivos + numeroIngresado;
		}

		respuesta = confirm('¿Quiere ingresar otro numero?');
	} while (respuesta == true);

	txtIdSuma.value = sumaPositivos;
	txtIdProducto.value = multiplicacionNegativos;

}//FIN DE LA FUNCIÓN
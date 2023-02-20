/*
Lenin Quintero, Div 'D', grupo 2

Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {

	let numeroControl;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;

	respuesta = true;

	numeroControl = prompt('Ingrese el primer numero: ');
	numeroControl = parseInt(numeroControl);

	numeroMaximo = numeroControl;
	numeroMinimo = numeroControl;

	while (respuesta) {
		numeroIngresado = prompt('Ingrese un numero: ');
		numeroIngresado = parseInt(numeroIngresado);

		if (numeroIngresado > numeroMaximo) {
			numeroMaximo = numeroIngresado;
		} else {
			if (numeroIngresado < numeroMinimo) {
				numeroMinimo = numeroIngresado;
			}
		}
		respuesta = confirm('¿Quiere ingresar otro numero?');
	}

	txtIdMaximo.value = numeroMaximo;
	txtIdMinimo.value = numeroMinimo;
}//FIN DE LA FUNCIÓN
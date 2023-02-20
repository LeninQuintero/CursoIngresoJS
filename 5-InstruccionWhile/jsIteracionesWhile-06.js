function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;

	contador = 0;
	acumulador = 0;

	while (contador < 5){
		numeroIngresado = prompt('Ingrese un numero: ');
		numeroIngresado = parseInt(numeroIngresado);

		acumulador = acumulador + numeroIngresado;
		contador = contador + 1;
	}
	
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador / contador;
}
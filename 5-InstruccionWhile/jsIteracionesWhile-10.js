/*
Lenin Quintero, Div 'D', grupo 2

Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos).
*/

function mostrar() {

	//declarar contadores y variables 
	let respuesta;
	let numeroIngresado;
	let sumaNegativos;
	let sumaPositivos;
	let cantidadNegativos;
	let cantidadPositivos;
	let cantidadCeros;
	let cantidadPares;
	let promedioPositivos;
	let promedioNegativos;
	let diferencia;



	//inicializacion de variables
	sumaNegativos = 0;
	sumaPositivos = 0;
	cantidadNegativos = 0;
	cantidadPositivos = 0;
	cantidadCeros = 0;
	cantidadPares = 0;
	respuesta = true;

	while (respuesta) {
		numeroIngresado = prompt('Ingrese un numero: ');
		numeroIngresado = parseInt(numeroIngresado);

		//validacion numero par
		if ((numeroIngresado % 2 == 0 || numeroIngresado % 2 == -0) && numeroIngresado != 0) {

			//numeros positivos
			if (numeroIngresado > 0) {
				sumaPositivos = sumaPositivos + numeroIngresado;
				cantidadPositivos++; //contador

			} else { 
				//numeros negativos
				sumaNegativos = sumaNegativos + numeroIngresado;
				cantidadNegativos++; //contador
			}

			cantidadPares++; //contador nuemeros pares

		} else {
			//numeros positivos
			if (numeroIngresado > 0) {
				sumaPositivos = sumaPositivos + numeroIngresado;
				cantidadPositivos++; //contador

			} else {
				//numeros negativos
				if (numeroIngresado < 0) {
					sumaNegativos = sumaNegativos + numeroIngresado;
					cantidadNegativos++; //contador

				} else {
					cantidadCeros++; //contador de ceros
				}
			}
		}
		respuesta = confirm("desea continuar?");
	}//fin del while

	promedioPositivos = sumaPositivos / cantidadPositivos;
	promedioNegativos = sumaNegativos / cantidadNegativos;
	diferencia = sumaPositivos + sumaNegativos; //suma algebraica


	document.write("La suma de negativos es :" + sumaNegativos + '<br>');
	document.write("La suma de positivos es :" + sumaPositivos + '<br>');
	document.write("La cantidad de positivos es :" + cantidadPositivos + '<br>');
	document.write("La cantidad de negativos es :" + cantidadNegativos + '<br>');
	document.write("La cantidad de ceros es :" + cantidadCeros + '<br>');
	document.write("La cantidad de numeros pares es :" + cantidadPares + '<br>');
	document.write("El promedio de numeros positivos es :" + promedioPositivos + '<br>');
	document.write("El promedio de numeros negativos es :" + promedioNegativos + '<br>');
	document.write("La diferencia entre numeros positivos y negativos es :" + diferencia + '<br>');
}//FIN DE LA FUNCIÓN
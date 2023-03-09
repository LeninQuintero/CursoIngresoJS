/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	let numeroAscendente;
	numeroAscendente = 0;

	while (numeroAscendente < 10) {

		document.write('El numero ascendente es: ' + (numeroAscendente + 1) + '');
		numeroAscendente++;

		// Otras formas de aumentar***
		// numeroAscendente += 1; 
		// numeroAscendente = numeroAscendente + 1;
	}

}//FIN DE LA FUNCIÓN
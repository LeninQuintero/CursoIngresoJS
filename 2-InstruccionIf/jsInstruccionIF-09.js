// Lenin Quintero, Div 'D', grupo 2

/*
Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive 
*/

function mostrar()
{ 
	let numeroRandom;
	numeroRandom = parseInt(numeroRandom);

	//Genero el número RANDOM entre 1 y 10
	numeroRandom = Math.floor(Math.random() * (10) + 1);
	
	alert(numeroRandom);
}

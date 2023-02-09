// Lenin Quintero, Div 'D', grupo 2
/*
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4 
*/

function mostrar()
{
	let notaRandom;
	notaRandom = parseInt(notaRandom);

	//Genero el número RANDOM entre 1 y 10
	notaRandom = Math.floor(Math.random() * (10) + 1);
	
	if (notaRandom > 8) {
		alert('Nota: ' + notaRandom + '\n\n' + 'EXCELENTE');
	} 
	else {
		if (notaRandom > 4){
			alert('Nota: ' + notaRandom + '\n\n' + 'APROBÓ');
		} 
		else {
			alert('Nota: ' + notaRandom + '\n\n' + 'Vamos, la proxima se puede');
		}
	}

}//FIN DE LA FUNCIÓN
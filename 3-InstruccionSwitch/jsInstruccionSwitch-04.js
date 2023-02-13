/*
Lenin Quintero, Div 'D', grupo 2

al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.  
*/

function mostrar()
{
	//tomo el mes
	var mesDelAño = txtIdMes.value;

	switch (mesDelAño) {
		case 'Febrero':
			alert('Este tiene 28 días.');
			break;

		case 'Abril':
		case 'Junio':
		case 'Septiembre':
		case 'Noviembre':
			alert('Este tiene 30 días.');
			break;

		default:
			alert('Este mes tiene 31 días');
	}
}//FIN DE LA FUNCIÓN
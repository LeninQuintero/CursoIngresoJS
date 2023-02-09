// Lenin Quintero, Div 'D', grupo 2

/* Al ingresar una edad debemos informar si la persona
 es mayor de edad (mas de 18 años) o adolescente 
 (entre 13 y 17 años) o niño (menor a 13 años). */

function mostrar() {
	let edad;
	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	if (edad > 17) {
		alert('Es mayor de edad');

	} else {

		if (edad > 12) {
			alert('Es adolecente');
		}

		else {
			alert('Es niño');
		}
	}
}
/*
Lenin Quintero, Div 'D', grupo 2

RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */

function ComenzarIngreso() {
	//definicion de variables
	let edadIngresada;
	let sexoIngresado;
	let estadoCivilIngresado;
	let sueldoBrutoIngresado;
	let legajoIngresado;
	let nacionalidadIngresada;

	edadIngresada = prompt("Ingrese edad entre 18 y 90 años inclusive: ");
	edadIngresada = parseInt(edadIngresada);
	while (edadIngresada < 18 || edadIngresada > 90) {
		edadIngresada = prompt("Ingrese edad entre 18 y 90 años inclusive: ");
		edadIngresada = parseInt(edadIngresada);
	}
	document.getElementById('txtIdEdad').value = edadIngresada;

	sexoIngresado = prompt("Ingrese sexo: \n'M' para masculino \n'F' para femenino");
	while (sexoIngresado != 'M' && sexoIngresado != 'F') {
		sexoIngresado = prompt("Ingrese sexo: \n'M' para masculino \n'F' para femenino");
	}
	document.getElementById('txtIdSexo').value = sexoIngresado;

	estadoCivilIngresado = prompt("Ingrese estado civil: \n1-para soltero \n2-para casados \n3-para divorciados \n4-para viudos");
	estadoCivilIngresado = parseInt(estadoCivilIngresado);
	while (estadoCivilIngresado < 1 || estadoCivilIngresado > 4) {
		estadoCivilIngresado = prompt("Ingrese estado civil: \n1-para soltero \n2-para casados \n3-para divorciados \n4-para viudos");
		estadoCivilIngresado = parseInt(estadoCivilIngresado);
	}
	document.getElementById('txtIdEstadoCivil').value = estadoCivilIngresado;

	sueldoBrutoIngresado = prompt("Ingrese sueldo bruto no menor a 8000: ");
	sueldoBrutoIngresado = parseInt(sueldoBrutoIngresado);
	while (sueldoBrutoIngresado < 8000) {
		sueldoBrutoIngresado = prompt("Ingrese sueldo bruto no menor a 8000: ");
		sueldoBrutoIngresado = parseInt(sueldoBrutoIngresado);
	}
	document.getElementById('txtIdSueldo').value = sueldoBrutoIngresado;

	legajoIngresado = prompt("Ingrese numero de legajo de 4 cifras, sin ceros a la izquierda: ");
	legajoIngresado = parseInt(legajoIngresado);
	while (legajoIngresado < 1000 || legajoIngresado > 9999) {
		legajoIngresado = prompt("Ingrese numero de legajo de 4 cifras, sin ceros a la izquierda: ");
		legajoIngresado = parseInt(legajoIngresado);
	}
	document.getElementById('txtIdLegajo').value = legajoIngresado;

	nacionalidadIngresada = prompt("Ingrese nacionalidad: \n'A' para argentinos \n'E' para extranjeros \n'N' para nacionalizados");
	while (nacionalidadIngresada != 'A' && nacionalidadIngresada != 'E' && nacionalidadIngresada != 'N') {
		nacionalidadIngresada = prompt("Ingrese nacionalidad: \n'A' para argentinos \n'E' para extranjeros \n'N' para nacionalizados");
	}
	document.getElementById('txtIdNacionalidad').value = nacionalidadIngresada;

}
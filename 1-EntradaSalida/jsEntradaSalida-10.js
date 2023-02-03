/*
Lenin Quintero, Div 'D', grupo 2

Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarDescuento() {
	let importe;
	let descuento;
	let importeDescontado;
	
	importe = document.getElementById('txtIdImporte').value;
	importe = parseFloat(importe);
	descuento = 25;
	
	importeDescontado = importe - (importe / 100) * descuento;
	
	document.getElementById('txtIdResultado').value = importeDescontado;
}
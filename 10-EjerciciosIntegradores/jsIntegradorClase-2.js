/*
Lenin Quintero, Div 'D', grupo 2

Se ingresará por id el valor de una compra de productos para el hogar. 
Se deberá agregar el iva (21%) y luego se deberá restar el 5% en concepto de compra
 mayorista. El programa deberá mostrar por alert importe bruto, el iva, 
 el importe con iva, el valor del descuento y el total a pagar.
*/

function mostrar()
{
	let valorIngresado;
    let iva;
    let valorConIva;
    let descuentoMayorista;
    let valorConDescuento;

	valorIngresado = document.getElementById('txtIdValorCompra').value;
    valorIngresado = parseFloat(valorIngresado);

    descuentoMayorista = 5;
    valorConDescuento = valorIngresado - (valorIngresado / 100) * descuentoMayorista;
    
    iva = 21; 
    valorConIva = (valorConDescuento / 100) * iva + valorConDescuento;

	alert(
        'Importe Bruto: ' + valorIngresado +
        '\nDescuento mayorista (' + descuentoMayorista + '%) = ' + valorConDescuento +
        '\nIva(' + iva + '%) = ' + valorConIva +
        '\nTotal a pagar = ' + valorConIva
        );
}
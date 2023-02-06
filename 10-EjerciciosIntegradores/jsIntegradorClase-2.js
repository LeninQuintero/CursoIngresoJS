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
    let valorIva;
    let descuentoMayorista;
    let valorDescuento;
    let totalPagar;

	valorIngresado = document.getElementById('txtIdValorCompra').value;
    valorIngresado = parseFloat(valorIngresado);
    
    iva = 21; 
    valorIva = (valorIngresado / 100) * iva;

    descuentoMayorista = 5;
    valorDescuento = valorIva - ((valorIva / 100) * descuentoMayorista);

    totalPagar = valorIngresado + valorIva - valorDescuento;
    
	alert(
        'Importe Bruto: ' + valorIngresado +
        '\nIva(' + iva + '%) = ' + valorIva +
        '\nDescuento mayorista (' + descuentoMayorista + '%) = ' + valorDescuento +
        '\nTotal a pagar = ' + totalPagar
        );
}
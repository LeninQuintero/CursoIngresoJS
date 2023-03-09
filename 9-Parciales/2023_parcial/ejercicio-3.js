/******************************************************************************
 * Apellido: Quintero
 * Nombre: Lenin
 * Comisión: D
 
Ejercicio 3
"Atención AFIP: ""Inspección de Bultos"": La administración federal de ingresos públicos tiene el ojo puesto sobre una empresa de 
logística que opera en Argentina e importa productos desde  México, Colombia y Uruguay. Nos piden que realicemos un programa que 
permita controlar los movimientos de dicha empresa: 
De cada pedido que recibe la empresa se conoce: la cantidad de bultos, el peso por bulto (no debe superar los 1500 kilos), el lugar de origen.
Se establece que la tarifa regular por bulto es de $300 y la tarifa especial (para pedidos de más de 300 kilos por bulto) es de $500.
La aplicación debe informar a la AFIP:

A) Total facturado
B) Porcentaje de bultos ingresados desde Colombia.
C) Sobre el total facturado de bultos provenientes de México, la empresa deberá pagar un canon del 15% sobre este total 
 (este impuesto luego será redistribuido para la construcción de hospitales). Mostrar dicho valor.
D) Para incentivar el libre comercio con los países del MERCOSUR, si el total facturado de bultos provenientes de Uruguay, 
 supera los $15000000, se le otorgará a la empresa una devolución del 5% sobre ese total.

*******************************************************************************/

function mostrar() {

    let respuesta;
    let paisOrigen;
    let totalFacturadoFinal;
    let totalFacturadoMexico;
    let totalFacturadoUraguay;
    let totalFacturadoColombia;
    let totalFactura;
    let cantidadBultos;
    let acumuladorBultos;
    let pesoBulto;
    let mexicoCannon;
    let devolucionUruguay;
    let precioBulto;

    let porcentajeBultosColombia;
    let acumuladorBultosColombia;

    acumuladorBultosColombia = 0;
    acumuladorBultos = 0;
    totalFacturadoFinal = 0;
    totalFacturadoMexico = 0;
    totalFacturadoUraguay = 0;
    totalFacturadoColombia = 0;
    totalFactura = 0;
    mexicoCannon = 0;

    respuesta = true;

    while (respuesta) {

        cantidadBultos = prompt('Ingrese cantidad de bultos:');
        cantidadBultos = parseInt(cantidadBultos);
        while (cantidadBultos < 1) {
            cantidadBultos = prompt('Cantidad INVALIDA, por favor ingrese de nuevo la cantidad de bultos:');
            cantidadBultos = parseInt(cantidadBultos);
        }

        paisOrigen = prompt('Ingrese un pais de origen, las opciones son: \n-México \n-Colombia \n-Uruguay');
        while (paisOrigen != 'México' && paisOrigen != 'Colombia' && paisOrigen != 'Uruguay') {
            paisOrigen = prompt('Origen INVALIDO, las opciones son: \n-México \n-Colombia \n-Uruguay');
        }

        pesoBulto = prompt('Ingrese el peso por bulto:');
        pesoBulto = parseFloat(pesoBulto);
        while (pesoBulto > 1500 || pesoBulto <= 0) {
            pesoBulto = prompt('El peso por bulto no puede ser menor a cero ni mayor a 1500Kg, ingrese de nuevo el peso por bulto:');
            pesoBulto = parseFloat(pesoBulto);
        }

        if (pesoBulto > 300) {
            precioBulto = 500;
        } else {
            precioBulto = 300;
        }

        switch (paisOrigen) {
            case 'México':
                totalFactura = cantidadBultos * precioBulto;
                totalFacturadoMexico += totalFactura;
                break;

            case 'Colombia':
                totalFactura = cantidadBultos * precioBulto;
                totalFacturadoColombia += totalFactura;
                acumuladorBultosColombia += cantidadBultos;
                break;

            case 'Uruguay':
                totalFactura = cantidadBultos * precioBulto;
                totalFacturadoUraguay += totalFactura;
                break;
        }

        acumuladorBultos += cantidadBultos;
        respuesta = confirm('¿Desea continuar cargando datos?');
    }

    totalFacturadoFinal = totalFacturadoMexico + totalFacturadoUraguay + totalFacturadoColombia;

    porcentajeBultosColombia =  acumuladorBultosColombia / (acumuladorBultos / 100);

    mexicoCannon = totalFacturadoMexico * 0.15;

    document.write('A-> El total facturado fue de $' + totalFacturadoFinal + '');

    document.write('B-> El porcentaje de bultos ingresados desde Colombia es: ' + porcentajeBultosColombia.toFixed(2) + '%');

    if (cantidadBultos > 0) {
        document.write('C-> El cannon de 15% al total facturado por bultos proveninetes de Mexico es: $' + mexicoCannon + '');
    } else {
        document.write('C-> No se pudo calcular el cannon del 15% de bultos proveninetes de Mexico porque no se ingreso ninguno.' + '');
    }

    if (totalFacturadoUraguay > 15000000) {
        devolucionUruguay = totalFacturadoUraguay * 0.15;
        document.write('D-> Se le otorga devolucion de ' + devolucionUruguay.toFixed(2) + ' equivalente a 5% a los bultos provenientes de Uruguay porque supero los $15000000' + '');
    } else {
        document.write('D-> No se le otorga devolucion del 5% a los bultos provenientes de Uruguay porque no hubo ninguno.');
    }
}





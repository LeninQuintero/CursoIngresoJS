/******************************************************************************
Nombre: Lenin Quintero
Divicion: D 
Tutor: Renato

Ejercicio 3

Parador Atalaya

Para la nueva sucursal de Atalaya a la vuelta de UTN Avellaneda, es necesario llevar un registro 
de la venta diaria de cafés, medialunas y churros.

Para eso, al momento de cada venta, se debe ingresar:

Nombre del cliente
Tipo de producto (Café / Medialunas /Churros) 
Cantidad.

El precio por unidad de cada producto es:

Café $100.
Medialunas $60.
Churros $50.

Si compra 2 docenas de Medialunas o Churros tendrá un 30% de descuento.
Si compra 1 docena Medialunas o Churros tendrá un 20% de descuento.
Si compra 10 Medialunas o Churros tendrá un 10% de descuento.
Si compra 5 Medialunas o Churros o compra un café tendrá un 5% de descuento.

Informes:

a) Cuantas Medialunas se compraron durante toda la jornada.
b) Cuál fue el tipo de producto con más unidades vendidas.
c) De la venta con más unidades el nombre del cliente y el tipo de producto.
d) En caso de haber excedido el monto de $1300 sumarle un 20% de impuestos.

Tener en cuenta:
Si se compran más de dos docenas de medialunas/churros por ejemplo. El descuento del 30% se sigue aplicando, eso aplica para cualquier otro caso similar.
Por cada venta que se hace se ingresa un sólo tipo de producto (café o medialunas o churros)

*******************************************************************************/

function venta(){
    let nombreCliente;
    let tipoProducto;
    let cantidad;
    let respuesta;
    let descuento;
    let acumuladorMedialunas;
    let acumuladorChurros;
    let acumuladorCafes;
    let contadorGeneralVentas;
    let ventaMasUnidades;
    let tipoMasVendido;
    let nombreMasUnidades;
    let tipoMasUnidades;
    let importeVenta;
    let importeFinal;
    let importeConImpuesto;
    let importeDescuento;

    const precioCafe = 100;
    const precioMedialunas = 60;
    const precioChurros = 50;

    respuesta = true;
    acumuladorMedialunas = 0;
    acumuladorChurros = 0;
    acumuladorCafes = 0;
    contadorGeneralVentas = 0;
    importeConImpuesto = 0;
    importeFinal = 0;
    importeDescuento = 0;
    

    while(respuesta){

        nombreCliente = prompt('Ingrese el nombre del cliente: ');
        while(nombreCliente == '' || !isNaN(nombreCliente)){
            nombreCliente = prompt('Nombre INVALIDO, Ingrese de nuevo el nombre del cliente:');
        }

        tipoProducto = prompt('Ingrese un tipo de producto, las opciones son: \n-Churros \n-Medialunas \n-Cafe');
        while(tipoProducto != 'Churros' && tipoProducto != 'Medialunas' && tipoProducto != 'Cafe'){
            tipoProducto = prompt('Tipo de producto INVALIDO, las opciones son: \n-Churros \n-Medialunas \n-Cafe');
        }

        cantidad = prompt('Ingrese la cantidad: ');
        cantidad = parseInt(cantidad);
        while(cantidad < 1 || isNaN(cantidad)){
            cantidad = prompt('Cantidad INVALIDA, Ingrese de nuevo la cantidad:');
            cantidad = parseInt(cantidad);
        }

        contadorGeneralVentas++;

        if(tipoProducto == 'Medialunas' || tipoProducto == 'Churros'){
            if(cantidad > 23){
                descuento = 0.3;
            } else {
                if(cantidad > 11){
                    descuento = 0.2;
                } else{
                    if(cantidad > 9){
                        descuento = 0.1;
                    } else {
                        if(cantidad > 4){
                            descuento = 0.05;
                        } else{
                            descuento = 1;
                        }
                    }
                }
            }
        }else{
            if(cantidad == 1){
                descuento = 0.05;
            }
        }
    
        switch(tipoProducto){
            case 'Medialunas':
                acumuladorMedialunas = acumuladorMedialunas + cantidad;
                importeDescuento = (precioMedialunas * cantidad) * descuento;
                importeVenta = (precioMedialunas * cantidad) - importeDescuento;
                break;
    
            case 'Churros':
                acumuladorChurros = acumuladorChurros + cantidad;
                importeDescuento = (precioChurros * cantidad) * descuento;
                importeVenta = (precioChurros * cantidad) - importeDescuento;
                break;
            
            case 'Cafe':
                acumuladorCafes = acumuladorCafes + cantidad;
                importeDescuento = (precioCafe * cantidad) * descuento;
                importeVenta = (precioCafe * cantidad) - importeDescuento;
                break;
        }

        if(cantidad > ventaMasUnidades || contadorGeneralVentas == 1){
            ventaMasUnidades = cantidad;
            nombreMasUnidades = nombreCliente;
            tipoMasUnidades = tipoProducto;
        }

        importeFinal = importeFinal + importeVenta;
        respuesta = confirm('¿Desea continuar?');
    }// Fin del while

    if(acumuladorMedialunas > acumuladorChurros && acumuladorMedialunas > acumuladorCafes){
        tipoMasVendido = 'Medialunas';
    } else {
        if(acumuladorChurros > acumuladorCafes){
            tipoMasVendido = 'Churros';            
        } else {
            tipoMasVendido = 'Cafe';
        }
    }

    document.write('A-> Se vendieron un total de ' + acumuladorMedialunas + ' medialunas en toda la jornada.' + '<br>');
    document.write('B-> El tipo de producto con más unidades vendidas fue: ' + tipoMasVendido + '.<br>');
    document.write('C-> De la venta con más unidades el nombre del cliente fue: ' + nombreMasUnidades +' y el tipo de producto fue: ' + tipoMasUnidades + '.<br>');
    
    if(importeFinal > 1300){
        importeConImpuesto = importeFinal * 1.2;
        document.write('D-> Como el importe final supero los $1300 se le aplico un impuesto del 20% y debe pagar : $' + importeConImpuesto);
    } else{
        document.write('D-> Como el importe final NO supero los $1300  no se le aplicaron impuestos y debe pagar : $' + importeFinal);
    }
}
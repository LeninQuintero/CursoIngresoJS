/*
Ejercicio 3
Apellido: Quintero
Nombre: Lenin
Comision: D
Tutor: Renato

"Se nos solicita desarrollar un programa para llevar registro de las ventas y compras en una tienda electrónica. 
Para ello, se solicitará al usuario la siguiente información para cada transacción:

Nombre del cliente
Tipo de transacción (vende o compra)
Precio de la publicación
Tipo de producto (teléfono, tablet o tv)

Para las ventas, se aplicará un 15% en concepto de comisiones de la compañia. 

Para las compras de tablets, a partir de los $10000, se aplicará un descuento del 5%.

 Se deberá mostrar:

A) Dinero total en concepto de compras.
B) Precio promedio de las ventas de tv
C) Total de comisiones recaudadas.
"*/

function mostrar(){
    let nombre;
    let tipoTransaccion;
    let precio;
    let tipoProducto;
    let comision;
    let acumuladorComisiones;
    
    let acumuladorPrecioTV;
    let contadorTV;
    let promedioTv;
    let descuento;
    
    let acumuladorCompras;
    
    let subTotal;
    let respuesta;
    
    respuesta = true;
    acumuladorPrecioTV=0;
    contadorTV=0;
    acumuladorCompras=0;
    acumuladorComisiones=0;
    
    while(respuesta) {
    
        nombre = prompt('Ingrese el Nombre:');
        while (nombre == '' || !isNaN(nombre)) {
            nombre = prompt('Nombre INVALIDO, Ingrese de nuevo el Nombre:');
        }
    
        tipoTransaccion = prompt('Ingrese el Tipo de Transaccion (vende o compra):');
        while (tipoTransaccion != 'vende' && tipoTransaccion != 'compra') {
            tipoTransaccion = prompt('Tipo de Transaccion INVALIDO, Ingrese de nuevo el Tipo de Transaccion (vende o compra):');
        }
    
        precio = prompt('Ingrese el Precio:');
        precio = parseFloat(precio);
        while (isNaN(precio) || precio < 0) {
            precio = prompt('Precio INVALIDO, Ingrese de nuevo el Precio:');
            precio = parseFloat(precio);
        }
    
        tipoProducto = prompt('Ingrese el Tipo de Producto (telefono, tablet o tv):');
        while (tipoProducto != 'telefono' && tipoProducto != 'tablet' && tipoProducto != 'tv') {
            tipoProducto = prompt('Tipo de Producto INVALIDO, Ingrese de nuevo el Tipo de Producto (telefono, tablet o tv):');
        }
    
        if(tipoTransaccion == 'vende'){
            comision = precio * 0.15;
            acumuladorComisiones += comision;
            subTotal = precio + comision;
            if(tipoProducto == 'tv'){
                acumuladorPrecioTV += subTotal;
                contadorTV++;
            }
        } else {
            if(tipoProducto == 'tablet' && precio >= 10000){
                descuento = precio * 0.05;
                precio = precio - descuento;
            }
            acumuladorCompras += precio;
        }
    
    respuesta = confirm('Desea ingresar una nueva transaccion?');
    }
    
    document.write('A-> Dinero total en concepto de compras: ' + acumuladorCompras + '<br>');
    
    if(contadorTV > 0){
        promedioTv = acumuladorPrecioTV / contadorTV;
    document.write('B-> Precio promedio de las ventas de tv: $' + promedioTv + '<br>');
    } else {
        document.write('B-> No se registraron ventas de tv' + '<br>');
    }
    
    document.write('C-> Total de comisiones recaudadas: $' + acumuladorComisiones.toFixed(2) + '<br>');
    
    }
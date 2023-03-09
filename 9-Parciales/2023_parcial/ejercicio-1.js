/******************************************************************************
 * Apellido: Quintero
 * Nombre: Lenin
 * Comisión: D

Ejercicio 1
 El gerente de "El super de Anto"" nos pide desarrollar un programa que  permita cargar y analizar las compras realizadas por sus clientes en una jornada de trabajo.
Para ello, se debe ingresar en cada una de las compras:

Nombre del comprador.
Edad del comprador (Debe ser mayor de edad).
Cantidad de productos comprados (No debe ser negativo ni cero).
Total gastado (No debe ser negativo ni cero).
Método de pago (Efectivo - Débito - Crédito)

En base a todas las compras registradas, informar:

A) El promedio de edad entre todos los compradores.
B) El promedio de dinero gastado por los compradores menores a 25 años.
C) El porcentaje de dinero que representa el total de las compras realizadas con tarjeta de debito.
D) Nombre y cantidad de productos del comprador que menos gasto.
*******************************************************************************/

function mostrar(){
let nombre;
let edad;
let cantidad;
let total;
let metodoPago;

let acumuladorEdad;
let contadorClientes;
let promedioEdad;

let contadorMenores25;
let acumuladorDineroMenores25;
let promedioMenores25;

let acumuladorTotalDinero;
let acumuladorDebito;
let porcentajeDebito;
let menorGasto;
let nombreMenorGasto;
let cantidadMenorGasto;

let respuesta;

respuesta = true;
acumuladorEdad = 0;
contadorClientes = 0;
contadorMenores25 = 0;
acumuladorDineroMenores25 = 0;
acumuladorTotalDinero = 0;
acumuladorDebito = 0;


while(respuesta) {

nombre = prompt('Ingrese el Nombre:');
while(nombre == '' || !isNaN(nombre)){
    nombre = prompt('Nombre INVALIDO, Ingrese de nuevo el Nombre:');
}

edad = prompt('Ingrese la edad: ');
edad = parseInt(edad);
while(edad < 1 || isNaN(edad) || edad > 120){
    edad = prompt('edad INVALIDA, Ingrese de nuevo la edad:');
    edad = parseInt(edad);
}

cantidad = prompt('Ingrese la cantidad: ');
cantidad = parseInt(cantidad);
while(cantidad < 1 || isNaN(cantidad)){
    cantidad = prompt('Cantidad INVALIDA, Ingrese de nuevo la cantidad:');
    cantidad = parseInt(cantidad);
}

metodoPago = prompt('Ingrese un metodo de pago, las opciones son: \n-Efectivo \n-Débito \n-Crédito');
while(metodoPago != 'Efectivo' && metodoPago != 'Débito' && metodoPago != 'Crédito'){
    metodoPago = prompt('metodo de pago INVALIDO, las opciones son: \n-Efectivo \n-Débito \n-Crédito');
}

total = prompt('Ingrese el total:');
total = parseFloat(total);
while(total < 1){
    numero = prompt('El numero no puede ser menor a 1, ingrese de nuevo el total:');
    numero = parseFloat(total);
}

if(edad < 25){
contadorMenores25++;
acumuladorDineroMenores25 += total;
}

if(metodoPago == 'Débito'){
    acumuladorDebito += total;
}

if(total < menorGasto || contadorClientes == 0){
    menorGasto = total;
    nombreMenorGasto = nombre;
    cantidadMenorGasto = cantidad;
}

acumuladorTotalDinero += total;
acumuladorEdad += edad;
contadorClientes++;
respuesta = confirm('¿Desea ingresar otro cliente?');
}// fin del while


if (contadorClientes > 0){
    promedioEdad = acumuladorEdad / contadorClientes;
    document.write('A-> El promedio de edad entre todos los compradores es: ' + promedioEdad + '');
} else{
    document.write('A-> No se puede calcular el promedio de edad de los clientes porque no se ingrerso ninguno.' + '');
}


if(contadorMenores25 > 0){
    promedioMenores25 = acumuladorDineroMenores25 / contadorMenores25;
    document.write('B-> El promedio de dinero gastado por los compradores menores a 25 años es:' + promedioMenores25.toFixed(2) +  '');
} else{
    document.write('B-> No se puede calcular el promedio de los compradores menores a 25 años porque no se ingreso ninguno.' + '');
}

if(acumuladorDebito > 0){
    porcentajeDebito = acumuladorDebito / (acumuladorTotalDinero / 100);
    document.write('C-> El porcentaje de dinero que representa el total de las compras realizadas con tarjeta de debito es:' + porcentajeDebito.toFixed(2) + '%');
} else {
    document.write('C-> No se puede calcular el porcentaje del total de las compras realizadas con tarjeta de debito porque no se ingreso ninguna.'+ '');
}
document.write('D-> El nombre del comprador que menos gasto es: ' + nombreMenorGasto + ' y la cantidad de productos fue de: ' + cantidadMenorGasto + '');
}




// *******************************************************************************************
  

// function mostrar(){
//     let nombre;
//     let edad;
//     let cantidad;
//     let total;
//     let metodoPago;
    
//     let acumuladorEdad;
//     let contadorClientes;
//     let promedioEdad;
    
//     let contadorMenores25;
//     let acumuladorDineroMenores25;
//     let promedioMenores25;
    
//     let acumuladorTotalDinero;
//     let acumuladorDebito;
//     let porcentajeDebito;
//     let nombreMenorGasto;
//     let cantidadMenorGasto;
//     let respuesta;

//     acumuladorEdad = 0;
//     contadorClientes = 0;
//     contadorMenores25 = 0;
//     acumuladorDineroMenores25 = 0;
//     acumuladorTotalDinero = 0;
//     acumuladorDebito = 0;

 
//     respuesta = true;
        
//     while(respuesta) {
//         nombre = prompt('Ingrese el Nombre:');
//         while(nombre == '' || !isNaN(nombre)){
//             nombre = prompt('Nombre INVALIDO, Ingrese de nuevo el Nombre:');
//         }
        
//         edad = prompt('Ingrese la edad: ');
//         edad = parseInt(edad);
//         while(edad < 18 || isNaN(edad) || edad > 120){
//             edad = prompt('Edad INVALIDA, Ingrese de nuevo la edad:');
//             edad = parseInt(edad);
//         }
        
//         cantidad = prompt('Ingrese la cantidad de productos comprados:');
//         cantidad = parseInt(cantidad);
//         while(cantidad <= 0 || isNaN(cantidad)){
//             cantidad = prompt('Cantidad INVALIDA, Ingrese de nuevo la cantidad de productos comprados:');
//             cantidad = parseInt(cantidad);
//         }
        
//         total = prompt('Ingrese el total gastado:');
//         total = parseFloat(total);
//         while(total <= 0 || isNaN(total)){
//             total = prompt('Total gastado INVALIDO, Ingrese de nuevo el total gastado:');
//             total = parseFloat(total);
//         }
        
//         metodoPago = prompt('Ingrese el metodo de pago (Efectivo - Debito - Credito):');
//         while(metodoPago.toLowerCase() !== 'efectivo' && metodoPago.toLowerCase() !== 'debito' && metodoPago.toLowerCase() !== 'credito'){
//             metodoPago = prompt('Metodo de pago INVALIDO, Ingrese de nuevo el metodo de pago (Efectivo - Debito - Credito):');
//         }
        
//         acumuladorEdad += edad;
//         contadorClientes++;
        
//         if (edad < 25) {
//             acumuladorDineroMenores25 += total;
//             contadorMenores25++;
//         }
        
//         acumuladorTotalDinero += total;
        
//         if (metodoPago.toLowerCase() === 'debito') {
//             acumuladorDebito += total;
//         }
        
//         if (total < menorGasto) {
//             menorGasto = total;
//             nombreMenorGasto = nombre;
//             cantidadMenorGasto = cantidad;
//         }
        
//         respuesta = confirm('¿Desea ingresar otro cliente?');
//     }

//     if (contadorClientes > 0) {
//         promedioEdad = acumuladorEdad / contadorClientes;
//         document.write('A-> El promedio de edad entre todos los compradores es: ' + promedioEdad + '');
//     } else {
//         document.write('A-> No se puede calcular el promedio de edad de los clientes porque no se ingresó ninguno.' + '');
//     }
    
//     if (contadorMenores25 > 0) {
//         promedioMenores25 = acumuladorDineroMenores25 / contadorMenores25;
//         document.write('B-> El promedio de dinero gastado por los compradores menores a 25 años es: ' + promedioMenores25 + '');
//     } else {
//         document.write('B-> No se puede calcular el promedio de dinero gastado por compradores menores a 25 años porque no se ingresó ninguno.' + '');
//     }
    
//     if (acumuladorDebito > 0) {
//         porcentajeDebito = (acumuladorDebito / acumuladorTotalDinero) * 100;
//         document.write('C-> El porcentaje de dinero que representa el total de las compras realizadas con tarjeta de débito es: ' + porcentajeDebito + '%');
//     } else {
//         document.write('C-> No se puede calcular el porcentaje de dinero que representa el total de las compras realizadas con tarjeta de débito porque no se ingresó ninguna compra.' + '');
//     }
    
//     if (nombreMenorGasto !== '') {
//         document.write('D-> El comprador que menos gastó es ' + nombreMenorGasto + ' con una compra de $' + menorGasto + ' y ' + cantidadMenorGasto + ' productos comprados.');
//     } else {
//         document.write('D-> No se puede determinar el comprador que menos gastó porque no se ingresó ninguna compra.' + '');
//     }
    
// }
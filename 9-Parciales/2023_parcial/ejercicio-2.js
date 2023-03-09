/******************************************************************************
 * Apellido: Quintero
 * Nombre: Lenin
 * Comisión: D
 
Ejercicio 2

"El gimnasio ""Te pago la cuota pa no ir"",  quiere medir el progreso de sus clientes y saber quien es el más fuerte.
Debemos pedirle al cliente:
Nombre
Edad(debe ser mayor a 12)
Peso(No debe ser negativo)
Género(masculino, femenino, otro)
Peso levantado en press de banca(No debe ser negativo)
Peso levantado en sentadilla(No debe ser negativo)
No sabemos cuántos clientes entran durante el día.
Se debe informar al usuario:
A) El promedio de peso levantado en sentadilla.
B) El porcentaje de clientes por género
C) El nombre y peso de la persona de género masculino que tiene el mayor peso levantado  en press de banca 
D) El genero que mas peso ha levantado en total realizando sentadillas"

*******************************************************************************/

function mostrar(){
    let nombre;
    let edad;
    let peso;
    let genero;
    let pesoPress;
    let pesoSentadillas;

    let acumuladorPesoSentadillas;
    let promedioPesoSentadillas;

    let contadorTotalClientes;
    let contadorMasculino;
    let contadorFemenino;
    let contadorOtro;

    let porcentajeMasculino;
    let porcentajeFemenino;
    let porcentajeOtro;

    let mayorPesoPress;
    let nombreMayorPesoPress;

    let centecimaTotalClientes;

    let acumuladorSentadillasfemenino;
    let acumuladorSentadillasMasculino;
    let acumuladorSentadillasOtro;

    let generoMasPeso;

    acumuladorSentadillasfemenino = 0;
    acumuladorSentadillasMasculino = 0;
    acumuladorSentadillasOtro = 0;


    let respuesta;

    respuesta = true;
    contadorTotalClientes = 0;
    contadorSentadillas = 0;
    acumuladorPesoSentadillas = 0;

    contadorMasculino = 0;
    contadorFemenino = 0;
    contadorOtro = 0;


while(respuesta){

    nombre = prompt('Ingrese el Nombre:');
    while(nombre == '' || !isNaN(nombre)){
        nombre = prompt('Nombre INVALIDO, Ingrese de nuevo el Nombre:');
    }

    edad = prompt('Ingrese la edad (mayor a 12): ');
    edad = parseInt(edad);
    while (edad < 13 || isNaN(edad) || edad > 120) {
        edad = prompt('Edad INVALIDA, por favor ingrese de nuevo la edad:');
        edad = parseInt(edad);
    }

    genero = prompt('Ingrese un genero, las opciones son: \n-masculino \n-femenino \n-otro');
    while (genero != 'masculino' && genero != 'femenino' && genero != 'otro') {
        genero = prompt('Genero INVALIDO, las opciones son: \n-masculino \n-femenino \n-otro');
    }

    peso = prompt('Ingrese el peso del cliente:');
    peso = parseFloat(peso);
    while (peso < 20) { // validacion estandar
        peso = prompt('Peso INVALIDO, ingrese un de nuevo el peso del cliente:');
        peso = parseFloat(peso);
    }

    pesoPress = prompt('Ingrese el peso que levanta en press:');
    pesoPress = parseFloat(pesoPress);
    while (pesoPress <= 0) {
        pesoPress = prompt('Peso INVALIDO, ingrese de nuevo el peso que levanta en press:');
        pesoPress = parseFloat(pesoPress);
    }

    pesoSentadillas = prompt('Ingrese el peso que levanta en sentadillas:');
    pesoSentadillas = parseFloat(pesoSentadillas);
    while (pesoSentadillas <= 0) {
        pesoSentadillas = prompt('Peso INVALIDO, ingrese de nuevo el peso que levanta en sentadillas:');
        pesoSentadillas = parseFloat(pesoSentadillas);
    }

    switch (genero) {
        case 'masculino':
            contadorMasculino ++;
            acumuladorSentadillasMasculino += pesoSentadillas;
            if(pesoPress > mayorPesoPress || contadorMasculino == 1){
                mayorPesoPress = pesoPress;
                nombreMayorPesoPress = nombre;
            }
            break;
    
        case 'femenino':
            contadorFemenino++;
            acumuladorSentadillasfemenino += pesoSentadillas;
            break;
    
        case 'otro':
            contadorOtro++;
            acumuladorSentadillasOtro += pesoSentadillas;
            break;
    }//

    acumuladorPesoSentadillas += pesoSentadillas;
    contadorTotalClientes ++;
    respuesta = confirm('¿Desea seguir cargando clientes?');
}

centecimaTotalClientes = contadorTotalClientes / 100;
porcentajeMasculino = contadorMasculino / centecimaTotalClientes;
porcentajeFemenino = contadorFemenino / centecimaTotalClientes;
porcentajeOtro = contadorOtro / centecimaTotalClientes;

if(acumuladorSentadillasfemenino > acumuladorSentadillasMasculino && acumuladorSentadillasfemenino > acumuladorSentadillasOtro){
    generoMasPeso = 'femenino';
} else {
    if(acumuladorSentadillasMasculino > acumuladorSentadillasOtro) {
        generoMasPeso = 'masculino';
    } else {
        generoMasPeso = 'otro';
    }
}

if(contadorTotalClientes > 0){
    promedioPesoSentadillas = acumuladorPesoSentadillas / contadorTotalClientes;
    document.write('A-> El promedio de peso levantado en sentadilla es: ' + promedioPesoSentadillas.toFixed(2) + 'kg.');
} else {
    document.write('A-> No se puede calcular el promedio porque no se ingreso ningun cliente.' + '');
}

 document.write('B-> El porcentaje de clientes por género es: masculino ' + porcentajeMasculino.toFixed(2) + '%, femenino ' + porcentajeFemenino.toFixed(2) + '% y otro ' + porcentajeOtro.toFixed(2) + '%');

if(contadorMasculino > 0){
    document.write('C-> ' + nombreMayorPesoPress + ' es la persona de género masculino que tiene el mayor peso levantado en press de banca y el peso que levanta es: ' + mayorPesoPress.toFixed(2) + 'Kg.');
} else {
    document.write('C-> No se ingreso ningún cliente de género masculino' + '');
}

document.write('D-> El género que mas peso ha levantado en total realizando sentadillas es: ' + generoMasPeso);

}
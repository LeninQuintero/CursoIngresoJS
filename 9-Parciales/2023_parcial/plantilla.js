// *************** VALIDACIONES PROMPT ***************** //

// validar texto estandar
variable = prompt('Ingrese el texto:');
while(variable == '' || !isNaN(variable)){
    variable = prompt('texto INVALIDO, Ingrese de nuevo el texto:');
}

// validaciones de tipo
variable = prompt('Ingrese un tipo, las opciones son: \n-tipo1 \n-tipo2 \n-tipo3');
while(variable != 'tipo1' && variable != 'tipo2' && variable != 'tipo3'){
    variable = prompt('Tipo INVALIDO, las opciones son: \n-tipo1 \n-tipo2 \n-tipo3');
}

// validaciones de cantidad
cantidad = prompt('Ingrese la cantidad: ');
cantidad = parseInt(cantidad);
while(cantidad < 1 || isNaN(cantidad)){
    cantidad = prompt('Cantidad INVALIDA, Ingrese de nuevo la cantidad:');
    cantidad = parseInt(cantidad);
}

// validacion de numero 'mayor que'
numero = prompt('Ingrese un numero mayor que 10:');
numero = parseFloat(numero);
while(numero < 11){
    numero = prompt('El numero no puede ser menor a 10, ingrese un numero mayor que 10;');
    numero = parseFloat(numero);
}

// validacion de numero 'menor que'
numero = prompt('Ingrese un numero menor que 10:');
numero = parseFloat(numero);
while(numero > 10){
    numero = prompt('El numero no puede ser mayor a 10, ingrese un numero menor que 10;');
    numero = parseFloat(numero);
}

// validacion rango de numeros
numero = prompt('Ingrese un numero entre 0 y 10:');
numero = parseFloat(numero);
while(numero < 0 || numero > 10){
    numero = prompt('Numero INVALIDO, ingrese un numero entre 0 y 10;');
    numero = parseFloat(numero);
}


// *************** ESTRUCTURAS BASICAS ***************** //

// estructura switch
switch (variable) {
    case 'caso1':
        break;

    case 'caso2':
        contadorDell++;
        break;

    case 'caso3':
        break;

    default: 

}//

// calcular el mayor
if(acumuladorA > acumuladorB && acumuladorA > acumuladorC){
    mayor = 'A';
} else {
    if(acumuladorB > acumuladorC){
        mayor = 'B';            
    } else {
        mayor = 'C';
    }
}


// *************** PRESENTACION DE DATOS ***************** //
document.write('A-> ' + '<br>');

if(condicion){
    document.write('A-> ' + '<br>');
} else{
    document.write('A-> ' + '<br>');
}

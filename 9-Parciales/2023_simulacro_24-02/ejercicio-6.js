/******************************************************************************
Nombre: Lenin Quintero
Divicion: D 
Tutor: Renato

Ejercicio 1

De los 50 participantes del torneo de TETRIS, se deben ingresar los datos de acuerdo a lo siguiente:
Nombre
Genero (“F”, “M”, "X")
Edad (validar de manera coherente)
Score (validar de manera coherente)
Informar:
a) La cantidad de participantes mayores de edad.
b) El promedio de edad de todos los participantes femeninos.
c) El nombre del participante (cualquiera sea el genero) con mejor score.
Pedir datos por prompt y mostrar la información por document.write.

*******************************************************************************/

function mostrar(){
let nombre;
let genero;
let edad;
let score;
let mejorScore;

let contadorParticipantes;
let contadorMayoresEdad;

let acumuladorFemenino;
let contadorFemenino;
let promedioEdadFemenino;
let nombreMejorScore;

contadorParticipantes = 0;
contadorFemenino = 0;
acumuladorFemenino = 0;
contadorMayoresEdad = 0;

while(contadorParticipantes < 50){

    nombre = prompt('Ingrese el nombre de un participante:');

    genero = prompt('Ingrese el genero del participante, las opciones son : \n\n-"F" para femenino \n-"M" para masculino \n-"X" para otro');
    while(genero != 'F' && genero != 'M' && genero != 'X'){
        genero = prompt('Esa opcion NO es valida, las opciones de genero son : \n\n-"F" para femenino \n-"M" para masculino \n-"X" para otro');
    }

    edad = prompt('Ingrese la edad del participante: ');
    edad = parseInt(edad);
    while(edad < 1){
        edad = prompt('Edad NO valida, ingrese de nuevo la edad: ');
        edad = parseInt(edad);
    }

    score  = prompt('Ingrese el score');
    score = parseFloat(score);
    while(score < 0){
        score  = prompt('El score NO puede ser negativo, Ingrese de nuevo el score: ');
        score = parseFloat(score);
    }

    if(edad > 17){
        contadorMayoresEdad++;
    }

    contadorParticipantes++;
    
    if(score > mejorScore || contadorParticipantes ==1){
        mejorScore = score;
        nombreMejorScore = nombre;
    }

    if(genero == 'F'){
        contadorFemenino++;
        acumuladorFemenino = acumuladorFemenino + edad;
    }
}

document.write('A-> La cantidad de participantes mayores de edad es: '+ contadorMayoresEdad + '');

if(contadorFemenino > 0){
    promedioEdadFemenino = acumuladorFemenino / contadorFemenino;
    document.write('B-> El promedio de edad de todas las participantes femeninas es: ' + promedioEdadFemenino + '');
} else {
    document.write('B-> No se puede calcular el promedio de edad de las participantes femeninas porque no se ingreso ninguna.' + '');
}

document.write('C-> El nombre del participante con mejor score es: ' + nombreMejorScore);
}
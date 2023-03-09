/*
Ejercicio 2
Apellido: Quintero
Nombre: Lenin
Comision: D
Tutor: Renato


"Una empresa de energía eléctrica conocida como “Dejamos sin luz a medio país” nos pide realizar un programa 
para analizar el consumo eléctrico de los 1200 usuarios de un pueblo de la provincia de Buenos Aires.
Para ello, es necesario ingresar de cada uno de los clientes:
Nombre del titular.
DNI del titular (no puede ser negativo ni menor a 2 millones)
Edad (Debe ser mayor de edad)
Género (Masculino - Femenino - Otro)
Consumo eléctrico mensual medido en KWh (No menor a 0 y no mayor a 400).

En base a estos datos se pide informar:
A) El usuario de género masculino y menor de 30 años que más consumo eléctrico haya alcanzado.
B) El porcentaje que representa el género femenino del total de clientes.
C) El género que más consumo eléctrico haya tenido EN TOTAL.
D) El promedio de consumo eléctrico de las personas mayores a 60 años. 
"*/

function mostrar() {

    let nombre;
    let dni;
    let edad;
    let genero;
    let consumo;
    let respuesta;

    let contadorGeneralClientes;
    let contadorMasculino;
    let contadorFemanino;
    let contadorOtro;
    let banderaMasConsumo;

    let nombreMasculinoMenor30MasConsumo;
    let mayorConsumoMasculinoMenor30;

    let porcentajeFemenino;

    let acumuladorConsumoFemenino;
    let acumuladorCosumoMasculino;
    let acumuladorConsumoOtro;
    let consumoGeneral;
    let acumuladorMayores60;
    let contadorMayores60;
    let generoMasConsumo;
    let promedioMayores60;


    respuesta = true;
    contadorMasculino = 0;
    contadorFemanino = 0;
    contadorOtro = 0;
    banderaMasConsumo = true;
    contadorGeneralClientes = 0;
    acumuladorConsumoFemenino = 0;
    acumuladorCosumoMasculino = 0;
    acumuladorConsumoOtro = 0;
    acumuladorMayores60 = 0;
    contadorMayores60 = 0;


    while (respuesta) {

        nombre = prompt('Ingrese el Nombre:');
        while (nombre == '' || !isNaN(nombre)) {
            nombre = prompt('Nombre INVALIDO, Ingrese de nuevo el Nombre:');
        }

        edad = prompt('Ingrese la edad: ');
        edad = parseInt(edad);
        while (edad < 18 || isNaN(edad) || edad > 120) {
            edad = prompt('edad INVALIDA (debe ser mayor de edad), Ingrese de nuevo la edad:');
            edad = parseInt(edad);
        }

        dni = prompt('Ingrese el DNI: ');
        dni = parseInt(dni);
        while (dni < 2000000 || isNaN(dni)) {
            dni = prompt('DNI INVALIDO, Ingrese de nuevo el DNI:');
            dni = parseInt(dni);
        }

        genero = prompt('Ingrese el genero (Masculino - Femenino - Otro): ');
        while (genero != 'Masculino' && genero != 'Femenino' && genero != 'Otro') {
            genero = prompt('Genero INVALIDO, Ingrese de nuevo el genero (Masculino - Femenino - Otro): ');
        }

        consumo = prompt('Ingrese el consumo: ');
        consumo = parseFloat(consumo);
        while (consumo < 0 || isNaN(consumo) || consumo > 400) {
            consumo = prompt('Consumo INVALIDO, Ingrese de nuevo el consumo: ');
            consumo = parseFloat(consumo);
        }

        contadorGeneralClientes++;

        switch (genero) {
            case 'Masculino':
                contadorMasculino++;
                acumuladorCosumoMasculino += consumo;
                if (edad < 30) {
                    if (consumo > mayorConsumoMasculinoMenor30 || banderaMasConsumo) {
                        mayorConsumoMasculinoMenor30 = consumo;
                        nombreMasculinoMenor30MasConsumo = nombre;
                        banderaMasConsumo = false;
                    }
                }
                break;

            case 'Femenino':
                contadorFemanino++;
                acumuladorConsumoFemenino += consumo;
                break;

            case 'Otro':
                contadorOtro++;
                acumuladorConsumoOtro += consumo;
                break;
        }

        if (edad > 60) {
            acumuladorMayores60 += consumo;
            contadorMayores60++;
        }

        respuesta = confirm('Desea ingresar otro usuario?');
    }

    consumoGeneral = acumuladorConsumoFemenino + acumuladorCosumoMasculino + acumuladorConsumoOtro;
    porcentajeFemenino = (contadorFemanino * 100) / contadorGeneralClientes;

    if (acumuladorCosumoMasculino > acumuladorConsumoFemenino && acumuladorCosumoMasculino > acumuladorConsumoOtro) {
        generoMasConsumo = 'Masculino';
    } else if (acumuladorConsumoFemenino > acumuladorCosumoMasculino && acumuladorConsumoFemenino > acumuladorConsumoOtro) {
        generoMasConsumo = 'Femenino';
    } else {
        generoMasConsumo = 'Otro';
    }


    if (contadorMasculino > 0) {
        document.write('A-> El usuario de género masculino y menor de 30 años que más consumo eléctrico haya alcanzado es: ' + nombreMasculinoMenor30MasConsumo + '<br>');
    } else {
        document.write('A-> No se ingresaron usuarios de género masculino y menor de 30 años.<br>');
    }

    document.write('B-> El porcentaje que representa el género femenino del total de clientes es: ' + porcentajeFemenino.toFixed(2) + '%<br>');
    document.write('C-> El género que más consumo eléctrico haya tenido EN TOTAL es: ' + generoMasConsumo + '<br>');

    if (contadorMayores60 > 0) {
        promedioMayores60 = acumuladorMayores60 / contadorMayores60;
        document.write('D-> El promedio de consumo eléctrico de las personas mayores a 60 años es: ' + promedioMayores60.toFixed(2) + ' KWh<br>');
    } else {
        document.write('D-> No se ingresaron personas mayores a 60 años.<br>');
    }
}
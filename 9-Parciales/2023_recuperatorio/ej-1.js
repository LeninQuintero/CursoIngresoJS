/*
Ejercicio 1
Apellido: Quintero
Nombre: Lenin
Comision: D
Tutor: Renato

"UTN-Gob realiza un censo en un barrio privado, se pregunta por:  nombre, genero (F/M/NB), edad, estado civil
(1- para soltero, 2- para casados, 3- para divorciados y 4- para viudos).
Informar:

- Cantidad de ciudadanos solteros o viudos de genero masculino que tengan entre 18 y 33 años.
- Porcentaje de habitantes de genero No Binario.
- Edad promedio de solteros mayores a 18.
- Nombre de la persona mas vieja."*/

function mostrar() {
    let nombre;
    let genero;
    let edad;
    let estadoCivil;
    let contadorSolterosYViudos18y33;
    let contadorGeneral;
    let contadorNB;
    let porcentajeNB;
    let promedioSolterosMayores18;
    let contadorSolterosMayores18;
    let acumuladorEdadMayores18;
    let edadMasViejo;
    let nombreMasViejo;

    let respuesta;


    contadorSolterosYViudos18y33 = 0;
    contadorGeneral = 0;
    contadorNB = 0;
    promedioSolterosMayores18 = 0;
    contadorSolterosMayores18 = 0;
    acumuladorEdadMayores18 = 0;


    respuesta = true;

    while (respuesta) {

        nombre = prompt('Ingrese su nombre:');
        while (nombre == '' || !isNaN(nombre)) {
            nombre = prompt('Error. Ingrese su nombre:');
        }

        genero = prompt('Ingrese su genero (F/M/NB):');
        while (genero != 'F' && genero != 'M' && genero != 'NB') {
            genero = prompt('Error. Ingrese su genero (F/M/NB):');
        }

        edad = prompt('Ingrese su edad:');
        edad = parseInt(edad);
        while (isNaN(edad) || edad < 1) {
            edad = prompt('Error. Ingrese su edad:');
            edad = parseInt(edad);
        }

        estadoCivil = prompt('Ingrese su estado civil (1- para soltero, 2- para casados, 3- para divorciados y 4- para viudos):');
        estadoCivil = parseInt(estadoCivil);
        while (isNaN(estadoCivil) || estadoCivil < 1 || estadoCivil > 4) {
            estadoCivil = prompt('Error. Ingrese su estado civil (1- para soltero, 2- para casados, 3- para divorciados y 4- para viudos):');
            estadoCivil = parseInt(estadoCivil);
        }


        contadorGeneral++;

        if(estadoCivil == 1 || estadoCivil == 4){
            if(genero == 'M' && edad > 17 && edad < 34){
                contadorSolterosYViudos18y33++;
            }
        }

        if (genero == 'NB') {
            contadorNB++;
        }

        if (estadoCivil == 1 && edad > 18) {
            contadorSolterosMayores18++;
            acumuladorEdadMayores18 += edad;
        }

        if (edad > edadMasViejo || contadorGeneral == 1) {
            edadMasViejo = edad;
            nombreMasViejo = nombre;
        }


        respuesta = confirm('¿Desea seguir ingresando datos?');
    }


    porcentajeNB = contadorNB * 100 / contadorGeneral;

    document.write('Cantidad de ciudadanos solteros o viudos de genero masculino que tengan entre 18 y 33 años: ' + contadorSolterosYViudos18y33 + '<br>');
    document.write('Porcentaje de habitantes de genero No Binario: ' + porcentajeNB.toFixed(2) + '%<br>');

    if (contadorSolterosMayores18 > 0) {
        promedioSolterosMayores18 = acumuladorEdadMayores18 / contadorSolterosMayores18;
        document.write('Edad promedio de solteros mayores a 18: ' + promedioSolterosMayores18.toFixed(2) + '<br>');
    } else {
        document.write('No se ingresaron solteros mayores a 18 años.<br>');
    }

    document.write('Nombre de la persona mas vieja: ' + nombreMasViejo + '<br>');

}
// Es la gala de eliminación en Gran Hermano y la producción nos pide un programa para contar los votos de los 
// 	televidentes y saber cuál será el participante que deberá abandonar la casa más famosa del mundo.
// 	Los participantes en la placa son: La Tora, Romina, Julieta y Camila. Nacho no fue nominado y Marcos no está en la 
// 	placa esta semana por haber ganado la inmunidad.

// 	El televidente debe ingresar:
// 	Nombre del votante
// 	Edad del votante (debe ser mayor a 13)
// 	Género del votante (masculino, femenino, otro)
// 	El nombre del participante a quien le dará el voto negativo (Debe estar en placa)
// 	No se sabe cuántos votos entrarán durante la gala.
// 	Se debe informar al usuario:

// 	A) El promedio de edad de las votantes de género femenino
// 	B) Cantidad de personas de género masculino entre 25 y 40 años que votaron a La Tora o Julieta.
// 	C) Nombre del votante más joven qué voto a La Tora.
// 	D) Nombre de cada participante y porcentaje de los votos qué recibió.
// 	E) El nombre del participante que debe dejar la casa (El que tiene más votos)

function mostrar() {
    let nombreVotante;
    let edadVotante;
    let generoVotante;
    let continuarVotando;
    let votoNegativo;

    let promedioFemenino;
    let contadorGeneraldeVotos;
    let contadorfemenino;
    let contadorLatoraJulieta;

    let menorEdadVotoLaTora;
    let nombreMenorVotanteLaTora;
    let participanteQueDebeDejarLaCasa;

    let contadorLaTora;
    let contadorCamila;
    let contadorRomina;
    let contadorJulieta;

    let porcentajeLaTora;
    let porcentajeCamila;
    let porcentajeRomina;
    let porcentajeJulieta;

    contadorLaTora = 0;
    contadorCamila = 0;
    contadorRomina = 0;
    contadorJulieta = 0;

    porcentajeLaTora = 0;
    porcentajeCamila = 0;
    porcentajeRomina = 0;
    porcentajeJulieta = 0;

    contadorLatoraJulieta = 0;
    contadorfemenino = 0;
    contadorGeneraldeVotos = 0;

    continuarVotando = true;

    while (continuarVotando) {
        nombreVotante = prompt('Ingrese el nombre:');
        while (nombreVotante == '' || !isNaN(nombreVotante)) {
            nombreVotante = prompt('nombre INVALIDO, Ingrese de nuevo el nombre:');
        }

        edadVotante = prompt('Ingrese un edad:');
        edadVotante = parseInt(edadVotante);
        while (edadVotante < 14) {
            edadVotante = prompt('El edad no puede ser menor a 14, ingrese edad;');
            edadVotante = parseInt(edadVotante);
        }

        generoVotante = prompt('Ingrese un tipo, las opciones son: \n-masculino \n-femenino \n-otro');
        while (generoVotante != 'masculino' && generoVotante != 'femenino' && generoVotante != 'otro') {
            generoVotante = prompt('Tipo INVALIDO, las opciones son: \n-masculino \n-femenino \n-otro');
        }

        votoNegativo = prompt('Ingrese un voto negativo, las opciones son: \n-La Tora \n-Romina \n-Julieta \n-Camila');
        while (votoNegativo != 'La Tora' && votoNegativo != 'Romina' && votoNegativo != 'Julieta' && votoNegativo != 'Camila') {
            votoNegativo = prompt('Voto INVALIDO, las opciones son: \n-La Tora \n-Romina \n-Julieta \n-Camila');
        }

        contadorGeneraldeVotos++;

        if (generoVotante == 'masculino') {
            if (edadVotante > 24 && edadVotante < 41) {
                if (votoNegativo == 'La Tora' || votoNegativo == 'Julieta') {
                    contadorLatoraJulieta++;
                }
            }
        } else {
            if (generoVotante == 'femenino') {
                contadorfemenino++;
            }
        }


        switch (votoNegativo) {
            case 'La Tora':
                contadorLaTora++;
                if (edadVotante < menorEdadVotoLaTora || contadorLaTora == 1) {
                    nombreMenorVotanteLaTora = nombreVotante;
                }
                break;

            case 'Camila':
                contadorCamila++;
                break;

            case 'Julieta':
                contadorJulieta++;
                break;

            case 'Romina':
                contadorRomina++;
                break;
        }

        continuarVotando = confirm('¿Desea emitir otro voto?');
    }

    if (contadorLaTora > contadorCamila && contadorLaTora > contadorRomina && contadorLaTora > contadorJulieta) {
        participanteQueDebeDejarLaCasa = 'La Tora';
    } else {
        if (contadorCamila > contadorLaTora && contadorCamila > contadorRomina && contadorCamila > contadorJulieta) {
            participanteQueDebeDejarLaCasa = 'Camila';
        } else {
            if (contadorRomina > contadorLaTora && contadorRomina > contadorCamila && contadorRomina > contadorJulieta) {
                participanteQueDebeDejarLaCasa = 'Romina';
            } else {
                if (contadorJulieta > contadorLaTora && contadorJulieta > contadorCamila && contadorJulieta > contadorRomina) {
                    participanteQueDebeDejarLaCasa = 'Julieta';
                }
            }
        }

        if (contadorfemenino > 0) {
            promedioFemenino = contadorGeneraldeVotos / contadorfemenino;
            document.write('A-> El promedio de edad de las votantes de género femenino es: ' + promedioFemenino + '<br>');
        } else {
            document.write('A-> No se puede calcular el promedio de edad de las votantes femeninas porque no hubo.' + '<br>');
        }

        if (contadorLatoraJulieta > 0) {
            document.write('B-> La cantidad de personas de género masculino entre 25 y 40 años que votaron a La Tora o Julieta fueron: ' + contadorLatoraJulieta + '<br>');
        } else {
            document.write('B-> No hubo personas de género masculino entre 25 y 40 años que votaron a La Tora o a Julieta' + '<br>');
        }

        if (contadorLaTora > 0) {
            document.write('C->  Nombre del votante más joven qué voto a La Tora es: ' + nombreMenorVotanteLaTora + '<br>');
        } else {
            document.write('C-> No hubo votantes que votaron a La Tora' + '<br>');
        }
        porcentajeLaTora = (contadorLaTora * 100) / contadorGeneraldeVotos;
        porcentajeCamila = (contadorCamila * 100) / contadorGeneraldeVotos;
        porcentajeRomina = (contadorRomina * 100) / contadorGeneraldeVotos;
        porcentajeJulieta = (contadorJulieta * 100) / contadorGeneraldeVotos;

        document.write('D-> El porcentaje de votos que obtuvo camila es: ' + porcentajeCamila + '%, el julieta fue: ' + porcentajeJulieta + '%, el romina fue: ' + porcentajeRomina + '%, y el La Tora fue: ' + porcentajeLaTora + '%' + '<br>');
        document.write('E-> El participante que debe dejar la casa es: ' + participanteQueDebeDejarLaCasa + '<br>');

    }
// 
}
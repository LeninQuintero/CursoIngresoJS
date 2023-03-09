// 37 -"Un grupo de jugadores del muy conocido juego League Of Legends apodados ""la banda de Gio"", registran de sus 
// 	partidas distintos parametros.
// 	Para eso vamos a necesitar un programa que pida a cada uno de los jugadores:
// 	Nombre
// 	Campeón/ personaje recurrente (Riven, Jinx, Jax, Darius)
// 	Cantidad de partidas ganadas (No debe ser negativo)
// 	Cantidad de partidas perdidas (No debe ser negativo)

// 	Queremos informar:
// 	A) Porcentaje de victorias del personaje Jinx, sobre el total de partidas ganadas.
// 	B) El nombre del jugador con mas derrotas.
// 	C) Cuantos jugadores ganaron mas de 5 partidas y perdieron menos de 3 (en un mismo ingreso) jugando con Darius o 
// 	Riven"

function mostrar() {
    let nombre;
    let personaje;
    let partidasGanadas;
    let partidasPerdidas;
    let porcentajeJinx;
    let acumuladorPartidasGanadas;
    let acumuladorVictoriasJinx;
    let nombreJugadorConMasDerrotas;
    let derrotasJugadorConMasDerrotas;
    let banderaJugadorConMasDerrotas;
    let contadorMasDe5MenosDe3;
    let respuesta;

    partidasGanadas = 0;
    partidasPerdidas = 0;
    contadorMasDe5MenosDe3 = 0;
    acumuladorPartidasGanadas = 0;
    acumuladorVictoriasJinx = 0;
    derrotasJugadorConMasDerrotas = 0;
    banderaJugadorConMasDerrotas = true;
    respuesta = true;

    while (respuesta) {
        nombre = prompt('Ingrese su nombre: ');
        while (nombre == '') {
            nombre = prompt('Nombre INVALIDO, ingrese su nombre: ');
        }
        personaje = prompt('Ingrese su personaje, las opciones son: \n-Riven \n-Jinx \n-Jax \n-Darius');
        while (personaje != 'Riven' && personaje != 'Jinx' && personaje != 'Jax' && personaje != 'Darius') {
            personaje = prompt('Personaje INVALIDO, las opciones son: \n-Riven \n-Jinx \n-Jax \n-Darius: ');
        }
        partidasGanadas = prompt('Ingrese la cantidad de partidas ganadas: ');
        partidasGanadas = parseInt(partidasGanadas);
        while (partidasGanadas < 0 || isNaN(partidasGanadas)) {
            partidasGanadas = prompt('Cantidad INVALIDA, ingrese de nuevo la cantidad de partidas ganadas:');
            partidasGanadas = parseInt(partidasGanadas);
        }
        partidasPerdidas = prompt('Ingrese la cantidad de partidas perdidas: ');
        partidasPerdidas = parseInt(partidasPerdidas);
        while (partidasPerdidas < 0 || isNaN(partidasPerdidas)) {
            partidasPerdidas = prompt('Cantidad INVALIDA, ingrese de nuevo la cantidad de partidas perdidas:');
            partidasPerdidas = parseInt(partidasPerdidas);
        }

        if (personaje == 'Jinx') {
            acumuladorVictoriasJinx += partidasGanadas;
        } else {
            if (personaje == 'Riven' || personaje == 'Darius') {
                if (partidasGanadas > 5 && partidasPerdidas < 3) {
                    contadorMasDe5MenosDe3++;
                }
            }

            if (partidasPerdidas > derrotasJugadorConMasDerrotas || banderaJugadorConMasDerrotas) {
                derrotasJugadorConMasDerrotas = partidasPerdidas;
                nombreJugadorConMasDerrotas = nombre;
                banderaJugadorConMasDerrotas = false;
            }

        }
        acumuladorPartidasGanadas += partidasGanadas;
        respuesta = confirm('Desea ingresar otro jugador?');
    }

    porcentajeJinx = acumuladorVictoriasJinx * 100 / acumuladorPartidasGanadas;

    document.write('A-> El porcentaje de victorias de Jinx es: ' + porcentajeJinx + '%');

    document.write('<br>B-> El nombre del jugador con mas derrotas es: ' + nombreJugadorConMasDerrotas);

    if(contadorMasDe5MenosDe3 > 0){
    document.write('<br>C-> La cantidad de jugadores que ganaron mas de 5 partidas y perdieron menos de 3 es: ' + contadorMasDe5MenosDe3);
    }   else    {
        document.write('<br>C-> No hubo jugadores que ganaron mas de 5 partidas y perdieron menos de 3');
    }
}
// 36 -"Un aficionado a las cartas coleccionables desea organizar su coleccion, para esto necesita 
// 	ingresar en un programa:
// 	nombre, tipo (validar monstruo, arma, magica, trampa), rareza validar (comun, rara, rarisima,
// 	legendaria), precio (validar entre 250$ y 5000$) y cantidad del mismo tipo de carta (no menor a 1), 
// 	dejar ingresar hasta que el usuario quiera e informar lo siguiente:

// 	A) de los distintos tipos de cartas, la cantidad total de cada tipo
// 	B) el nombre de la carta mas repetida de cada tipo
// 	C) de las cartas rarisimas y legendarias, la que mas precio tiene y su nombre
// 	D) el valor de la coleccion entera 
// 	E) informar el porcentaje de cartas de cada tipo de rareza (ejemplo 25% de cartas comunes, 25% raras, 
// 	25% rarisimas 25% legendarias)"

function mostrar() {
    let nombre;
    let tipo;
    let rareza;
    let precio;
    let cantidad;

    let acumuladorMonstruo;
    let acumuladorArma;
    let acumuladorMagica;
    let acumuladorTrampa;

    let nombreMasCaraRarisimasLegendarias;
    let precioMasCaraRarisimasLegendarias;

    let subTotal;
    let valorTotalColeccion;
    let acumuladorTotalColeccion;

    let porcentajeComun;
    let porcentajeRara;
    let porcentajeRarisima;
    let porcentajeLegendaria;
    let centecima;

    let nombreMasRepetidaMonsruo;
    let nombreMasRepetidaArma;
    let nombreMasRepetidaMagica;
    let nombreMasRepetidaTrampa;

    let cantidadMasRepetidaMonsruo;
    let cantidadMasRepetidaArma;
    let cantidadMasRepetidaMagica;
    let cantidadMasRepetidaTrampa;

    let acumuladorComun;
    let acumuladorRara;
    let acumuladorRarisima;
    let acumuladorLegendaria;

    let respuesta;

    respuesta = true;
    precio = 0;
    cantidad = 0;
    acumuladorMonstruo = 0;
    acumuladorArma = 0;
    acumuladorMagica = 0;
    acumuladorTrampa = 0;
    valorTotalColeccion = 0;
    acumuladorTotalColeccion = 0;

    acumuladorComun = 0;
    acumuladorRara = 0;
    acumuladorRarisima = 0;
    acumuladorLegendaria = 0;


    while (respuesta) {

        nombre = prompt('Ingrese el nombre de la carta');

        tipo = prompt('Ingrese el tipo de carta (monstruo, arma, magica, trampa)');
        while (tipo != 'monstruo' && tipo != 'arma' && tipo != 'magica' && tipo != 'trampa') {
            tipo = prompt('Error. Ingrese el tipo de carta (monstruo, arma, magica, trampa)');
        }

        rareza = prompt('Ingrese la rareza de la carta (comun, rara, rarisima, legendaria)');
        while (rareza != 'comun' && rareza != 'rara' && rareza != 'rarisima' && rareza != 'legendaria') {
            rareza = prompt('Error. Ingrese la rareza de la carta (comun, rara, rarisima, legendaria)');
        }

        precio = prompt('Ingrese el precio de la carta (entre 250$ y 5000$)');
        precio = parseInt(precio);
        while (precio < 250 || precio > 5000) {
            precio = prompt('Error. Ingrese el precio de la carta (entre 250$ y 5000$)');
            precio = parseInt(precio);
        }

        camtidad = prompt('Ingrese la cantidad de la carta');
        cantidad = parseInt(cantidad);
        while (cantidad < 1) {
            cantidad = prompt('Error. Ingrese la cantidad de la carta');
            cantidad = parseInt(cantidad);
        }

        switch (tipo) {
            case 'monstruo':
                if (cantidad > cantidadMasRepetidaMonsruo || acumuladorMonstruo == 0) {
                    cantidadMasRepetidaMonsruo = cantidad;
                    nombreMasRepetidaMonsruo = nombre;
                }
                acumuladorMonstruo += cantidad;
                break;

            case 'arma':
                if (cantidad > cantidadMasRepetidaArma || acumuladorArma == 0) {
                    cantidadMasRepetidaArma = cantidad;
                    nombreMasRepetidaArma = nombre;
                }
                acumuladorArma += cantidad;
                break;

            case 'magica':
                if (cantidad > cantidadMasRepetidaMagica || acumuladorMagica == 0) {
                    cantidadMasRepetidaMagica = cantidad;
                    nombreMasRepetidaMagica = nombre;
                }
                acumuladorMagica += camtidad;
                break;

            case 'trampa':
                if (cantidad > cantidadMasRepetidaTrampa || acumuladorTrampa == 0) {
                    cantidadMasRepetidaTrampa = cantidad;
                    nombreMasRepetidaTrampa = nombre;
                }
                acumuladorTrampa += cantidad;

                break;
        }

        switch (rareza) {
            case 'comun':
                acumuladorComun += cantidad;
                break;

            case 'rara':
                acumuladorRara += cantidad;
                break;

            case 'rarisima':
                if (precio > precioMasCaraRarisimasLegendarias || acumuladorRarisima == 0) {
                    precioMasCaraRarisimasLegendarias = precio;
                    nombreMasCaraRarisimasLegendarias = nombre;
                }
                acumuladorRarisima += cantidad;
                break;

            case 'legendaria':
                if (precio > precioMasCaraRarisimasLegendarias || acumuladorLegendaria == 0) {
                    precioMasCaraRarisimasLegendarias = precio;
                    nombreMasCaraRarisimasLegendarias = nombre;
                }
                acumuladorLegendaria += cantidad;
                break;
        }
        acumuladorTotalColeccion += cantidad;
        subTotal = cantidad * precio;
        valorTotalColeccion += subTotal;
        respuesta = confirm('¿Desea continuar?');
    }


    centecima = acumuladorTotalColeccion / 100;

    porcentajeComun = acumuladorComun / centecima;
    porcentajeRara = acumuladorRara / centecima;
    porcentajeRarisima = acumuladorRarisima / centecima;
    porcentajeLegendaria = acumuladorLegendaria / centecima;

    document.write('A-> La cantidad total de cada tipo es:' +
        '<br>-Monstruo : ' + acumuladorMonstruo +
        '<br>-Arma : ' + acumuladorArma +
        '<br>-Magica : ' + acumuladorMagica +
        '<br>-Trampa : ' + acumuladorTrampa + '<br><br>');

    document.write('B-> Nombre de la carta mas repetida de cada tipo:');

    if (acumuladorMonstruo != 0) {
        document.write('<br>-Monstruo: ' + nombreMasRepetidaMonsruo);
    } else {
        document.write('<br>-Monstruo: No se ingresaron cartas de este tipo.');
    }

    if (acumuladorArma != 0) {
        document.write('<br>-Arma: ' + nombreMasRepetidaArma);
    } else {
        document.write('<br>-Arma: No se ingresaron cartas de este tipo.');
    }

    if (acumuladorMagica != 0) {
        document.write('<br>-Magica: ' + nombreMasRepetidaMagica);
    } else {
        document.write('<br>-Magica: No se ingresaron cartas de este tipo.');
    }

    if (acumuladorTrampa != 0) {
        document.write('<br>-Trampa: ' + nombreMasRepetidaTrampa + '<br><br>');
    } else {
        document.write('<br>-Trampa: No se ingresaron cartas de este tipo.' + '<br><br>');
    }

    if (precioMasCaraRarisimasLegendarias != null) {
        document.write('C-> De las cartas rarisimas y legendarias, la que mas precio tiene cuesta $' + precioMasCaraRarisimasLegendarias + ' y su nombre es: ' + nombreMasCaraRarisimasLegendarias + '<br><br>');
    } else {
        document.write('C-> No se ingresaron cartas rarisimas ni legendarias.' + '<br><br>');
    }

    document.write('D-> El valor de la coleccion entera es de $' + valorTotalColeccion.toFixed(2) + '<br><br>');

    document.write('E-> El porcentaje por de cada tipo de rareza es:' +
        '<br>-Comun : ' + porcentajeComun.toFixed(2) + '%' +
        '<br>-Rara : ' + porcentajeRara.toFixed(2) + '%' +
        '<br>-Rarisima : ' + porcentajeRarisima.toFixed(2) + '%' +
        '<br>-Legendaria : ' + porcentajeLegendaria.toFixed(2) + '%');
}
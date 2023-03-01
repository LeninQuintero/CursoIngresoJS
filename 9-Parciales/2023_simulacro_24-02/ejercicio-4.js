/******************************************************************************
Lenin Quintero, div D

Enunciado:
Una empresa de mercaderia nos pide un sistema de almacenamiento para sus productos.
La empresa dispone de 3 bodegas para almacenar los productos: 
- Avellaneda (20.000KG)
- CABA (25.000KG) 
- Lanus (15.000 KG)

Para poder almacenar los productos correctamente se debera ingresar el deposito, siempre y cuando este disponible,
una descripcion del producto en cuestion, y el peso del nuevo ingreso a la bodega. Hasta que el usuario desee.

Se debera informar:
a) Cual fue el producto con mas peso entre las tres bodegas, e indicar el promedio
b) Cual fue la bodega con mas ingresos.
c) Cual es la bodega mas llena.
d) Porcentaje disponible de cada bodega.

*******************************************************************************/

function informar() {

    let deposito;
    let descripcion;
    let peso;

    let acumuladorAvellaneda;
    let acumuladorCaba;
    let acumuladorLanus;

    let productoMasPeso;
    let promedioPeso;

    let ingresosTotales;
    let contadorIngresoAvellaneda;
    let contadorIngresoCaba;
    let contadorIngresoLanus;
    let bodegaMasIngresos;
    let bodegaMasLlena;

    let porcentajeDisponibleAvellaneda;
    let porcentajeDisponibleCaba;
    let porcentajeDisponibleLanus;

    let porcentajeAvellaneda;
    let porcentajeCaba;
    let porcentajeLanus;

    let porcentajeMasLlena;

    let disponibilidadAvellaneda;
    let disponibilidadCaba;
    let disponibilidadLanus;

    let respuesta;

    const capacidadAvellaneda = 20000;
    const capacidadCaba = 25000;
    const capacidadLanus = 15000;

    let avellanedaDisponible;
    let cabaDisponible;
    let lanusDisponible;

    avellanedaDisponible = true;
    cabaDisponible = true;
    lanusDisponible = true;

    respuesta = true;
    acumuladorAvellaneda = 0;
    acumuladorCaba = 0;
    acumuladorLanus = 0;
    ingresosTotales = 0;

    disponibilidadAvellaneda = capacidadAvellaneda - acumuladorAvellaneda;
    disponibilidadCaba = capacidadCaba - acumuladorCaba;
    disponibilidadLanus = capacidadLanus - acumuladorLanus;

    while (respuesta) {

        deposito = prompt('Elija un deposito, las opciones son: \n\n-Avellaneda \n-Caba \n-Lanus');
        while (deposito != 'Avellaneda' && deposito != 'Caba' && deposito != 'Lanus') {
            deposito = prompt('Opcion NO valida, las opciones son: \n\n-Avellaneda \n-Caba \n-Lanus');
        }

        descripcion = prompt('Ingrese la descripcion del producto:');

        ingresosTotales++;

        switch (deposito) {
            case 'Avellaneda':
                contadorIngresoAvellaneda++;
                peso = prompt('Ud dispone de' + disponibilidadAvellaneda + 'Kg en este deposito, ingrese el peso del producto:');
                peso = parseFloat(peso);

                while (peso > disponibilidadAvellaneda) {
                    peso = prompt('Excedio el limite. Ud dispone de' + disponibilidadAvellaneda + 'Kg en este deposito, ingrese el peso del producto:');
                    peso = parseFloat(peso);
                }
                acumuladorAvellaneda = acumuladorAvellaneda + peso;
                if (disponibilidadAvellaneda <= 0) {
                    avellanedaDisponible = false;
                }
                break;

            case 'Caba':
                contadorIngresoCaba++;
                while (peso > disponibilidadCaba) {
                    peso = prompt('Excedio el limite. Ud dispone de' + disponibilidadCaba + 'Kg en este deposito, ingrese el peso del producto:');
                    peso = parseFloat(peso);
                }
                acumuladorCaba = acumuladorCaba + peso;
                if (disponibilidadCaba <= 0) {
                    cabaDisponible = false;
                }
                break;

            case 'Lanus':
                contadorIngresoLanus++;
                while (peso > disponibilidadLanus) {
                    peso = prompt('Excedio el limite. Ud dispone de' + disponibilidadLanus + 'Kg en este deposito, ingrese el peso del producto:');
                    peso = parseFloat(peso);
                }

                acumuladorLanus = acumuladorLanus + peso;
                if (disponibilidadLanus <= 0) {
                    lanusDisponible = false;
                }
                break;

        }

        if (peso > productoMasPeso || ingresosTotales == 1) {
            productoMasPeso = peso;
        }

        respuesta = confirm('¿Desea continuar ingresando productos?');
    }

    if (contadorIngresoAvellaneda > contadorIngresoCaba && contadorIngresoAvellaneda > contadorIngresoLanus) {
        bodegaMasIngresos = 'Avellaneda';
    } else {
        if (contadorIngresoCaba > contadorIngresoLanus) {
            bodegaMasIngresos = 'Caba';
        } else {
            bodegaMasIngresos = 'Lanus';
        }
    }

    porcentajeAvellaneda = acumuladorAvellaneda / (capacidadAvellaneda / 100);
    porcentajeCaba = acumuladorCaba / (capacidadCaba / 100);
    porcentajeLanus = acumuladorLanus / (capacidadLanus / 100);

    porcentajeDisponibleAvellaneda = 100 - porcentajeAvellaneda;
    porcentajeDisponibleCaba = 100 - porcentajeCaba;
    porcentajeDisponibleLanus = 100 - porcentajeLanus;

    if (porcentajeAvellaneda > porcentajeCaba && porcentajeAvellaneda > porcentajeLanus) {
        bodegaMasLlena = 'Avellaneda';
        porcentajeMasLlena = porcentajeAvellaneda;
    } else {
        if (porcentajeCaba > porcentajeLanus) {
            bodegaMasLlena = 'Caba';
            porcentajeMasLlena = porcentajeCaba;
        } else {
            bodegaMasLlena = 'Lanus';
            porcentajeMasLlena = porcentajeLanus;
        }
    }

//    promedioPeso=****************************

    document.write('A-> El producto con mas peso entre las tres bodegas pesa ' + productoMasPeso + ' Kg. y el promedio general es de' + promedioPeso + 'Kg.' + '<br>');
    document.write('B-> La bodega con mas ingresos fue: ' + bodegaMasIngresos + '<br>');
    document.write('C-> La bodega mas llena es: ' + bodegaMasLlena + ' con un ' + porcentajeMasLlena + '% de capacidad ocupada.' + '<br>');
    document.write('D-> La bodega "Avellaneda" tiene una disponibilidad del '
        + porcentajeDisponibleAvellaneda + '%, "Caba" tiene '
        + porcentajeDisponibleCaba + '% de capacidad disponible y "Lanus" un '
        + porcentajeDisponibleLanus + '%');

}
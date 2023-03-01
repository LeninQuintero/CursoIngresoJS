/******************************************************************************
 * Apellido: QUINTERO
 * Nombre: LENIN
 * División : D
 
Ejercicio 3

Una fabrica de muebles nos pide realizar una app para gestionar sus productos. 
El programa pide dar de alta cada venta realizada (Cada venta representa un mueble 
en particular, con los atributos definidos mas abajo).

Se debe ingresar en cada venta.
-Nombre del mueble
-Material del mueble (Madera, Metal y Vidrio)
-Peso
-Altura
-Anchura 
-Precio

Debido a la tala excesiva de árboles el gobierno pone un impuesto del 15% ante la compra de 
muebles de madera.
Los muebles de vidrio o metal tienen un 10% de descuento.

Se pide

a)Precio promedio por mueble vendido
b)Cantidad total de muebles de madera
c)El mueble de metal más alto 
d)El mueble más liviano
e)Porcentaje de muebles de cada tipo de material
f)Monto total recaudado bruto de todos los muebles (sin descuentos ni impuestos)
g)Monto total recaudado, pero solo de los muebles de madera(incluido descuentos e impuestos)

NOTA: Los precios no podran ser cero ni negativo.


*******************************************************************************/

function mostrar() {

    let nombre;
    let material;
    let peso;
    let altura;
    let anchura;
    let precio;

    let impuesto;
    let descuento;

    let totalMuebles;
    let totalMueblesMadera;
    let totalMueblesMetal;
    let totalMueblesVidrio;

    let muebleMetalMasAlto;
    let nombreMuebleMasAlto;
    let muebleMasLiviano;
    let nombreMuebleMasLiviano;

    let promedioPorVenta;
    let centesimo;
    let porcentajeMadera;
    let porcentajeMetal;
    let porcentajeVidrio;

    let totalBruto;
    let totalFinal;
    let totalRecaudadoMadera;

    let respuesta;

    totalBruto = 0;
    totalFinal = 0;
    totalRecaudadoMadera = 0;

    totalMuebles = 0;
    totalMueblesMadera = 0;
    totalMueblesMetal = 0;
    totalMueblesVidrio = 0;

    descuento = 0.1;
    impuesto = 0.15;

    respuesta = true;

    while (respuesta) {
        nombre = prompt('Ingrese el nombre del mueble:');
        while(nombre == '' || nombre == null) {
            nombre = prompt('Dato NO valido, ingrese de nuevo el nombre del mueble:');
        }

        material = prompt('Ingrese el material del mueble, las opciones son: \n\n-madera \n-metal \n-vidrio');
        while (material != 'madera' && material != 'metal' && material != 'vidrio') {
            material = prompt('Material NO valido, las opciones son: \n\n-madera \n-metal \n-vidrio');
        }

        peso = prompt('Ingrese el peso:');
        peso = parseFloat(peso);

        while (peso <= 0) {
            peso = prompt('El peso NO puede ser cero ni menor a cero, ingrese de nuevo el peso:');
            peso = parseFloat(peso);
        }

        altura = prompt('Ingrese la altura:');
        altura = parseFloat(altura);

        while (altura <= 0) {
            altura = prompt('La altura NO puede ser cero ni menor a cero, ingrese de nuevo la altura:');
            altura = parseFloat(altura);
        }

        anchura = prompt('Ingrese el ancho:');
        anchura = parseFloat(anchura);

        while (anchura <= 0) {
            anchura = prompt('El ancho NO puede ser cero ni menor a cero, ingrese de nuevo el ancho:');
            anchura = parseFloat(anchura);
        }

        precio = prompt('Ingrese el precio:');
        precio = parseFloat(precio);

        while (precio <= 0) {
            precio = prompt('El precio NO puede ser cero ni menor a cero, ingrese de nuevo el precio:');
            precio = parseFloat(precio);
        }

        totalMuebles++;

        switch (material) {
            case 'madera':
                let precioFinalMadera;

                precioFinalMadera = precio + (precio * impuesto);
                totalRecaudadoMadera = totalRecaudadoMadera + precioFinalMadera;
                totalFinal = totalFinal + precioFinalMadera;

                if (peso < muebleMasLiviano || totalMuebles == 1) {
                    muebleMasLiviano = peso;
                    nombreMuebleMasLiviano = nombre;
                }
                totalMueblesMadera++;
                break;

            case 'metal':
                let precioFinalMetal;

                precioFinalMetal = precio - (precio * descuento);
                totalFinal = totalFinal + precioFinalMetal;

                if (altura > muebleMetalMasAlto || totalMueblesMetal == 1) {
                    muebleMetalMasAlto = altura;
                    nombreMuebleMasAlto = nombre;
                }

                if (peso < muebleMasLiviano || totalMuebles == 1) {
                    muebleMasLiviano = peso;
                    nombreMuebleMasLiviano = nombre;
                }
                totalMueblesMetal++;
                break;

            case 'vidrio':
                let precioFinalVidrio;

                precioFinalVidrio = precio - (precio * descuento);
                totalFinal = totalFinal + precioFinalVidrio;

                if (peso < muebleMasLiviano || totalMuebles == 1) {
                    muebleMasLiviano = peso;
                    nombreMuebleMasLiviano = nombre;
                }
                totalMueblesVidrio++;
                break;
        }

        totalBruto = totalBruto + precio;
        respuesta = confirm('¿Desea continuar?');
    }

    promedioPorVenta = totalFinal / totalMuebles;
    centesimo = totalMuebles / 100;
    porcentajeMadera = totalMueblesMadera / centesimo;
    porcentajeMetal = totalMueblesMetal / centesimo;
    porcentajeVidrio = totalMueblesVidrio / centesimo;

    document.write('A-> El precio promedio por mueble vendido es de: $' + promedioPorVenta.toFixed(2) + '<br>');
    document.write('B-> La cantidad total de muebles de madera vendidos es: ' + totalMueblesMadera + '<br>');

    if (totalMueblesMetal > 0) {
        document.write('C-> El mueble de metal mas alto es: ' + nombreMuebleMasAlto + ' que mide ' + muebleMetalMasAlto.toFixed(2) + '<br>');
    } else {
        document.write('C-> No es posible mostrar el mueble de metal mas alto porque no se ingreso ninguno' + '<br>');
    }

    document.write('D-> El mueble mas liviano es: ' + nombreMuebleMasLiviano + ' con un peso de ' + muebleMasLiviano + '<br>');
    document.write('E-> El ' + porcentajeMadera.toFixed(2) + '%  de muebles vendidos fue de MADERA, el ' + porcentajeMetal.toFixed(2) + '% fue de METAL y el ' + porcentajeVidrio.toFixed(2) + '% de VIDRIO' + '<br>');
    document.write('F-> El monto total bruto recaudado fue de: $' + totalBruto.toFixed(2) + '<br>');

    if (totalMueblesMadera > 0) {
        document.write('G-> El monto final recaudado por la venta de muebles de madera despues de impuestos y descuentos es de: $' + totalRecaudadoMadera.toFixed(2));
    } else {
        document.write('G-> No se vendio ningun mueble de madera, por lo tanto la recaudación para este material fue de $0');
    }
}
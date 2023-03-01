/******************************************************************************
Nombre: Lenin Quintero
Divicion: D 
Tutor: Renato

Ejercicio 2

Una casa de computación debe realizar el ingreso de los datos de los productos que tiene a la venta, de acuerdo al 
siguiente detalle:
PC (“DESKTOP” o “LAPTOP”)
Marca (“DELL”, “HP”, “ACER”)
Modelo
Precio (No puede ser menor a 100.000 pesos)
Informar:
a) El precio de la PC más barata.
b) La cantidad total de PC marca HP del tipo DESKTOP.
c) El promedio del precio de las PC marca ACER.
d) Porcentaje de computadoras de cada marca.
e) De las computadoras DESKTOP de marca DELL, el modelo de la mas cara.
Pedir datos por prompt y mostrar la información por document.write.


*******************************************************************************/

function mostrar() {
    let tipoPc;
    let marca;
    let modelo;
    let precio;
    let respuesta;

    let pcMasBarata;
    let modeloMasCara;
    let desktopDellMasCara;
    let contadorHpDesktop;
    let contadorDellDesktop;
    let contadorGeneral;
    let contadorAcer;
    let contadorHP;
    let contadorDell;
    let acumuladorPrecioAcer;
    let promedioPrecioAcer;

    let centecimaTotalPc;
    let porcentajeHp;
    let porcentajeDell;
    let porcentajeAcer;

    contadorDellDesktop = 0;
    contadorHpDesktop = 0;
    contadorAcer = 0;
    contadorDell = 0;
    contadorHP = 0;
    acumuladorPrecioAcer = 0;
    contadorGeneral = 0;

    respuesta = true;

    while (respuesta) {
        tipoPc = prompt('Ingrese el tipo de PC, las opciones son: \n-DESKTOP \n-LAPTOP');
        while (tipoPc != 'DESKTOP' && tipoPc != 'LAPTOP') {
            tipoPc = prompt('Tipo de PC INVALIDO, las opciones son: \n-DESKTOP \n-LAPTOP');
        }

        marca = prompt('Ingrese la marca, las opciones son: \n-DELL \n-HP \n-ACER');
        while (marca != 'DELL' && marca != 'HP' && marca != 'ACER') {
            marca = prompt('Marca de PC INVALIDA, las opciones son: \n-DELL \n-HP \n-ACER');
        }

        modelo = prompt('Ingrese el modelo:');
        while (modelo == '') {
            modelo = prompt('El modelo NO puede estar vacio, ingrese el modelo: ');
        }

        precio = prompt('Ingrese el precio:');
        precio = parseFloat(precio);
        while (precio < 100000) {
            precio = prompt('El precio NO puede ser menor a $100000, ingrese el precio:');
            precio = parseFloat(precio);
        }

        contadorGeneral++;

        switch (marca) {
            case 'ACER':
                contadorAcer++;
                acumuladorPrecioAcer = acumuladorPrecioAcer + precio;

                break;

            case 'DELL':
                contadorDell++;
                if (tipoPc == 'DESKTOP') {
                    contadorDellDesktop++;
                    if (precio > desktopDellMasCara || contadorDellDesktop == 1) {
                        modeloMasCara = modelo;
                    }
                }
                break;

            case 'HP':
                contadorHP++;

                if (tipoPc == 'DESKTOP') {
                    contadorHpDesktop++;
                }
                break;
        }

        if (precio < pcMasBarata || contadorGeneral == 1) {
            pcMasBarata = precio;
        }
        respuesta = confirm('¿Desea continuar?');
    }

    centecimaTotalPc = contadorGeneral / 100;

    porcentajeAcer = contadorAcer / centecimaTotalPc;
    porcentajeDell = contadorDell / centecimaTotalPc;
    porcentajeHp = contadorHP / centecimaTotalPc;

    document.write('A-> El precio de la PC más barata es: ' + pcMasBarata + '<br>');
    document.write('B-> La cantidad total de PC marca HP del tipo DESKTOP es: ' + contadorHpDesktop + '<br>');

    if (contadorAcer > 0) {
        promedioPrecioAcer = acumuladorPrecioAcer / contadorAcer;
        document.write('C-> El promedio del precio de las PC marca ACER es: ' + promedioPrecioAcer + '<br>');
    } else {
        document.write('C-> No se pudo calcular el promedio del precio de las PC marca ACER porque no se ingreso ninguna' + '<br>');
    }

    document.write('D-> Porcentaje de computadoras de cada marca: \n-DELL: ' + porcentajeDell + '%' + '\n-HP: ' + porcentajeHp + '%' + '\n-ACER: ' + porcentajeAcer + '%' + '<br>');

    if (modeloMasCara != null) {
        document.write('E-> De las computadoras DESKTOP de marca DELL, el modelo de la mas cara es: ' + modeloMasCara);
    } else {
        document.write('E-> No se puede determinar cual es el modelo de computadoras DESKTOP de marca DELL mas cara porque no se vendio ninguna.');
    }

}
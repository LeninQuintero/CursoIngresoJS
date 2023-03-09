// Lenin Quintero, div D
/*
Una aerolinea nos contrata con el fin de crear una aplicacion para administrar la venta de pasajes.
Se sabe que por el momento solamente disponen de 3 vendedores de paquetes de viajes (Pepepeposo, Quinoto y Huesos). 
Cualquiera de los unicos 3 vendedores disponibles de la empresa es capaz de vender un paquete de viaje el cual
puede tener desde 1 pasaje hasta 5 pasajes para todo un grupo familiar. 
Para vender un paquete de viaje se necesitan los siguientes datos.

Nombre del vendedor (validar los nombres ya mencionados).
Nombre del comprador (validar que no sea un numero).
Cantidad de pasajes (validar teniendo en cuenta lo mencionado anteriormente).
Precio total del paquete de viaje (validar el rango posible de precio).
Tipo de asiento (validar clase economica, clase ejecutiva, primera clase).
Nota: los paquetes de viajes en clase economica no tienen ningun descuento ni aumento, los de clase ejecutiva tienen un 20% de aumento
y los de primera clase tienen un 35% de aumento sobre el precio base del paquete.
Tipo de viaje (validar si el viaje es directo o con escala).
Tipo de destino (validar si es nacional o internacional).

La empresa tambien nos pide realizar los algoritmos necesarios para poder saber:

A) El total de pesos recaudados de cada vendedor.
B) El vendedor que mas recaudo y la cantidad de pesos recaudados por ese vendedor.
C) El porcentaje de paquetes de vuelos nacionales e internacionales vendidos.
D) Cual es la cantidad de paquetes de viaje vendidos que sean directos e internacionales.
E) Calcular el precio final del paquete de viaje teniendo en cuenta el tipo de asiento e informarlo antes de la proxima venta con un alert
F) El promedio de ventas de los paquetes de viajes con respecto al tipo de asiento seleccionado por el cliente.

NOTA: el precio base de cada pasaje es $10000
*/

function ventasPasajes() {

    let nombreVendedor;
    let nombreComprador;
    let cantidadPasajes;

    let tipoAsiento;
    let tipoDeViaje;
    let tipoDestino;

    let recaudacionPepepeposo;
    let recaudacionQuinoto;
    let recaudacionHuesos;

    let recaudacionEconomica;
    let recaudacionEjecutiva;
    let recaudacionPrimeraClase;

    let mejorVendedor;
    let mejorRecaudacion;

    let contadorGeneralVuelos;
    let contadorEconomico;
    let contadorEjecutivo;
    let contadorPrimeraClase;

    let contPaquetesDirectosInt;
    let contadorVuelosNacionales;
    let contadorVuelosInternacionales;

    let porcentajeNacionales;
    let porcentajeInternacionales;

    let promedioEconomico;
    let promedioEjecutivo;
    let promedioPrimeraClase;
    let centecimaTotalVuelos;

    let respuesta;

    contPaquetesDirectosInt = 0;
    contadorVuelosNacionales = 0;
    contadorVuelosInternacionales = 0;

    contadorEconomico = 0;
    contadorEjecutivo = 0;
    contadorPrimeraClase = 0;

    recaudacionPepepeposo = 0;
    recaudacionQuinoto = 0;
    recaudacionHuesos = 0;
    recaudacionEconomica = 0;
    recaudacionEjecutiva = 0;
    recaudacionPrimeraClase = 0;

    const precioPasaje = 10000;
    respuesta = true;

    while (respuesta) {
        let precioBrutoDelPaquete;
        let precioFinalDelPaquete;

        nombreVendedor = prompt('Elija uno de los siguientes vendedores: \n\n-Pepepeposo  \n-Quinoto \n-Huesos');
        while (nombreVendedor != 'Pepepeposo' && nombreVendedor != 'Quinoto' && nombreVendedor != 'Huesos') {
            nombreVendedor = prompt('Vendedor INEXISTENTE. Los vendedores disponibles son: \n\n-Pepepeposo  \n-Quinoto \n-Huesos');
        }

        nombreComprador = prompt('Ingrese el nombre del comprador:');
        while (!isNaN(nombreComprador)) {
            nombreComprador = prompt('El nombre del comprador NO puede ser un numero. Ingrese de nuevo el nombre del comprador:');
        }

        cantidadPasajes = prompt('Ingrese la cantidad de pasajes:');
        cantidadPasajes = parseInt(cantidadPasajes);
        while (cantidadPasajes < 1 || cantidadPasajes > 5) {
            cantidadPasajes = prompt('Un paquete debe estar entre 1 y 5 pasajes. Ingrese de nuevo la cantidad de pasajes:');
            cantidadPasajes = parseInt(cantidadPasajes);
        }

        tipoDestino = prompt('Elija un tipo de destino: \n\n-Nacional  \n-Internacional');
        while (tipoDestino != 'Nacional' && tipoDestino != 'Internacional') {
            tipoDestino = prompt('Tipo INEXISTENTE. Las opciones son:  \n\n-Nacional  \n-Internacional');
        }

        tipoAsiento = prompt('Elija una clase para sus asientos: \n\n-Economica  \n-Ejecutiva \n-Primera clase');
        while (tipoAsiento != 'Economica' && tipoAsiento != 'Ejecutiva' && tipoAsiento != 'Primera clase') {
            tipoAsiento = prompt('Clase INEXISTENTE. Las opciones de clase para sus asientos son: \n\n-Economica \n-Ejecutiva \n-Primera clase');
        }

        tipoDeViaje = prompt('Elija un tipo de vuelo: \n\n-Directo  \n-Con escalas');
        while (tipoDeViaje != 'Directo' && tipoDeViaje != 'Con escalas') {
            tipoDeViaje = prompt('Tipo de vuelo INEXISTENTE. Las opciones son: \n\n-Directo  \n-Con escalas');
        }

        if (tipoAsiento == 'Economica') {
            contadorEconomico++;
            precioBrutoDelPaquete = cantidadPasajes * precioPasaje;
            precioFinalDelPaquete = precioBrutoDelPaquete;
            recaudacionEconomica = recaudacionEconomica + precioFinalDelPaquete;
        } else {
            if (tipoAsiento == 'Ejecutiva') {
                contadorEjecutivo++;
                precioBrutoDelPaquete = cantidadPasajes * precioPasaje;
                precioFinalDelPaquete = precioBrutoDelPaquete * 1.2;
                recaudacionEjecutiva = recaudacionEjecutiva + precioFinalDelPaquete;
            } else {
                if (tipoAsiento == 'Primera clase') {
                    contadorPrimeraClase++;
                    precioBrutoDelPaquete = cantidadPasajes * precioPasaje;
                    precioFinalDelPaquete = precioBrutoDelPaquete * 1.35;
                    recaudacionPrimeraClase = recaudacionPrimeraClase + precioFinalDelPaquete;
                }
            }
        }

        switch (nombreVendedor) {
            case 'Pepepeposo':
                recaudacionPepepeposo = recaudacionPepepeposo + precioFinalDelPaquete;
                break;

            case 'Quinoto':
                recaudacionQuinoto = recaudacionQuinoto + precioFinalDelPaquete;
                break;

            case 'Huesos':
                recaudacionHuesos = recaudacionHuesos + precioFinalDelPaquete;
                break;
        }

        switch (tipoDestino) {
            case 'Internacional':
                contadorVuelosInternacionales++;
                if (tipoDeViaje == 'Directo') {
                    contPaquetesDirectosInt++;
                }
                break;
            case 'Nacional':
                contadorVuelosInternacionales++;
                break;
        }

        alert('El precio total del paquete es: ' + precioFinalDelPaquete);
        respuesta = confirm('¿Desea vender otro paquete?');
    }

    if (recaudacionPepepeposo > recaudacionQuinoto && recaudacionPepepeposo > recaudacionHuesos) {
        mejorVendedor = 'Pepepeposo';
        mejorRecaudacion = recaudacionPepepeposo;
    } else {
        if (recaudacionQuinoto > recaudacionHuesos) {
            mejorVendedor = 'Quinoto';
            mejorRecaudacion = recaudacionQuinoto;
        } else {
            mejorVendedor = 'Huesos';
            mejorRecaudacion = recaudacionHuesos;
        }
    }

    contadorGeneralVuelos = contadorVuelosNacionales + contadorVuelosInternacionales;
    centecimaTotalVuelos = contadorGeneralVuelos / 100;

    porcentajeNacionales = contadorVuelosNacionales / centecimaTotalVuelos;
    porcentajeInternacionales = contadorVuelosInternacionales / centecimaTotalVuelos;

    promedioEconomico = recaudacionEconomica / contadorEconomico;
    promedioEjecutivo = recaudacionEjecutiva / contadorEjecutivo;
    promedioPrimeraClase = recaudacionPrimeraClase / contadorPrimeraClase;

    document.write('A-> El total de pesos recaudados por vendedor: '
        + '- Pepepeposo recaudo $' + recaudacionPepepeposo.toFixed(2)
        + '- Quinoto recaudo $' + recaudacionQuinoto.toFixed(2)
        + '- Huesos recaudo $' + recaudacionHuesos.toFixed(2) + '');

    document.write('B-> El vendedor que mas recaudo es: ' + mejorVendedor + ' y total recaudado por el fue de $' + mejorRecaudacion.toFixed(2) + '');
    document.write('C-> La venta de vuelos Nacionales representa un ' + porcentajeNacionales.toFixed(2) + '% y los vuelos Internaconales un ' + porcentajeInternacionales.toFixed(2) + '%' + '')
    document.write('D-> Se vendieron ' + contPaquetesDirectosInt + ' paquetes directos e internacionales' + '');

    document.write('F-> El promedio de ventas de los paquetes de viajes con respecto al tipo de asiento seleccionado por el cliente es: '
        + '- La clase Economica obtuvo un promedio de: ' + promedioEconomico + ' por venta.'
        + '- La clase Ejecutiva obtuvo un promedio de: ' + promedioEjecutivo + ' por venta.'
        + '- La primera clase obtuvo un promedio de: ' + promedioPrimeraClase + ' por venta.');
}
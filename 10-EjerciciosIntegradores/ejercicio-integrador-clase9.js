/*
Lenin Quintero, Div 'D', grupo 2

Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos).
10-Porcentaje de números positivos y negativos.
11-De los positivos el más grande.
12-De los negativos el más chico.
*/

function mostrar() {
    //declarar contadores y variables 
    let respuesta;
    let numeroIngresado;
    let sumaNegativos;
    let sumaPositivos;
    let cantidadNegativos;
    let cantidadPositivos;
    let cantidadCeros;
    let cantidadPares;
    let promedioPositivos;
    let promedioNegativos;
    let diferencia;
    let porcentajePositivos;
    let porcentajeNegativos;
    let porcentajeCeros;
    let maximoPositivo;
    let minimoNegativo;
    let contadorNumeros;
    let indicePorcentaje;

    //inicializacion de variables
    sumaNegativos = 0;
    sumaPositivos = 0;
    cantidadNegativos = 0;
    cantidadPositivos = 0;
    cantidadCeros = 0;
    cantidadPares = 0;
    respuesta = true;

    while (respuesta) {
        numeroIngresado = prompt("Ingrese un numero: ");
        numeroIngresado = parseInt(numeroIngresado);

        //validacion numero par
        if (numeroIngresado % 2 == 0) {
            cantidadPares++; //contador nuemeros pares              
        }

        //numeros positivos
        if (numeroIngresado > 0) {
            sumaPositivos = sumaPositivos + numeroIngresado;
            cantidadPositivos++; //contador de positivos

            //validar si es maximo
            if (numeroIngresado > maximoPositivo || cantidadPositivos == 1) {
                maximoPositivo = numeroIngresado;
            }
            
        } else {
            //numeros negativos
            if (numeroIngresado < 0) {
                sumaNegativos = sumaNegativos + numeroIngresado;
                cantidadNegativos++; //contador de negativos

                //validar si es minimo
                if (numeroIngresado < minimoNegativo || cantidadNegativos == 1) {
                    minimoNegativo = numeroIngresado;
                }

            } else {
                
                if(numeroIngresado == 0){
                cantidadCeros++; //contador de ceros
                }
            }
        }
        respuesta = confirm("¿Desea continuar?");
    }//fin del while

    //calculos de promedio
    promedioPositivos = sumaPositivos / cantidadPositivos;
    promedioNegativos = sumaNegativos / cantidadNegativos;

    //calculo de diferencia
    diferencia = sumaPositivos + sumaNegativos; //suma algebraica

    //total de numeros ingresados
    contadorNumeros = cantidadPositivos + cantidadNegativos + cantidadCeros;

    //calculos de porcentajes
    indicePorcentaje = contadorNumeros / 100;
    porcentajePositivos = cantidadPositivos / indicePorcentaje;
    porcentajeNegativos = cantidadNegativos / indicePorcentaje;
    porcentajeCeros = cantidadCeros / indicePorcentaje;

    //presentacion de datos
    document.write("1-> La suma de negativos es: " + sumaNegativos + "");
    document.write("2-> La suma de positivos es: " + sumaPositivos + "");
    document.write("3-> La cantidad de positivos es: " + cantidadPositivos + "");
    document.write("4-> La cantidad de negativos es: " + cantidadNegativos + "");
    document.write("5-> La cantidad de ceros es: " + cantidadCeros + "");
    document.write("6-> La cantidad de numeros pares es: " + cantidadPares + "");

    if (cantidadPositivos != 0) {
        promedioNegativos = sumaNegativos / cantidadNegativos;
        document.write("7-> El promedio de numeros positivos es: " + promedioPositivos.toFixed(2) + "");
    } else {
        document.write("7-> No se pudo mostrar el promedio de los numeros positivos porque no se ingreso ninguno" + "");
    }
    
    if (cantidadNegativos != 0) {
        promedioNegativos = sumaNegativos / cantidadNegativos;
        document.write("8-> El promedio de numeros negativos es: " + promedioNegativos.toFixed(2) + "");
    } else {
        document.write("8-> No se pudo mostrar el promedio de los numeros negativos porque no se ingreso ninguno" + "");
    }

    document.write("9-> La diferencia entre numeros positivos y negativos es: " + diferencia + "");
    document.write("10-> El " + porcentajePositivos.toFixed(1) + "% de numeros ingresados son POSITIVOS, el " + porcentajeNegativos.toFixed(1) + "% son NEGATIVOS y el " + porcentajeCeros.toFixed(1) + "% son CEROS ");
    
    if (cantidadPositivos != 0) {
        document.write("11-> El número máximo de los positivos es: " + maximoPositivo + "");
    } else {
        document.write("11-> No se pudo mostrar el numero máximo positivo porque no se ingreso ninguno" + "");
    }
   
    if (cantidadNegativos != 0) {
        document.write("12-> El número mínimo de los negativos es: " + minimoNegativo);
    } else {
        document.write("12-> No se pudo mostrar el numero mínimo negativo porque no se ingreso ninguno");
    }
}//FIN DE LA FUNCIÓN
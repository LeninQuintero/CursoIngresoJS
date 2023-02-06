/* 
Lenin Quintero, Div 'D', grupo 2

Ingresar 3 edades por prompt. Determinar si la primera es mayor que la segunda y 
menor que la tercera o la tercera es menor que la segunda. 
Mostrar por alert si se cumple o no. */

function compararEdades() 
{
    let edadUno;
    let edadDos;
    let edadTres;

    edadUno = prompt('Ingrese la primera edad: ');
    edadUno = parseInt(edadUno);

    edadDos = prompt('Ingrese la segunda edad: ');
    edadDos = parseInt(edadDos);

    edadTres = prompt('Ingrese la tercera edad: ');
    edadtres = parseInt(edadTres);

    if( (edadUno > edadDos && edadUno < edadTres) || edadTres < edadDos) {
        alert('¡Se cumplen las condiciones!');
    } else {
        alert('¡No se cumplen las condiciones!');
    }

}
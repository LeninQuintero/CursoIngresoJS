/*
Lenin Quintero, Div 'D', grupo 2

2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let alambre;
    let largo;
    let ancho;
    let perimetro;

    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;
    largo = parseFloat(largo);
    ancho = parseFloat(ancho);
    perimetro = (largo + ancho) * 2;

    alambre = perimetro * 3;

    alert("La cantidad de alambre que se deba comprar es: " + alambre.toFixed(2));
}
function Circulo () 
{
    let alambre;
    let radio;
    let diametro;
    let perimetro;

    radio = document.getElementById("txtIdRadio").value;
    radio = parseFloat(radio);

    diametro = radio * 2;
    perimetro = diametro * Math.PI;
    alambre = perimetro * 3;

    alert("La cantidad de alambre que se deba comprar es: " + alambre.toFixed(2));
}
function Materiales () 
{
    let largo;
    let ancho;
    let area;
    let cal;
    let cemento;

    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;
    largo = parseFloat(largo);
    ancho = parseFloat(ancho);

    area = largo * ancho;

    cal = area * 3;
    cemento = area * 2;

    alert("Se necesitan " + cemento.toFixed(2) + " bolsas de cemento y " + 
    cal.toFixed(2) + " bolsas de cal.");
}
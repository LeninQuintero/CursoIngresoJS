/*
Lenin Quintero, Div 'D', grupo 2

1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno;
    var precioDos;
    var precioTres;
    var suma;

    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioUno = parseFloat(precioUno);

    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioDos = parseFloat(precioDos);

    precioTres = document.getElementById("txtIdPrecioTres").value;
    precioTres = parseFloat(precioTres);

    suma = precioUno + precioDos + precioTres;

    alert("La suma es: " + suma );

}

//B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.

function Promedio () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var promedio;

    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioUno = parseFloat(precioUno);

    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioDos = parseFloat(precioDos);

    precioTres = document.getElementById("txtIdPrecioTres").value;
    precioTres = parseFloat(precioTres);

    promedio = (precioUno + precioDos + precioTres) / 3;

    alert("El promedio es: " + promedio );

}
//ingresar tres precios de productos  y mostrar precio final (más IVA 21%
function PrecioFinal () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var precioFinal;
    var suma;

    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioUno = parseFloat(precioUno);
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioDos = parseFloat(precioDos);
    precioTres = document.getElementById("txtIdPrecioTres").value;
    precioTres = parseFloat(precioTres);
  
    suma = precioUno + precioDos + precioTres;
    precioFinal = suma * 1.21;
    alert("El precio es: " + precioFinal );
}
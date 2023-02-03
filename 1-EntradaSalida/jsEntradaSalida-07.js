/*
Lenin Quintero, Div 'D', grupo 2

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

let numeroUno;
let numeroDos;
let suma;
let resta;
let multiplicacion;
let division;

function sumar(){

	numeroUno = document.getElementById('txtIdNumeroUno').value;
	numeroDos = document.getElementById('txtIdNumeroDos').value;
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	suma = numeroUno + numeroDos;

	alert('La suma es ' + suma);	
}

function restar()
{
	numeroUno = document.getElementById('txtIdNumeroUno').value;
	numeroDos = document.getElementById('txtIdNumeroDos').value;
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	resta = numeroUno - numeroDos;

	alert('La resta es ' + resta);
}

function multiplicar()
{ 
	numeroUno = document.getElementById('txtIdNumeroUno').value;
	numeroDos = document.getElementById('txtIdNumeroDos').value;
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	
	multiplicacion = numeroUno * numeroDos;

	alert('La multiplicación es ' +  multiplicacion);	
}

function dividir()
{
	numeroUno = document.getElementById('txtIdNumeroUno').value;
	numeroDos = document.getElementById('txtIdNumeroDos').value;
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	
	division = numeroUno / numeroDos;

	alert('La división es ' +  division);
}
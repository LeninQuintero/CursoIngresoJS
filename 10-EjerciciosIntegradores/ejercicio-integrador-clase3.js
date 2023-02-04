/*
Lenin Quintero, Div 'D', grupo 2

3.	Para el departamento de Pinturas:

A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje 
concatenado (ej.: " 32 Fahrenheit son 0 centígrados").

B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  
centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let temperatura;
    let centigrados;
    temperatura = document.getElementById('txtIdTemperatura').value;
    temperatura = parseFloat(temperatura);
    
    centigrados = (temperatura - 32) * (5/9);

    alert(temperatura + ' grados fahrenheit equivalean a ' + centigrados.toFixed(3) + ' grados centígrados.');
}

function CentigradosFahrenheit () 
{
    let temperatura;
    let fahrenheit;
    temperatura = document.getElementById('txtIdTemperatura').value;
    temperatura = parseFloat(temperatura);

    fahrenheit = temperatura * 33.8;

    alert(temperatura + ' grados centígrados equivalean a ' + fahrenheit.toFixed(3) + ' grados fahrenheit.');
}
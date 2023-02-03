/*
Lenin Quintero, Div 'D', grupo 2

Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento() {

let sueldo;
let aumento;
let sueldoAumentado;

sueldo = document.getElementById('txtIdSueldo').value;
sueldo = parseFloat(sueldo);
aumento = 10;

sueldoAumentado = (sueldo / 100) * aumento + sueldo;

document.getElementById('txtIdResultado').value = sueldoAumentado;
}

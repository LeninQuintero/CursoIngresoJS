/* 
Lenin Quintero, Div 'D', grupo 2

Tenemos que crear un programa que verifique si el usuario puede subirse a una montaña rusa, 
para esto el usuario deberá ingresar los siguientes datos por prompt: Altura y edad. 
Si el usuario mide menos de 120 cm debemos indicar que no puede subirse a la montaña rusa, 
en cambio sí tiene la altura correspondiente debemos preguntar su edad y mostrarle al 
usuario por alert el monto a pagar.
El monto a pagar:
200$: para menores de edad y mayores de 80
400$: Mayores de edad, menores o iguales a 80

A tener en cuenta: Si preguntamos la altura del usuario y no puede subir no deberíamos preguntarle la edad.
*/

function puedeSubir() {

    let altura;
    altura = prompt('Ingrese su altura: ');
    altura = parseInt(altura);

    if (altura > 119) {

        let edad;
        edad = prompt('Ingrese su edad: ');
        edad = parseInt(edad);

        if (edad < 18 || edad > 80) {
            alert('El monto a pagar es $200');
        }
        else {
            alert('El monto a pagar es $400');
        }
    }
    else {
        alert('No puede subir a la montaña rusa.');
    }
}
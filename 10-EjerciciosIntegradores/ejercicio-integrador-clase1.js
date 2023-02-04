// Lenin Quintero, Div 'D', grupo 2

/* 
Se debe ingresar por prompt: razón social de la empresa y nombre del titular.
El dni del titular y la fecha de inicio de actividades se ingresarán por id. 
Mostrar por alert todos los datos ingresados y el cuit de la empresa, sabiendo 
que el mismo está conformado por un código numérico según el tipo de persona 
(30 en el caso de empresas), un guión, el dni del titular, otro guión y un dígito verificador
 (será un número aleatorio entre 0 y 9).
Por ejemplo: 30-22666548-7
*/

function mostrar() {

    let nombreTitular = prompt('Nombre del titular:')
    let dni = document.getElementById('dniTitular').value;
    let fechaDeInicio = document.getElementById('fechaInicio').value;
    let razonSocial = prompt('Razon Social de la Empresa:')
    let cuitEmpresa = '30-' + dni + '-' + Math.floor(Math.random() * 10);


    alert(
        'Razon social de la empresa: ' + razonSocial +
        '\nCUIT: ' + cuitEmpresa + ', ' +
        '\nNombre del titular: ' + nombreTitular +
        '\nDNI: ' + dni +
        '\nfecha de incio: ' + fechaDeInicio + '.'
    )

}
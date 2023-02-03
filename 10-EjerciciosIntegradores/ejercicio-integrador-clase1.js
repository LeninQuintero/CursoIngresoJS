// Lenin Quintero, Div 'D', grupo 2

function mostrar() {

    let nombreTitular = prompt('Nombre del titular:')
    let dni = document.getElementById('dniTitular').value;
    let fechaDeInicio = document.getElementById('fechaInicio').value;
    let razonSocial = prompt('Razon Social de la Empresa:')
    let cuitEmpresa = '30-' + dni + '-' + Math.floor(Math.random() * (9 - 1));


    alert(
        'Razon social de la empresa: ' + razonSocial +
        '\nCUIT: ' + cuitEmpresa + ', ' +
        '\nNombre del titular: ' + nombreTitular +
        '\nDNI: ' + dni +
        '\nfecha de incio: ' + fechaDeInicio + '.'
    )

}
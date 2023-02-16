/*
Lenin Quintero, Div 'D', grupo 2

4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
 */

 function CalcularPrecio() {
    let cantidadLamp;
    let marcaLamp;
    let precioLamp;
    let descuento;
    let importeBruto;
    let importeIIBB;
    let valorDescuento;
    let importeFinal;

    cantidadLamp = document.getElementById('txtIdCantidad').value;
    cantidadLamp = parseInt(cantidadLamp);

    marcaLamp = document.getElementById('Marca').value;

    precioLamp = 35;

    switch (cantidadLamp) {

        case 1:
        case 2:
            descuento = 0;
            break;

        case 3:
            switch (marcaLamp) {
                case 'ArgentinaLuz':
                    descuento = 15;
                    break;
                case 'FelipeLamparas':
                    descuento = 10;
                    break;
                default:
                    descuento = 5;
            }
            break;

        case 4:
            switch (marcaLamp) {
                case 'ArgentinaLuz':
                case 'FelipeLamparas':
                    descuento = 25;
                    break;
                default:
                    descuento = 20;
            }
            break;

        case 5:
            switch (marcaLamp) {
                case 'ArgentinaLuz':
                    descuento = 40;
                    break;
                default:
                    descuento = 30;
            }
            break;

        default:
            descuento = 50;
    }

    importeBruto = cantidadLamp * precioLamp;
    valorDescuento = (importeBruto / 100) * descuento;
    importeFinal = importeBruto - valorDescuento;
    
    if (importeFinal > 120) {
        importeIIBB = (importeFinal / 100) * 10;
        document.getElementById('txtIdprecioDescuento').value = (importeFinal + importeIIBB).toFixed(2);
        alert('Usted pago ' + importeIIBB.toFixed(2) + ' de IIBB.');
    }else {
        document.getElementById('txtIdprecioDescuento').value = importeFinal.toFixed(2);
    }
}
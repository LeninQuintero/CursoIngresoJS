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
    descuento = 0;

// Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
    precioLamp = 35;

    // A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
    if (cantidadLamp > 5) {
        descuento = 50;
    }
    else {
        // B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 %...
        if (cantidadLamp == 5) {
            if (marcaLamp == 'ArgentinaLuz') {
                descuento = 40;
            }
            // ... y si es de otra marca el descuento es del 30%.
            else {
                descuento = 30;
            }
        } 
        else {
            // C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 %...
            if (cantidadLamp == 4) {
                if (marcaLamp == 'ArgentinaLuz' || marcaLamp == 'FelipeLamparas') {
                descuento = 25;
                }   
                //... y si es de otra marca el descuento es del 20%. 
                else {
                    descuento = 20;
                }
            }
            else {
                // D.	Si compra 3  lamparitas bajo consumo...
                if (cantidadLamp == 3) {
                    // marca "ArgentinaLuz"  el descuento es del 15%,
                    if (marcaLamp == 'ArgentinaLuz') {
                        descuento = 15;
                    }
                    else {
                        // “FelipeLamparas” se hace un descuento del 10 %
                        if (marcaLamp == 'FelipeLamparas') {
                            descuento = 10;
                        } 
                        else {
                            descuento = 5; // si es de otra marca un 5%.
                        }
                    }
                }
            }   
        }
    }

    importeBruto = cantidadLamp * precioLamp;
    valorDescuento = (importeBruto / 100) * descuento;
    importeFinal = importeBruto - valorDescuento;
    document.getElementById('txtIdprecioDescuento').value = importeFinal.toFixed(2);

    if (importeFinal > 120) {
        importeIIBB = (importeFinal / 100) * 10;
        document.getElementById('txtIdprecioDescuento').value = (importeFinal + importeIIBB).toFixed(2);
        alert('Usted pago ' + importeIIBB.toFixed(2) + ' de IIBB.');
    }
}
// 39 -"Un cliente de ""Gonzi-Expres"" desea agregar a su carrito de compras (no sabemos cuantos productos son).
// 	Para ello se ingresa:
// 	- Nombre del producto
// 	- Precio (EN USD)
// 	- Origen (EEUU, China, España)
// 	Por cada producto proveniente de CHINA se agregará al precio del mismo un 5%, debido al impuesto de productos Electronicos provenientes de ese pais.

// 	Si el importe final de todos los productos comprados supera los 50 usd tendrá que pagar un 50% de impuestos por la importación de los mismos.

// 	Por ejemplo ""Si gaste 45 usd en total sólo pago 45, pero si gaste 100 usd tengo que pagar 150""

// 	Como la compra es en dolares, al total de la misma se le deberá agregar el impuesto pais del 35%.

// 	A) Mostrar el total a pagar en pesos (1DOLAR oficial = $205)
// 	B) Cual es el total a pagar, pero solo de productos provenientes de EEUU.
// 	C) El nombre del producto mas caro, de origen Español.
// 	D) Cantidad de productos cuyo precio este entre USD 5 y USD 15 (incluyendo impuestos), provenientes de China o EEUU"


function mostrar(){
    let nombre;
    let precio;
    let origen;
    
    let impuestoChina;
    let importeFinal;
    
    
    let acumuladorTotalPagarUsd;
    let totalPagarPesos;
    let acumuladorEEUU;
    let productoMasCaroEspana;
    let precioMasCaroEspana;
    let banderaEspana;
    let contador5y15;
    
    
    acumuladorTotalPagarUsd =0;
    totalPagarPesos =0;
    acumuladorEEUU= 0;
    banderaEspana = true;
    contador5y15 = 0;
    
    let respuesta;
    
    respuesta = true;
    
        while(respuesta){
    
            nombre = prompt('Ingrese el nombre del producto: ');
    
            precio = prompt('Ingrese el precio del producto: ');
            precio = parseFloat(precio);
            while(precio <= 0 || isNaN(precio)){
                precio = prompt('Precio INVALIDO, Ingrese de nuevo el precio:');
                precio = parseFloat(precio);
            }
    
            origen = prompt('Ingrese el origen del producto, las opciones son \n-EEUU \n-China \n-España');
            while(origen != 'EEUU' && origen != 'China' && origen != 'España'){
                origen = prompt('Origen INVALIDO, las opciones son \n-EEUU \n-China \n-España');
            }
    
            switch (origen) {
                case 'China':
                    impuestoChina = precio * 1.05;
                    acumuladorTotalPagarUsd += impuestoChina;
                    if(impuestoChina >= 5 && impuestoChina <=15){
                        contador5y15++;
                    }
                    break;
                case 'EEUU':
                   acumuladorTotalPagarUsd += precio;
                   acumuladorEEUU += precio;
                   if(precio >= 5 && precio <=15){
                    contador5y15++;
                }
                  break;
    
                case 'España':
                    acumuladorTotalPagarUsd +=precio;
                    if(precio > precioMasCaroEspana || banderaEspana){
                        precioMasCaroEspana = precio;
                        productoMasCaroEspana = nombre;
                        banderaEspana = false;
                    }
                    break;
            }
    
            respuesta = confirm('Desea agregar un producto?');
        }
    
    
        if(acumuladorTotalPagarUsd > 50){
            importeFinal = acumuladorTotalPagarUsd * 1.5;
        } else {
            importeFinal = acumuladorTotalPagarUsd;
        }
    
        totalPagarPesos = (importeFinal * 205) * 1.35;
    
        document.write('A-> El total a pagar en pesos es: $' + totalPagarPesos.toFixed(2) + '<br>');
    
        if(acumuladorEEUU > 0){
        document.write('B-> El total a pagar de productos provenientes de EEUU son: ' + acumuladorEEUU.toFixed(2) + ' USD<br>');
        } else {
            document.write('B-> No se compraron productos provenientes de EEUU<br>');
        }
    
        if(!banderaEspana){
            document.write('C-> El producto mas caro de origen Espana es: ' + productoMasCaroEspana + ' con un precio de: $' + precioMasCaroEspana.toFixed(2) + '<br>');
        } else {
            document.write('C-> No se compraron productos de origen Espana<br>');
        }
        if(contador5y15 > 0){
            document.write('D-> La cantidad de productos cuyo precio esta entre USD 5 y USD 15 (incluyendo impuestos), provenientes de China o EEUU es: ' + contador5y15 + '<br>');
        } else {
            document.write('D-> No se compraron productos cuyo precio esta entre USD 5 y USD 15 (incluyendo impuestos), provenientes de China o EEUU<br>');
        } 

    }
    
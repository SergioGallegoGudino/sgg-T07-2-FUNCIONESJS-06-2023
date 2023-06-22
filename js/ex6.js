console.log("Ejercicio 6");

// 6. Crea una aplicación que nos cuente el número de cifras de un número entero positivo
// (hay que controlarlo) pedido por prompt. Crea un método que realice esta acción,
// pasando el número por parámetro devolverá el número de cifras.

let numeroContar = prompt("Ejercicio 6. Introduce un numero a contar sus cifras: ");

const contarCifras = (num) => {
    if(num % 1 == 0 && num >= 0){
        console.log(num.length);
    } else{
        console.log("Introduce un numero entero.");
    }
}

contarCifras(numeroContar);

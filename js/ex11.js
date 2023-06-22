console.log("Ejercicio 11");

// 11. Crea dos arrays de números con la dimensión pasada por teclado. Uno de ellos estará
// rellenado con números aleatorios y el otro apuntará al array anterior, reasigna los valores
// del segundo array con valores aleatorios. Después, crea un método que tenga como
// parámetros, los dos arrays y devuelva uno nuevo con la multiplicación de la posición 0
// del array1 con el del array2 y así sucesivamente. Por último, muestra el contenido de
// cada array.

let dimension = prompt("Ejercicio 11. Introduce el tamaño de la array");
let minRandom = prompt("Ejercicio 11. Introduce el rango mínimo: ");
let maxRandom = prompt("Ejercicio 11. Introduce el rango máximo:");

const creaRandom = (dimension, min, max) => {

    let array = [];
    while(array.length != dimension){
        let valor = Math.round(Math.random() * (max - min) + min);
        array.push(valor);
    }

    return array;

}

const multiplicarArray = (array1, array2) => {

    let array = [];

    for (let i = 0; i < array1.length; i++) {

        let total = array1[i] * array2[i];

        array.push(total);
    }

    return array;
}

let array1 = creaRandom(dimension, minRandom, maxRandom);

let array2 = [...array1];

console.log("Array 1 reasignada: " + array2);

array2 = creaRandom(dimension, minRandom, maxRandom);

let arrayTotal = multiplicarArray(array1, array2);

console.log("Array 1:" + array1);
console.log("Array 2 random:" + array2);
console.log("Multiplicacion: " + arrayTotal);

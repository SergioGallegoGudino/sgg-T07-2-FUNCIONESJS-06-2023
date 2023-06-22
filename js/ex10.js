console.log("Ejercicio 10");

// 10. Crea un array de números de un tamaño pasado por prompt, el array contendrá números
// aleatorios primos entre los números deseados, por último, nos indica cuál es el mayor
// de todos. Haz un método para comprobar que el número aleatorio es primo, puedes
// hacer todos los métodos que necesites.

let cantidadArray = prompt("Ejercicio 10. Introduce el tamaño de la array");
let randomMin = prompt("Ejercicio 10. Introduce el rango mínimo: ");
let randomMax = prompt("Ejercicio 10. Introduce el rango máximo:");


const creaArray = (cantidadArray, min, max) => {

    const comprobarPrimo = (num) => {
        for(let i = 2; i < num; i++){
            if(num % i == 0){
                return false;
            }
        }
        return true;
    }

    let array = []
    let valorMax = 0;

    while(array.length != cantidadArray){
        let valor = Math.round(Math.random() * (max - min) + min);
        if(comprobarPrimo(valor)){
            array.push(valor);
            if(valor > valorMax){
                valorMax = valor;
            }
        }
    }

    console.log(array);

    console.log("El valor mas alto de la array es " + valorMax);

}

creaArray(cantidadArray, randomMin, randomMax);
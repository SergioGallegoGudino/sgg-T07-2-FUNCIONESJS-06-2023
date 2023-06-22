console.log("Ejercicio 9");

// 9. Crea un array de números donde le indicamos por prompt el tamaño del array,
// rellenaremos el array con números aleatorios entre 0 y 9. Al final muestra por consola el
// valor de cada posición y la suma de todos los valores. Tareas a realizar: Haz un método
// para rellenar el array(que tenga como parámetros los números entre los que tenga que
// generar) y otro para mostrar el contenido y la suma del array.

let tamanyo = prompt("Ejercicio 9.Introduce el tamaño de la array: ");

const arrayRandom = (cantidad) =>{

    let array = [];

    for (let i = 0; i < cantidad; i++) {
        array.push(Math.round(Math.random() * (9 - 0) + 0));
    }

    return array;

}

const sumaArray = (array) => {

    let suma = 0;

    for (let i = 0; i < array.length; i++) {
        console.log(`Indice ${i} - Valor ${array[i]}`);
        suma = suma + array[i];
    }

    console.log(suma);

}

let arrayTamanyo = arrayRandom(tamanyo);

sumaArray(arrayTamanyo);
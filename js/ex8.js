console.log("Ejercicio 8");

// 8. Crea un array de 10 posiciones de números con valores pedidos por prompt. Muestra
// por consola el índice y el valor al que corresponde. Haz dos métodos, uno para rellenar
// valores y otro para mostrar

let arrayValores = [];

const rellenar = (array) => {
    for (let i = 0; i < 10; i++) {
        let valor = prompt(`Ejercicio 8. Introduce un valor para la posicion ${i} de la array: `);
        array.push(valor);
    }
}

const mostrar = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(`Índice ${i} Valor ${array[i]}`);
    }
}

rellenar(arrayValores);

mostrar(arrayValores);
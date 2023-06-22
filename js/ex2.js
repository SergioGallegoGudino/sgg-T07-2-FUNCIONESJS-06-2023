console.log("Ejercicio 2");

// . Crea una aplicación que nos genere una cantidad de números enteros aleatorios pasados
// por el usuario (prompt). Crea un método donde pasamos como parámetros entre entre
// qué números queremos que los genere, podemos pedirlas al usuario antes de generar
// los números. Este método devolverá un número entero aleatorio. Muestra estos
// números por consola.

let rangoMin = prompt("Ejercicio 2. Introduce el rango minimo para generar el numero aleatorio: ");
let rangoMax = prompt("Ejercicio 2. Introduce el rango maximo para generar el numero aleatorio: ");
let cantidad = prompt("Ejercicio 2. Introduce la cantidad de numeros aleatorios: ");

const numRandom = (min, max, cantidad) =>{
    for (let i = 0; i < cantidad; i++) {
        console.log(Math.round(Math.random() * (max - min) + min));
    }
}

numRandom(rangoMin, rangoMax, cantidad);

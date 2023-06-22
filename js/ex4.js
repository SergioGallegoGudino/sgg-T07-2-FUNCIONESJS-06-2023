console.log("Ejercicio 4");

// Crea una aplicación que nos calcule el factorial de un número pedido por prompt, lo
// realizará mediante un método al que le pasamos el número como parámetro. Para
// calcular el factorial, se multiplica los números anteriores hasta llegar a uno. Por ejemplo,
// si introducimos un 5, realizará esta operación 5*4*3*2*1=120.

let numFactorial = prompt("Ejercicio 4. Introduce el numero factorial: ");

const calcularFactorial = (num) =>{
    let total = 1;
    for (let i = num; i > 0; i--) {
        total = total * i;
    }
    return total;
}

console.log("El factorial es " + calcularFactorial(numFactorial));

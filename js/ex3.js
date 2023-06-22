console.log("Ejercicio 3");

// 3. Crea una aplicación que nos pida un número por prompt y con un método se lo pasamos
// por parámetro para que nos indique si es o no un número primo, debe devolver true si
// es primo sino false. Un número primo es aquel que solo puede dividirse entre 1 y sí
// mismo. Por ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin embargo, 17 si
// es primo.

let numPrimo = prompt("Ejercicio 3. Introduce un numero para comprobar si es primo: ");

const comprobarPrimo = (num) => {
    for(let i = 2; i < num; i++){
        if(num % i == 0){
            return false;
        }
    }
    return true;
}

if(comprobarPrimo(numPrimo)){
    console.log("El numero es primo.");
} else{
    console.log("El numero no es primo");
}

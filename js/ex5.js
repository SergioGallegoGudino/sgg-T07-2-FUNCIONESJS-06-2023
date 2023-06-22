console.log("Ejercicio 5");

// 5. Crea una aplicación que nos convierta un número en base decimal a binario. Esto lo
// realizará un método al que le pasaremos el número como parámetro, devolverá un
// String con el número convertido a binario. Para convertir un número decimal a binario,
// debemos dividir entre 2 el número y el resultado de esa división se divide entre 2 de
// nuevo hasta que no se pueda dividir más, el resto que obtengamos de cada división
// formará el número binario, de abajo a arriba.

let numBinario = prompt("Ejercicio 5. Introduce el numero a convertir en binario: ");

const convBinario = (numBinario) => {
    let num = numBinario;
    let binario = (num%2).toString();
    while(num > 1){
        num = parseInt(num/2);
        binario = num%2 + binario;
    }

    console.log(binario);

}

convBinario(numBinario);
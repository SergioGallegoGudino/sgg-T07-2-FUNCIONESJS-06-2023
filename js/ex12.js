console.log("Ejercicio 12");

// 12. Crea un array de números de un tamaño pasado por prompt, el array contendránúmeros
// aleatorios entre 1 y 300 y mostrará aquellos números que acaben en un dígito que
// nosotros le indiquemos por prompt (debes controlar que se introduce un número
// correcto), estos deben guardarse en un nuevo array. Por ejemplo, en un array de 10
// posiciones le indicamos mostrar los números acabados en 5, podría salir 155, 25, etc.

let dimensionArray = prompt("Ejercicio 12. Introduce las dimensiones de la array");

let digito = prompt("Ejercicio 12. Introduce el digito a filtrar: ")

const filtrarArray = (arrayBase, digito) =>{

    let array = [];

    for (let i = 0; i < arrayBase.length; i++) {
        let arrayValor = (arrayBase[i] + "").split("");

        if(arrayValor[arrayValor.length-1] == digito){
            array.push(arrayBase[i]);
        }

    }

    return array;

} 

const creaRandom300 = (dimension) => {

    let array = [];
    while(array.length != dimension){
        let valor = Math.round(Math.random() * (300 - 1) + 1);
        array.push(valor);
    }

    return array;

}

if(digito >= 0 && digito <= 9){
    let arrayBase = creaRandom300(dimensionArray);

    let arrayFiltro = filtrarArray(arrayBase, digito);

    console.log(arrayBase);
    console.log(arrayFiltro);

} else{
    console.log("Introduce un digito entre 0 y 9");
}
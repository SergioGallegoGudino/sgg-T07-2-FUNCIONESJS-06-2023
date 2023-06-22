console.log("Ejercicio 7");

// 7. Crea una aplicación que nos convierta una cantidad de euros introducida por prompt a
// EJERCICIOS JS - Funciones
// otra moneda, estas pueden ser a dólares, yenes o libras. El método tendrá como
// parámetros, la cantidad de euros y la moneda a pasar que será una cadena, este no
// devolverá ningún valor, mostrará un mensaje indicando el cambio.
// El cambio de divisas es:
// • 0.86 libras es un 1 €
// • 1.28611 $ es un 1 €
// • 129.852 yenes es un 1 €

let euros = prompt("Ejercicio 7. Introduce la cantidad de euros: ");
let moneda = prompt("Ejercicio 7. Introduce la moneda a comparar (dolares/yenes/libras):");

const conversion = (euros, moneda) => {

    let valor = 0;

    switch (moneda) {
        case "dolares":
        case "Dolares":
            valor = 1.28611;
        break;

        case "yenes":
        case "Yenes":
            valor = 129.852;
        break;

        case "libras":
        case "Libras":
            valor = 0.86;
        break;
    
        default:
            break;
    }

    console.log((euros * valor).toFixed(2) + " " + moneda);

}

conversion(euros, moneda);
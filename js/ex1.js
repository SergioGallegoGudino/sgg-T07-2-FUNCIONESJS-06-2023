console.log("Ejercicio 1");

// . Crea una aplicación que nos calcule el área de un círculo, cuadrado o triángulo.
// Pediremos al usuario que figura queremos calcular su área y según lo introducido pedirá
// los valores necesarios para calcular el área. Para ello has de crear un método por cada
// figura para calcular cada área, este devolverá un número real. Muestra el resultado por
// consola.
// Aquí te mostramos que necesita cada figura:
// • Circulo: (radio^2)*PI
// • Triangulo: (base * altura) / 2
// • Cuadrado: lado * lado

let forma = prompt("Ejercicio 1.Introduce la forma a calcular (Circulo/Triangulo/Cuadrado):");

switch (forma) {
    case "Circulo":
    case "circulo":
        let radio = prompt("Ejercicio 1.Introduce el radio del circulo: ");
        const areaCirculo = (radio) =>{
            const pi = 3.1416;
            console.log("El area del circulo es: " + pi * (radio*radio));
        }
        areaCirculo(radio);
    break;

    case "Triangulo":
    case "triangulo":
        let base = prompt("Ejercicio 1.Introduce la base del triangulo:");
        let altura = prompt("Ejercicio 1.Introduce la altura del triangulo:");
        const areaTriangulo = (base, altura) => {
            console.log("El area del triangulo es: " + (base * altura) / 2);
        }
        areaTriangulo(base, altura)
    break;

    case "Cuadrado":
    case "cuadrado":
        let lado = prompt("Ejercicio 1.Introduce el lado del cuadrado: ");
        const areaCuadrado = (lado) => {
            console.log("El area del cuadrado es: " + lado * lado);
        }
        areaCuadrado(lado)
    default:
        break;
}
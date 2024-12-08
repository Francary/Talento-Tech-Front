// Función principal que ejecuta el programa

const realizarOperaciones = () => {
    // Capturamos las entradas del usuario
    let num1 = prompt("Ingresa el primer número:");
    let num2 = prompt("Ingresa el segundo número:");
    let valorReferencia = prompt("Ingresa un valor de referencia para comparar la suma:");

    // Validamos que las entradas sean números válidos
    if (isNaN(num1) || num1 === null || num1.trim() === "" ||  isNaN(num2) || num2 === null || num2.trim() === "" || isNaN(valorReferencia) || valorReferencia === null || valorReferencia.trim() === "") {
        console.log(`Verifica los valores ingresados Por favor e ingresa valores numéricos válidos.
        \n Numero 1 = ${num1}  ${isNaN(num1) || num1 === null || num1.trim() === "" ? "No es un numero": "Es un numero"} 
        \n Numero 2 = ${num2}  ${isNaN(num2) || num2 === null || num2.trim() === "" ? "No es un numero": "Es un numero"}
        \n Comparar = ${valorReferencia}  ${isNaN(valorReferencia) || valorReferencia === null || valorReferencia.trim() === "" ? "No es un numero": "Es un numero"}`);
        return;
    }
    // Convertimos las entradas en números flotantes
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    valorReferencia = parseFloat(valorReferencia);


    // Realizamos las operaciones aritméticas
    const suma = num1 + num2;
    const resta = num1 - num2;
    const multiplicacion = num1 * num2;
    const division = num2 !== 0 ? num1 / num2 : "No se puede dividir entre cero";

    // Mostramos los resultados en la consola
    console.log(`Resultados de las operaciones con ${num1} y ${num2}:`);
    console.log(`Suma: ${suma}`);
    console.log(`Resta: ${resta}`);
    console.log(`Multiplicación: ${multiplicacion}`);
    console.log(`División: ${division}`);

    // Verificamos si la suma es mayor o menor que el valor de referencia
    if (suma > valorReferencia) {
        console.log(`La suma (${suma}) es mayor que el valor de referencia (${valorReferencia}).`);
    } else if (suma < valorReferencia) {
        console.log(`La suma (${suma}) es menor que el valor de referencia (${valorReferencia}).`);
    } else {
        console.log(`La suma (${suma}) es igual al valor de referencia (${valorReferencia}).`);
    }
}
// Ejecutamos el programa
realizarOperaciones();

const saludar = () =>{
    let nombre = prompt("Como te llamas ?");
    let edad = prompt("Que edad tienes ?");
    let mayorEdad = 18;


    if (isNaN(edad) || edad === null || edad.trim() === "") {
        console.log(`La edad debe ser un numero
        \n Numero 1 = ${edad}  ${isNaN(edad) || edad === null || edad.trim() === "" || edad > 0 || edad<100 ? "No es un numero": "Es un numero"}`);
        return;
    }

    edad = parseFloat(edad);

    if (edad >= mayorEdad) {
        console.log(`Bienvenido ${nombre} . Tienes ${edad} años asi que puedas ingresar al Casino`);
    } else {
        console.log(`Hola ${nombre} . Tienes ${edad} años . Aun tienes suficiente edad para ingresar al Casino. Regresa cuando cumplas 18 años`);
    } 

}
saludar()






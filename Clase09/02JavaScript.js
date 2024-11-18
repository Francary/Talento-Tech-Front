let nombre = "Francary"
console.warn(`Dato string = ${nombre} `);

let edad = 38
console.warn(`Dato number = ${edad} `);

let numeroGrande = 123456789012345678901234567890n;
console.warn(`Dato bigint = ${numeroGrande} `);

let mayorEdad = true
console.warn(`Dato boolean = ${mayorEdad} `);

let x;
console.warn(`Dato undefined = ${x} `);

let esNull = null
console.warn(`Dato null = ${esNull} `);

let id = Symbol("qre232412312");
console.warn(`Dato symbol = ${String(id)} `);


let persona = {
    nombre: "Juan",
    edad: 30
};
console.warn(`Dato Object = ${persona} `);

let numeros = [1, 2, 3, 4, 5];
console.warn(`Dato Array = ${numeros} `);


function saludar() {
    console.warn(`Hola esta es la funcion Saludar`);
}
saludar();



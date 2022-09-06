/*
En esta clase aprenderemos variables de tipo números y las operaciones más comunes en este tipo de variables.

En esta clase veremos operadores matemáticos como:

suma ( + )
resta ( - )
multiplicación (*)
división (/)
Recerda que en operaciones con decimales debemos realizar operaciones adicionales para conseguir un resultado preciso. Ej. var total = ( precioDeVino * 100 * 3) / 100

Para redondear una operación se utiliza la función: Math.round
*/

// Números en JS y las operaciones mas comunes.
// Supongamos que tenemos una variable que tiene un numero

let edad = 27;
console.log(edad);

// Incrementos de una variable
// edad = edad + 1; esto es lo mismo que abajo

edad += 1;
console.log(edad);

//Decremento de una variable
let peso = 75;
console.log(peso)
// peso = peso -2;
peso -= 2;
console.log(peso)

//Sumar dos numeros distintos
let sandwich = 1;
peso += sandwich; // Nos comemos un sandwich
console.log(`El peso despues de comerme un sandwich es ${peso} Kg.`);

// Restar dos numeros
let jugarAlFutbol = 3;
peso -= jugarAlFutbol;
console.log(`Despues de jugar al futbol mi peso es de ${peso} Kg`)

//Ejemplo con decimales.

let precioVino = 200.3;
let total = precioVino * 3;
console.log(total); // Si imprimimos asi lo hace con muchos decimales y no es tan exacto imaginate que es el resultado de una carrito.

// Para que sea preciso usaremos a el modulo de JS matematicas Math
total = Math.round(precioVino * 3 * 100) / 100;
console.log(total);

// Si queremos dar mas de un decimal, con el metodo .toFixed() y le decimos la cantidad de decimales, pero ojo el valor que nos arroja es un string, OJO con eso
let totalStr = total.toFixed(2);
console.log(totalStr);

// Para pasar ese string a numero, con el metodo parseFloat() y le pasamos el dato como parametro

let totalStrNumero = parseFloat(totalStr);
console.log(totalStrNumero);

// Ahora vamos a ver como hacer una division

let pizza = 8; // tenemos una pizza en 8 porciones
let personas = 2;
let cantidadPorcionesPersona = pizza / personas;

console.log(cantidadPorcionesPersona);

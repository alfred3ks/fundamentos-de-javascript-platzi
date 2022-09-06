/*
Las funciones son fracciones de código reutilizable. En esta clase aprenderemos a definir e invocar nuestras funciones. Para definir una función utilizaremos la palabra reservada ““function””.

Delimitamos el cuerpo de la función usando llaves { }. Los parámetros de la función son variables que se pasan a la función escribíendolos entre paréntesis ()

Definir funciones nos sirve para reutilizar código. JavaScript es un lenguaje interpretado, esto quiere decir que intentará ejecutar el código sin importar si los parámetros que le pasemos a la función estén invertidos o incluso incompletos.
*/

let nombre = 'Alfredo';
let edad = 45;

// Para definir una funcion se usa la palabra reservada function, luego el nombre que llevara la funcion. Esta puede recibir o no parametros, pero lo veremos mas adelante, para este caso no. Para llamar la funcion escribimos el nombre la funcion con los parentesis.

function imprimirEdad() {
    console.log(`${nombre} tiene ${edad} años.`);
}

imprimirEdad();

// Funcion pasando parametros, para diferentes personas. Aqui vemos el potencial de las funciones.

function imprimirEdadParametros(n, e) {
    console.log(`${n} tiene ${e} años.`)
}

imprimirEdadParametros('Vicky', 29);
imprimirEdadParametros('Andres', 49);
imprimirEdadParametros('Diego', 36);

//Pasamos por parametros las variables arriba declaradas
imprimirEdadParametros(nombre, edad);

// Ahora una cosa interesante veamos que pasa si invertimos los parametros. JS no lanza ningun error, lo ejecuta sin problemas. Hay que tener cuidado con esto, igual pasa si no le pasamos parametros.

imprimirEdadParametros(34, 'Andrea');
imprimirEdadParametros();


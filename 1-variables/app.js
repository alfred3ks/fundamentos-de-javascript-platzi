// Imprimir en la consola
console.log('Hola mundo JS!!!');

// Variables.
var nombre; // Declaracion de una variable
console.log(nombre); // undefined

nombre = 'Alfredo'; // Asignacion de la variable
console.log(nombre);

var apellido = 'Sánchez';

// NOTA: Usaremos comillas simples para los string (''), tambien el ; al final de sentencia puede ser opcional, yo en mi caso lo voy a poner.

console.log('Hola, ' + nombre + '.'); //Usando el operador concatenacion (+)

console.log(`Hola, ${nombre}.`); // Usando comillas invertidas.

console.log(`Hola, ${nombre} ${apellido}.`)

// JS es debilmente tipado y tenemos que tener cuidado con eso.

//Ejemplo

var edad = 45;
edad = '45 años'
console.log(`Tengo ${edad} años`)

// La variable edad primero comenzo siendo un nemero pero luego se le asigno un string y JS no se que queja nada.




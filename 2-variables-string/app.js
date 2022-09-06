/*
Los strings son cadenas de texto. Para indicar que estamos usando una cadena de texto debemos de colocar las comillas simples.

En este curso utilizaremos los métodos:

    toUpperCase, que sirve para transformar un String a mayúsculas.

    toLowerCase, que sirve para transformar el string a minúsculas.

También usaremos el atributo:

    length, que nos indica la cantidad de caractéres que tiene un string.

Para concatenar dos strings se utiliza el símbolo (+)
var nombreCompleto = nombre + ’ ’ + apellido

Desafío: Encuentra la última letra de su nombre

*/

// Variables string, metodos y atributos mas usados.
// OJO los metodos los invocamos .metodo(),
// y los atributos no llevan parentesis. .atributo

let nombre = 'Alfredo';
let apellido = 'Sánchez';

//  Vamos a convertir el nombre todo en mayusculas. Usando el metodo .toUpperCase()

let nombreEnMayuscula = nombre.toUpperCase();
console.log(nombreEnMayuscula);

// Vamos a transformar el apellido en minusculas, usaremos el metodo .toLowerCase()

let apellidoEnMinusculas = apellido.toLowerCase();
console.log(apellidoEnMinusculas)

// Conocer el un caracter de una string, usaremos el metodo .charAt() que recibe la posicion del caracter que queremos conocer. Si no le decimos ningun parametro nos arroja la primera letra

let primeraLetraNombre1 = nombre.charAt();
let primeraLetraNombre2 = nombre.charAt(5);
// let primeraLetraNombre = nombre.charAt(3);
console.log(primeraLetraNombre1);

// Tambien podemos preguntar cuantos caracteres tiene. Usaremos el atributo .length

let cantidadDeLetrasNombre = nombre.length;
console.log(cantidadDeLetrasNombre);

// Tambien podemos ver como concatenar dos string.

let nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);

// Tenemos otra forma de concatenar usando template string, usando las comillas doble invertidas (``), interpolacion de texto. Es mas moderno a partir de ES6

let nombreCompletoString = `${nombre} ${apellido}.`;
console.log(nombreCompletoString);

// Podemos tambien a un substring dentro de un string, lo haremos con el metodo substring() el cual recibe dos parametros, desde donde queremos que empiece, osea que posicion y cuantos caracteres queremos que tome.

let str = nombre.substr(1, 4);
console.log(str);

// Desafio mostrar la ultima letra de su nombre.

// Obtengo todos los caracteres del nombre, usando el metodo .split()
let todosLosCaracteres = nombre.split('');
console.log(todosLosCaracteres); // Muestro todos los caracteres.

// Obtengo la ultima letra del nombre.
let ultimaLetra = todosLosCaracteres[todosLosCaracteres.length - 1];
console.log(ultimaLetra);


// Otra forma mas sencilla
let ultimaLetraNombre = nombre.charAt(nombre.length - 1);
console.log(ultimaLetraNombre);
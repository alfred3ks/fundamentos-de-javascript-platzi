// Variables string, metodos y atributos mas usados.
// OJO los metodos los invocamos .metodo(),
// y los atributos no llevan parentesis. .atributo

var nombre = 'Alfredo';
var apellido = 'Sánchez';

//  Vamos a convertir el nombre todo en mayusculas. Usando el metodo .toUpperCase()

var nombreEnMayuscula = nombre.toUpperCase();
console.log(nombreEnMayuscula);

// Vamos a transformar el apellido en minusculas, usaremos el metodo .toLowerCase()

var apellidoEnMinusculas = apellido.toLowerCase();
console.log(apellidoEnMinusculas)

// Conocer el un caracter de una string, usaremos el metodo .charAt() que recibe la posicion del caracter que queremos conocer. Si no le decimos ningun parametro nos arroja la primera letra

var primeraLetraNombre = nombre.charAt();
var primeraLetraNombre = nombre.charAt(5);
// var primeraLetraNombre = nombre.charAt(3);
console.log(primeraLetraNombre);

// Tambien podemos preguntar cuantos caracteres tiene. Usaremos el atributo .length

var cantidadDeLetrasNombre = nombre.length;
console.log(cantidadDeLetrasNombre);

// Tambien podemos ver como concatenar dos string.

var nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);

// Tenemos otra forma de concatenar usando template string, usando las comillas doble invertidas (``), interpolacion de texto. Es mas moderno a partir de ES6

var nombreCompletoString = `${nombre} ${apellido}.`;
console.log(nombreCompletoString);

// Podemos tambien a un substring dentro de un string, lo haremos con el metodo substring() el cual recibe dos parametros, desde donde queremos que empiece, osea que posicion y cuantos caracteres queremos que tome.

var str = nombre.substr(1, 4);
console.log(str);

// Desafio mostrar la ultima letra de su nombre.

// Obtengo todos los caracteres del nombre, usando el metodo .split()
var todosLosCaracteres = nombre.split('');
console.log(todosLosCaracteres); // Muestro todos los caracteres.

// Obtengo la ultima letra del nombre.
var ultimaLetra = todosLosCaracteres[todosLosCaracteres.length -1];
console.log(ultimaLetra);


// Otra forma mas sencilla
var ultimaLetraNombre = nombre.charAt(nombre.length -1);
console.log(ultimaLetraNombre);
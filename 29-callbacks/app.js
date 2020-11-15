/*
En esta clase aprenderemos que son los callbacks y usaremos una librería externa que se llama jQuery.

Un callback es una función que se pasa a otra función como un argumento. Esta función se invoca, después, dentro de la función externa para completar alguna acción.
*/

// Usaremos un libreria externa llamada jQuery

// Usaremos la API de https://swapi.dev/

// Vamos hacer el request para obtener los datos de la API
const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`;
const opts = { crossDomain: true};


// arguments es una variable que tienen todas las funciones y nos devuelve un array con los parametros que recibe la funcion
const onResponse = function(data) {
    console.log(arguments); // Sabemos que parametros podemos traer-->data es el que nos interesa, no lo dice la documentacion de jQuery
    console.log(`Hola yo soy ${data.name}.`);
}


// Asi es con jQuery hace la peticion a la API.
$.get(lukeUrl, opts, onResponse);



// Ejemplo de arguments
function leer(libro){
    console.log(arguments);
}

leer();



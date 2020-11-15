/*
En esta clase accederemos a múltiples datos al mismo tiempo. Continuaremos trabajando con los jQuery y swapi.
*/

// Usaremos un libreria externa llamada jQuery como ayuda.

// Usaremos la API de https://swapi.dev/

// Vamos hacer el request para obtener los datos de la API
const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';

const opts = { crossDomain: true};

// Vamos hacer una funcion que logee los nombres de multiples personajes y en paralelo

function obtenerPersonaje(id){
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
    $.get(url, opts, onResponse);
}


// arguments es una variable que tienen todas las funciones y nos devuelve un array con los parametros que recibe la funcion
const onResponse = function(data) {
    //console.log(arguments); // Sabemos que parametros podemos traer-->data es el que nos interesa, no lo dice la documentacion de jQuery
    console.log(`Hola, yo soy ${data.name}.`);
}

// Ahora obtenemos los personajes
obtenerPersonaje(1);
obtenerPersonaje(2);
obtenerPersonaje(3);
obtenerPersonaje(4);
obtenerPersonaje(5);

//  OJO con esto el orden con que se muestran los personajes es varible nunca en el orden porque debido al asincronismo de JS basicamente como la peticion es en paralelo esta entregando por consola el personaje que el servidor entrega primero.







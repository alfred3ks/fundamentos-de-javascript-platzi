/*
Una manera de asegurar que se respete la secuencia en que hemos realizado múltiples tareas es utilizando callbacks, con lo que se ejecutará luego, en cada llamada. Lo importante es que el llamado al callback se haga a través de una función anónima. Sin embargo, al hacerlo de esta manera generamos una situación poco deseada llamada CallbackHell. El infierno de los callbacks.
*/

// Usaremos un libreria externa llamada jQuery como ayuda.

// Usaremos la API de https://swapi.dev/

// Vamos hacer el request para obtener los datos de la API
const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';

const opts = { crossDomain: true};

// Vamos hacer una funcion que logee los nombres de multiples personajes y en paralelo

function obtenerPersonaje(id, callback){
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;

    $.get(url, opts, function(data) {
    console.log(`Hola, yo soy ${data.name}.`);

    if(callback){
        callback();
    }
});

}


// Ahora obtenemos los personajes
// obtenerPersonaje(1);
// obtenerPersonaje(2);
// obtenerPersonaje(3);
// obtenerPersonaje(4);
// obtenerPersonaje(5);

//  OJO con esto el orden con que se muestran los personajes es varible nunca en el orden porque debido al asincronismo de JS basicamente como la peticion es en paralelo esta entregando por consola el personaje que el servidor entrega primero.


// Para controlar el orden lo haremos por medio de una funcion que pasaremos arriba como callback, los request se hacen en serie no en paralelo como antes.

obtenerPersonaje(1,function(){
    obtenerPersonaje(2,function(){
        obtenerPersonaje(3,function(){
            obtenerPersonaje(4,function(){
                obtenerPersonaje(5, function(){
                    obtenerPersonaje(6,function(){
                        obtenerPersonaje(7);
                    });
                });
            });
        });
    });
})







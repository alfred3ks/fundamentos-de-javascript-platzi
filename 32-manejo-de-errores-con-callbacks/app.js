/*
Para solucionar el problema de quedarnos sin conexión, u otro error similar, en medio de una sucesión de callbacks utilizamos el método fail().
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
    // Ahora podemos encadenar con el metodo fail()
    $
    .get(url, opts, callback)
    // Asi podemos capturar el error por si hay perdida de conexion o por si uno de los personajes no existe.
    .fail(function(){
        console.log(`Sucedio un error no se pudo obtener el personaje ${id}`)
    })

}

// Ahora obtenemos los personajes
// obtenerPersonaje(1);
// obtenerPersonaje(2);
// obtenerPersonaje(3);
// obtenerPersonaje(4);
// obtenerPersonaje(5);

//  OJO con esto el orden con que se muestran los personajes es varible nunca en el orden porque debido al asincronismo de JS basicamente como la peticion es en paralelo esta entregando por consola el personaje que el servidor entrega primero.


// Para controlar el orden lo haremos por medio de una funcion que pasaremos arriba como callback, los request se hacen en serie no en paralelo como antes.


//Hacemos un refactorings de la funcion.
obtenerPersonaje(1,function(data){
    console.log(`Hola, yo soy ${data.name}.`);
    obtenerPersonaje(2,function(data){
        console.log(`Hola, yo soy ${data.name}.`);
        obtenerPersonaje(3,function(data){
            console.log(`Hola, yo soy ${data.name}.`);
            obtenerPersonaje(4,function(data){
                console.log(`Hola, yo soy ${data.name}.`);
                obtenerPersonaje(5, function(data){
                    console.log(`Hola, yo soy ${data.name}.`);
                    obtenerPersonaje(6,function(data){
                        console.log(`Hola, yo soy ${data.name}.`);
                        obtenerPersonaje(7777, function(data){
                            console.log(`Hola, yo soy ${data.name}.`);
                        });
                    });
                });
            });
        });
    });
})







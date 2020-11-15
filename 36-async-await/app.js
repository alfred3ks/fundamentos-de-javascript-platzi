/*
Async-await es la manera más simple y clara de realizar tareas asíncronas. Await detiene la ejecución del programa hasta que todas las promesas sean resueltas. Para poder utilizar esta forma, hay que colocar async antes de la definición de la función, y encerrar el llamado a Promises.all() dentro de un bloque try … catch.
*/

// Vamos hacer el request para obtener los datos de la API
const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';

const opts = { crossDomain: true};

function obtenerPersonaje(id){
    return new Promise(function(resolve, reject){
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
        $
        .get(url, opts, function(data){
            resolve(data);
        })
        .fail(function(){
            reject(id);
        })
    })
}

// Para devolver un error en el .catch()
function onError(id){
    console.log(`Ha sucedido un error en obtener el personaje --> ${id}`);
}

async function obtenerPersonajes(){
    let ids = [1,2,3,4,5,6,7,8];
    let promesas = ids.map(id=>obtenerPersonaje(id))
    try {
        let data = await Promise.all(promesas)
        console.log(data)
        console.table(data)
    } catch (id) {
        onError(id)
    }
}
obtenerPersonajes();







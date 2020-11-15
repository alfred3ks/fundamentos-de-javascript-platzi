/*
Para hacer el llamado a múltiples promesas, nos apoyamos en un array de ids con el que luego construimos otro arreglo de Promesas, que pasaremos como parámetro a Promise.all( arregloDePromesas ), con las promesas podemos encadenar llamadas en paralelo, algo que no es posible usando callbacks.
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

// Vamos a guardarnos en un arrays los personajes que queremos
let ids = [1,2,3,4,5,6,7,8];
// let promesas = ids.map(function(id){
//     return obtenerPersonaje(id)
// })

let promesas = ids.map(id=>obtenerPersonaje(id));

// Con promise.all(), podemos obtener un arrays de promesas.
Promise
    .all(promesas)
    .then(function(data){console.log(data)})
    .catch(onError);







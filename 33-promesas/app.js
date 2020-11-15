/*
Las promesas llegan para resolver el llamado de los callbacks, que estan bien pero cuando llegamos al callbacks hell el codigo se hace bastante confuso y dificil de manejar.

En esta clase veremos las promesas, que son valores que aun no conocemos. Las promesas tienen tres estados:

- pending
- fullfilled
- rejected
Las promesas se invocan de la siguiente forma:

new Promise((resolve, reject){
    // llamado asincrono
    if(todoOk){
        // Se resuelve la promesa
        resolve()
    } else {
        // Paso algo
        reject()
    }
})

No olvides ver el material adjunto de esta clase. PDF.
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

obtenerPersonaje(1)
    .then(function(data){
        console.log(`Hola, yo soy ${data.name}.`);
    })
    .catch(function(id){
        console.log(`Ha sucedido un error en obtener el personaje ${id}`);
    })




/*
A diferencia de los callbacks en el CallbackHell, que terminan estando anidados unos dentro de otros, cuando se usan Promesas la ejecución de las llamadas no se hacen de manera anidada sino de manera encadenada, al mismo nivel una debajo de la otra, lo que hace que el código sea mucho más legible y mantenible.
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

// Encadenamos las promesas. Mucho mas claro. En serie. No en paralelo.
obtenerPersonaje(1)
    .then( (data)=> {
        console.log(`Hola, yo soy ${data.name}.`);
        return obtenerPersonaje(2)
    })
    .then( (data)=> {
        console.log(`Hola, yo soy ${data.name}.`);
        return obtenerPersonaje(3)
    })
    .then( (data)=> {
        console.log(`Hola, yo soy ${data.name}.`);
        return obtenerPersonaje(4)
    })
    .then( (data)=> {
        console.log(`Hola, yo soy ${data.name}.`);
        return obtenerPersonaje(5)
    })
    .then( (data)=> {
        console.log(`Hola, yo soy ${data.name}.`);
        return obtenerPersonaje(6)
    })
    .then( (data)=> {
        console.log(`Hola, yo soy ${data.name}.`);
        return obtenerPersonaje(7)
    })
    .then( (data)=> {
        console.log(`Hola, yo soy ${data.name}.`);
        return obtenerPersonaje(777)
    })

    .catch(onError)




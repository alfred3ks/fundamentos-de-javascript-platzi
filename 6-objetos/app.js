// Objetos en JS

var nombreAlfred = 'Alfred';
var nombreDario = 'Dario';

// Lo mejor es crear un objeto, donde tenemos una clave con un valor.

// Onjetos de personas
var alfred = {
    nombre: 'Alfred',
    apellido: 'Sánchez',
    edad: 45
}

var dario = {
    nombre: 'Dario',
    apellido: 'Susnisky',
    edad: 27
}

function imprimirNombreMay(persona){
    var nombre = persona.nombre.toUpperCase();
    console.log(nombre);
}
// Para acceder a los elementos del objejo lo hacemos invocando el objeto.propiedad como en este caso alfred.nombre


imprimirNombreMay(alfred);
imprimirNombreMay(dario);

// Ahora si solo necesitamos pasar de nuestro objeto el nombre lo podemos hacer asi: Se llama desestructurar el objeto.

function imprimirSoloNombre({ nombre }){
    // Por parametro recibe el objeto que queramos
    var nombre = nombre.toUpperCase();
    console.log(`Desestructuramos el objeto: ${nombre}.`);
}

imprimirSoloNombre(alfred);

// Tambien podemos definir el objeto aqui:
imprimirSoloNombre({ nombre:'Pepito' })

/*
Vamos a empezar a trabajar con objetos, veremos cómo declararlos, cuáles son sus ventajas, cómo asignarles atributos y cómo trabajar con ellos dentro de las funciones.

Los objetos se definen delimitados mediante llaves {}

Un atributo se compone de una clave (key) y un valor (value), que se separan entre sí por dos puntos “”:"". Los valores pueden ser de tipo string, número, booleano, etc. Cada atributo está separado del siguiente por una coma. Un objeto puede tener todos los atributos que sean necesarios.

Escribir el nombre de un objeto separado por un punto del nombre de un atributo, nos permite acceder al valor de dicho atributo para ese objeto. Un objeto también se puede pasar como atributo en una función.

Las últimas versiones de JavaScript nos permiten desglosar el objeto para acceder únicamente al atributo que nos interesa. Esto se consigue encerrando el nombre del atributo entre llaves { }.
*/

let nombreAlfred = 'Alfred';
let nombreDario = 'Dario';

// Lo mejor es crear un objeto, donde tenemos una clave con un valor.

// Objetos de personas
let alfred = {
    nombre: 'Alfred',
    apellido: 'Sánchez',
    edad: 45
}

let dario = {
    nombre: 'Dario',
    apellido: 'Susnisky',
    edad: 27
}

function imprimirNombreMay(persona) {
    var nombre = persona.nombre.toUpperCase();
    console.log(nombre);
}
// Para acceder a los elementos del objejo lo hacemos invocando el objeto.propiedad como en este caso alfred.nombre


imprimirNombreMay(alfred);
imprimirNombreMay(dario);

// Ahora si solo necesitamos pasar de nuestro objeto el nombre lo podemos hacer asi: Se llama desestructurar el objeto.

function imprimirSoloNombre({ nombre }) {
    // Por parametro recibe el objeto que queramos
    var nombre = nombre.toUpperCase();
    console.log(`Desestructuramos el objeto: ${nombre}.`);
}

imprimirSoloNombre(alfred);

// Tambien podemos definir el objeto aqui:
imprimirSoloNombre({ nombre: 'Pepito' })

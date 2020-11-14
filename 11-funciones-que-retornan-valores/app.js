/*
En esta clase seguiremos trabajando con condicionales para desglosar las funciones en funciones más pequeñas que retornen un valor.

Debemos de tener en cuenta que el número 18 esta incluido dentro del rango de edad. Para ello utilizamos los símbolos >=.

Return detiene la ejecución de una función y devuelve el valor de esa función.

Las variables definidas con const se comportan como las variables, excepto que no pueden ser reasignadas. Las constantes pueden ser declaradas en mayúsculas o minúsculas. Pero por convención, para distinguirlas del resto de variables, se escribe todo en mayusculas.
*/

let sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 28,
    ingeniero: false,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: true
}

let juan = {
    nombre: 'Juan',
    apellido: 'Gomez',
    edad: 13
}

// Definimos una funcion que nos dice que profesion tiene una persona

function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es: `);

// if(persona.ingeniero === true)
    if(persona.ingeniero){
        console.log('Ingeniero.');
    } else {
        console.log('No es ingeniero.');
    }
    if(persona.cocinero){
        console.log('Cocinero.');
    }
    if(persona.cantante){
        console.log('Cantante.');
    }
    if(persona.dj){
        console.log('DJ.');
    }
    if(persona.drone){
        console.log('Piloto de drones.');
    }
}

imprimirProfesiones(sacha);

// Como podemos ver con el if solo se ejecuta el codigo que es true.

// Reto: escribir la funcion imprimirSiEsMayorDeEdad().

// Aqui creamos la logica de la mayoria de edad, devuelve true o false en funcion de la condicion del objeto

const MAYORIA_DE_EDAD = 18;
// ojo es comunmente las constantes declararlas asi en mayusculas y separadas por guiones bajos.

function esMayorDeEdad(persona){
    return persona.edad >= MAYORIA_DE_EDAD;
}

function imprimirSiEsMayorDeEdad(persona){
    if(esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad.`);
    } else {
        console.log(`${persona.nombre} es menor de edad.`);
    }
}

imprimirSiEsMayorDeEdad(sacha);
imprimirSiEsMayorDeEdad(juan);
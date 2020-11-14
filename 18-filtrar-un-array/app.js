/*
En esta clase aprenderemos como filtrar los arrays. Para filtrar siempre necesitamos establecer una condición. En este ejemplo nuestra condición es que la estatura de las personas sea mayor de 1.80mts.

El método filter ( ) crea una nueva matriz con todos los elementos que pasan la prueba implementada por la función proporcionada.

Recuerda que si no hay elementos que pasen la prueba, filter devuelve un array vacío.

Reto: escribe el filtrado de personas bajas.
*/

let sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}
let alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}
let martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}
let dario= {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}
let vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}
let paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

// Podemos agrupar a todos dentro de una misma variable

let personas = [sacha, alan, martin, dario, vicky, paula];

// Vamos a filtrar de nuestro array las personas altas. Para filtrar necesitamos dos cosas, un array y una condicion, esta condicion sera una funcion.

// Usaremos el metodo filter(condicion) para arrays la cual recibe como parametro una condicion. OJO filter() nos devuelve un array nuevo si se cumplen las condiciones. Sino el array estara vacio.

const ALTURA = 1.8;

const esAlta = persona =>  persona.altura > ALTURA;

let personasAltas = personas.filter(esAlta);
console.log(personasAltas);

// Muchas veces en internet lo podemos ver escrito asi, pasando la funcion directamente por parametro y no declarandola antes, pero es lo mismo.

let personasAltasDelArray = personas.filter(function(persona){
    return persona.altura > ALTURA;
})
console.log(personasAltasDelArray);

// Reto filtrar personas bajas
const esBaja = persona =>  persona.altura < ALTURA;

let personasBajas = personas.filter(esBaja);
console.log(personasBajas);






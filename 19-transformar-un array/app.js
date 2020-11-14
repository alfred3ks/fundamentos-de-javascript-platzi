/*
En esta clase veremos cómo transformar un array. El método map() itera sobre los elementos de un array en el orden de inserción y devuelve array nuevo con los elementos modificados.
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

// Vamos a transformar nuestro array original y pasaremos la altura de cada objeto de mts a cm. OJO se modifica el array original.

const pasarAlturaACms = persona => {
    /* persona.altura = persona.altura * 100;
     persona.altura *= 100;  Estas dos lineas son iguales */
    // return persona;

    // Asi a continuacion no modificamos el array original

    return {
        ...persona,
        altura: persona.altura * 100
    };
}

let personasCms = personas.map(pasarAlturaACms)
console.log(personasCms);
console.log(personas);

console.log(personas[0] === personasCms[0]); // false






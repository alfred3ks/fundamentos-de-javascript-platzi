/*
Los arrays son estructuras que nos permiten organizar elementos dentro de una collección. Estos elementos pueden ser números, strings, booleanos, objetos, etc.
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

console.log(personas); // Accedemos a todo el array
console.log(personas[0]); // Accedemos a cada elemento del array por medio de su indice

console.log(personas[0].altura); // Para acceder por indice y a un atributo del objeto

console.log(personas[5]['nombre']); // Otra forma de acceder a los atributos.

// Ahora podemos recorrer el array y imprimir la altura de cada uno de ellos.

for(let i = 0; i < personas.length; i++){
    let persona= personas[i];
    // console.log(personas[i]);
    console.log(`${persona.nombre} mide: ${persona.altura} mts.`);
}

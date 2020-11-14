/*
El método reduce() nos permite reducir, mediante una función que se aplica a cada uno de los elemento del array, todos los elementos de dicho array, a un valor único.
*/

let sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72,
    cantidadDeLibros: 78
}
let alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    cantidadDeLibros: 132
}
let martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
    cantidadDeLibros: 90
}
let dario= {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71,
    cantidadDeLibros: 91
}
let vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    cantidadDeLibros: 182
}
let paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    cantidadDeLibros: 111
}

// Podemos agrupar a todos dentro de una misma variable

let personas = [sacha, alan, martin, dario, vicky, paula];

// Vamos usando el metodo reduce() sacar la cuenta total de cuantos libros hay.

// Por medio de un ciclo for
let acum = 0;
for(let i = 0; i < personas.length; i++){
    acum = acum + personas[i].cantidadDeLibros;
    console.log(acum);
}
console.log(`El total de libros es: ${acum}`);

// Ahora usaremos el metodo reduce(), la cual recibe por parametros un una funcion, le ponemos el nombre que queramos y el valor inicial del acumulador que es cero para nuestro caso.

// Esta funcion recibe dos parametros, uno el acumulador(acumulador)
// funcion original
/*const reducer = (acumulador, persona) => {
    return acumulador + persona.cantidadDeLibros;
}*/
// Funcion simplificada, quitando el return y desestructurando el objeto
const reducer = (acumulador, { cantidadDeLibros }) =>  acumulador + cantidadDeLibros;



let totalDelibros = personas.reduce(reducer, 0);
console.log(`El total de libros es: ${totalDelibros}`);











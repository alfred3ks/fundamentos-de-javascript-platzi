/*
En esta clase aprenderemos otra forma de acceder a los atributos de los objetos que es la desestructurización de los mismos.
Para no duplicar las variables introducir el nombre de la variable como parámetro de la segunda variable. Ej var{nombre} = persona

Reto: resolver la función que está comentada al final del ejercicio.
*/

// Creamos nuestros objetos.

var alfred = {
    nombre: 'Alfred',
    apellido: 'Sánchez',
    edad: 45
}

var chris = {
    nombre: 'Christian',
    apellido: 'Sánchez',
    edad: 10
}

function imprimeNombreEnMay(persona){
    // var nombre = persona.nombre --> Lo mismo que abajo
    var { nombre } = persona;
    console.log(nombre.toUpperCase());
}

imprimeNombreEnMay(alfred);
imprimeNombreEnMay(chris);

// Reto crear una funcion que imprima el nombre y la edad, y que diga: Hola, me llamo xxx y tengo xx años.

function imprimirReto(persona){
    // Aqui desestructuramos el objeto
    var { nombre, edad } = persona;
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años.`)
}

imprimirReto(alfred);
imprimirReto(chris);
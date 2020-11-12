// El alcance de las funciones viene con el tema a cuales variables pueden acceder.

var nombre = 'Alfred';
var apellido = 'Sanchez';

function imprimirNombreMay(){
    nombre = nombre.toUpperCase();
    console.log(nombre);
}

imprimirNombreMay();

// Si una variable no esta definida dentro del cuerpo de una funcion se dice que esa variable es de alcence global. Eso significa que se puede acceder desde cualquier funcion.

// Cunado definimos una variable como es nuestro ejemplo de manera global esta se le asigna al objeto global y este objeto global depende donde estemos ejecutando js. Si es en un servidor seria el entorno de NODE, y si es en el cliente el objeto global seria windows, la ventana.

console.log(window.nombre);

// Es ahi donde esta definido esta variable.

// Ahora una cosa que hay que ver que nuestra funcion al acceder a nuestra variable esta sucediendo un "efecto de lado" esto quiere decir que esta funcion va a modificar variables que no estan definidas dentro de ella, va a tocar cosas que entre comillas no le corresponden, lo cual es muy recomendable evitar dentro de nuestro codigo.

// Veamos como podemos hacer para hacer nuestro codigo mas profesional y no modificar nuestra variable global.

function imprimirNombreMayProf(n){
    n = n.toUpperCase();
    console.log(n);
}

imprimirNombreMayProf(apellido);

// Asi evitamos el efecto de lado y nuestra variable global no es modificada. La varible n dentro de la funcion local y solo se puede acceder a ella dentro de la funcion en el alcance global no existe.

/*
console.log(n);

app.js:37 Uncaught ReferenceError: n is not defined
    at app.js:35

*/

// Una cosa que tambien nos permite JS que el parametros que le pasemos a nuestra funcion la podemos llamar igual que la varible global asi que nuestrs varible existe dentro de la funcion y fuera de esta asi:

/*

function imprimirNombreMayProf(nombre){
    nombre = nombre.toUpperCase();
    console.log(nombre);
}

*/

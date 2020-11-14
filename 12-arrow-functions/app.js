// Funciones que retornan valores

/*
En esta clase aprenderemos a utilizar Arrow Functions que permiten una nomenclatura más corta para escribir expresiones de funciones. Este tipo de funciones deben definirse antes de ser utilizadas.

Al escribir las Arrow Functions no es necesario escribir la palabra function, la palabra return, ni las llaves.

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

/* Esta funcion asignada a una variable y la funcion es anonima:
let esMayorDeEdad = function (persona){
    return persona.edad >= MAYORIA_DE_EDAD;
}
*/


/* Asi la podemos definir tambien como arrow function:
const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD;
*/

// Haciendo desestructuracion del objeto porque solo necesitamos la edad
const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD;




function imprimirSiEsMayorDeEdad(persona){
    if(esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad.`);
    } else {
        console.log(`${persona.nombre} es menor de edad.`);
    }
}

imprimirSiEsMayorDeEdad(sacha);
imprimirSiEsMayorDeEdad(juan);


/* En JS existe otras maneras de expresar funciones:

- Podemos asignar a una variable una funcion y la funcion pasa a llamarse anonima, ya que no tiene nombre:

let esMayorDeEdad = function (persona){
    return persona.edad >= MAYORIA_DE_EDAD;
}

esMayorDeEdad(persona);

- Tambien tenemos en JS las arrow function:
1- Cuando tenemos un solo parametro podemos obviar los parentesis.
2- JS tambien permite que si una funcion solo realiza un return podemos eliminar el return y las llaves.

const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD;

*/


// Ahora vamos a permitir el acceso o no a una web:

function permitirAcceso(persona) {
    if(!esMayorDeEdad(persona)){
        console.log('Acceso denegado');
    }
}

permitirAcceso(juan);
permitirAcceso(sacha);

// Reto escribir la funcion es menor de edad como arrow fuction y que retorne la negacion a la llamada esMayorDeEdad.

const permitirEntrar = (persona) => {
    if(!esMayorDeEdad(persona)){
        console.log(`Lo siento ${persona.nombre}, no puedes entrar, eres menor de edad.`);
    } else {
        console.log(`Adelante ${persona.nombre}, puedes entrar, nunca pares de aprender.`);
    }
}

permitirEntrar(juan);
permitirEntrar(sacha);


// OJO Queda por ver un operador bastante intersante que se llama el operador ternario.

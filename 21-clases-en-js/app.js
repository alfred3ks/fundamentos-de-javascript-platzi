/*
Las clases son funciones cuya sintaxis tiene dos componentes:

expresiones
declaraciones
En esta clase veremos el uso de this. Dentro de una función, el valor de this depende de cómo es llamada ésta.

Reto: agrega el atributo altura y la función soyAlto.

Cuando hablamos de objetos en JS estamos hablando de prototypos y no tanto de clases.

En las nuevas versiones de JS ya existen las clases pero estas no son como las podemos conocer en otros lenguajes de programacion, no existe la herencia como tal. Pero si existen los prototypos
*/

// Vamos a crear un prototipo de persona que va a saludar.

// Aqui tenenos el prototipo de Persona()
function Persona(nomb, apell, alt) {
    // Para guardarlo dentro del objeto que se esta construyendo en la memoria podemos hacemos referencia dentro de la funcion como --> this, este hace referencia la objeto que se acaba de construir
    this.nombre = nomb;
    this.apellido = apell;
    this.altura = alt;
}

// Dentro del prototipo de persona va existir un atributo saludar
Persona.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}.`)
}

// RETO: Agregamos el atributo de altura dentro del prototipo Persona()
Persona.prototype.soyAlto = function(){
    const ALTURA = 1.8;
    if (this.altura > ALTURA){
        console.log(`Mido más de 1.8 mts y soy alto.`);
    } else {
        console.log(`Mido menos de 1.8 mts y soy bajo.`)
    }
}

// Asi creamos objetos dado un prototipo, la palabre new es reservada del lenguaje y lo que hace es crear un nuevo objeto que ira asigando al prototipo que asignemos despues, en nuestro caso Persona()
let sacha = new Persona('Sacha', 'Lifszyc', 1.9);
console.log(sacha);
sacha.saludar();
sacha.soyAlto();


// Asi creamos mas facilmemnte mas objetos
let erika = new Persona('Erika', 'Luna');
erika.saludar();
erika.soyAlto()

let arturo = new Persona('Arturo', 'Martinez');
arturo.saludar();
arturo.soyAlto();


// Reto: agregar al constructor el atributo altura, tambien agregar la funcion soy alto y que lo retorne si mide 1.8mts


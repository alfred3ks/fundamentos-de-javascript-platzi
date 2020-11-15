/*
Las clases de JavaScript son introducidas en el ECMAScript 2015 y son una mejora en la sintaxis sobre la herencia basada en prototipos de JavaScript.

La palabra clave extends se usa en declaraciones de clase o expresiones de clase para crear una clase que es hija de otra clase.

El método constructor es un método especial para crear e inicializar un objeto creado a partir de una clase.
*/

// Asi creamo la clase Persona y que tiene un metodo llamado constructor, que es el que se va ejecutar al crear objetos de esta clase.
class Persona {
    constructor(nomb, apell, alt){
        this.nombre = nomb;
        this.apellido = apell;
        this.altura = alt;
    }
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}.`);
    }
    soyAlto() {
        const ALTURA = 1.8;
        if (this.altura > ALTURA){
            console.log(`Mido más de 1.8 mts y soy alto.`);
        } else {
            console.log(`Mido menos de 1.8 mts y soy bajo.`);
        }
    }
}

// Asi hacemos que una clase herede de otra, nuestro caso el desarrollador de persona

class Desarrollador extends Persona {
    constructor(nomb, apell, alt, nacionalidad) {
        super(nomb, apell, alt); // Las que tiene el padre
        this.nacionalidad = nacionalidad; // Las suyas en particular
    }
    saludar() {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy Desarrollador/a.`);
    }

    pais(){
        console.log(`Me llamo ${this.nombre} y soy de ${this.nacionalidad}.`)
    }
}

// Desarrollador -----------------------------------------

// Creamos los objetos
let sacha = new Persona('Sacha', 'Lifszyc', 1.9);
let erika = new Persona('Erika', 'Luna', 1.65);
let arturo = new Persona('Arturo', 'Martinez', 1.89);
sacha.saludar();
sacha.soyAlto();

// Creamos un objeto desarrollador
let mariano = new Desarrollador('Mariano', 'Marques', 1.75, 'Venezuela');
mariano.saludar();
mariano.soyAlto();
mariano.pais()

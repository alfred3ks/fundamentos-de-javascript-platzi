/*
En JavaScript, los parámetros de funciones son por defecto undefined. De todos modos, en algunas situaciones puede ser útil colocar un valor por defecto diferente que lo evalúe como verdadero.
*/

// Asi creamo la clase Persona y que tiene un metodo llamado constructor, que es el que se va ejecutar al crear objetos de esta clase.
class Persona {
    constructor(nomb, apell, alt){
        this.nombre = nomb;
        this.apellido = apell;
        this.altura = alt;
    }
    // recibe una funcion por parametro al ser llamada
    saludar(fn) {
        let { nombre, apellido } = this;// Otra manera de poner mas limpio
        // console.log(`Hola, me llamo ${this.nombre} ${this.apellido}.`);
        console.log(`Hola, me llamo ${nombre} ${apellido}.`);

        if(fn){
            fn(nombre,apellido);// Al no pasar el tercer paramatro evalua false y no se ejecuta abajo el saludo de dev
        }
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
    saludar(fn) {
        let { nombre, apellido } = this;
        // console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy Desarrollador/a.`);
        console.log(`Hola me llamo ${nombre} ${apellido} y soy Desarrollador/a.`);
        if(fn){
            fn(nombre,apellido,true); // true le dice que si es dev
        }
    }

    pais(){
        console.log(`Me llamo ${this.nombre} y soy de ${this.nacionalidad}.`)
    }
}

// Funciones como parametro, Muy interesante, creamos una funcion para que nos responda el saludo si somos desarrolladores y si no lo somos no responde solo saluda.

function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen día ${nombre} ${apellido}.`);
    if(esDev){
        console.log(`Ahh ok!!! No sabia que eras desarrollador/a.`);
    }
}

// Creamos los objetos
let susana = new Persona('Susana', 'Serrano', 45);
susana.saludar(responderSaludo);

let alfredo = new Desarrollador('Alfredo', 'Sánchez', 45,);
alfredo.saludar(responderSaludo);






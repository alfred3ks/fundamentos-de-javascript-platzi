/*
¿Como hago para que un prototipo herede de otro?

Los objetos en JavaScript son “contenedores” dinámicos de propiedades. Estos objetos poseen un enlace a un objeto prototipo. Cuando intentamos acceder a la propiedad de un objeto, la propiedad no sólo se busca en el propio objeto sino también en el prototipo del objeto, en el prototipo del prototipo, y así sucesivamente hasta que se encuentre una propiedad que coincida con el nombre o se alcance el final de la cadena de prototipos.
*/

// Bastante complejo de entender, necesitamos crear esta funcion.
function heredaDe(protipoHijo, prototipoPadre){
    // Aqui le decimos al hijo quien es el padre
    let fn = function() {}; // Creamos una funcion vacia
    fn.prototype = prototipoPadre.prototype;
    protipoHijo.prototype = new fn;
    protipoHijo.prototype.constructor = protipoHijo;

}

// Aqui tenenos el prototipo de Persona()
function Persona(nomb, apell, alt) {
    this.nombre = nomb;
    this.apellido = apell;
    this.altura = alt;
}

// Dentro del prototipo de persona va existir un atributo saludar(metodo)
Persona.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}.`)
}

Persona.prototype.soyAlto = function(){
    const ALTURA = 1.8;
    if (this.altura > ALTURA){
        console.log(`Mido más de 1.8 mts y soy alto.`);
    } else {
        console.log(`Mido menos de 1.8 mts y soy bajo.`)
    }
}

// Herencia prototipal en JS. Desarrollador ------
function Desarrollador(nomb, apell){
    this.nombre = nomb;
    this.apellido = apell;
}

heredaDe(Desarrollador, Persona);

Desarrollador.prototype.saludar = function(){
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy Desarrollador/a.`);
}

// Desarrollador -----------------------------------------

// Creamos los objetos
let sacha = new Persona('Sacha', 'Lifszyc', 1.9);
let erika = new Persona('Erika', 'Luna', 1.65);
let arturo = new Persona('Arturo', 'Martinez', 1.89);
sacha.saludar();
sacha.soyAlto();

// Creamos un objeto desarrollador
let mariano = new Desarrollador('Mariano', 'Marques', 1.75)
mariano.saludar();
mariano.soyAlto();

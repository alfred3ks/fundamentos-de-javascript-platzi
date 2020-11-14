/*
En esta clase veremos cómo se modifican las clases de herencias. JavaScript funciona con una estructura orientada a objetos y cada objeto tiene una propiedad privada que mantiene un enlace a otro objeto llamado prototipo.
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
let erika = new Persona('Erika', 'Luna', 1.65);
let arturo = new Persona('Arturo', 'Martinez', 1.89);

sacha.saludar();
sacha.soyAlto();

erika.saludar();
erika.soyAlto()

arturo.saludar();
arturo.soyAlto();


/*
Nota:
- Los prototypos debemos definirlos todos juntos despues del constructor.
- dentro del prototypo no usar arrow function, ya que no tiene el comportamiento correcto con this. Eso queda mas claro en el siguiente video.
*/


// Desestructurar objetos, forma como accedemos a los atributos de lo cada objeto.

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
    var { nombre } = persona;
    var { edad } = persona;
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años.`)
}

imprimirReto(alfred);
imprimirReto(chris);
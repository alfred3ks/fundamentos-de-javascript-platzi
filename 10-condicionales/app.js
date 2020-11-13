// Condicionales en JS. Estructuras de control.

// Las estructuras de control deciden si un codigo se ejecuta o no.

let sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 16,
    ingeniero: false,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: true
}

// Definimos una funcion que nos dice que profesion tiene una persona

function imprimirPrefesiones(persona){
    console.log(`${persona.nombre} es: `)

// if(persona.ingeniero === true)
    if(persona.ingeniero){
        console.log('Ingeniero.');
    } else {
        console.log('No es ingeniero.')
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

imprimirPrefesiones(sacha);

// Como podemos ver con el if solo se ejecuta el codigo que es true.

// Reto: escribir la funcion imprimirSiEsMayorDeEdad().

function imprimirSiEsMayorDeEdad(persona){
    if(persona.edad >= 18){
        console.log(`${persona.nombre} es mayor de edad.`)
    } else {
        console.log(`${persona.nombre} es menor de edad.`)
    }
}

imprimirSiEsMayorDeEdad(sacha);





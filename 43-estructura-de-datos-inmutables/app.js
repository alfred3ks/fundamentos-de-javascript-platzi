/*
Las estructuras de datos inmutables forman parte de los principios de la Programación Funcional y nos permiten evitar tener efectos colaterales en los datos. En otras palabras, que hayan modificaciones en las variables sin nuestro consentimiento, produciendo comportamientos inesperados en el programa.
*/

const sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszic',
    edad: 28
}

// Como recordamos la funcion altera y modifica el objeto inicial generando un efecto de lado.
/*const cumpleanos = (persona) => {
    return persona.edad++
}
cumpleanos(sacha)*/

// de esta manera estamos creando un nuevo objeto y no modificamos el original
const cumpleanosInmutable = (persona) => {
    return {
        ...persona,
        edad: persona.edad +1
    }
}

console.log(sacha)
console.log(cumpleanosInmutable(sacha))
console.log(sacha)















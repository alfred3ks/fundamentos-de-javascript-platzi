/*
El contexto (o alcance) de una función es por lo general, window. Así que en ciertos casos, cuando intentamos referirnos a this en alguna parte del código, es posible que tengamos un comportamiento inesperado, porque el contexto quizás no sea el que esperamos.

Existen al menos tres maneras de cambiar el contexto de una función.

- Usando el método .bind, enviamos la referencia a la función sin ejecutarla, pasando el contexto como parámetro.
- Usando el método .call, ejecutamos inmediatamente la función con el contexto indicado
- Usando el método .apply, es similar a .call pero los parámetros adicionales se pasan como un arreglo de valores
*/


const alfred = {
    nombre: 'Alfred',
    apellido: 'Sánchez',
    edad: 45
}
const jose = {
    nombre: 'Jose',
    apellido: 'Morales',
    edad: 33
}

function saludar(saludo = 'Hola') {
    console.log(`${saludo}, mi nombre es ${this.nombre}`) // Hola, mi nombre es undefined
}
saludar(alfred)

// Con el metodo bind() le pegamos en contexto a windows
const saludarAAlfred = saludar.bind(alfred)
saludarAAlfred()
const saludarAJose = saludar.bind(jose)
saludarAJose()


setTimeout(saludar.bind(alfred, 'hola men'),2000)

setTimeout(saludar.bind(jose),3000)

// call y apply

saludar.call(alfred, 'Q tal men')

saludar.apply(alfred,['Eyy men'])

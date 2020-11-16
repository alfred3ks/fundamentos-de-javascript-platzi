/*
El punto y coma es opcional en JavaScript, excepto en algunos casos:

Cuando usamos varias instrucciones en una mísma línea
Al comenzar la próxima línea con un array
Al comenzar la próxima línea con un template string
*/

// Caso 1

console.log('Hola'); // aqui si es necesario, luego de una sentencia iniciamos con un array
[1,2,3,4].forEach(n => {
    console.log(n * 2)
});

// caso 2
const name = 'Alf'
console.log('Hola'); // aqui si es necesario, luego de una sentencia iniciamos con un las comillas invertidas
`${name} es un dev`

// caso 3
function calcularDoble(n){
    return {
        original: n, doble: n * 2
    }
}
/*function calcularDoble(n){
    return este salto de linea da error, es como si tuviera un ;
    {
        origina: n, doble: n * 2
    }
}
*/

let result = calcularDoble(40)
console.log(result)





















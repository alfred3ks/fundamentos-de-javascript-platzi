/*
Otra estructura repetitiva es el do-while. A diferencia de la instrucción while, un bucle do…while se ejecuta una vez antes de que se evalúe la expresión condicional.
Debemos definir una variable contador.

Reto, resuelve el bug que tiene el ejercicio.
*/

// En argentina cuando una persona molesta mucho se le manda a la esquina a ver si llueve

let contador = 0;

// Llueve el 25% del tiempo
const llueve = () => Math.random() < 0.35;

do {
    contador++;
} while (!llueve());

// Resolucion del bug, cuando imprime 1 veces debe ser vez.
let frecuencia;

if(contador === 1) {
    frecuencia = 'vez';
} else {
    frecuencia = 'veces'
}

console.log(`Fui a ver si llovia ${contador} ${frecuencia}.`);


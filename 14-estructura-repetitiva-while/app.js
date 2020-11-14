/*
En esta clase estudiaremos otra estructura repetitiva llamada while. While se ejecuta únicamente mientras la condición que se está evaluando es verdadera.

En ocasiones nuestro código puede fallar por errores de syntaxis o errores lógicos. En caso de que quieras verificar tu código, debes utilizar un debugger. El código se detiene cada vez que lee esta palabra.
*/

let sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszic',
    edad: 28,
    peso: 75
}

console.log(`Al inicio del año ${sacha.nombre} pesa ${sacha.peso} Kg.`);


const PESO = 0.3;
const DIAS_DEL_ANO = 365;

// El incremento de peso es de 200grs
const aumentarDePeso = persona => persona.peso += PESO;

// La perdida de peso es de 200grs
const adelgazar = persona => persona.peso -=PESO;

// Colocamos el ramdon en una funcion, come mucho por debajo del 30% de los dias
const comeMucho = () => Math.random() < 0.3;

// Hacemos un afuncion que realiza deporte, el 40% de los dias.
const realizaDeporte = () => Math.random() < 0.4;

// Debe perder 3 kg como meta a ver si la cumple
const META = sacha.peso - 3;
let dias = 0;

while(sacha.peso > META){
    if(comeMucho()){
        //aumenta de peso
        aumentarDePeso(sacha);
    }
    if(realizaDeporte()) {
        //disminuye de
        adelgazar(sacha);
    }
    dias += 1;
}

console.log(`Pasaron ${dias} dias hasta que ${sacha.nombre} adelgazo 3Kg.`);
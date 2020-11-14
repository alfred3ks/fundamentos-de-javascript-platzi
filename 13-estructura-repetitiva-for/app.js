/*
En esta clase estudiaremos una de las estructuras básicas de control. El bucle for, se utiliza para repetir una o más instrucciones un determinado número de veces.

Para escribir un bucle for se coloca la palabra for seguida de paréntesis y llaves.
Ej. for( ){ }. Dentro de los paréntesis irán las condiciones para ejecutar el bucle, y dentro las llaves irán las instrucciones que se deben repetir.

En este ejemplo la variable i la utilizamos como contador.

Ciclo for --> dentro del () inicializamos con un contador en nuestro caso la variable i, luego le damos la condicion, y luego el incremento que va a tener nuestro contador.
*/

// En este ejercicio vamos a ver como una persona incrementa o disminuye su peso en un año de manera aleatoria usando la biblioteca de JS Math.

let sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszic',
    edad: 28,
    peso: 75
}

console.log(`Al inicio del año ${sacha.nombre} pesa ${sacha.peso} Kg.`);
console.log(Math.random().toFixed(2));

const PESO = 0.2;

// El incremento de peso es de 200grs
const aumentarDePeso = persona => persona.peso += PESO;

// La perdida de peso es de 200grs
const adelgazar = persona => persona.peso -=PESO;

const DIAS_DEL_ANO = 365;

for( let i = 1; i <= DIAS_DEL_ANO; i++) {
    let random = Math.random();

    if(random < 0.25){
        //aumenta de peso
        aumentarDePeso(sacha);
    }else if(random < 0.5) {
        // adelgazar
        adelgazar(sacha);
    }
}

console.log(`Al final del año ${sacha.nombre} pesa ${sacha.peso.toFixed(1)} Kg.`);

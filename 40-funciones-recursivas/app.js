/*
La recursividad es un concepto muy importante en cualquier lenguaje de programación. Una función recursiva es básicamente aquella que se llama (o se ejecuta) a sí misma de forma controlada, hasta que sucede una condición base.

13/ 4

13-4 = 9   1
9-4  = 5   1
5-4  = 1   1
1-4  =-3   0

*/

function divisionEntera(dividendo, divisor){
    if(dividendo < divisor){
        return 0
    }
    return 1 + divisionEntera(dividendo - divisor, divisor)
}

let result = divisionEntera(13,4);
console.log(result)









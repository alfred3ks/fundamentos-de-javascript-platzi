/*
Con variables de tipo Date, se pueden realizar operaciones de suma y resta similares a las que se realizan con números. El resultado que se obtiene está en milisegundos, por lo que luego hay que hacer algunas operaciones adicionales para llevarlos a días, meses o años según queramos. También aplica para Horas, Minutos, Segundos y Milisegundos.

Manejo de fechas dentro de JS
*/

// Calculo de los dias desde mi nacimiento

function diasEntrefechas(fecha1, fecha2){
    const unDia = 1000 * 60 * 60 * 24
    const diferencia = Math.abs(fecha1 -fecha2)
    return Math.floor(diferencia / unDia)
}

const hoy = new Date()
const nacimiento = new Date(1975,7,14)

console.log(hoy)
console.log(nacimiento)
let diasDesdeQueNaci = diasEntrefechas(hoy,nacimiento)
console.log(diasDesdeQueNaci)

let edad = Math.floor(diasDesdeQueNaci / 365)
console.log(edad)





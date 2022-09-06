/*
Existen varias maneras de comparar variables u objetos dentro de javascript. En el primer ejemplo le asignamos a X un valor numérico y a Y un string. Para poder compararlos debemos agregar dos signos de igual (==). Esto los convierte al mismo tipo de valor y permite que se puedan comparar.

Cuando realizamos operaciones es recomendable usar tres símbolos de igual (===). Esto permite que JavasScript no iguale las variables que son de distinto tipo. Te recomendamos que uses el triple igual siempre que estés comparando variables.

Existen cinco tipos de datos que son primitivos:

Boolean
Null
Undefined
Number
String
*/

let x = 4;
let y = '4';

// Primera forma de comparar cosas en JS, para eso usaremos el ==, doble igual.

console.log(x == y); // true

// Cuando usamos doble igual (==)en JS lo que hace el lenguaje es comparar ambas variables en el tipo de la variable, agarra el valor de x = 4 numerico y lo tranasforma a string y lo compara con la variable y = '4' que es otro string por eso nos devuelve true. OJO solo los compara en tipos. Si queremos saber su comparacion en valor y tipo debemos unsar triple igual (===).

console.log(x === y); // false

// OJO IMPORTANTE!!! - Lo recomendable siempre que podamos usar el triple igual (===) cuando tengamos que hacer comparaciones.

//Ok ahora veamos como se comporta JS al comparar objetos.

let sacha = {
    nombre: 'Sacha'
}

let otraPersona = {
    nombre: ' Sacha'
}

// Hacemos la comparacion
console.log(sacha == otraPersona); //false
console.log(sacha === otraPersona); //false

// Muy diferente a lo de arriba que compara valores primitivos. Aqui la comparacion es de objetos, con (==) o (===) lo que hace JS es preguntar por la referencia de la variable que estamos utilizando. Si nos interesa que nos diera true la unica forma de hacerlo es como vemos a continuacion: La variable segundaPersona apunta a la misma referencia del primer objeto, osea el mismo espacio en memoria del ordenador

let segundaPersona = sacha;
console.log(sacha == segundaPersona); //true
console.log(sacha === segundaPersona); //true

// Ahora veamo con la creacion de otro objeto

let terceraPersona = {
    ...sacha
}

console.log(sacha == terceraPersona); //false
console.log(sacha === terceraPersona); //false

// Como podemos ver da false porque dentro del objeto terceraPersona estamos creando un nuevo objeto, no es el mismo primer objeto y sus referencias son diferentes.

// Ahora veamos otro ejemplo, tenemos un objeto inicial y un segundo objeto que apunta al primero si modificamos al segundo objeto tambien modificamos al primero ya que ambis apuntan a la misma referencia:

let obj1 = {
    nombre: 'Sacha'
}
console.log(sacha); // {nombre: "Sacha"}

let obj2 = sacha;
console.log(sacha); // {nombre: "Sacha"}

sacha.nombre = 'Pepe';

console.log(sacha); // {nombre: "Pepe"}

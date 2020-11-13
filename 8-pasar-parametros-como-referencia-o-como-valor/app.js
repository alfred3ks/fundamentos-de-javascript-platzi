// Veamos como pasar valores a nuestras funciones como referencia o como valor

// Creamos nuestros objetos.

var alfred = {
    nombre: '',
    apellido: 'Sánchez',
    edad: 45
}

var chris = {
    nombre: 'Christian',
    apellido: 'Sánchez',
    edad: 10
}

function imprimeNombreEnMay(persona){
    // var nombre = persona.nombre --> Lo mismo que abajo
    var { nombre } = persona;
    console.log(nombre.toUpperCase());
}

imprimeNombreEnMay(alfred);
imprimeNombreEnMay(chris);

// Veamos el tema de pasar parametros

function cumpleanos(persona){
    var persona = persona.edad +=1;
    console.log(persona);

}

console.log(alfred);

cumpleanos(alfred);

console.log(alfred);

cumpleanos(alfred);
cumpleanos(alfred);
cumpleanos(alfred);

console.log(alfred);


// Como podemos ver JS tiene un tipo de comportamiento distinto con los objetos, que al sumar la edad esta se modifica en el objeto inicila y si volvemos a incrementar la edad esta siempre se modificaria en el objeto, esto no nos conviene, queremos que el objeto original no se modifique.

// LOS OBJETOS QUE PASAMOS POR PARAMETROS SE PASAN POR "REFERENCIA", eso quiere decir que si lo modificamos dentro del cuerpo de una funcion su valor se va a ver modificado fuera de esa funcion.

// Ahora como ¿podemos evitar esto? bueno una es dejarlo como esta sabiendo lo que sucede que nuestro objeto inicial seria modificado porque es algo que realmente queremos, o tambien podemos devolver un nuevo objeto y este nuevo objeto debe tener todo lo mismo del objeto original excepto la edad que se debe incrementar, asi no modificamos el objeto original


var susan = {
    nombre: 'Susana',
    apellido: 'Serrano',
    edad: 45
}

var leonard = {
    nombre: 'Leonardo',
    apellido: 'Turtle',
    edad: 15
}

function cumpleanoGood(persona){
    // Desglosamos a la persona dentro de este nuevo objeto
    return {
        ...persona,
        edad: persona.edad + 1
    }
    console.log(persona)
}

//Objeto original
console.log(susan);
// Objeto al sumar en 1 la edad

var susanTwoObj= cumpleanoGood(susan);
console.log(susanTwoObj);

// Vemos que no se altera el objeto original
console.log(susan);

// Ahora vemos el ejemplo con tortle

function cumpleanos(persona){
    return {
        ...persona,
        edad: persona.edad + 1
    }
}

var newLeonard = cumpleanos(leonard);

console.log(leonard);
console.log(newLeonard);
console.log(leonard)

/*
Una ultima estructura de control se llama switch. Switch se utiliza para realizar diferentes acciones basadas en múltiples condiciones.

Prompt, muestra un cuadro de mensaje que le pide al usuario que ingrese algúna información.

Break, sirve para que el browser se salte un bucle.
*/

/* Vamos a decirle el horoscopo al usuario. Usaremos un web de referencia: 

https://www.lanacion.com.ar/horoscopo

*/

let signo = prompt('¿Cual es tu signo?');
console.log(signo);

let aries = 'Antes de avanzar, primero deberá tener en claro a dónde quiere llegar. Sepa que contará con el empuje necesario para conquistar todo lo que desee.';
let tauro = 'Si usted pretende cumplir con todos los objetivos, debería poner más entusiasmo en lo que hace. Evite relajarse, ya que podría perder cualquier oportunidad.';
let geminis = 'Deje de cometer siempre el mismo error al desvalorizarse continuamente. Aunque usted no lo vea, sus méritos son muy bien reconocidos por la gente que lo rodea.';
let cancer = 'Será una jornada donde se enfrentará con demasiadas opciones y tendrá que decidir la más conveniente. Relájese y espere a mañana para la determinación.';
let leo = 'Transitará un excelente momento para poner todo su esfuerzo y apostar a las cosas materiales con las que siempre soñó. Gracias a su inteligencia lo conseguirá.';
let virgo = 'Prepárese, ya que será una excelente jornada para concretar esos proyectos pendientes que hace tiempo tiene y se le dificultó alcanzar por su irresponsabilidad.';
let libra = 'Ponga todo su entusiasmo para poder concretar las metas. Ante todo, deberá tener en claro qué es lo que quiere realmente y esforzarse por conseguirlo.';
let escorpio = 'No quiera volver a vivir sus viejas historias, intente abandonar su pasado. Comience a sobrellevar el presente de otra manera y se sentirá menos angustiado.';
let sagitario = 'Momento oportuno para que empiece a creer en su imaginación que será indispensable para resolver cualquiera de los inconvenientes que aparezcan.';
let capricornio = 'Sepa que hoy despertará con mucha energía y con ganas de encontrar la felicidad después de tanto sufrimiento. Aproveche que se sentirá más jovial que nunca.';
let acuario = 'Después de tantos inconvenientes, sería óptimo que organice adecuadamente su vida personal. Haga los cambios que crea necesarios comenzando por su hogar.';
let piscis = 'Transitará un día fuera de lo común donde podrá aplicar su lado más perceptivo y libre. Haga lo que haga, se sentirá espléndido. Nadie podrá opacarlo.';

switch (signo) {
    case 'aries':
        console.log(aries);
    break;
    case 'tauro':
        console.log(tauro);
    break;
    case 'geminis':
    case 'géminis':
        console.log(geminis);
    break;
    case 'cancer':
        console.log(cancer);
    break;
    case 'leo':
        console.log(leo);
    break;
    case 'libra':
        console.log(libra);
    break;
    case 'virgo':
        console.log(virgo);
    break;
    case 'escorpio':
        console.log(escorpio);
    break;
    case 'sagitario':
        console.log(sagitario);
    break;
    case 'capricornio':
        console.log(capricornio);
    break;
    case 'piscis':
        console.log(piscis);
    break;
    default:
        console.log('Ese signo zodiacal no es valido');
    break;
}



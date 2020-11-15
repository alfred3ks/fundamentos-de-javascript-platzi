/*
En principio, cualquier tarea que se haya delegado al navegador a través de un callback, deberá esperar hasta que todas las instrucciones del programa principal se hayan ejecutado. Por esta razón el tiempo de espera definido en funciones como setTimeout, no garantizan que el callback se ejecute en ese tiempo exactamente, sino en cualquier momento a partir de allí, sólo cuando la cola de tareas se haya vaciado.
*/

// Veamos el tema del tiempo en JS, queremos que el segundo console lo ejecute pasado un tiempo. Usaremos una funcion del lenguaje setTimeout() que recibe dos parametros uno es una funcion y el otro el tiempo en milisegundos.

console.log('a');

setTimeout(function(){
    console.log('b');
},0)

console.log('c');

// NOTA. Si en vez de los 3000 ms le ponemos 0, vemos que se imprimen al instante pero.... imprime a,c,b eso porque el segundo console es enviado al navegador y este la envia a la cola de tareas y Js se continua ejecutando el resto del codigo y cuando finaliza es que le pide al navegador que tarea tiene pendiente y le envia la funcion.

// Ahora veamos otro ejemplo:
// Tenemos una funcion que se ejecuta pasados 2seg, Como vemos se ejecuta sin problemas
setTimeout(()=> console.log('d'),2000);

// Ahora que pasa si tenemos mas codigo a continuacion y este tarda en ejecutarse
for(let i = 0; i < 10000000000; i++){

}

// Como podemos ver JS sigue ejecutandose pro hasta que no se termine de jecutar el ciclo for no va a ejecutar el setTimeOut, el ciclo for bloquea el event loop y hasta que este no termine no se ejecutara luego el setTimeout.




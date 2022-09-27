'use strict'

// Modo estricuto ('use strict');

/*
-Convierte errores de JS en excepciones

-Mejora la optimizacion de los errores y consigue mejores tiempo de ejecución

-Evita sintaxis usadas posteriores a ES6

-No permite que el programador realiza una mala sintaxis.
*/ 

/*
USANDO MODO ESTRICTO

-TENEMOS DOS FORMAS DE USARLO, EN LAS FUNCIONES Y EN EL SCOPE GLOBAL
*/

//let nombre = 'dani';

const obj = {};

Object.defineProperty(obj,'nombre', {value:'Pedro',writable:false});


console.log(obj.nombre);
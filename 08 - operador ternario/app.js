//Operador Ternario -> Este operador es casi un condicional, no es una sentencia condicional.

'use strict'

let edad = 15;

if(edad>18) {
    console.log('Condicional Normal -> Es Mayor de edad');
    console.log('Comeme los huevos');
}else{
    console.log('Condicional Normal -> Es menor de edad');
    console.log('Hijo de p...');
} 


(edad>18) ? (
    console.log('Operador Ternario -> Es Mayor de edad'),
    console.log('Comeme los huevos'))
    :(console.log('Operador Ternario -> Es menor de edad'),
    console.log('Hijo de p...'));

//El operador ternario consume menos recursos que el if.

'use strict'

//FUNCIONES FLECHA

//*Por qué aparecieron? (Funciones compactas y el uso de This) Aparecieron por muchos problemas en el pasado. Pueden hacer cosas que las funciones comunes no.

const saludar = ()=>{
    console.log('Hola');
    console.log('Como estas¿?');
}

saludar();

//*Si solo le pasamos una expresion, la retornan

// let nombre = '';
// let saludar1 = function(){return nombre = 'Dani'}; //Old school
// saludar1 = () => nombre = 'Dani' //New School

// const resultado = saludar1();
// console.log(resultado);
// document.write(resultado);


//* Parentensis opcionales ante un solo parámetro(Sin parámetros requiere parentesis)

nombre = '';
//let saludar1 = function(res){return nombre = res}; 
const saludar1 = res => nombre = res;

const resultado = saludar1('Dani');
console.log(resultado);

//*No son adecuadas para ser usadas como métodos y no pueden ser usadas como constructores.

const objeto = {
    nombre : 'Dani',
    saludar : function(){console.log(`Hola ${this.nombre}`);
    }
};

objeto.saludar(); 

//window.nombre = 'Puto';

//el this, hace referencia al objeto window, en la funcion flecha el this se refiere al objeto que está llamando a la funcion, por lo que siempre nos devolverá undefined... . Por lo tanto tampoco puede ser tomada como funciones constructoras!

const objeto2 = {
    nombre : 'Dani',
    saludar : () => {console.log(`Hola ${this.nombre}`);
    }
};

objeto2.saludar();



//*Retornan literales si su cuerpo está entre ();

//*This contextual. (No tienen propio this, sino que toman el de la función que lo envuelve)

console.log(window === this);
console.log(this);

this.nombre = 'Dani'; //Usando el 'use strict' si this. no está dentro de un objeto, este se refiere a window.

function saludarThis(){
    console.log(`Hola ${this.nombre}`);
}
const objeto3 = {
    nombre : 'Dani',
    saludar : saludarThis

}
objeto3.saludar();



//*Las reglas de modo estricto aplicadas a This, son ignoradas

//*Función flecha invocada a través de los métodos call, apply y bind.

//No tienen objeto Arguments. 

//No tienen propiedad del prototipo prototype. 

//No se puede usar Yield(No se pueden usar como funciones generadoras).

//No puede contener saltos de linea entre sus parametros y su flecha.

//Orden de parseo.
'use strict'

//*Funciones RECURSIVAS -> Funciones que se llaman a si mísmas.

// const validarEdad = (msg) =>{
//     let edad;
//     try{
//         if(msg) edad = prompt(msg);
//         else edad = prompt('Introduce tu edad');
//         edad = parseInt(edad);
//         if(isNan(edad)) throw 'Debes introducir un número para la edad';
//         if(edad > 18) console.log('Eres mayor de edad');
//         else console.log('Eres menor de edad')
//     }catch(err){
//         validarEdad(err)
//     }  
// };

const validarEdad = (msn) => {
    let edad;
    try{
        if (msn) edad = prompt(msn);
        else edad = prompt('Introduce tu edad');
        edad = parseInt(edad);
        if(isNaN(edad)) throw 'Introduce un número correcto';
        if(edad >= 18) console.log('Eres mayor de edad');
        else console.log('Eres menor de edad')
    }catch(err){
        validarEdad(err);
    }
}

validarEdad();



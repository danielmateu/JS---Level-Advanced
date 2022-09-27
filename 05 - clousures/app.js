'use strict'

//CLOUSURES o cierres -> Son funciones que retornan otras funciones

// const saludar = (nombre)=>{
//     return function(){
//         console.log(`Hola ${nombre}`);;
//     }
// }

// let saludo = saludar('Pedro');

// addEventListener('load', saludo)

const changeSize = size =>{
    return()=>{
        document.querySelector('.texto').style.fontSize = `${size}px`;
        console.log(`Cambio de tamaño a ${size}px`);
    }
}

const px12 = changeSize(12);
const px14 = changeSize(14);
const px16 = changeSize(16);

document.getElementById('12').addEventListener('click', px12);
document.getElementById('14').addEventListener('click', px14);
document.getElementById('16').addEventListener('click', px16);






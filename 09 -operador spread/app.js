'use strict'

//Operador Spread -> Tiene muchos usos: Parametro rest

//Lo podemos usar para añadir arrays a otros arrays

let arr = ['manzana', 'pera','banana'];
let arr2 = ['kiwi','naranja'];

arr.push(...arr2)

console.log(arr);

//Lo podemos usar para concatenar arrays

let arr3 = [...arr,arr2];

console.log(arr3);

//Lo podemos pasar como Argumento rest. Descompone los elementos donde le llamemos

const sumar = (num1,num2)=>{
    console.log(num1 + num2);
}

let arr4 = [3,6];
sumar(...arr4)

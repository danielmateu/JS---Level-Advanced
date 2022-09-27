'use strict'

//Parámetros por defecto -> En el caso que no se pasen los parametros necesarios para la funcion
    //Se le puede asignar el valor en el mísmo parametro
const suma = (a = 0,b = 0)=>{
    //b = b || 0; //Si no tiene valor, se le asigna

    console.log(a + b);
}

suma(1,2)

//Si nos pasa otro parametro, usaremos el parametro rest (...rest). El parámetro rest, siempre debe ser el último parámetro

const sumaArray = (frase, ...num)=>{
    let resultado = 0;
    
    for(let i in num){
        resultado += num[i];
    }
    console.log(`${frase} ${resultado}`);
}

sumaArray('Suma ->',2,4,6,10,100);

const restaArray = (frase, ...num)=>{
    let resultado = 0;

    for(let i in num){
        resultado -= num[i];
    }
    console.log(num);
    console.log(`${frase} ${resultado}`);

}

restaArray('Resta ->', 4,6,10);

const mediaArray = (frase,...num) => {
    let resultado = 0;

    for(let i in num){
        resultado += num[i];
    }
    let media = resultado/num.length
    console.log(`${frase} ${media}`);
}

mediaArray('Media Array ->', 25,25,25,50)
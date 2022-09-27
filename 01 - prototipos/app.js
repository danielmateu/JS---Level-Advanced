//Prototipos

// -Prototype Chain: 

let array = ['Dani',2,null];

array.reverse();

console.log(array);



// -prototype Object: 

//Características

// Un prototipo definido en su codigo fuente es mutable.

//Es en si mísmo un objeto, así como otros

//Tiene una existencia física en la memoria

//Puede ser modificado y llamado

//Puede ser visto como un modelo ejemplar de una familia objeto

//Un objeto hereda propiedades(valor y métodos) de su prototipo.

class Objeto {
    constructor(){};
    hablar(){
        console.log('Hola!');
    };
}

const objeto = new Objeto();
console.log(objeto);

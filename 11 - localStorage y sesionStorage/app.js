'use strict'

//localStorage y sessionStorage -> Estas apis tiene una sola diferencia, en una la información se pierde al cerrar la pag y en la otra, la información se mantiene.

//sessionStorage -> La info se mantiene durante la sesion, al cerrar, todo se pierde con el localStorage no.

let nombre2 = sessionStorage.setItem('nombre','Silvia');

console.log(localStorage);

nombre2 = sessionStorage.getItem('nombre');

console.log(nombre2);



//DIferencias

//setItem()
let nombre = localStorage.setItem('nombre','Dani');

console.log(localStorage);


//getItem()

nombre = localStorage.getItem('nombre');

//removeItem() -> Elimina el litem
setTimeout(() =>{
    let nombre = localStorage.removeItem('nombre','Dani');
    console.log(nombre);
})
//clear() -> Nos limpia todo el local storage!

// setTimeout(() =>{
//     localStorage.clear()
// },4000)

//Ejemplo de Uso (Idioma)

const definirIdioma =()=>{
    document.querySelector('.eng').addEventListener('click',()=>{
        localStorage.setItem('Idioma', 'eng');
        cerrarModal();
        mostrarEnIngles()
    });
    document.querySelector('.esp').addEventListener('click',()=>{
        localStorage.setItem('Idioma', 'esp');
        cerrarModal();
        mostrarEnEspañol();
    })


}

const cerrarModal =()=>{
    const modal = document.querySelector('.modal-overlay');
    modal.style.animation = 'desaparecer 1s forwards';
    setTimeout(()=>modal.style.display = 'none 5000')
}

const idioma = localStorage.getItem('Idioma');
const modal = document.querySelector('.modal-overlay');
if(idioma === null) definirIdioma();
else {
    console.log(`Idioma ${idioma}`);
    modal.style.display = 'none';
}




const mostrarEnEspañol =()=>{
    const castellano = document.querySelector('.idioma-esp');
    castellano.style.animation = 'aparecer 1s forwards';
    castellano.classList.add('display:block');
}

const mostrarEnIngles =()=>{
    const ingles = document.querySelector('.idioma-eng');
    ingles.style.animation = 'aparecer 1s forwards';
    ingles.classList.add('display:block');
}

if(idioma === 'esp') mostrarEnEspañol();
if(idioma === 'eng') mostrarEnIngles();


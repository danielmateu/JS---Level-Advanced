'use strict'

// Intersection Observer -> Sirve para observar si algo está en el viewport del navegador o no

//Qué es y para que sirve

//IntersectionObserver()

//callback y options

//isIntersecting

//configurar options

//Ejemplo de uso (Lazy Load)

const cajas = document.querySelectorAll('.caja')
const caja3 = document.querySelector('.caja3')

const verifyVisibility = entries =>{
    for(let entry of entries){
        if(entry.isIntersecting) console.log(`Se está viendo la ${entry.target.textContent}`);
    }
}

const options = {
    rootMargin: '-120px',//Se muestra cuando le indicamos
    treshold: [0.5] //Cuanto va a ocupar el cuerpo
}

const observer = new IntersectionObserver(verifyVisibility,options)

//observer.observe(caja3)

for(let caja of cajas){
    observer.observe(caja)
    //console.log(cajas);
}


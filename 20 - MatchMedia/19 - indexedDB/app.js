'use strict'

// matchMedia() Api de JS para trabajar el responsive design, se debería usar cuando no tengamos la opción de usar CSS.

// propiedad match

// evento onchange

// ¿Cuando debería usarlo? 

const mq = matchMedia('(max-width: 500px)');
const caja = document.querySelector('.caja');

mq.addEventListener('change', ()=>{
    if(mq.matches) caja.classList.replace('caja','responsive-caja');
    else if (caja.className == 'responsive-caja') caja.classList.replace('responsive-caja','caja');
})

console.log(mq.matches);
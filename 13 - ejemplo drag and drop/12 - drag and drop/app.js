'use strict'

const texturas = document.querySelector('.texturas');

const textura1 = document.querySelector('.textura-1');
const textura2 = document.querySelector('.textura-2');
const textura3 = document.querySelector('.textura-3');
const textura4 = document.querySelector('.textura-4');
const textura5 = document.querySelector('.textura-5');

const zona = document.querySelector('.zona');
zona.addEventListener('dragover', (e)=>{
    e.preventDefault();
})

zona.addEventListener('drop', (e)=>{
    let n = e.dataTransfer.getData('textura');
    zona.style.animation = 'aparecer 1s forwards';
    zona.style.background = `url(./img/textura${n}.png)`;
    
});

const transferirTextura = (n,e) =>{
    e.dataTransfer.setData('textura',n)
}

for(let i = 1; i< texturas.children.length + 1; i++){
    document.querySelector(`.textura-${i}`).addEventListener('dragstart', (e) => transferirTextura(i,e));
    
}

'use strict'

//DRAG AND DROP -> 

//EVENTOS DEL OBJETO 

const circulo = document.querySelector('.circulo');
const rectangulo = document.querySelector('.rectangulo');

//dragstart

circulo.addEventListener('dragstart',(e)=>{
    e.dataTransfer.setData('text-plain',e.target.className);
    e.dataTransfer.getData('text-plain')
    //console.log('Cojo',e.dataTransfer);
    console.log( e.dataTransfer.getData('text-plain'));
});

//drag

//circulo.addEventListener('drag',()=>console.log('Arrastro'));

//dragend

circulo.addEventListener('dragend',()=>console.log('Suelto'));

//EVENTOS DE LA ZONA

//dragenter
rectangulo.addEventListener('dragenter',()=>console.log('Has entrado'));

//dragmove
rectangulo.addEventListener('dragover',(e)=>{
    e.preventDefault();
    console.log('Te estás moviendo');
});

//drop -> Verifica cuando se suelta
rectangulo.addEventListener('drop',(e)=>{
    //console.log('Has soltado algo')
    console.log(e.dataTransfer.getData('text-plain'));
});

//dragleave -> Verifica cuando se va
rectangulo.addEventListener('dragleave',()=>console.log('Has salido'));

//PROPIEDAD dataTransfer

//getData()

//setData()

'use strict'

//Service Workers -> 

//Instruccion para generar un Service Worker
if(navigator.serviceWorker){
    navigator.serviceWorker.register('sw.js')
}

navigator.serviceWorker.ready.then(res => res.active.postMessage('Hola cómo estás?'));

navigator.serviceWorker.addEventListener('message', e=>{
    console.log('Mensaje recibido del service worker:');
    console.log(e.data);
})
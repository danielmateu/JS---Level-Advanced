'use strict'

// Web Workers

// Tipos de web worker ( dedicated Worker, Service Worker , Shared Worker y Abstract Worker)

// Dedicated Worker: Worker() (Constructor)

const worker = new Worker('worker.js');

document.querySelector('.button').addEventListener('click', ()=> ejecutarBucle())
worker.addEventListener('message',e=>{
    console.log(e.data);
    worker.terminate();
})

const ejecutarBucle = ()=>{
    worker.postMessage('Que tal tío, todo bien?');
    
    
}

console.log(worker);


// const cargarData = async div =>{
//     const req = await fetch('informacion.txt');
//     const res = await req.json();
//     //console.log(res);
//     const arr = res;
//     document.querySelector(div).innerHTML = arr;
    
// }

console.log(worker);

//Parámetro Options (type, credentials y name)

//Método postMassage() (Enviar mensajes entre el web worker y el script principal)

//Evento onmessage (Recibir mensajes entre el web worker y el script principal)

//Método terminate() (Finaliza ejecución del web worker)

//Política de origen cruzado (same-origin) -> Solo podemos acceder al worker desde el mísmo origen. Protocolo/Host/Puerto => https://localhost:80


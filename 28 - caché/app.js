'use strict'

// caché -> Información almacenada en memoria a corto plazo, trabaja con promesas. Almacenando esta información en el navegador, conseguimos que los tiempos de carga se reduzcan.

caches.open('archivos-estaticos').then(cache =>{
    cache.add('index.html'); //Toma una URL, la recupera y agrega el objeto de respuesta resultante a la caché dada. Es equivalente a llamar fetch() y luego usar put() para agregar los resultados a la caché;

    cache.addAll(['index.html','styles.css','app.js']) // Es el que se suele utilizar

    cache.match('index.html').then(respuesta =>{
        console.log(respuesta);
    }) //Devuelve una promesa que se resuelve con la respuesta asociada con la primera solicitud coincidente en el objeto almacenado.

    //cache.delete('index.html');

    cache.keys().then(resultados =>{
        console.log(resultados);
    })
})

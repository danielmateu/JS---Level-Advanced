let version = 'version 2'

self.addEventListener('install', e => {
    console.log('Instalando Service Worker');
    caches.open(version).then(cache => {
        cache.add('index.html').then(res => {
            console.log('Info cacheada');
        }).catch(err => {
            console.log(err);
        })
    })
})

self.addEventListener('activate', () => {
    // console.log('Service Worker Activo');
    caches.keys().then(key => {
        return Promise.all(
            key.map(cache =>{
                if(cache !== version){
                    console.log('Caché Antiguo, eliminado');
                    return caches.delete(cache);
                    
                }
            })
        )
    })
})

//self.addEventListener('error');

self.addEventListener('fetch', e => {
    e.respondWith(
        fetch(e.request).then(res=>{
            console.log('Todo salió bien... Creo!');
        }).catch(e=>{
            caches.match(e.request)
        })
    )
})

// self.addEventListener('message', e => {
//     console.log('Se ha recibido el siguiente mensaje del navegador:');
//     console.log(e.data);
//     e.source.postMessage('Que te fucken')
// })
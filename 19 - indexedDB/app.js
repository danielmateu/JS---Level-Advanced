'use strict'

//IndexedDB 

// Almacena información en el navegador de forma similiar a localStorage

//Es orientado a objetos 

//Es Asíncrona

//Trabaja con eventos del DOM para

//* Procedimiento de creación 

//Objeto indexedDB 

//Método open

// onupgradeneeded, onsuccess, onerror

const IDBRequest = indexedDB.open('DaniBase',1);

IDBRequest.addEventListener('upgradeneeded', ()=>{
    //console.log('Se creó correctamente!');
    const db = IDBRequest.result;
    db.createObjectStore('nombres',{
        autoIncrement:true
    });
})

IDBRequest.addEventListener('success',()=>{
    console.log('Todo OK');
});

IDBRequest.addEventListener('error', ()=>{
    console.log('Ocurrió un error...');
});

//* Crear Almacen de objetos

//Almacen de objetos - concepto

//Metodo createObjectStore()

//autoIncrement vs KeyPath

const addObjeto = objeto =>{
    const IDBData = getIDBData('readwrite')
    IDBData[0].add(objeto);
    IDBData[1].addEventListener('complete',()=>{
        console.log(('Objeto agregado correctamente'));
    });
}

const leerObjetos = ()=>{
    const IDBData = getIDBData('readonly');
    const cursor = IDBData[0].openCursor();
    cursor.addEventListener('success',()=>{
        if(cursor.result){
            console.log(cursor.result.value);
            cursor.result.continue();
        }else console.log('Todos los datos fueron mostrados');
    })
    
}


//Muy parecido al metodo add, lo que si no existe, crea un nuevo objeto
const modObjetos = (key,objeto)=>{
    const IDBData = getIDBData('readwrite');
    IDBData[0].put(objeto,key);
    IDBData[1].addEventListener('complete',()=>{
        console.log(('Objeto modificado correctamente'));
    });
}

const eliminarObjeto = key=>{
    const IDBData = getIDBData('readwrite');
    IDBData[0].delete(key);
    IDBData[1].addEventListener('complete',()=>{
        console.log(('Objeto eliminado correctamente'));
    });
}

const getIDBData = mode=>{
    const db = IDBRequest.result;
    const IDBTransaction = db.transaction('nombres',mode);
    const objectStore = IDBTransaction.objectStore('nombres');
    return [objectStore,IDBTransaction];
}




//*Almacenar Objetos

//Método transacction ()

//IDBTransaction.objectStore()

//IDBObjetStore.add()
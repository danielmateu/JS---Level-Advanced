'use strict'

const resultado = document.querySelector('.resultado');

// - readAsText() -> Le pedimos al usuario que nos envie archivos, datos con inputs
const archivo = document.getElementById('archivo');
archivo.addEventListener('change',(e)=>{
    // console.log(archivo.files[0]); 
    leerArchivo(archivo.files);
    leerArchivoImg(archivo.files)
})

const leerArchivo = ar =>{
    
    for (let i = 0; i<ar.length; i++) {
        //FileReader
        const reader = new FileReader();
        reader.readAsText(ar[i]);
        reader.addEventListener('load',(e)=>{
            console.log(JSON.parse(e.currentTarget.result));
        })
    }
}

// - readAsDataUrl() -> Para leer archivos tipo img, video...

const leerArchivoImg = ar =>{
    
    for (let i = 0; i<ar.length; i++) {
        const reader = new FileReader();
        reader.readAsDataURL(ar[i]);
        reader.addEventListener('load',(e)=>{
        let newIMG = `<img src='${e.currentTarget.result}'>`;
        document.querySelector('.resultado').innerHTML += newIMG;
        //Se debería trabajar con documentFragment
        })
    }
}



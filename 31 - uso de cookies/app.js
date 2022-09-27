'use strict'

//Cookies -> COOKIES clave=valor; atributo;atributo... atribut

// let cookies = document.cookie;

// console.log(cookies);

//Creación Coockie

const newFechaUTC = dias =>{
    let fecha = new Date();
    fecha.setTime(fecha.getTime()+ dias * 1000*60*60*24);
    return fecha.toUTCString()
}

const crearCookies = (name,dias)=>{
    let expires = newFechaUTC(dias)
    document.cookie = `${name};expires = ${expires}`;
}

crearCookies('usuario = dani','4');

// document.cookie = 'user=dani;expires=';

//Acceso Coockies

const obtenerCookie = cookieName =>{
    let cookies = document.cookie;
    cookies = cookies.split(';');
    for(let i=0; cookies.length > i; i++){
        let cookie = cookies[i].trim();
        if(cookie.startsWith(cookieName)){
            return cookie.split('=')[1];
        }
        
    }
    return 'No hay cookies con ese nombre'
}

//Borrar Cookies

document.cookie = 'usuario = Dani; max-Age =0';






'use strict'

// Notifications ->

if(!('Notification' in window)){
    console.log('Las notificaciones no están disponibles en tu navegador');
}else console.log('Puto');

Notification.requestPermission(()=>{
    if(Notification.permission == 'granted'){
        // console.log('Permiso concedido');

    }
});

new Notification('Eres un poco serdo, no?');

// Notification.requestPermission()

//Notification.permission

//Notifications(msg,options)
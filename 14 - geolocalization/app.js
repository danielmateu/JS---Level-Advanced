'use strict'

//GEOLOCALIZATION

// -getCurrentPosition() 
    // -parámetros (position, error, options)
    // -propiedades de option (enableHightAccuracy,timeout,maximumAge)

//como accedemos a la geolocalización:

const geolocation = navigator.geolocation;

const options = {
    maximumAge: 0,
    timeout: .3,
    enableHightAccuracy: true
}

const posicion = (pos)=>{
    console.log(pos.coords.latitude, pos.coords.longitude);
}

const err = ()=> console.log(err);



geolocation.getCurrentPosition(posicion,err);

// -watchPosition() Obtener posicion a tiempo real



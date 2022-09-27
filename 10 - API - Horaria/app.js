'use strict'

//API -> A nivel interno no sabemos el trabajo que hace, simplemente esperamos una respues para poder trabajar sobre ella. Las más comunes son las Api Rest, no son internas de los lenguajes.

//Dentro de JS tenemos un montón de Apis comunes y muy interesantes de usar:

// Objeto Date() -> Es una funcion de condigo nativo

const fecha = new Date()

console.log(fecha);

//Tiene una serie de métodos a utilizar 

//getDate()

console.log('Día del mes ->',fecha.getDate());

//getDays()

console.log('Día de la semana ->',fecha.getDay());

//Trabajo con indices, la posicion 0 es Domingo

//getMonth()

console.log('Número de mes ->',fecha.getMonth());

//Enero empieza en posicion 0

//getYear()

console.log('Año ->',fecha.getYear()+1900);

//Hay que sumarle 1900 para obtener el año actual

//getHours()

console.log('Hora del día ->',fecha.getHours());

//getMinutes()
console.log('Minutos ->',fecha.getMinutes());
//getSeconds()
console.log('Segundos ->',fecha.getSeconds());

let fechaActual = new Date(1645634164084)
console.log(Date.now(),fechaActual);


//Ejemplo de uso... -> Reloj!!!!

const addZeroes = number => {
    if(number.toString().length < 2) return '0'.concat(number);
    return number;
}

const actualizarHora = ()=>{
    const time = new Date();
    let hora = addZeroes(time.getHours()) ;
    let minutos = addZeroes(time.getMinutes()) ;
    let segundos = addZeroes(time.getSeconds()) ;
    document.querySelector('.horas').textContent = hora;
    document.querySelector('.minutos').textContent = minutos;
    document.querySelector('.segundos').textContent = segundos;
    //console.log(segundos);
}

actualizarHora();

setInterval(actualizarHora,1000);

//No se suele trabajar con setInterval por alto consumo de recursos...


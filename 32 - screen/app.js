'use strict'

const anchoTotal = screen.width //Ancho total 
let alturaTotal = screen.height //Altura total

const anchoDisponible = screen.availWidth //Ancho disponible
const alturaDisponible = screen.availHeight //Altura disponible 

const resolucion = screen.pixelDepth //Resolución de color de la pantalla
const profundidad = screen.colorDepth //Profundidad de bits de la paleta de colores

console.log(`width: ${anchoTotal}`);
console.log(`height: ${alturaTotal}`);

console.log(`ancho disponible: ${anchoDisponible}`);
console.log(`altura disponible: ${alturaDisponible}`);

console.log(`reslución: ${resolucion}`);
console.log(`profundidad: ${profundidad}`);
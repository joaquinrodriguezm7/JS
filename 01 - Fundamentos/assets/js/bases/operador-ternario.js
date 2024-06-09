/**
 *  Días de semana abrimos a las 11,
 *  Pero los fines de semana abrimos a las 9
 */

// Construir un programa para consultar si está abierto hoy.

const dia = 1; // 0: domingo, 1: lunes ...
const horaActual = 10 ;

let horaApertura;
let mensaje; // Está abierto, Está cerrado, hoy abrimos a las XX

// if (dia === 0 || dia === 6){
// if ([0,6].includes(dia)){
//     console.log('Fin de semana');
//     horaApertura = 9;
// } else {
//     console.log('Día de semana');
//     horaApertura = 11;
// }

horaApertura = ([0,6].includes(dia)) ? 9 : 11; // ? seria una especie de if, : una especie de else

// if (horaActual >= horaApertura){
//     mensaje = 'Está abierto'
// } else {
//     mensaje = `Está cerrado, hoy abrimos a las ${horaApertura}`; // otra forma de concatenar  
// }

mensaje = (horaActual >= horaApertura) ? mensaje = 'Está abierto' : mensaje = `Está cerrado, hoy abrimos a las ${horaApertura}`;

console.log({horaApertura, mensaje});

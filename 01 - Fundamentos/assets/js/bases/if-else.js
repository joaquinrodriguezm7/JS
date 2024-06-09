let a = 5;


if (a >= 10){ // Excepciones: undefined, null, asignaciones
    console.log('A es mayor o igual a 10');
    
} else {
    console.log('A es menor a 10');
    
}

// console.log('Fin del programa');

const hoy = new Date();
let dia = hoy.getDay(); // 0: Dom, 1: Lunes, 2: Martes ....

// Nunca usar = en condiciones, == compara valores que son de tipos diferentes,
// ej str == int, es recomendable el ===
if (dia === 0){  
    console.log('Domingo');
    
} else if(dia === 1) {
    console.log('Lunes');
    
    
    // if (dia === 1){
    //     console.log('Lunes');
    // } else {
    //     console.log('No es lunes ni domingo');
    // }
} else if(dia === 2) {
    console.log('Martes');
} else {
    console.log('No es lunes, martes o domingo...');
    
}

dia = 3;


const diasLetras = {
    0: 'es domingo',
    1: 'es lunes',
    2: 'es martes',
    3: 'es miercoles',
    4: 'es jueves',
    5: 'es viernes', 
    6: 'es sabado',
}

const diasLetras2 = ['es domingo','es lunes','es martes','es miercoles','es jueves','es viernes', 'es sabado'];

// El operador || sirve para definir por ejemplo, cuando un día no es válido,
// en vez de mostrar undefined, mostrar 'Día no valido' 
console.log(diasLetras[6] || 'Día no valido');
console.log(diasLetras2[6]);









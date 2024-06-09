let juegos = ['Valorant', 'League of Legends', 'CS:GO', 'Rust'];
// console.log('Largo:', juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];

// console.log({primero, ultimo});

juegos.forEach((elemento, indice, arr ) => {
    // console.log({elemento, indice, arr});
});

// push sirve para poner un nuevo elemento al final de la lista
let nuevoLargo = juegos.push('R6')
// console.log(nuevoLargo, juegos);

// unshift sirve para poner un nuevo elemento al inicio de la lista
nuevoLargo = juegos.unshift('FIFA 24');
// console.log({nuevoLargo, juegos})


// Para borrar el último elemento de la lista
let juegoBorrado = juegos.pop();
// console.log({juegoBorrado, juegos});

// Para borrar un juego desde una determinada posición, y cuantos elementos borrar (pos=1, 2) donde pos es la posición en donde
// empieza el borrado, y 2 cuantos elementos se van a eliminar.
let pos = 1

let juegosBorrados = juegos.splice(pos, 2);
console.log({juegosBorrados, juegos});

let csgoIndex = juegos.indexOf('CS:GO') // Case sensitive (Si en la lista estuviera escrito CS:GO de otra forma, ej csgo, no funcionaría)
console.log({csgoIndex})

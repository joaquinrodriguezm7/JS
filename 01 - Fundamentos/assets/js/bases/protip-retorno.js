// function crearPersona(nombre, apellido) {
//     return {
//         nombre,
//         apellido
//     }
// }


// En este caso, si se quiere omitir la palabra reservada return, se debe poner entre () las propiedades del objeto
// En este caso, nombre y apellido
const crearPersona = (nombre, apellido) =>
    ({nombre, apellido})


const persona = crearPersona('Joaquín', 'Rodríguez');
console.log(persona);

function imprimeArgumentos(){
    console.log(arguments);
}

imprimeArgumentos(10, true, false, 'Joaquín', 'Hola')


// La función de flecha no crea el objeto "argumentos", sólo se crea con las funciones tradicionales
// Si yo pongo solamente args para llamar los argumentos, me saldrá el primer elemento en este caso 10, pero si quiero que me 
// salgan todos, debo agregar ... que hace referencia a un parámetro REST, el cual le dice a todos los argumentos que sean enviados
// imprimirArgumentos2(), create un arreglo con cada uno de ellos.
// Después del parámetro REST no puede venir ningún otro argumento, ejemplo: const imprimeArgumentos2 = (...args, otroargumento)

const imprimeArgumentos2 = (edad, ...args) => {
    // console.log(edad, args);
    return args;
}

const [casado, vivo, nombre, saludo] = imprimeArgumentos2(20, true, false, 'Joaquín', 'Hola');
console.log({casado, vivo, nombre, saludo});

const {apellido: nuevoApellido} = crearPersona('Joaquín', 'Rodríguez');
console.log({nuevoApellido});

const tony = {
    nombre : 'Tony Stark',
    codeName : 'IronMan',
    vivo: false,
    edad : 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

// const imprimePropiedades = (personaje) => {
//     console.log(personaje.nombre);
//     console.log(personaje.codeName);
//     console.log(personaje.vivo);
//     console.log(personaje.edad);
//     console.log(personaje.trajes);
// }

// Edad = 15 está asignando un valor por defecto (en caso de que no venga en el objeto) si no viene en el objeto, el valor
// será 15, si viene en el objeto, sería 40 (en este caso)
// De esta manera el código queda más limpio

const imprimePropiedades = ({nombre, codeName, vivo, edad = 15, trajes}) => {
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimePropiedades(tony);



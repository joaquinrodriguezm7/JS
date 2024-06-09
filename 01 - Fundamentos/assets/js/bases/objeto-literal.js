const personaje = {
    nombre : 'Tony Stark',
    codeName : 'IronMan',
    vivo: false,
    edad : 40,
    coords: {
        lat: 34.034,
        lng: -118.78
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibú, California',
    }
};

console.log(personaje);
console.log('Nombre: ', personaje.nombre);
console.log('Nombre: ', personaje['nombre']);
console.log('Edad: ', personaje.edad);
// Como acceder a un objeto dentro de otro objeto
console.log('Lat: ', personaje.coords.lat);
console.log('Lng: ', personaje.coords.lng);

console.log('Número de trajes: ', personaje.trajes.length);
console.log('Último traje: ', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';
console.log('Vivo: ', personaje[x]);

// Más detalles
// Como borrar una propiedad de un objeto

delete personaje.edad
console.log(personaje);

// Añadir una propiedad
personaje.casado = true;

// Trabajar el objeto como un arreglo

const entriesPares = Object.entries(personaje);
console.log(entriesPares);


// Object.freeze bloquea cualquier cambio que se le haga al objeto desde su creación:
Object.freeze(personaje);
personaje.dinero = 100000000;
personaje.casado = false; //se queda en casado = true; ya que así se asignó antes
console.log(personaje);

// Esto solo se aplica en términos "generales" a nuestro objeto, es decir, yo si podría hacer un cambio
// De las propiedades que están dentro de "dirección" (zip, ubicación) pero no a dirección como tal,
// Es decir, yo podría hacer algo como:

personaje.direccion.ubicacion = 'Santiago de Chile'
console.log(personaje);

// Saber las propiedades de un objeto: 
const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log({propiedades, valores});















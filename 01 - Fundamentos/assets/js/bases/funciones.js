// Es buena práctica crear funciones al inicio del código, y despues llamarlas
// Si la función no tiene la palabra reservada return, la función siempre devolverá
// undefined.


function saludar(nombre){
    console.log(arguments);
    console.log('Hola ' + nombre);
    return 10;

    // Cualquier cosa que se ponga después del return no se va a ejecutar
    
    
}

// Función anónima
const saludar2 = function(nombre){
    console.log('Hola ' + nombre);
}

// Función de flecha

const saludarFlecha = () => {
    console.log('Hola Flecha');
}

const saludarFlecha2 = (nombre) => {
    console.log('Hola ' + nombre);
}

const retornoDeSaludar = saludar('Joaquín', 'Santiago de Chile');
console.log({retornoDeSaludar
});

// saludar2('Joaquín')
// saludarFlecha();
// saludarFlecha2('Catalina');

function sumar(a, b){
    return a + b;
}

const sumar2 = (a,b) => {
    return a + b;
}

// Cuando se tiene sólo la línea de return, (como es el caso anterior) se puede resumir la función de la siguiente manera:

const sumar3 = (a,b) => a + b; // => a + b; tiene un return "oculto"

console.log(sumar(1,2));
console.log(sumar2(1,2));
console.log(sumar3(2,2));

function getAleatorio(){
    return Math.random()
}

console.log(getAleatorio());

// Ej: convertir la función anterior en una sin {}:

const getAleatorio2 = () => Math.random();
console.log(getAleatorio2());




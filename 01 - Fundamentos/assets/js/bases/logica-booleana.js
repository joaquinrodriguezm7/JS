const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

console.warn('Not o la negación');
console.log(true); // true
console.log(!true); // false
console.log(!false); // true

console.log(!regresaFalse()); // true

console.warn('And'); // true si todos los valores son verdaderos
console.log(true && true); // true
console.log(true && false); // false
console.log(true && !false); // true

console.log('=========');
console.log(regresaFalse() && regresaTrue());
console.log('=========');

console.log(regresaTrue() && regresaFalse());

console.log('4 condiciones:', true && true && true && false); // false


console.warn('OR'); // si hay un true, devuelve true
console.log(true || false);

console.log(regresaTrue() || regresaFalse()); // Si se consigue un valor verdadero, no es necesario seguir evaluando la instrucción
                                              // Porque esta ya será true, por lo que en este caso regresaFalse() no se ejecuta.
                                            
console.log('4 condiciones:', true || true || true || false); //true






 
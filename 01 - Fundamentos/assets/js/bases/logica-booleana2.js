const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && 'Hola mundo' && 150; // 150
const a2 = 'Hola' && 'Mundo' && soyFalso;
const a3  = soyFalso || 'Ya no soy falso'
const a4  = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true;
const a5  = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true;

console.log(a1);
console.log('==========');
console.log(a2);
console.log('==========');
console.log(a3);
console.log('==========');
console.log(a4);
console.log('==========');
console.log(a5);
console.log('==========');

if (true || true || true || false){
    console.log('Hacer algo');
} else {
    console.log('Hacer otra cosa');
    
}








const elMayor = (a, b) => (a > b) ? a : b;

const tieneMembresia = (miembro) => miembro ? '2 Dólares' : '10 Dólares'

console.log(elMayor(20,15));
console.log(tieneMembresia(false));

const amigo = false;
const amigosArr = [
    'Juan',
    'Tomás',
    'Elías',
    amigo ? 'Vicente' : 'Claudio',
]

console.log(amigosArr);

const nota = 100; // A+ A B+
const grado = nota >= 95 ? 'A+':
              nota >= 90 ? 'A' :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B' :
              nota >= 75 ? 'C+' :
              nota >= 70 ? 'C' : 'F'; // Esto es como si fuera un if simplificado

console.log(nota, grado);

              
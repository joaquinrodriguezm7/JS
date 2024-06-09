const autos = ['Ford', 'Mazda', 'Honda', 'Toyota'];

let i = 0;

// while ( i < autos.length ){
//     console.log(autos[i]);
//     i++; // toma el valor de i y incrementalo en 1
// }

console.warn('While');

while ( autos[i] ){
    
    if (i === 1){
        // break;
        i++;
        continue;
    }
    
    console.log(autos[i]);
    i++; 
}

console.warn('Do While');
let j = 0;
do {

    console.log(autos[j]);
    j++;

} while (autos[j]);



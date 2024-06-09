const agentes = ['Jett', 'Phoenix', 'Raze', 'Reyna'];

console.warn('For tradicional');
for(let i = 0; i < agentes.length; i++) {
    console.log(agentes[i]);
}


console.warn('For in');
for(let i in agentes){
    console.log(agentes[i]);
    
}

console.warn('For of');
for(let i of agentes){
    console.log(i);
    
}
 
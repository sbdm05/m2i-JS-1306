console.log('connecté');

// si score est supérieur à 5, alors message 'gagné'
// if (condition à évaluer) {
// }

let score = 0; 

if(score === 0){
    console.log('jouez encore');
}else if(score >= 1 && score < 5 ){
    console.log('vous avez entre 1 et 4 points');
}else{
    console.log('bravo');
}

// opérateurs
// && = ET
// || = OU

let message = 'HEllo'; 
message = message.toLowerCase(); 
console.log(message);
// case sensitive
if(message === 'hello'){
    console.log('hello');
}else{
    console.log('bonsoir');
}
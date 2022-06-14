// affichage d'un message dans la console
console.log('connecté'); 

// on peut stocker un chiffre, de type number
let score = 10; 
console.log(score);

// on peut stocker une chaîne de caractères de type string
const mot = 'javascript'; 
console.log(mot);
// on ne peut pas modifier une variable const
// mot = 'js'; 

// on peut modifier la valeur d'une variable
let compteur = 0; 
compteur = 1;
console.log(compteur, 'avant opération'); // 1
compteur = compteur + 1; // 2
console.log(compteur, 'après opération'); 

// concaténation de deux mots
let mot1 = 'Hello'; 
let mot2 = 'tout le monde'; 
let phrase = mot1 + ' ' + mot2 ; 
console.log(phrase);

let chiffre = '2'; 
chiffre = chiffre + 1 ;  
console.log(chiffre); // 21

// Cibler et stocker un élément de la page
const titre = document.getElementById('titre'); 
console.log(titre); // balise

// modifier la couleur
titre.style.color = 'green'; 

// document.getElementById('titre').style.color ='green'; 

// Au clic sur btn-red, 
// btn-red devient violet

// cibler et stocker btn-red - camelcase
const btnRed = document.getElementById('btn-red'); 
console.log(btnRed);
const btnBlue = document.getElementById('btn-blue'); 
console.log(btnBlue);
// element.addEventListener('click', function(){
// })
btnRed.addEventListener('click', function(){
    // je vérifie que le clic est bien détecté
    console.log('carré cliqué');
    // btnRed devient violet
    btnRed.style.backgroundColor = 'purple'; 
    // je peux modifier d'autres éléments dans ma page
    // j'incrémente le compteur de 1
    // j'invoque add()
    add(); 
}); 

btnBlue.addEventListener('click', function(){
    console.log('carré bleu cliqué');
    // btnBlue devient vert
    btnBlue.style.backgroundColor = 'green'; 
    add(); 
}); 

// créer une fonction add()
function add(){
  compteur = compteur + 1;
  console.log(compteur);
}
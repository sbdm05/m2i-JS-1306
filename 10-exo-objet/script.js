console.log('connecté');

const resultat = document.getElementById('resultat');

// stocker une seule valeur
// stocker une liste
const tab = ['jean', 'ursula', 'thierry', 2];
// console.log(tab[0]); // ?

const userNom = 'jean';
const userNomFamille = 'durand';
const email = 'jean.durand@';

// const user1 = {
//   prenom: 'jean',
//   nom: 'durand',
//   age: 20,
// };
// const user2 = {
//   prenom: 'irène',
//   nom: 'marcel',
//   age: 25,
// };
// tableau d'objets
const tabUsers = [
  {
    prenom: 'jean',
    nom: 'durand',
    age: 20,
  },
  {
    prenom: 'irène',
    nom: 'marcel',
    age: 25,
  },
  {
    prenom: 'Valentin',
    nom: 'Yves',
    age: 30,
  },
];
// afficher le prenom de user1
// nomObjet.nomPropriete
console.log(user1.prenom); // jean ?
console.log(user1.nom); // jean ?

// resultat.innerText = user1.prenom;
tabUsers.forEach(item=>{
    console.log(item.prenom);
    resultat.innerHTML += item.prenom + '<br>'; 
}); 


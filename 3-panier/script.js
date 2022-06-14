console.log('connecté');

// initialiser un compteur à 0
let compteur = 0;
console.log(compteur);
// je cible et stocke le bouton
const btn = document.getElementById('btn'); 
console.log(btn);
// au clic sur le bouton, on incrémente un compteur
btn.addEventListener('click', function(){
  // vérifier
  console.log('bouton cliqué');
  //compteur ++;
  compteur = compteur + 1;
  console.log(compteur);

  // si compteur < 2, alors phrase avec 'produit'
  // sinon, alors phrase avec 'produits'; 
  if(compteur <2){
      resultat.innerText = 'Vous avez ' + compteur + ' produit dans votre panier'; 
  }else{
      resultat.innerText = 'Vous avez ' + compteur + ' produits dans votre panier';
  }

}); 
// afficher la valeur dans la balise resultat
// en utilisant la méthode resultat.innerText = ""


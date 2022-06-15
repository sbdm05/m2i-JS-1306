console.log('connecté'); 

// cibler et stocker le btn
const btn = document.querySelector('.btn-add'); 
console.log(btn);
// cibler et stocker la DIV d'affichage du panier
const panier = document.querySelector('.panier-container');
console.log(panier);
// cibler et stocker image full
const full = document.getElementById('full'); 
console.log(full);
// cibler et stocker les vignettes avec querySelectorAll
// on obtient un tableau (liste)
const vignettes = document.querySelectorAll('.small'); 
console.log(vignettes);

// ajouter une boucle pour itérer dans le tableau
// et on ajoute un événement au clic
vignettes.forEach(item=>{
    item.addEventListener('click', function(){
        console.log(item);
        const imgSource =  item.getAttribute('src'); 
        console.log(imgSource); // chemin d'accès
        
        // elementCible.setAttribute('src', nouvelleValeur); 
        full.setAttribute('src', imgSource ); 
    })
}); 

let compteur = 0;
btn.addEventListener('click', function(){
    console.log('cliqué'); 
    compteur = compteur +1; 
    console.log(compteur);

    // conditions
    if (compteur < 2){
        panier.innerHTML = 'Vous avez' + ' ' + compteur + " "+ "produit dans votre panier"
    }else{
        panier.innerHTML =
          'Vous avez' + ' ' + compteur + ' ' + 'produits dans votre panier';
    }
    
}); 


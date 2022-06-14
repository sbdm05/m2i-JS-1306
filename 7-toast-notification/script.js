console.log('connecté'); 

// cibler et stocker le btn
const btn = document.querySelector('.btn')
console.log(btn)
// cibler et stocker ctn (container-notifications)
const ctn = document.querySelector('.container-notifications');
console.log(ctn); 

// au clic sur le bouton

btn.addEventListener('click', function(){
    console.log('btn cliqué');
    // créer div 
    const notif = document.createElement('div');
    console.log(notif);
    // appliquer une classe
    notif.classList.add('toast');
    // ajouter du contenu texte (fichier bien enregistré)
    notif.innerText = 'Fichier bien enregistré'; 

    // ajouter dans ctn
    ctn.appendChild(notif);

    // retirer div du DOM
    // setTimeout(function, delai); 
    setTimeout(function(){
        // action
        notif.remove(); 
    }, 1500); 
}); 

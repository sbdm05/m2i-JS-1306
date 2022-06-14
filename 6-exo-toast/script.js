console.log('connecté'); 

// cibler et stocker le bouton ajouter
const btn = document.getElementById('btn'); 
console.log(btn);
// cibler et stocker resultat
const resultat = document.getElementById('resultat'); 
console.log(resultat);

// au clic sur le bouton
btn.addEventListener('click', function(){
    console.log('btn cliqué');
    
    // créer une DIV <div></div>
    const notif = document.createElement('div');
    // console.log(notif, 'avant style');
    // ajouter un style
    notif.classList.add('carre'); 
    console.log(notif);
    // ajouter un contenu
    
    // ajouter la DIV dans resultat
    resultat.appendChild(notif);

    // timer
    // 1s = 1000ms
    setTimeout(function(){
        // retirer la DIV du DOM
        notif.remove();
    }, 3500); 


}); 
// je vérifie la connexion
console.log('connecté');

// Au clic sur btn-success, 
// le bandeau cookies disparait

// je cible et je stocke btn-success et cookies
// document.querySelector('.class'); 
// je vérifie
const btnSuccess = document.querySelector('.btn-success'); 
console.log(btnSuccess);
const cookies = document.querySelector('.cookies'); 
console.log(cookies);

// on vérifie si localStorage.getItem('banniere');
const stockage = localStorage.getItem('banniere');
console.log(stockage);

if(stockage === 'oui'){
    // retirer la bannière cookies
    cookies.remove(); 
}


btnSuccess.addEventListener('click', function(){
    console.log('btn success cliqué');
    cookies.style.display = 'none';

    // enregistrer ses préférences
    localStorage.setItem('banniere', 'oui'); 

}); 




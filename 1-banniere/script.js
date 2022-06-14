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

btnSuccess.addEventListener('click', function(){
    console.log('btn success cliqué');
    cookies.style.display = 'none';
}); 




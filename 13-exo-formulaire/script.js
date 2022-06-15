console.log('connecté'); 

// cibler et stocker le formulaire
const form = document.getElementById('formulaire'); 
// console.log(formulaire);
const prenom = document.getElementById('prenom'); 
// console.log(prenom);
const nom = document.getElementById('nom');
// console.log(nom);
const pwd = document.getElementById('password');
// console.log(pwd);
const msgError = document.querySelectorAll('.error'); 
console.log(msgError);

// ajouter un événement submit au formulaire
form.addEventListener('submit', function(e){
    // empêcher la page de se rafraichir
    e.preventDefault(); 
    // console.log('validé');

    // reset les erreurs
    msgError.forEach(item=>{
        item.classList.add('invisible'); 
    }); 
    
    // ici on récupère les valeurs enregistrées 
    // par l'utilisateur
    const prenomValue = prenom.value.trim();
    const nomValue = nom.value.trim(); 
    const pwdValue = pwd.value.trim(); 

    // console.log(prenomValue.length);

    // prenom est < 2 et > 10
    if (prenomValue.length < 2 || prenomValue.length > 10) {
      // erreur
      console.log('erreur du prénom');
      // rend visible une erreur
      prenom.nextElementSibling.classList.remove('invisible'); 
    } else if (nomValue.length < 3 || nomValue.length > 15) {
      console.log('erreur du nom');
      nom.nextElementSibling.classList.remove('invisible'); 
    } else if (pwdValue.length < 3 || pwdValue.length > 15) {
      console.log('erreur du pwd');
      pwd.nextElementSibling.classList.remove('invisible'); 
    }else{
        // succès
        console.log('succès');
        const user = {
            prenom: prenom.value,
            nom: nom.value, 
            pwd: pwd.value
        }
    
        console.log(user); 

        // form.reset();
    }

    // reinitialiser le formulaire
    form.reset();   

}); 
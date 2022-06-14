console.log('connecté'); 

// pseudo code
// cibler et stocker le bouton
const btn = document.getElementById('btn');
console.log(btn);
// cibler et stocker le carre
const carre = document.querySelector('.carre');
console.log(carre);

// au clic sur le bouton (+ verifier)
btn.addEventListener('click', function(){
    console.log('cliqué');
    let btnContenu = btn.innerText; 
    console.log(btnContenu);

    // si contenu du bouton est bien égal à bleu, 
    // alors contenu du bouton devient rouge
    // sinon (else) il devient bleu
    if(btnContenu === 'BLEU'){
        btn.innerText = 'ROUGE';
    }else{
        btn.innerText = 'BLEU'; 
    }

    // le carre change de couleur
    // element.classList.toggle('blue'); 
    carre.classList.toggle('blue'); 


}); 



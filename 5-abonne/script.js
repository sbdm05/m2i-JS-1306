console.log('connecté');

// cibler et stocker le smiley
// const smiley = document.querySelector('.far.fa-meh-blank');
const smiley = document.querySelector('i');
console.log(smiley);
// querySelector('i')
// cibler et stocker le bouton abonne
const btn = document.querySelector('.btn');
console.log(btn);

// Au clic sur le smiley,
// le smiley change et couleur change
// nouvelle classe => fa-smile-wink
// nouvelle classe => happy
smiley.addEventListener('click', function () {
  console.log('smiley cliqué');

  smiley.classList.toggle('fa-smile-wink');
  smiley.classList.toggle('happy'); // color:yellow
});

// Au clic sur le bouton,
// le bouton change de texte et de couleur
btn.addEventListener('click', function () {
  console.log('btn cliqué');
  // faire alterner la couleur de fond
  btn.classList.toggle('abonne');

  if (btn.innerText === 'Abonnez-vous') {
    btn.innerText = 'Abonné';
  } else {
    btn.innerText = 'Abonnez-vous';
  }
});

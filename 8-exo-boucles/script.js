console.log('connecté');

// cibler et stocker toutes les images avec la
// classe img
const imgs = document.querySelectorAll('.img');
console.log(imgs);

// étape intermédiaire
// (fat) arrow function
imgs.forEach(item => {
  item.addEventListener('mouseenter', function () {
    console.log(item);
    item.style.filter = 'blur(10px)';
  });

  item.addEventListener('mouseleave', function () {
    console.log(item);
    item.style.filter = 'blur(0px)';
  });
});

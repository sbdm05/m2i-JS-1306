console.log('connecté');

const articles = [
  {
    titre: 'SEO, les bonnes pratiques',
    hashtag: '#SEO',
    extrait:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    titre: 'Bien débuter en référencement payant',
    hashtag: '#référencement',
    extrait:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
  },
  {
    titre: 'Content Marketing, les bons arguments',
    hashtag: '#contentmarketing',
    extrait:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  }
];
console.log(articles);

// cibler et stocker la DIV posts
const posts = document.querySelector('.posts'); 
console.log(posts);

// itérer / boucler à l'intérieur du tableau 
// console.log de chaque titre.
articles.forEach(item=>{
    console.log(item.titre);
    posts.innerHTML += `
                        <div class="post">
                         <div class="post-titre">${item.titre}</div>
                         <div class="post-extrait">${item.extrait}</div>
                         <div class="post-hashtag">${item.hashtag}</div>
                        </div>
                       `; 
});

console.log('connecté');

// 1 - cibler et stocker toutes les questions + vérifier
const questions = document.querySelectorAll('.question'); 
console.log(questions); 
// 2 - Passer en revue chaque élément de la liste = boucle
questions.forEach(item =>{
    // 3 - Ajouter un événement au clic à chaque element (item)
    item.addEventListener('click', function(){
        // ici, on récupère l'élément cliqué
        console.log(item); 
        // 4 - modifier l'icône
        const icone = item.lastElementChild;
        console.log(icone);
        // fa-chevron-up avec toggle
        icone.classList.toggle('fa-chevron-up');
        // 5 - rendre visible le nextElementSibling; 
        const next = item.nextElementSibling; 
        console.log(next);
        // utiliser la classe visible;
        next.classList.toggle('visible'); 

    }); 
}); 


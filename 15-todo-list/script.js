console.log('connecté'); 

// cibler et stocker le form
const form = document.getElementById('form'); 
// console.log(form);

// cibler et stocker l'input
const todo = document.getElementById('todo'); 
// console.log(todo);

// cibler et stocker list-items
const listItems= document.querySelector('.list-items'); 
// console.log(listItems);
// créer un tableau vide 
let todoList = []; 
// console.log(todoList);

refresh();
// ajouter une fonction
function refresh(){
    console.log('message depuis refresh');
    listItems.innerHTML = '';// empty string 
    // si localStorage existe 
    // if(localStorage.getItem('nom') !== null)
    // alors, on récupère le tableau
    // affiche / itérer avec forEach
    // <div class='item'>
    //  <p>item</p>
    // </div>

    if(localStorage.getItem('todostorage') !== null){
        todoList = JSON.parse(localStorage.getItem('todostorage')); 

        todoList.forEach(item=>{
            let itemBlock = `
                            <div class='item'>
                                <p>${item}</p>
                            </div>
                            `
            listItems.innerHTML += itemBlock; 
        }); 

    }

}


// 1 - Au submit du form
// 2 - empêcher la page de se rafraichir
// 3 - récupérer la valeur de l'input + validation
form.addEventListener('submit', function(e){
    // empêcher la page de se rafraichir
    e.preventDefault(); 
    console.log('bouton cliqué');
    const todoValue = todo.value.trim();

    if(todoValue !== ''){
        console.log(todoValue);
        // ajouter dans le tableau (ensemble)
        // tableau.push(nouvelElement)
        todoList.push(todoValue);
        console.log(todoList);

        // enregistrer le tableau dans le localStorage
        localStorage.setItem('todostorage', JSON.stringify(todoList)); 

        refresh();
    }

})

// reset l'input
// passer en revue / itérer dans le tableau
// afficher chaque élément



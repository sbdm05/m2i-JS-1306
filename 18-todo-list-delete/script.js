console.log('connecté');
// Je stocke et je sélectionne
const form = document.getElementById('form');
// console.log(form);
const todo = document.getElementById('todo');
// console.log(todo);
let listItems = document.querySelector('.list-items');
// console.log(listItems);
let todoList = [];

refresh();

function refresh() {
  listItems.innerHTML = '';
  if (localStorage.getItem('todostorage') !== null) {
    // console.log('test');
    todoList = JSON.parse(localStorage.getItem('todostorage'));
    // console.log(todoList, 'todolist');
    // affichage dans la page
    todoList.forEach((item) => {
      let itemBlock = `
        <div class="item">
        <p>${item}</p>
        <button class="btn-delete" data-id="${item}">
        <i class="fas fa-trash-alt"></i>
        </button>
        </div>
        `;

      listItems.innerHTML += itemBlock; // Je crée l'élément
    });
  }

  const deleteBtn = document.querySelectorAll('.btn-delete');
  console.log(deleteBtn, 'btn effacé');

  deleteBtn.forEach((erreur) => {
    erreur.addEventListener('click', function () {
      console.log(erreur);
      const id = erreur.dataset.id;
      console.log(id, 'id');
      console.log(todoList, 'todoList');
      const itemDeleted = todoList.indexOf(id);
      console.log(itemDeleted);
      todoList.splice(itemDeleted, 1);
      console.log(todoList);
      localStorage.setItem('todostorage', JSON.stringify(todoList));
      console.log(deleteBtn, 'btn effacé');
      refresh();
      
    });
  });
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log('bouton cliqué');
  const todoValue = todo.value;
  console.log(todoValue);

  // Je place tous les items dans listItems
  // listItems.innerHTML += item;

  if(todo.value !== ''){

      todoList.push(todoValue);
    
      localStorage.setItem('todostorage', JSON.stringify(todoList));
    
      refresh();
  }


  // // Réinitialiser le formulaire
  // form.reset();
}); // fermeture de form.addEventListener

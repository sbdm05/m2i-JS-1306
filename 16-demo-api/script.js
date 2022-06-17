console.log('connecté');
// import {tab} from './data/data';
// export const tab = []; 

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => response.json())
  .then((json) => console.log(json));

// async await

enAttente(); 

async function enAttente(){
    const reponseJSON = await fetch('https://jsonplaceholder.typicode.com/todos/1'); 
    console.log(reponseJSON);
    // ici on attend que la réponse arrive
    const reponseJS = await reponseJSON.json();
    console.log(reponseJS);
    ctn.innerHTML = reponseJS.title;
}

// autre fonction displayList()
// https://jsonplaceholder.typicode.com/posts
tabPlaceholder(); 
async function tabPlaceholder(){
    try {
        const reponseJSON = await fetch(
          'https://jsonplaceholder.typicode.com/posts'
        );
        console.log(reponseJSON);
        // ici on attend que la réponse arrive
        const reponseJS = await reponseJSON.json();
        console.log(reponseJS);
    
        reponseJS.forEach(item =>{
            ctn.innerHTML += `<p>${item.title}</p>`;
        }); 
    } catch (error) {
        console.log(error);
    }

}


// récupérer la valeur d'un input

fetch(`https://api.unsplash.com/search/photos?page=1&query=${value}&client_id=UKdlyWgC0k1U6mDIM-0RYVkSg63u2A3wedABulPCrTw`);
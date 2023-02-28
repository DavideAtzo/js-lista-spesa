'use strict';

const shoppingList = ['Pane', 'Mortadella', 'Formaggio', 'Vino', 'Mirto', 'Olio'];
const ul = document.querySelector('.shopping-list');
console.log(shoppingList);

let i = 0;
while(i < shoppingList.length){
    const li = document.createElement('li');
    li.innerText = (shoppingList[i]);
    ul.append(li);
    i++;
}
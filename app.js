const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const listEl = document.querySelector('ul');
const delAll = document.getElementById('btn1');

function addGoal(){
    const enteredVal = inputEl.value;
    const listItemEl = document.createElement('li');
    const deleteEl = document.createElement('button');
    listItemEl.textContent = enteredVal;
    deleteEl.innerText ='Delete';
    listEl.appendChild(listItemEl);
    listEl.appendChild(deleteEl);
    inputEl.value = '';
    deleteEl.onclick = function(){
        if(listItemEl.hasChildNodes())
        listItemEl.parentNode.removeChild(listItemEl)
        deleteEl.parentNode.removeChild(deleteEl)
    }
}


buttonEl.addEventListener('click',addGoal);

delAll.addEventListener('click', function(){
    while(listEl.lastChild){
        listEl.removeChild(listEl.lastChild)
    }
})
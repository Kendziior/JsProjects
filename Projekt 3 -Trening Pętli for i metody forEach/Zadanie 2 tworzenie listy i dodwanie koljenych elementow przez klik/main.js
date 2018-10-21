let size = 10;
let orderElement = 1;
const newButton = document.createElement('button');
const resetButton = document.createElement('button');
const newUl = document.createElement('ul');
let show = true;

const init = () => {

    document.body.appendChild(newButton);
    document.body.appendChild(resetButton);
    newButton.textContent = "Stworz 10 elementow listy"
    resetButton.textContent = "Resetuj"
    document.body.appendChild(newUl);
}

const createLiElements = () => {
    for (let i = 0; i < 10; i++) {
        const NewLi = document.createElement('li');
        newUl.appendChild(NewLi);
        NewLi.textContent = `Element Listy ${orderElement++}`;
        NewLi.style.fontSize = `${size++}px`;


    }
}

const clearElements = () => {
    newUl.textContent = "";

}
init()
newButton.addEventListener('click', createLiElements);
resetButton.addEventListener('click', clearElements);
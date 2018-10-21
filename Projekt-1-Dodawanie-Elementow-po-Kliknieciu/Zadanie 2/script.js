const btn = document.querySelector('button');
const ulList = document.querySelector('ul');

let valueNumber = 1;



const addNewElement = () => {
    const newLI = document.createElement('li');
    ulList.appendChild(newLI);
    newLI.textContent = valueNumber;


    if (valueNumber % 3 == 0) {
        newLI.classList.add('big');


    }
    valueNumber += 2;
}
btn.addEventListener('click', addNewElement);
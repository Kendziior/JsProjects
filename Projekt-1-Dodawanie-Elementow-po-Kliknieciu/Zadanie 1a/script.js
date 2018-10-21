const btnAdd = document.querySelector('button');
let numberValue = 1;

const AddElement = () => {
    // console.log("dziala")
    const newDiv = document.createElement('div');
    document.body.appendChild(newDiv);
    newDiv.textContent = numberValue; // lub tutaj ++ ; 
    numberValue++;
    

    if (numberValue == 6) {
        newDiv.classList.add('circle');
        numberValue = 1;
    }

}

btnAdd.addEventListener('click', AddElement);
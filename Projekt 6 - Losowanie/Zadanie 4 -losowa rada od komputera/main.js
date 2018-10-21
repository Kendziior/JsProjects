const ourOptions = ["walcz", "odpusc"];
const btnAdd = document.querySelector('.add');
const btnClean = document.querySelector('.clean');
const input = document.querySelector('input');
const btnShowAdvice = document.querySelector('.showAdvice');
const btnShowOptions = document.querySelector('.showOptions');
const h1 = document.querySelector('h1');


const addNewElement = (e) => {
    e.preventDefault();
    if (input.value.length) {
        for (ourOpt of ourOptions) {
            if (ourOpt === input.value) {
                alert('Już dodałes taki element');
                return;
            }
        }
        const newAdvice = input.value;
        ourOptions.push(newAdvice);
        input.value = '';
        console.log(ourOptions);
        alert(`Dodałes ${newAdvice}`);
    }
}

const removeAllEelements = (e) => {
    e.preventDefault();
    ourOptions.length = 0
}

const showAdvices = (e) => {
    e.preventDefault();
    let randomAdvice = Math.floor(Math.random() * ourOptions.length);
    h1.textContent = ourOptions[randomAdvice];

}

const showOptions = (e) => {
    e.preventDefault();
    if (ourOptions.length === 0) {
        alert("Nie masz dodanych żadnych możliwości");
        return;
    }
    alert(`Twoje możliwosci to : ${ourOptions.join("---")}`);

}

btnAdd.addEventListener('click', addNewElement);
btnClean.addEventListener('click', removeAllEelements);
btnShowAdvice.addEventListener('click', showAdvices);
btnShowOptions.addEventListener('click', showOptions);
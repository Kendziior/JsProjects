// tutaj rozwiązanie
const btn = document.querySelector('button');
const li = document.querySelectorAll('li');
let txtSize = 10;

// const show = () => {
//     for (let i = 0; i < li.length; i++) {
//         li[i].style.display = "block";
//         li[i].style.fontSize = txtSize + "px";


//     }
//     txtSize += 1;
// }

// btn.addEventListener('click', show);



// Metoda ForEach //
const newFunction = () => {
    li.forEach((li) => {
        li.style.display = "block";
        li.style.fontSize = `${txtSize}px`;

    })
    txtSize++;
}

btn.addEventListener('click', newFunction);


// btn.addEventListener('click', () => {
//     li.forEach((li) => {
//         li.style.display = "block";
//         li.style.fontSize = `${txtSize}px`;
//     })
//     txtSize++;
// })
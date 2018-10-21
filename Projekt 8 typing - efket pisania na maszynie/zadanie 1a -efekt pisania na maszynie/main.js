// const spnText = document.querySelector('.text');
// const txt = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore tenetur rerum ad? Eum quos reprehenderit minima! Fugit, omnis! Eveniet repellendus et iure deserunt iusto quas in est odit, labore optio? KONIEC'

// // Parametry
// let indexText = 0;
// const time = 40;

// // Implementacja
// const addLetter = () => {
//  spnText.textContent += txt[indexText];
//  indexText++;
//  if (indexText === txt.length) clearInterval(indexTyping);
// }
// const indexTyping = setInterval(addLetter, time);


//my 

const spanText = document.querySelector('.text');
const txt = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsum asperiores odit veniam vel voluptatem, corrupti voluptate iure illo eligendi quaerat temporibus ea minima omnis sed nostrum eaque perspiciatis libero. `
let indexText = 0;
const time = 60;
const cursor = document.querySelector('.cursor');

const addLetter = () => {
    console.log('ok');
    spanText.textContent += txt[indexText]
    indexText++;
    if (indexText === txt.length) clearInterval(indexTyping);
}

const cursorAnimation = () => {
    cursor.classList.toggle('active');
}

const indexTyping = setInterval(addLetter, time);
setInterval(cursorAnimation, 400);
// const slideList = [{
//  img: "images/img1.jpg",
//  text: 'Pierwszy tekst'
// },
// {
//  img: "images/img2.jpg",
//  text: 'Drugi tekst'
// },
// {
//  img: "images/img3.jpg",
//  text: 'Trzeci tekst'
// }];

// const image = document.querySelector('img.slider');
// const h1 = document.querySelector('h1.slider');
// // Interfejs
// const time = 3000;
// let active = 0;

// const changeSlide = () => {
//  active++;
//  if (active === slideList.length) {
//   active = 0;
//  }
//  image.src = slideList[active].img;
//  h1.textContent = slideList[active].text;

// }
// setInterval(changeSlide, time)

// // Implementacje



const slideList = [{
        img: 'images/img1.jpg',
        text: 'Pierwszy Tekst'
    },

    {
        img: 'images/img2.jpg',
        text: 'Drugi Tekst'
    },

    {
        img: 'images/img3.jpg',
        text: 'Trzeci Tekst'
    },
]

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');

//Interfejs 
const time = 3000; //5sekund
let active = 0;
const dots = [...document.querySelectorAll('.dots span')];


//Implementacja

const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
}

const changeSlide = () => {
    active++;
    if (active == slideList.length) {
        active = 0;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot();

}
setInterval(changeSlide, time)
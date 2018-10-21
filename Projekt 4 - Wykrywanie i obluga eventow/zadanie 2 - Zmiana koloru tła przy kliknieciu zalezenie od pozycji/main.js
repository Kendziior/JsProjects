// KOLOR GENEROWANY W ZALEŻNOŚCI OD TEGO GDZIE KLIKNIEMY

// jeśli wartość dla x (event.clientX) i y (event.clientY) jest parzysta (np. 100,122)  to kolor czerwony
// jesli wartość dla x i y jest nieparzysta to kolor niebieski
// jeśli jeden z kolorów jest parzysty a drugi nieparzysty to kolor zielony



// const changeColor = (event) => {
//     const x = event.clientX;
//     const y = event.clientY;
//     console.log(x, y)
//     if (x % 2 == 0 && y % 2 == 0) {
//         document.body.style.backgroundColor = "red"
//     } else if (x % 2 == 1 && y % 2 == 1) {
//         document.body.style.backgroundColor = "blue"
//     } else if (x % 2 == 0 || y % 2 == 1) {
//         document.body.style.backgroundColor = "green"
//     }
// }

// window.addEventListener('click', changeColor);

document.body.addEventListener('click', (event) => {
    console.log(event.clientX, event.clientY);
    const color = getColor(event);
    document.body.style.backgroundColor = color;
})

const getColor = (e) => {
    if (e.clientX % 2 === 0) {
        if (e.clientY % 2 === 0) {
            return "red";
        } else {
            return "green";
        }
    } else {
        if (e.clientY % 2 === 0) {
            return "green";
        } else {
            return "blue"
        }
    }
}
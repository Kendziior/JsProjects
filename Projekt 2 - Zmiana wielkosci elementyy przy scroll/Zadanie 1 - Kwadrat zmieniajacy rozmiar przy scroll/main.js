const Square = document.createElement('div');
document.body.appendChild(Square);

let SquareSize = 10
let grow = true;
//window.innerWidth * 0.5


const changeSize = () => {
    if (grow) { //(grow == true)
        Square.style.width = SquareSize + 'px';
        Square.style.height = SquareSize + 'px';
        SquareSize += 5;
    } else {
        SquareSize -= 5;
        Square.style.width = SquareSize + 'px';
        Square.style.height = SquareSize + 'px';

    }

    if (SquareSize >= window.innerWidth / 2) {
        grow = !grow;

    } else if (SquareSize <= 0) {
        grow = true;
    }
}


window.addEventListener('scroll', changeSize)


























// const squere = document.createElement('div');
// document.body.appendChild(squere);

// let grow = true; //flaga

// let size = 100; //wielkość kwadratu
// squere.style.width = size + "px";
// // 100 + "px" -> "100" + "px" -> "100px"
// squere.style.height = size + "px";

// //maksymlana wielkość kwadratu
// //window.innerWidth * 0.5

// window.addEventListener("scroll", function () {
//     // size = size + 10;


//     if (size >= window.innerWidth / 2) {
//         grow = !grow;
//     }
//     else if (size <= 0) {
//         grow = !grow;
//     }

//     if (grow) {
//         size += 5
//         squere.style.width = size + "px";
//         squere.style.height = size + "px";
//     }

//     else {
//         size -= 5
//         squere.style.width = size + "px";
//         squere.style.height = size + "px";
//     }


// })
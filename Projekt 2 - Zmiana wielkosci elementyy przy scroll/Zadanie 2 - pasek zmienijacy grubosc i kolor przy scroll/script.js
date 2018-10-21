document.body.style.height = "10000px";
const newDiv = document.createElement('div');
document.body.appendChild(newDiv);

let divHeight = 0;
let grow = true;

//Basic status // 

newDiv.style.width = "100%";
newDiv.style.height = divHeight + 'px';
newDiv.style.top = 0;
newDiv.style.left = 0;
newDiv.style.position = "fixed";
newDiv.style.backgroundColor = "green";

//--// 



const changeSize = () => {
    if (grow) {
        divHeight += 2;
    } else {
        divHeight -= 2;
        newDiv.style.backgroundColor = "red";

    }

    if (divHeight >= window.innerHeight / 2) {
        grow = !grow

    } else if (divHeight <= 0) {
        grow = true;
        newDiv.style.backgroundColor = "green";
    }

    newDiv.style.height = divHeight + 'px';
}

window.addEventListener('scroll', changeSize);
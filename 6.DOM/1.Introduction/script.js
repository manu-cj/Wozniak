/*
*/

const h1 = document.querySelector('h1');
const body = document.querySelector('body');


h1.innerText = 'Modifying the DOM!';
console.log(h1);

function randomColor() {
    return Math.floor(Math.random() * 256);
}

body.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;

const secondChild = body.children[1];

for (const element of secondChild.children) {
    console.log(element);
}


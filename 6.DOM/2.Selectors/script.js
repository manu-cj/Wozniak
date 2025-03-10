/*
*/
const important = document.querySelector('.important');
important.title = 'This is an important item';

const imgs = document.querySelectorAll('img');
imgs.forEach(element => {
    if (!element.classList.contains('important')) {
        element.style.display = 'none';
    }
});

const p = document.querySelectorAll('p');
p.forEach(element => {
    console.log(element.textContent);
    if (element.classList.length > 0) {
        console.log(element.classList);
    } else {
        element.style.color = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;

    }
}
);

function randomColor() {
    return Math.floor(Math.random() * 256);
}




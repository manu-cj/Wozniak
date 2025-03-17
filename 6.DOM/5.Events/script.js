const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const displayedsquareWrapper = document.querySelector('.displayedsquare-wrapper');
const ul = document.querySelector('ul');
let displayedsquare = document.querySelectorAll('.displayedsquare');

const clickOnSquare = (e) => {
  displayedsquareWrapper.appendChild(document.createElement('div'));

  let newForm = displayedsquareWrapper.lastChild;
  newForm.classList.add('displayedsquare', e.target.classList[1]);
  ul.appendChild(document.createElement('li'));
  let li = ul.lastChild;
  li.innerText = getElapsedTime() + ' create a square ' + e.target.classList[1];
  
  console.log(e.target.classList[1])
  console.log(getElapsedTime())
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}

function randomColor() {
  let blue = Math.floor(Math.random() * 256);
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);

  let backgroundColor = 'rgb(' + red + ',' +green + ',' + blue + ')';
  return backgroundColor;
}

document.addEventListener('keypress', (e) => {
  if (e.code === "Space") {
    let color = randomColor()
    document.querySelector('body').style.backgroundColor = color;
    ul.appendChild(document.createElement('li'));
    let li = ul.lastChild;
    li.innerText = getElapsedTime() + ' Background change for ' + color;
  }

  if (e.code === 'KeyI') {
    let li = document.querySelectorAll('li');
    li.forEach(element => {
      element.remove();
      
    });
  }

  if (e.code === 'KeyS') {
    displayedsquare.forEach(element => {
      element.remove();
    });
  }
})

const clickOnSquare2 = (e) => {
  console.log(e.target.classList[1])
}


document.addEventListener('click', (e) => {
  if (e.target.classList.contains('displayedsquare')) {
    alert(e.target.classList[1]);
  }
});
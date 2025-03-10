const body = document.querySelector('body');
const article = document.querySelector('article');
const sections = document.querySelectorAll('section');

const newArticle = document.createElement('article');
body.appendChild(newArticle);

const becodeurs = [
    { nom: "Antoine" },
    { nom: "ars_d" },
    { nom: "Hugo" },
    { nom: "Manu le goat" },
    { nom: "Kamal" },
    { nom: "Liana" },
    { nom: "Jordan" },
    { nom: "Martin" },
    { nom: "valentin" },
    { nom: "Inna" },
    { nom: "Stephan" },
    { nom: "Pierre" },
  ];

becodeurs.sort(() => Math.random() - 0.5);
for (let index = 0; index < becodeurs.length; index++) {
    const newSection = document.createElement('section');
    newArticle.appendChild(newSection);

    newSection.innerHTML = '<h2>' + becodeurs[index].nom + '</h2>';
    const r = randomColor();
    const g = randomColor();
    const b = randomColor();
    newSection.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    const light = (r * 299 + g * 587 + b * 114) / 1000;
    newSection.style.color = light > 125 ? 'black' : 'white';
}




function randomColor() {
    return Math.floor(Math.random() * 256);
}


/**
 * Calcule la surface d'un rectangle en fonction de la longueur et de la largeur saisies par l'utilisateur.
 *
 * @returns {number} La surface du rectangle.
 */
// function calcSurface() {
//    let longueur = window.prompt("Entrez la longueur");
//    let largeur = window.prompt("Entrez la largeur");
//    return longueur * largeur;
// }

// console.log(calcSurface());


function rand10() {
    return Math.floor(Math.random() * 10) + 1;
}

/**
 * Génère un tableau de nombres aléatoires.
 *
 * @param {number} n - Le nombre de nombres aléatoires à générer.
 * @returns {number[]} Un tableau contenant `n` nombres aléatoires.
 */
function multiRand(n) {
    let array = [];
    for (let index = 0; index < n; index++) {
        array.push(rand10());
    }
    return array;
}

function pickLearner(inputAr, n) {
    let array = [];
    if (n < 1) {
        return "Le nombre doit être supérieur à 0";
        
    }
    else if (n > inputAr.length) {
        return "Le nombre doit être inférieur au nombre de becodeurs";
    }
    for (let index = 0; index < n; index++) {
        array.push(inputAr[Math.floor(Math.random() * inputAr.length)]);
    }
    return array;
}
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

console.log(pickLearner(becodeurs, 3));


function calcDistance(A, B) {
    return Math.sqrt(Math.pow((B.x - A.x), 2) + Math.pow((B.y - A.y), 2));
}

console.log(calcDistance({x: 1, y: 1}, {x: 2, y: 2}));


function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5));



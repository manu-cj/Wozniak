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

// for (const becodeur of becodeurs) {
//     console.log(becodeur.nom);
// }
function totalArray(arrayNumber) {
    if (!Array.isArray(arrayNumber)) {
        console.log("Ce n'est pas un tableau");
    }
    let total = 0;
    for (let index = 0; index < arrayNumber.length; index++) {
        total += arrayNumber[index];
    }
    return total;
}

const arrayNumber = [1, 2, 3, 4, 5];
console.log(totalArray(arrayNumber));


function duplicateArray(array) {
    let newArray = [];
    for (let index = 0; index < array.length; index++) {
        newArray.push(array[index]);
    }
    return `newArray : ${newArray}`;
}

console.log(duplicateArray(arrayNumber));

function duplicateArray(array) {
    let newArray = array.slice();
    return `newArray : ${newArray}`;
}

console.log(duplicateArray(arrayNumber));


function minAndMax(array) {
    let min = array[0];
    let max = array[0];
    for (let index = 1; index < array.length; index++) {
        if (array[index] < min) {
            min = array[index];
        }
        if (array[index] > max) {
            max = array[index];
        }
    }
    return `min : ${min}, max : ${max}`;
}

console.log(minAndMax(arrayNumber));

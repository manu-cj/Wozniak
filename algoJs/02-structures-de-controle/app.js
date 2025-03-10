// let age = window.prompt();

// if (isNaN(age)) {
//     console.log("Ce n'est pas un nombre !");
// }
// if (age === "") {
//     console.log("Vous n'avez rien écris");
// }

// else {
//     if (age >= 18) {
//         console.log('vous êtes majeur');
//     }else {
//         console.log('Vous n\'êtes pas majeur');
//     }
// }

// let tentative = 1;


// let min = parseInt(window.prompt('entrez un chiffre'));
// let minPlus = min + 1;
// let max = parseInt(window.prompt('entrez un chiffre supérieur à '+  minPlus));
// let current = window.prompt('entrez un chiffre compris entre ' + min + ' et ' + max);

// if (isNaN(min) || isNaN(current) || isNaN(max)) {
//     console.log('Veuillez entrer des nombres');
// }else {
//     if (current > min && current < max) {
//         console.log('Tu es un génie !!!');
//     }
//     else if(min > max) {
//         console.log("ça t'arrive de comprendre ce que tu lis ?");
//     }
// }

// for (let i = 0; i < 50; i++) {
//     console.log(i*2);
// }
// i =0;
// while (i < 100) {
//     console.log(i);
//     i += 2
// }
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i / 2);
//     } else {
//         console.log(i * 3);
//     }
// }

// function whatIsYourFavoriteNumber(choiceNumber){
//     choiceNumber = parseInt(window.prompt("Choisissez un nombre"));
//     if (choiceNumber !== 42) {
//         window.prompt("Tu es sur ?");
//         alert("Quel dommage ! essai encore !");
//         tentative++;
//         whatIsYourFavoriteNumber();
//     }else {
//         if (tentative > 1) {
//             alert("Félicitation vous avez trouvé après " + tentative + " essais");
//         }else {
//             alert("Félicitation vous avez trouvé après "+ tentative +" essai");
//         }
//     }
// }

// //whatIsYourFavoriteNumber();

// function dayNumer() {
//         choiceNumber = parseInt(window.prompt("Choisissez un nombre entre 1 et 7"));
//         switch (choiceNumber) {
//             case 1:
//                 alert("Lundi");
//                 break;
//             case 2:
//                 alert("Mardi");
//                 break;
//             case 3:
//                 alert("Mercredi");
//                 break;
//             case 4:
//                 alert("Jeudi");
//                 break;
//             case 5:
//                 alert("Vendredi");
//                 break;
//             case 6:
//                 alert("Samedi");
//                 break;
//             case 7:
//                 alert("Dimanche");
//                 break;
//             default:
//                 alert("Ce n'est pas un jour de la semaine");
//                 break;
//         }
// }

// function whatIsN() {
//     let n = parseInt(window.prompt("Entrez un nombre"));
//     let result = 0;
//     for (let i = 0; i <= n; i++) {
//         result += i;
//     }
//     alert(result);
    
// }

// whatIsN();



let words = "Wozniak";

i = -1;


let h1 = document.createElement('h1');
let body = document.querySelector('body');
body.appendChild(h1);

function interval(words) {
   let interval = setInterval(() => {
    let wordsSplit = words.split("");
        i++;
        h1.innerText += wordsSplit[i];
        console.log(wordsSplit[i]);
        if (i === wordsSplit.length - 1) {
            wordsSplit.pop();
          clearInterval(interval);
          i = -1;
        }
      }, 1000);
} 

interval(words);

let hours = document.createElement('h2');
body.appendChild(hours);

let second = 0;
let minutes = 0;
let hour = 0;



let secondInterval = setInterval(() => {
    second++
    if (second === 60) {
        second = 0;
        minutes++;
        h1.innerText = '';
        interval('Wozniak');
        if (minutes === 60) {
            minutes = 0;
            hour++;
        }
    }

    hours.innerText = `0${hour} : 0${minutes} : 0${second}`;
    if(second > 9) {
        hours.innerText = `0${hour} : 0${minutes} : ${second}`;
    }
    if(minutes > 9) {
        hours.innerText = `0${hour} : ${minutes} : 0${second}`;
    }
    if(hour > 9) {
        hours.innerText = `${hour} : 0${minutes} : 0${second}`;
    }
    if(second > 9 && minutes > 9) {
        hours.innerText = `0${hour} : ${minutes} : ${second}`;
    }
    if(second > 9 && hour > 9) {
        hours.innerText = `${hour} : 0${minutes} : ${second}`;
    }
    if(second > 9 && hour > 9 && hour > 9) {
        hours.innerText = `${hour} : ${minutes} : ${second}`;
    }
}, 1000);

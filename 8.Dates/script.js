let body = document.querySelector("body");

function createDateUtc(params) {
  let h3 = document.createElement("h3");
  const now = new Date();
  const options = { timeZone: params };
  if (params === "UTC") {
    h3.textContent = `${now.toLocaleString(
      "en-US",
      options
    )} à Iceland/Reykjavik `;
  } else {
    h3.textContent = `${now.toLocaleString("en-US", options)} à ${params}`;
  }
  body.appendChild(h3);
}

createDateUtc("America/Anchorage");
createDateUtc("UTC");
createDateUtc("Europe/Moscow");
createDateUtc("Europe/Brussels");

let myBirthday = new Date("1995", "10", "29");
console.log(myBirthday.getTime() / (1000 * 60 * 60 * 24));

let h3 = document.createElement("h3");
body.appendChild(h3);
h3.textContent =
  myBirthday.getTime() / (1000 * 60 * 60 * 24) + " Day after my birthday";

function dayAfterThisDate(year, month, day) {
  let date = new Date(year, month, day);
  let calc = date.getTime() / (1000 * 60 * 60 * 24);
  let h3 = document.createElement("h3");
  body.appendChild(h3);
  h3.textContent =
    calc + " Day after this date " + year + " " + month + " " + day;
}

dayAfterThisDate("1970", "01", "01");

let currentDate = new Date();
let hoursInMilisecondes = 80000 * 60 * 60 * 1000;
let currentDatePlusQuatreVingtMilleHeures =
  currentDate.getTime() + hoursInMilisecondes;
console.log(new Date(currentDatePlusQuatreVingtMilleHeures));

function futurama(params) {
  let currentDate = new Date();
  let hoursInMilisecondes = params * 60 * 60 * 1000;
  let currentDatePlusQuatreVingtMilleHeures =
    currentDate.getTime() + hoursInMilisecondes;
  console.log(new Date(currentDatePlusQuatreVingtMilleHeures));
}

let input = document.createElement('input');
input.type = 'number';
body.appendChild(input);

input.addEventListener('keyup', () => {
    futurama(input.value);
})

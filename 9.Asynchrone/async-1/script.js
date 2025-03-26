const button = document.createElement('button');
const body = document.querySelector('body');

button.textContent = "Click me boy";
body.appendChild(button);
let dataPading = 0;
button.style.cursor = 'pointer';

button.addEventListener('click', () => {
    handleButtonClick();
});

function handleButtonClick() {
    button.textContent = "Oh yeah again !";
    dataPading += 5;
    button.style.paddingRight = `${dataPading}px`;
    fetchData();
}

function fetchData() {
    const request = fetch("db.json");
    console.log("Making the request:", request);
    request.then(response => response.text())
           .then(datas => processResponse(datas));
}

function processResponse(datas) {
    console.log(datas);
    clearPreviousData();
    const parsedData = JSON.parse(datas);
    console.log(parsedData);
    displayData(parsedData);
    setTimeout(() => {
        button.textContent = "Click me again boy";
    }, 1000);
}

function clearPreviousData() {
    let searchUl = document.querySelectorAll('ul');
    searchUl.forEach(ulFind => {
        ulFind.remove();
    });
}

function displayData(data) {
    let ul = document.createElement('ul');
    body.appendChild(ul);

    let liTeams = createListItem(data.squadName);
    let homeTownData = createListItem(data.homeTown);
    let dateCreationData = createListItem(data.formed);
    let secretBaseData = createListItem(data.secretBase);

    ul.appendChild(liTeams);
    ul.appendChild(homeTownData);
    ul.appendChild(dateCreationData);
    ul.appendChild(secretBaseData);

    data.members.forEach(member => {
        displayMemberData(member);
    });
}

function createListItem(text) {
    let li = document.createElement('li');
    li.textContent = text;
    return li;
}

function displayMemberData(member) {
    let ul = document.createElement('ul');
    body.appendChild(ul);

    let liName = createListItem(`Nom :  ${member.name}`);
    let liAge = createListItem(`${member.age} ans`);
    let liSecretIdentity = createListItem(`Identité secrète ${member.secretIdentity}`);
    let liPowers = createListItem(`Powers : ${member.powers.join(", ")}`);

    ul.appendChild(liName);
    ul.appendChild(liAge);
    ul.appendChild(liSecretIdentity);
    ul.appendChild(liPowers);
}

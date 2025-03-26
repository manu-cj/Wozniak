const input = document.createElement("input");
input.id = "nameInput";
document.body.appendChild(input);

const button = document.createElement("button");
button.id = "fetchButton";
button.textContent = "Chercher";
document.body.appendChild(button);

const resultsContainer = document.createElement("div");
resultsContainer.id = "results";
document.body.appendChild(resultsContainer);

const countrySelect = document.createElement("select");
countrySelect.id = "countrySelect";

const countries = ["", "US", "FR", "BE", "DE", "ES"];
countries.forEach(country => {
    const option = document.createElement("option");
    option.value = country;
    option.textContent = country ? country : "Select Country";
    countrySelect.appendChild(option);
});

document.body.appendChild(countrySelect);

const storedResults = JSON.parse(localStorage.getItem("agifyResults")) || [];

storedResults.forEach(displayResult);

button.addEventListener("click", async () => {
    const name = input.value.trim();
    const country = countrySelect.value;
    if (!name) return;

    const cachedResult = storedResults.find(item => item.name === name && item.country === country);
    if (cachedResult) {
        displayResult(cachedResult);
        return;
    }

    const url = `https://api.agify.io?name=${name}${country ? `&country_id=${country}` : ""}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.age !== null) {
            const result = { name: data.name, age: data.age, country };
            storedResults.push(result);
            localStorage.setItem("agifyResults", JSON.stringify(storedResults));
            displayResult(result);
        }
    } catch (error) {
        console.error("Erreur lors de la récupération des données", error);
    }
});

function displayResult({ name, age, country }) {
    const resultDiv = document.createElement("div");
    resultDiv.textContent = `Nom: ${name}, Âge estimé: ${age}${country ? `, Pays: ${country}` : ""}`;
    resultsContainer.appendChild(resultDiv);
}

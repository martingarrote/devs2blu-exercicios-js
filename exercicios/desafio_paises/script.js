let select = document.getElementById("countries-select")
let flagDiv = document.querySelector(".flag")
let infoDiv = document.querySelector(".info")

document.addEventListener("DOMContentLoaded", function() {
    fetch(`https://restcountries.com/v3.1/all`)
        .then(response => response.json())
        .then(data => {
            insertCountryOptions(data)
        })
        .catch(error => {
            console.log(error)
        })
})
    
select.addEventListener("input", function() {
    let selectedCountry = select.options[select.selectedIndex].text
    if (selectedCountry.length > 0) {
        getCountryData(selectedCountry)
    } else {
        removeCountryData()
    }
})

function insertCountryOptions(data) {
    const countryNames = [];
    for (let i = 0; i < 250; i++) {
        let name = data[i].name.common;
        countryNames.push(name);
    }
    countryNames.sort();
    countryNames.forEach(opt => {
        let option = document.createElement("option");
        option.value = opt;
        option.innerHTML = opt;
        select.appendChild(option);
    });
}

function getCountryData(country) {
    fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
    .then(response => response.json())
    .then(receivedData => {
        let data = receivedData[0]
        let flag = document.createElement("img")

        flag.src = data.flags.png

        let lang = []
        let currencyName
        let currencySymbol
        let capital

        if (data.capital) {
            capital = data.capital[0]
        } else {
            capital = "Não possui"
        }

        for (l in data.languages) {
            lang.push(data.languages[l])
        }

        for (i in data.currencies) {
            currencyName = data.currencies[i].name
            currencySymbol = data.currencies[i].symbol
        }

        let countryData = {
            flag: flag,
            usual_name: data.name.common,
            oficial_name: data.name.official,
            capital: capital,
            lang: lang.join(", "),
            continent: data.continents[0],
            area: data.area += " km²",
            population: data.population,
            currency_name: currencyName,
            currency_symbol: currencySymbol,
        }

        insertCountryData(countryData)
    })
    .catch(error => {
        console.log(error)
    })
}

function insertCountryData(data) {
    removeCountryData()

    document.querySelectorAll("h2")[1].style.display = "block"

    for (d in data) {
        if (data[d] === undefined || data[d].length < 1) {
            data[d] = "Não possui"
        }

        if (data[d] === data.flag) {
            flagDiv.append(data[d])
        } else {
            let p = document.createElement("p");
            p.id = d
            p.textContent = data[d];
            infoDiv.append(p);
        }
    }
}

function removeCountryData() {
    document.querySelectorAll("h2")[1].style.display = "none"
    flagDiv.innerHTML = ""
    infoDiv.innerHTML = ""
}
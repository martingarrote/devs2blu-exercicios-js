let select = document.getElementById("countries-select")
let flagDiv = document.querySelector(".flag")
let infoDiv = document.querySelector(".info")

document.addEventListener("DOMContentLoaded", function() {
    fetch(`https://restcountries.com/v3.1/all`)
        .then(response => response.json())
        .then(data => {
            inserirPaisesSelect(data)
        })
        .catch(error => {
            console.log(error)
        })
})
    
select.addEventListener("input", function() {
    let paisSelecionado = identificarPaisSelecionado()
    if (paisSelecionado.length > 0) {
        coletarDadosPais(paisSelecionado)
    } else {
        removerInformacoes()
    }
})

function inserirPaisesSelect(dados) {
    const nomePaises = [];
    for (let i = 0; i < 250; i++) {
        let name = dados[i].name.common;
        nomePaises.push(name);
    }
    nomePaises.sort();
    nomePaises.forEach(opt => {
        let option = document.createElement("option");
        option.value = opt;
        option.innerHTML = opt;
        select.appendChild(option);
    });
}

function identificarPaisSelecionado() {
    let pais = select.options[select.selectedIndex].text
    return pais
}

function coletarDadosPais(pais) {
    fetch(`https://restcountries.com/v3.1/name/${pais}?fullText=true`)
    .then(response => response.json())
    .then(data => {

        removerInformacoes()

        let dados = data[0]
        let flag = document.createElement("img")
        flag.src = dados.flags.png

        let linguas = []
        let moedaNome
        let moedaSimbolo

        let capital
        if (dados.capital) {
            capital = dados.capital[0]
        } else {
            capital = "Não possui"
        }
        let continente = dados.continents[0]

        for (l in dados.languages) {
            linguas.push(dados.languages[l])
        }

        for (i in dados.currencies) {
            moedaNome = dados.currencies[i].name
            moedaSimbolo = dados.currencies[i].symbol
        }

        const informacoes = {
            flag: flag,
            nome_usual: dados.name.common,
            nome_oficial: dados.name.official,
            capital: capital,
            linguas: linguas.join(", "),
            continente: continente,
            area: dados.area,
            populacao: dados.population,
            moeda_nome: moedaNome,
            moeda_simbolo: moedaSimbolo,
        }
        insertCountryData(informacoes)
    })
    .catch(error => {
        console.log(error)
    })
}

function insertCountryData(data) {
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

function removerInformacoes() {
    flagDiv.innerHTML = ""
    infoDiv.innerHTML = ""
}
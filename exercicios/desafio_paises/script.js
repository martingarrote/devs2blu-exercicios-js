let select = document.getElementById("countries-select")
let flagDiv = document.querySelector(".flag")
let infoDiv = document.querySelector(".info")

console.log(infoDiv)

fetch(`https://restcountries.com/v3.1/all`)
    .then(response => response.json())
    .then(data => {
        inserirPaisesSelect(data)
    })
    .catch(error => {
        console.log(error)
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
        let img = document.createElement("img")
        img.src = dados.flags.png
        flagDiv.append(img)

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
            area: dados.area,
            capital: capital,
            continente: continente,
            moeda_nome: moedaNome,
            moeda_simbolo: moedaSimbolo,
            linguas: linguas.join(", "),
            nome_usual: dados.name.common,
            nome_oficial: dados.name.official,
            populacao: dados.population,
            regiao: dados.region
        }

        inserirDadosPais(informacoes)
    })
    .catch(error => {
        console.log(error)
    })
}

function inserirDadosPais(dados) {
    for (d in dados) {
        if (dados[d] === undefined) {
            dados[d] = "Não possui"
        }

        p = document.createElement("p")
        p.innerHTML = `${d}: ${dados[d]}`
        infoDiv.append(p)
        console.log(infoDiv)
    }

}

function removerInformacoes() {
    flagDiv.innerHTML = ""
    infoDiv.innerHTML = ""
}


/*

Informações para trazer
area
capital[0]
continents[0]
currencies[0].name
currencies[0].symbol // adicionar exemplo
languages
name.common
name.official
population
region

*/
let select = document.getElementById("countries-select")
let div = document.getElementById("countries-info")

fetch(`https://restcountries.com/v3.1/all`)
    .then(response => response.json())
    .then(data => {
        inserirPaisesSelect(data)
    })
    .catch(error => {
        console.log(error)
    })

function inserirPaisesSelect(dados) {
    for (i = 0; i < 250; i++) {
        let option = document.createElement("option")
        let name = dados[i].name.common
        option.value = name
        option.innerHTML = name
        select.append(option)
    }
}

select.addEventListener("input", function() {
    let paisSelecionado = identificarPaisSelecionado()
    if (paisSelecionado.length > 0) {
        coletarDadosPais(paisSelecionado)
    } else {
        removerInformacoes()
    }
})


function identificarPaisSelecionado() {
    let pais = select.options[select.selectedIndex].text
    return pais
}

function coletarDadosPais(pais) {
    fetch(`https://restcountries.com/v3.1/name/${pais}?fullText=true`)
    .then(response => response.json())
    .then(data => {
        inserirDadosPais(data)
    })
    .catch(error => {
        console.log(error)
    })
}

function inserirDadosPais(data) {
    console.log(data)
    let img = document.createElement("img")
    img.src = data[0].flags.png
    div.innerHTML = ""
    div.append(img)
}

function removerInformacoes() {
    div.innerHTML = ""
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
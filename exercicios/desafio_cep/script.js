let cepInput = document.getElementById("cep")
const inputInformacoes = document.querySelectorAll(".visualizar")

cepInput.addEventListener("input", function() {
    let cepValue = cepInput.value
    if (cepValue.length === 8) {
        consultarCEP(cepValue)
    } else if (cepValue.length < 8) {
        esvaziarCampos(inputInformacoes)
        mudarAparencia(inputInformacoes)
    } else if (cepValue.length > 8) {
        cepInput.value = cepValue.slice(0, 8)
    }
})

cepInput.addEventListener("keypress", function() {
    
})

function consultarCEP(cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
            inserirDados(data)
            mudarAparencia(inputInformacoes)
        })
        .catch(error => {
            document.getElementById("erro").innerHTML = "Algo deu errado.<br>Tente novamente mais tarde!"
        })
}

function inserirDados(dados) {
    for (d in dados) {
        if (dados[d].length === 0) {
            dados[d] = "Não possui"
        }
    }
    inputInformacoes[0].value = dados.logradouro
    inputInformacoes[1].value = dados.complemento
    inputInformacoes[2].value = dados.bairro
    inputInformacoes[3].value = dados.localidade
    inputInformacoes[4].value = dados.uf
}

function mudarAparencia(campos) {
    campos.forEach(c => {
        if (c.value.length === "") {
            c.classList.remove("visualizar")
        } else {
            c.classList.remove("visualizar")
        }
    });
}

function esvaziarCampos(campos) {
    campos.forEach(c => {
        c.value = ""
    });
}
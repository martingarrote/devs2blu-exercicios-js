// Exercício 1
function concatenarNome() {
    // Crie um script que receba o nome e sobrenome de uma pessoa e concatene-os em uma única string.

    let nome = prompt("Digite o nome").trim()
    let sobrenome = prompt("Digite o sobrenome").trim()

    alert(nome.concat(" ", sobrenome))
}

// Exercício 2
function contarCaracteres() {
    // Crie um script que conte quantos caracteres uma determinada string possui 
    // e exiba essa informação.

    let mensagem = prompt("Digite alguma coisa")
    alert(`${mensagem} tem ${mensagem.length} caracteres`)
}

// Exercício 3
function deixarMaiusculo() {
    // Crie um script que converta uma string fornecida para letras maiúsculas e 
    // exiba a frase em caixa alta.

    let mensagem = prompt("Digite alguma coisa")
    alert(`${mensagem} em maiúsculo ficaria ${mensagem.toUpperCase()}`)
}

// Exercício 4
function extrairParte() {
    // Crie um script que extraia uma parte específica de uma string. 
    // Por exemplo, extraia os primeiros três caracteres de uma palavra e exiba o resultado.

    let mensagem = prompt("Digite alguma coisa")
    let novaMensagem = mensagem.slice(0, mensagem.length/2)

    alert(`Foi extraído "${novaMensagem}" de ${mensagem}`)
}

// Exercício 5
function substituirLetras() {
    // Crie um script que substitua as letras, conforme:
    // A -> 4
    // I (letra i) -> 1
    // E -> 3
    // O (letra ó) -> 0 (zero)
    // S -> 5

    let mensagem = prompt("Digite alguma coisa").toUpperCase()
    let novaMensagem = mensagem.replaceAll("A", "4").replaceAll("I", "1").replaceAll("E", "3").replaceAll("O", "0").replaceAll("S", "5")

    alert(`${mensagem} -> ${novaMensagem}`)
}
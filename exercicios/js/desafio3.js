// Exercício 1
function parOuImpar() {
    // Crie um script que com um número verifique se é par ou ímpar e 
    // exiba uma mensagem informando se o número é par ou ímpar.

    let numero = prompt("Digite um número")

    if (numero % 2 === 0) {
        alert(`O número ${numero} é par`)
    } else {
        alert(`O número ${numero} é impar`)
    }
}

// Exercício 2
function aplicarDesconto() {
    // Crie um script que com o preço de um produto calcule o 
    // valor com desconto de 10% e exiba o valor com desconto

    let precoProduto = prompt("Digite o preço do produto")
    let precoDescontado = precoProduto - (precoProduto * 10) / 100

    alert(`O valor original é ${precoProduto} e com o desconto de 10% fica ${precoDescontado}`)
}

// Exercício 3
function numeroPrimo() {
    // Escreva um script que determine se um número é primo


}

// Exercício 4
function converterAnosParaDias() {
    // Crie um script que com a idade de uma pessoa em anos e converta para dias e exiba o resultado.

    let idade = prompt("Digite a idade")
    let idadeEmDias = idade * 365

    alert(`A idade ${idade} convertida é ${idadeEmDias} dias`)
}

// Exercício 5
function formatarTelefone() {
    // Crie um script que solicite um número de telefone ao usuário e 
    // formate-o no formato "(XX) XXXX-XXXX" e exiba o número de telefone formatado.

    let telefone = prompt("Digite um número de telefone sem formatação").trim()
    let telefoneFormatado = `(${telefone.substring(0, 1)}) ${telefone.substring(2, 7)}-${telefone.substring(7, telefone.length)}`

    alert(telefoneFormatado)
}
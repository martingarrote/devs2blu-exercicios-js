// Exercicio 1
function calcularMedia() {
    // Crie um script que calcula a média de três notas, atribui o resultado a uma variável 
    // e exiba esse valor. As notas podem ser quaisquer valores numéricos.

    let nota1 = Math.abs(prompt("Digite a primeira nota"))
    let nota2 = Math.abs(prompt("Digite a segunda nota"))
    let nota3 = Math.abs(prompt("Digite a terceira nota"))
    
    let media = (nota1 + nota2 + nota3)/3
    
    alert(`${nota1} + ${nota2} + ${nota3} = ${media}`)
}

// Exercicio 2
function converterTemperatura() {
    // Crie um script que converte uma temperatura em graus Celsius para Fahrenheit. 
    // A fórmula para conversão é: Fahrenheit = (Celsius * 9/5) + 32.

    let celsius = prompt("Digite uma temperatura em graus celsius")
    let fahrenheit = (celsius * 9/5) + 32

    alert(`${celsius}℃ -> ${fahrenheit}℉`)
}

// Exercicio 3
function calcularArea() {
    // Crie um script que calcula a área de um retângulo com base na largura e altura fornecidas. 
    // A fórmula para cálculo da área é: Área = Largura * Altura.

    let largura = prompt("Digite a largura do retângulo")
    let altura = prompt("Digite a altura do retângulo")
    let area = largura * altura

    alert(`A área do retângulo é ${area}`)
}

// Exercicio 4
function calcularIMC() {
    // Crie um script que calcula o Índice de Massa Corporal (IMC) com base no peso e altura fornecidos. 
    // A fórmula para cálculo do IMC é: IMC = Peso / (Altura * Altura).

    let peso = prompt("Digite o peso")
    let altura = prompt("Digite a altura")
    let imc = peso / (altura * altura)

    alert(`Uma pessoa com peso ${peso} e altura ${altura} tem um IMC de ${imc}`)
}

// Exericcio 5
function converterHoras() {
    // Crie um script que converte um determinado número de horas em minutos. 
    // Atribua o resultado a uma variável chamada "minutos". Considere que 1 hora possui 60 minutos.

    let horas = prompt("Digite uma quantidade de horas")
    let minutos = horas * 60

    alert(`${horas} horas equivalem a ${minutos} minutos`)
}
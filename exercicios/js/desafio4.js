// Exercício 1
function exibirPares() {
    // Crie um programa que exiba todos os números pares de 1 a 10. 
    // Utilize um laço de repetição e condicional para verificar se cada número é par.

    const numerosPares = []

    for (i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            numerosPares.push(i)
        }
    }
    
    alert(`Os números pares entre 1 e 10 são ${numerosPares.join(", ")}`)
}

// Exercício 2
function calcularMediaValidado() {
    // Crie um programa que solicite ao usuário três notas e calcule a média. 
    //Se alguma nota for inválida (for menor que 0 ou maior que 10), solicite novamente essa nota. 
    // Utilize um laço de repetição e condicional para validar as notas.

    let media = 0
    let contagem = 0
    const notas = []

    while (contagem < 3) {
        contagem++
        let nota = prompt(`Digite uma nota (${contagem}/3)`)
        if (nota > 10 || nota < 0) {
            contagem--
            alert("Nota inválida: ultrapassa limites permitidos.")
        } else {
            notas.push(Math.abs(nota))
        }
    }

    for (n of notas) {
        media += n
    }
    media /= 3

    alert(`A média aritmética das notas ${notas.join(", ")} foi ${media}`)
}

// Exercício 3
function contagemRegressiva() {
    // Crie um programa que exiba uma contagem regressiva de 10 a 1.
    // Utilize um laço de repetição para iterar de 10 a 1 e exiba cada número.

    for (i = 10; i >= 0; i--) {
        alert(i)
    }
}

// Exercício 4
function buscarLetra() {
    // Crie um programa que solicite uma palavra ao usuário e verifique se contém uma
    // letra específica. Utilize um laço de repetição para percorrer cada letra da
    // palavra e um condicional para verificar se a letra desejada está presente.

    let palavra = prompt("Digite alguma palavra")
    let letra = "p"
    let ocorrencias = 0

    for (l of palavra) {
        if (l === letra) {
            ocorrencias++
        }
    }

    alert(`Nesta palavra tiveram ${ocorrencias} ocorrências da letra ${letra}`)
}

// Exercício 5
function deixarFraseMaiuscula() {
    // Crie um programa que solicite ao usuário uma frase e converta todas as letras para 
    // maiúsculas. Utilize um laço de repetição para percorrer cada letra da
    // frase e atribua o resultado a uma nova variável.

    let frase = prompt("Digite alguma frase")

    alert(`Frase original: ${frase}\nFrase maiúscula: ${frase.toUpperCase()}`)
}

// Exercício 6
function exibirImpares() {
    // (while) Escreva um programa que imprima na tela os números ímpares de 1 a 20.
    let numero = 0
    const impares = []

    while (numero <= 20) {
        numero++
        if (numero % 2 != 0) {
            impares.push(numero)
        }
    }

    alert(`Os números ímpares de 1 a 20 são: ${impares.join(", ")}`)
}

// Exercício 7
function calcularMediaVetorDecimais() {
    // (for) Faça um programa que calcule a média de um vetor de números reais com 10 elemento.

    const vetor = [1.90, 5.20, 7.20, 2.30, 9.60, 11.40, 0.35, 10.20, 4.36, 9.87]
    let media = 0;

    for (i = 0; i < vetor.length; i++) {
        media += Math.abs(vetor[i])
    }
    media /= 10

    alert(`A média dos vetores [${vetor.join(", ")}] foi de ${media}`)
}

// Exercício 8
function jogoAdivinha() {
    // (do-while) Crie um jogo de adivinhação em que o usuário tem que tentar acertar
    // um número aleatório de 1 a 100, dando dicas de "maior" ou "menor" até acertar.

    let numeroAleatorio = Math.floor(Math.random() * 100)
    let numeroTentativas = 1;
    let rodando = true

    do {
        let tentativa = Number(prompt("Digite algum número de 0  100"))

        if (tentativa === numeroAleatorio) {
            rodando = false
            alert(`Parabéns, você acertou! O número sorteado era ${numeroAleatorio}! Você precisou de ${numeroTentativas} tentativas.`)
            break
        } else if (tentativa < numeroAleatorio) {
            numeroTentativas++
            alert(`Não foi dessa vez! Que tal tentar um número maior? ${numeroTentativas} tentativas`)
        } else {
            numeroTentativas++
            alert(`Não foi dessa vez! Que tal tentar um número menor? ${numeroTentativas} tentativas`)
        }
    } while (rodando)
}

// Exercício 9
function somarVetorInteiros() {
    // (for-each) Crie um programa que some todos os valores de um vetor de inteiros com 100 elementos.

    const vetor = []
    let soma = 0
    for (i = 0; i < 100; i++) {
        vetor.push(Math.floor(Math.random() * 100))
    }

    for (num of vetor) {
        soma += vetor
    }

    alert(`A soma dos vetor de números inteiros aleatórios é equivalente a ${soma}`)
}

// Exercício 10
function fibonacci() {
    // (for) Escreva um programa que gere a sequência de Fibonacci até o décimo termo.

    const fibonacci = [0, 1]

    for (i = 2; i < 10; i++) {
        fibonacci.push()
        // penultimo + ultimo
        fibonacci.push(Math.abs(fibonacci[fibonacci.length-1] + fibonacci[fibonacci.length-2]))
    }

    alert(`Sequência Fibonacci: ${fibonacci.join(", ")}`)
}

// Exercício 11
function acharMaiorNumero() {
    // (while) Faça um programa que leia uma lista de números inteiros 
    // até o usuário digitar zero e exiba o maior número digitado.

    const numeros = []
    let rodando = true

    while (rodando) {
        let numero = Number(prompt("Digite um número"))
        if (numero === 0) {
            rodando = false
            break
        } else {
            numeros.push(numero)
        }
    }

    alert(`O maior número foi ${numeros.sort()[numeros.length-1]}`)
}

// Exercício 12
function validarSenha() {
    // (do-while) Escreva um programa que solicite ao usuário para digitar uma senha,
    // repetindo a solicitação até que ele acerte a senha correta.

    let senhaCorreta = "senhadificil"
    let senha
    do {
        senha = prompt("Digite a senha")
        if (senha != senhaCorreta) {
            alert("Senha incorreta, tente novamente!    ")
        }
    } while (senha != senhaCorreta)
    alert("Senha correta.")
}

// Exercício 13
function contarLetraA() {
    // (for-each) Crie um programa que conte a quantidade 
    // de letras "a" em uma string informada pelo usuário.

    let mensagem = prompt("Digite alguma coisa")
    let ocorrencias = 0

    for (l of mensagem) {
        if (mensagem === "a") {
            ocorrencias++
        }
    }

    alert(`Nessa mensagem tem ${ocorrencias} letras A`)
}

// Exercício 14
// function exibirNumerosPrimosAteCem() {
//     // (for) Faça um programa que imprima na tela os números primos de 1 a 100.
    
//     const numerosPrimos

//     for (i = 1; i <= 100; i++) {
//         if (i > 1) {
//             let primo = true;
    
//             for (let i = 2; i <= Math.sqrt(i); i++) {
//                 if (i % i === 0) {
//                     primo = false;
//                     break;
//                 }
//             }
    
//             if (primo) {
//                 resultado = `O número ${i} é primo.`;
//             } else {
//                 resultado = `O número ${i} não é primo.`;
//             }
//         } else {
//             resultado = `O número ${i} não é primo.`;
//         }
    
//         alert(resultado);
//     }
// }

// Exercício 15
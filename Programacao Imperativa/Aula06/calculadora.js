function soma(numero1, numero2, numero3 = 0) {
    return numero1 + numero2 + numero3
}

function subtracao(numero1, numero2) {
    return numero1 - numero2
}

function multiplicacao(numero1, numero2) {
    return numero1 * numero2
}

function divisao(numero1, numero2) {
    return numero1 / numero2
}

function quadradoDoNumero(numero) {
    return multiplicacao(numero, numero)
}

function mediaDeTresNumeros(numero1, numero2, numero3) {
    var somaTresNumeros = soma(numero1, numero2, numero3)

    return divisao(somaTresNumeros, 3)
}

function calculaPorcentagem(numeroTotal, porcentagem) {
    var porcentagemACalcular = divisao(porcentagem, 100)

    return multiplicacao(numeroTotal, porcentagemACalcular)
}

function geradorDePorcentagem(porcentagem, numero) {
    var porcentagemCalculada = multiplicacao(porcentagem, 100)
    return divisao(porcentagemCalculada, numero)
}


console.log("-------------- Teste de Operações / Calculadora --------------")
console.log("Testando a função de soma com 2 + 5")
console.log(soma(2, 5))

console.log("Testando a função de subtração com 10 - 5")
console.log(subtracao(10, 5))

console.log("Testando a função de multiplicação com 10 * 3")
console.log(multiplicacao(10, 3))

console.log("Testando a função de divisão com 40 / 4")
console.log(divisao(40, 4))

console.log("Testando a função de divisão com 5 / 0")
console.log(divisao(5, 0))

console.log("Calculando o quadrado de 25")
console.log(quadradoDoNumero(25))

console.log("Calculando a média dos seguintes numeros: 10, 50, 60")
console.log(mediaDeTresNumeros(10, 50, 60))

console.log("Calculando 20% de 80")
console.log(calculaPorcentagem(80, 20))

console.log("Calculando quantos % de 500 é o número 5")
console.log(geradorDePorcentagem(5, 500))


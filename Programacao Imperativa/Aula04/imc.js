// O Índice de Massa Corporal (IMC) se calcula dividindo o peso pela altura²
// (a altura deve estar em metros e o peso em quilogramas).

// O programa deverá apresentar em tela o valor do IMC de um paciente da tabela com uma mensagem. 
// Por exemplo: “Aline Ferreira tem 33 anos e seu índice de massa corporal é de xx”.


const nome = "Henrique Brumatti"
var idade = 27
var peso = 70
var altura = 1.76
var plano
var imc = (peso / (altura * altura)).toFixed(2)

console.clear()
console.log(`${nome} tem ${idade} anos e seu índice de massa corporal é de ${imc}`)
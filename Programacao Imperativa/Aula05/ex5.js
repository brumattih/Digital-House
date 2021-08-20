// Crie uma função que calcule o valor da sua hora de trabalho, tendo como parâmetro o seu salário mensal.
// PS: considere que você trabalhe 160 horas no mês.

function calculaValorHoraDeTrabalho(salario) {
    return `O valor de sua hora de trabalho é de: R$${(salario / 160)}`
}

const resultado = calculaValorHoraDeTrabalho(1500)
console.log(resultado)

// Crie a função calculadora de IMC* de uma pessoa, que recebe a altura em centímetros e o peso em quilogramas. 
// Em seguida, execute a função, testando diferentes valores. 

function calculaImc(alturaEmCm, pesoEmKg) {
    const alturaEmMetro = alturaEmCm / 100
    imc = pesoEmKg / (alturaEmMetro * alturaEmMetro)

    return imc.toFixed(2)
}

resultado = calculaImc(170, 60)
console.log(resultado)

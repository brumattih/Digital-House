// Crie uma função que receba uma string e a converta em um URL.
// ex: "funcaojs" é retornado como "http://www.funcaojs.com.br"

function converteStringEmUrl(string) {
    return `http://www.${string}.com.br`
}
const resultado = converteStringEmUrl("teste2")
console.log(resultado)

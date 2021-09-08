// Crie um array que contenha nomes de produtos para compra.
// Após isso, exiba no console os resultados das funções relacionadas aos arrays, 
// que são: Join, Pop, Push, Shift e Unshift. 
// Também se deve escrever com suas palavras, o que cada função realiza. 

let produtos = [
    'Detergente',
    'Esponja',
    'Álcool',
    'Papel Toalha',
    'Sabonete',
    'Shampoo',
]

console.log("O método Join une todos os elementos de um array em apenas uma string e retorna essa string")
console.log(produtos.join(' - '));
console.log();
console.log("O método Pop remove o último elemento de um array e retorna esse elemento")
console.log(produtos.pop());
console.log();
console.log("O método Push adiciona um ou mais elementos ao final de um array e retorna o novo tamanho do array")
console.log(produtos.push("Condicionador"))
console.log();
console.log("O método Shift remove o primeiro elemento de um array e retorna esse elemento");
console.log(produtos.shift());
console.log();
console.log("O método Unshift adiciona um ou mais elementos no ínicio de um array e retorna o novo tamanho do array")
console.log(produtos.unshift("Copo"));



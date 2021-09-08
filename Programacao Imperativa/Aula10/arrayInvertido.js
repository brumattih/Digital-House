// Neste exercício, você terá que criar uma função que retorne um array com seus elementos invertidos, sem modificá-lo. Então, você deve fazer uma função que o modifique e inverta a ordem de seus elementos.

// Crie a função imprimirInverso que pega um Array como um argumento e imprime cada elemento em ordem reversa no console (você não precisa inverter o Array).
// Crie a função inverter que recebe um Array como argumento e retorna um novo invertido.

function imprimirInverso(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        console.log(array[i])
    }
}

let arrayDeLetras = ["A", "B", "C", "D"];
let arrayInvertido = [];

imprimirInverso(arrayDeLetras)


function inverter(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        arrayInvertido.push(array[i])
    }

    return arrayInvertido;
}

inverter(arrayDeLetras)
console.log(arrayInvertido)

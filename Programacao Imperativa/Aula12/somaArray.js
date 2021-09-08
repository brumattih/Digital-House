let soma = 0;

function somaArray(array) {

    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }
    return soma;
}


console.log(somaArray([1, 2, 3]));
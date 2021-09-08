// Crie a função digitalHouse() que receberá 2 números como parâmetros. A função deve
// imprimir na tela os números de 1 a 100, mas levando em conta os seguintes critérios:

// ● Se o número a ser impresso for um múltiplo do primeiro parâmetro inserido,
// você deve exibir a string "Digital" em vez do número.

// ● Se o número a ser impresso for um múltiplo do segundo parâmetro inserido,
// você deve exibir a string "House" em vez disso.

// ● Se o número a ser imprimir for um múltiplo de ambos os parâmetros, você
// deve exibir a string "Digital House" em vez do número.

function digitalHouse(a, b) {
    for (let i = 1; i <= 100; i++) {
        if (i % a == 0 && i % b == 0) {
            console.log("Digital House");
        } else if (i % a == 0) {
            console.log("Digital");
        } else if (i % b == 0) {
            console.log("House");
        } else {
            console.log(i);
        }
    }
}

digitalHouse(2, 3);

const user = require('readline-sync')

function menu() {
    console.clear();
    console.log("Selecione uma opção para esquentar sua comida no microondas: ");
    console.log("1 - Pipoca");
    console.log("2 - Macarrão");
    console.log("3 - Carne");
    console.log("4 - Feijão");
    console.log("5 - Brigadeiro");

    console.log("");

    let resposta = user.questionInt("Selecione uma opção: ");

    switch (resposta) {
        case 1: console.clear(); microondas(10, "pipoca"); break;
        case 2: console.clear(); microondas(8, "macarrao"); break;
        case 3: console.clear(); microondas(15, "carne"); break;
        case 4: console.clear(); microondas(12, "feijao"); break;
        case 5: console.clear(); microondas(8, "brigadeiro"); break;

        default: console.log("Prato inexistente"); break;
    }
}

let finaliza = "Prato pronto, bom apetite!!!";

function calculaTempoDeCozimento(tempo) {
    let escolhaDeTempo = user.questionInt("Escolha a quantidade de tempo em segundos: ");

    if (escolhaDeTempo < tempo)
        return console.log("Tempo insuficiente");
    else if (escolhaDeTempo >= (tempo * 3))
        return console.log("Kabumm");
    else if (escolhaDeTempo >= (tempo * 2))
        return console.log("A comida queimou!");
    else
        return console.log(`Finalizado em ${escolhaDeTempo} segundos. ${finaliza}`);
}

function microondas(tempo, receita) {
    console.log(`Deseja utilizar o tempo padrão de ${receita}? (${tempo} segundos)`);

    let respostaReceita = user.question("Pressione Enter para confirmar ou digite outra tecla qualquer caso deseja alterar o tempo: ");

    if (respostaReceita == "")
        return console.log(`Finalizado em ${tempo} segundos. ${finaliza}`);
    else {
        calculaTempoDeCozimento(tempo);
    }
}

menu();

const alice = [23, 67, 32];
const bob = [12, 67, 43];

alice.name = "Alice";
bob.name = "Bob";

function encontrarGanhador(a, b) {
    let pontosPrimeiroParticipante = 0;
    let pontosSegundoParticipante = 0;

    let empate = "Houve um empate!";

    for (let i = 0; i < a.length; i++) {

        if (a[i] > b[i]) {
            pontosPrimeiroParticipante += 1;
        }

        if (b[i] > a[i]) {
            pontosSegundoParticipante += 1;
        }
    }

    if (pontosPrimeiroParticipante > pontosSegundoParticipante) return a.name;

    else if (pontosSegundoParticipante > pontosPrimeiroParticipante) return b.name;

    else return empate

}
console.log(`O ganhador é ${encontrarGanhador(alice, bob)}`)
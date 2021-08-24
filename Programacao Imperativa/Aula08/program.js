function podeSubir(altura, acompanhada) {
    let podeSubir = false
    let somenteAcompanhada = false

    if (altura <= 2.0 && altura >= 1.40) {
        podeSubir = true
    }
    if ((altura >= 1.20 && altura < 1.40) && acompanhada) {
        podeSubir = true
        somenteAcompanhada = true
    }

    if (podeSubir && somenteAcompanhada) {
        return console.log("Acesso autorizado somente com acompanhante")
    } else if (podeSubir) {
        return console.log("Acesso autorizado")
    } else {
        return console.log("Acesso negado")
    }
}

podeSubir(1.39, true)
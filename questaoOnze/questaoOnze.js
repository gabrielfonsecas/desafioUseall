function saque(valor){ 
let saque
console.log(`Para sacar R$${valor}, você deve receber:`)
if (valor >= 100) {
    saque = Math.trunc(valor / 100)
    valor = valor % 100
    console.log(`${(saque)} nota(s) de R$100`)
    if (valor >= 50) {
        saque = Math.trunc(valor / 50)
        valor = valor % 50
        console.log(`${(saque)} nota(s) de R$50`)
        if (valor >= 20) {
            saque = Math.trunc(valor / 20)
            valor = valor % 20
            console.log(`${(saque)} nota(s) de R$20`)
            if (valor == 10) {
                saque = valor / 10
                console.log(`${saque} nota(s) de R$10`)
            }
        }
        else if (valor == 10) {
            saque = valor / 10
            console.log(`${saque} nota(s) de R$10`)
        }
    }
    else if (valor >= 20) {
        saque = Math.trunc(valor / 20)
        valor = valor % 20
        console.log(`${(saque)} nota(s) de $20`)
        if (valor == 10) {
            saque = valor / 10
            console.log(`${saque} nota(s) de R$10`)
        }
    }
    else if (valor == 10) {
        saque = valor / 10
        console.log(`${saque} nota(s) de $10`)
    }
}
else if (valor >= 50) {
    saque = Math.trunc(valor / 50)
    valor = valor % 50
    console.log(`${(saque)} nota(s) de R$50`)
    if (valor >= 20) {
        saque = Math.trunc(valor / 20)
        valor = valor % 20
        console.log(`${(saque)} nota(s) de R$20`)
        if (valor == 10) {
            saque = valor / 10
            console.log(`${saque} nota(s) de R$10`)
        }
    }
    else if (valor == 10) {
        saque = valor / 10
        console.log(`${saque} nota(s) de R$10`)
    }
}
else if (valor >= 20) {
    saque = Math.trunc(valor / 20)
    valor = valor % 20
    console.log(`${(saque)} nota(s) de $20`)
    if (valor >= 10) {
        saque = valor / 10
        console.log(`${saque} nota(s) de R$10`)
    }
}
else if (valor == 10) {
    saque = valor / 10
    console.log(`${saque} nota(s) de $10`)
}
}
saque(180)
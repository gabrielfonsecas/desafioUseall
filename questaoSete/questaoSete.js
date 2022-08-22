function imc(peso, altura){
let resultado

resultado = peso/(altura*altura)
if(resultado < 18){
    console.log(`Abaixo do peso, seu imc é: ${resultado.toFixed(2)}`)
}else if(resultado < 25){
    console.log(`Peso normal, seu imc é: ${resultado.toFixed(2)}`)
}else if(resultado > 25){
    console.log(`Acima do peso, seu imc é: ${resultado.toFixed(2)}`)
}
}
imc(70,1.80)


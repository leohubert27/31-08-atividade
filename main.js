const prompt = require("prompt-sync")()
let celsius = prompt("Insira a temperatura em graus Celsius que deseja converter: ")

function conversao (a){
    let temperatura = (celsius * 9/5) + 32
    return temperatura
}

const fahrenheit = conversao(celsius)
console.log(celsius, "º celsius equivale a ", fahrenheit, "º fahrenheit")

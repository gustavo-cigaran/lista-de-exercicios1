// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

const prompt = require('prompt-sync')();

let values = [];
let soma = 0;

while(values.length < 5) {
    let value = Number(prompt("Digite um valor: "));
    values.push(value);
}

for (let i = 0; i < values.length; i++) {
    soma += values[i];
}

console.log(`Total: ${soma}`);
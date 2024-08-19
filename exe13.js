// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

const prompt = require('prompt-sync')();

let values = [];
let value;
let soma = 0;

while (value !== 0) {
    value = Number(prompt("Digite um valor: "));
    values.push(value);
}

for (let i = 0; i < values.length; i++) {
    soma += values[i];
}

console.log(`Média: ${soma / (values.length - 1)}`);
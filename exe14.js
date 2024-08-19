// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

const prompt = require('prompt-sync')();

let number = Number(prompt("Digite um número: "));

let total = number;

if (number === 0 || number === 1) {
    console.log(1);
} else {
    while(number > 1) {
        number--;
        total *= number;
    }
}

console.log(total);

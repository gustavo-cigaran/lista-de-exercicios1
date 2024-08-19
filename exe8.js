// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

const prompt = require('prompt-sync')();

let value1 = Number(prompt("Digite o valor 1: "));
let value2 = Number(prompt("Digite o valor 2: "));

if (value1 > value2) {
    console.log(value1);
    console.log(value2);
} else {
    console.log(value2);
    console.log(value1);
}